import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(rootDir, 'dist');
const port = Number(process.env.PORT || 3000);
const maxBodyBytes = 8 * 1024 * 1024;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

const sendJson = (response, status, body) => {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  response.end(JSON.stringify(body));
};

const readJsonBody = (request) =>
  new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
      if (body.length > maxBodyBytes) {
        reject(new Error('Request body is too large.'));
        request.destroy();
      }
    });

    request.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (_error) {
        reject(new Error('Invalid JSON payload.'));
      }
    });

    request.on('error', reject);
  });

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const formatCategories = (categoryScores = []) =>
  categoryScores
    .map((item) => `<li><strong>${escapeHtml(item.cat)}:</strong> ${Number(item.pct || 0)}%</li>`)
    .join('');

const buildEmailHtml = (payload) => {
  const name = escapeHtml(payload.name);
  const company = escapeHtml(payload.company || 'Not provided');
  const stage = escapeHtml(payload.stage || 'Assessment generated');
  const score = Number(payload.scorePercent || 0);
  const categories = formatCategories(payload.categoryScores);
  const notes = escapeHtml(payload.notes || 'No additional notes provided.');

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.55;">
      <h1 style="margin: 0 0 12px; font-size: 24px;">VAMEFO Organization Maturity Assessment</h1>
      <p>Hello ${name},</p>
      <p>Thank you for completing the VAMEFO assessment. Your PDF summary is attached to this email.</p>
      <div style="margin: 22px 0; padding: 18px; border-radius: 16px; background: #eef3f8;">
        <p style="margin: 0 0 8px;"><strong>Company:</strong> ${company}</p>
        <p style="margin: 0 0 8px;"><strong>Average score:</strong> ${score}%</p>
        <p style="margin: 0;"><strong>Stage:</strong> ${stage}</p>
      </div>
      ${categories ? `<h2 style="font-size: 18px;">Category snapshot</h2><ul>${categories}</ul>` : ''}
      <p><strong>Follow-up notes:</strong><br>${notes}</p>
      <p>If you would like to discuss the findings, you can reply directly to this email.</p>
      <p style="margin-top: 28px;">Prepared by VAMEFO Management Consultancy</p>
    </div>
  `;
};

const sendAssessmentPdf = async (payload) => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM || 'VAMEFO <assessment@mail.vamefo.com>';
  const replyTo = process.env.MAIL_REPLY_TO || 'info@vamefo.com';
  const internalTo = process.env.MAIL_INTERNAL_TO || 'info@vamefo.com';

  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable.');
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    throw new Error('A valid participant email is required.');
  }

  if (!payload.pdfBase64) {
    throw new Error('Missing PDF attachment.');
  }

  const emailPayload = {
    from,
    to: [payload.email],
    bcc: [internalTo],
    reply_to: replyTo,
    subject: `Your VAMEFO assessment PDF - ${payload.stage || 'Summary'}`,
    html: buildEmailHtml(payload),
    attachments: [
      {
        filename: payload.pdfFilename || 'vamefo-assessment.pdf',
        content: payload.pdfBase64,
      },
    ],
  };

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailPayload),
  });

  const result = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    throw new Error(result.message || result.error || 'Resend rejected the email request.');
  }

  return result;
};

const serveStatic = async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  const rawPath = decodeURIComponent(requestUrl.pathname);
  const safePath = normalize(rawPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = safePath === '/' ? join(distDir, 'index.html') : join(distDir, safePath);

  try {
    const file = await readFile(filePath);
    const extension = extname(filePath);
    const isHashedAsset = safePath.startsWith('/assets/');
    response.writeHead(200, {
      'Content-Type': mimeTypes[extension] || 'application/octet-stream',
      'Cache-Control': isHashedAsset
        ? 'public, max-age=31536000, immutable'
        : 'no-cache, no-store, must-revalidate',
    });
    response.end(file);
  } catch (_error) {
    const fallback = await readFile(join(distDir, 'index.html'));
    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    });
    response.end(fallback);
  }
};

const server = createServer(async (request, response) => {
  if (request.method === 'GET' && request.url?.startsWith('/api/health')) {
    sendJson(response, 200, {
      ok: true,
      service: 'vamefo-node-api',
      resendConfigured: Boolean(process.env.RESEND_API_KEY),
    });
    return;
  }

  if (request.method === 'POST' && request.url?.startsWith('/api/send-assessment-pdf')) {
    try {
      const payload = await readJsonBody(request);
      const result = await sendAssessmentPdf(payload);
      sendJson(response, 200, { ok: true, id: result.id });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message || 'Unable to send PDF email.' });
    }
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    sendJson(response, 405, { ok: false, error: 'Method not allowed.' });
    return;
  }

  await serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`VAMEFO site running on port ${port}`);
});
