import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { submitWeb3Form } from '@/lib/web3forms';

const assessmentData = [
  {
    cat: 'Strategic Alignment',
    color: '#0E9E8C',
    bg: 'rgba(14,158,140,.07)',
    icon: '🎯',
    max: 15,
    qs: [
      { id: 'sa1', q: 'Is the workforce strategy following legal requirements?', sub: 'Alignment of workforce strategy to statutory obligations', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'Your organisation shows gaps in governance and alignment with statutory obligations. We recommend a governance consulting engagement.' },
      { id: 'sa2', q: 'Does the workforce strategy support national and regional goals?', sub: 'Alignment to national policy priorities', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'Your workforce strategy is not aligned with policy priorities. A governance and strategy redesign is recommended.' },
      { id: 'sa3', q: 'Is workforce planning matched to budget and funding?', sub: 'Alignment to budget cycles and public finance constraints', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'There is a misalignment between planning and budget cycles. Strategic workforce planning support is recommended.' },
      { id: 'sa4', q: 'Can the workforce handle political or regulatory changes?', sub: 'Preparedness for political shifts and regulatory changes', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'Your organisation is not prepared for regulatory shifts. Scenario planning and forecasting consulting is recommended.' },
      { id: 'sa5', q: 'Is the workforce ready for digital tools and new service models?', sub: 'Degree of future-readiness and digital transformation', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'Your workforce is not future-ready. A capability and transformation roadmap is recommended.' },
    ],
  },
  {
    cat: 'Operating Model & Governance',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,.07)',
    icon: '🏛️',
    max: 21,
    qs: [
      { id: 'om1', q: 'Are workforce governance roles clear?', sub: 'Clarity of roles, responsibilities and decision rights', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'Roles and responsibilities are unclear. Governance redesign is recommended.' },
      { id: 'om2', q: 'Is the organization structured efficiently?', sub: 'Span of control and layers of hierarchy', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'Your structure shows inefficiencies. We recommend an operating model review.' },
      { id: 'om3', q: 'Is there a good balance between central and local HR tasks?', sub: 'Centralised vs decentralised workforce governance', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'HR governance is fragmented. A centralisation/decentralisation model is needed.' },
      { id: 'om4', q: 'Is it clear who owns workforce planning?', sub: 'Workforce planning ownership and accountability', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'Ownership of workforce planning is unclear. Governance consulting is recommended.' },
      { id: 'om5', q: 'How well developed are workforce governance processes?', sub: 'Governance maturity for talent, performance & capability', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'Governance maturity is low. A governance framework is required.' },
      { id: 'om6', q: 'Are there inefficiencies from overlapping or isolated workforce tasks?', sub: 'Risk of duplication, fragmentation or siloed functions', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'There is duplication and fragmentation. A governance and process redesign is recommended.' },
      { id: 'om7', q: 'Does the organization follow required governance standards?', sub: 'Compliance with public sector governance frameworks', problem: 'No governance', solution: 'Management Consulting', finalMessage: 'Compliance gaps detected. Governance and compliance consulting is recommended.' },
    ],
  },
  {
    cat: 'Workforce Planning & Forecasting',
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,.07)',
    icon: '📈',
    max: 21,
    qs: [
      { id: 'wp1', q: 'Are workforce demand predictions accurate?', sub: 'Workforce demand modelling accuracy', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'Forecasting accuracy is low. Workforce planning consulting is recommended.' },
      { id: 'wp2', q: 'Can retirements and staff movement be predicted well?', sub: 'Supply forecasting for retirements, attrition and mobility', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'Supply forecasting is weak. Workforce analytics consulting is recommended.' },
      { id: 'wp3', q: 'Is scenario planning for the workforce strong?', sub: 'Scenario planning maturity', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'Scenario planning is immature. Strategic planning consulting is recommended.' },
      { id: 'wp4', q: 'Are roles grouped by importance and scarcity?', sub: 'Workforce segmentation by criticality and scarcity', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'Role segmentation is missing. Workforce segmentation consulting is recommended.' },
      { id: 'wp5', q: 'Do workforce numbers match financial resources?', sub: 'Headcount vs budget alignment', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'Headcount is not aligned with budget. Workforce planning consulting is recommended.' },
      { id: 'wp6', q: 'How big are the risks from talent shortages in key services?', sub: 'Risk of workforce shortages in mission-critical roles', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'High exposure to talent shortages. Pipeline and risk mitigation consulting is recommended.' },
      { id: 'wp7', q: 'Are talent pipelines strong for hard-to-fill roles?', sub: 'Pipeline sustainability for scarce roles', problem: 'No planning', solution: 'Management Consulting', finalMessage: 'Pipelines are weak. Talent pipeline development consulting is recommended.' },
    ],
  },
  {
    cat: 'Execution Excellence',
    color: '#D97706',
    bg: 'rgba(217,119,6,.07)',
    icon: '⚙️',
    max: 21,
    qs: [
      { id: 'ex1', q: 'Is hiring fast enough?', sub: 'Speed and responsiveness of hiring operations', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Hiring speed is insufficient. An RPO model can improve execution and reduce delays.' },
      { id: 'ex2', q: 'Are hiring timelines respected?', sub: 'Consistency of delivery against expected timelines', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Hiring timelines are inconsistent. RPO support is recommended.' },
      { id: 'ex3', q: 'Are there delays due to approvals?', sub: 'Workflow friction and bottlenecks in approvals', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Approval bottlenecks detected. RPO can streamline workflows.' },
      { id: 'ex4', q: 'Are recruitment processes consistent across departments?', sub: 'Standardisation of hiring processes across teams', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Processes are not standardised. RPO can unify and optimise hiring.' },
      { id: 'ex5', q: 'Do all teams follow the same hiring rules?', sub: 'Operational consistency and policy discipline', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Hiring rules are not applied consistently. RPO is recommended.' },
      { id: 'ex6', q: 'Can hiring scale quickly?', sub: 'Scalability and execution capacity during growth', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Scalability issues detected. RPO provides flexible capacity.' },
      { id: 'ex7', q: 'Can the organisation handle hiring peaks?', sub: 'Readiness for volume spikes and urgent workforce demand', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Hiring peaks are not manageable. RPO is recommended.' },
    ],
  },
  {
    cat: 'Vendor & Compliance Control',
    color: '#BE185D',
    bg: 'rgba(190,24,93,.07)',
    icon: '🤝',
    max: 21,
    qs: [
      { id: 'vc1', q: 'Is external talent used effectively?', sub: 'Optimisation of contractors and external workforce', problem: 'Vendor chaos', solution: 'MSP', finalMessage: 'External workforce is not optimised. MSP centralisation is recommended.' },
      { id: 'vc2', q: 'Is there a clear list of approved suppliers?', sub: 'Clarity and control over preferred vendors', problem: 'Vendor chaos', solution: 'MSP', finalMessage: 'Supplier list is unclear. MSP can create and manage an approved vendor list.' },
      { id: 'vc3', q: 'Are too many vendors used without control?', sub: 'Vendor fragmentation and lack of ownership', problem: 'Vendor chaos', solution: 'MSP', finalMessage: 'Vendor fragmentation detected. MSP is recommended.' },
      { id: 'vc4', q: 'Are recruitment vendors regularly evaluated?', sub: 'Discipline around supplier review and optimisation', problem: 'Vendor chaos', solution: 'MSP', finalMessage: 'Vendor evaluation is missing. MSP can implement performance tracking.' },
      { id: 'vc5', q: 'Is vendor performance tracked?', sub: 'Visibility on delivery quality and supplier outcomes', problem: 'Vendor chaos', solution: 'MSP', finalMessage: 'Vendor performance is not measured. MSP is recommended.' },
      { id: 'vc6', q: 'Is there favoritism or lack of transparency?', sub: 'Fairness, transparency and governance in supplier usage', problem: 'Vendor chaos', solution: 'MSP', finalMessage: 'Transparency issues detected. MSP ensures fairness and compliance.' },
      { id: 'vc7', q: 'Are external hires fully documented?', sub: 'Compliance, traceability and auditability of external hiring', problem: 'Vendor chaos', solution: 'MSP', finalMessage: 'Documentation gaps detected. MSP ensures compliance and traceability.' },
    ],
  },
  {
    cat: 'Cost & Visibility',
    color: '#2563EB',
    bg: 'rgba(37,99,235,.07)',
    icon: '💷',
    max: 6,
    qs: [
      { id: 'cv1', q: 'Is cost per hire tracked?', sub: 'Visibility on hiring cost efficiency', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Cost visibility is low. RPO provides full reporting.' },
      { id: 'cv2', q: 'Is total recruitment spend visible?', sub: 'Control of aggregate recruitment expenditure', problem: 'Poor execution', solution: 'RPO', finalMessage: 'Recruitment spend is not controlled. RPO is recommended.' },
    ],
  },
  {
    cat: 'Technology Enablement',
    color: '#0891B2',
    bg: 'rgba(8,145,178,.07)',
    icon: '🧠',
    max: 6,
    qs: [
      { id: 'te1', q: 'Are recruitment tools used effectively?', sub: 'Adoption and value extraction from current tools', problem: 'No tools', solution: 'VMS', finalMessage: 'Tools are underused. A VMS centralises and automates workflows.' },
      { id: 'te2', q: 'Is there a single system or multiple disconnected tools?', sub: 'Technology fragmentation across workflows', problem: 'No tools', solution: 'VMS', finalMessage: 'Tools are fragmented. A VMS is recommended.' },
    ],
  },
];

const assessmentLevels = [
  { minPct: 80, maxPct: 100, name: 'Mature Stage', desc: 'Your organisation shows strong workforce discipline, resilience and decision quality.', color: '#059669', bg: 'rgba(5,150,105,.08)', emoji: '🏆' },
  { minPct: 60, maxPct: 79, name: 'Operational Stage', desc: 'Core foundations are working well, with room to strengthen consistency and scale.', color: '#0EA5E9', bg: 'rgba(14,165,233,.08)', emoji: '⚙️' },
  { minPct: 35, maxPct: 59, name: 'Transformational Stage Level', desc: 'The organisation is moving forward, but important gaps still limit confidence, clarity and continuity.', color: '#D97706', bg: 'rgba(217,119,6,.08)', emoji: '🧩' },
  { minPct: 0, maxPct: 34, name: 'Limited Capability Level', desc: 'Workforce delivery is constrained by major structural, governance or execution weaknesses.', color: '#DC2626', bg: 'rgba(220,38,38,.08)', emoji: '🏗️' },
];

const options = [
  { val: 3, icon: '✓', txt: 'Yes' },
  { val: 2, icon: '◑', txt: 'Partly' },
  { val: 1, icon: '✗', txt: 'No' },
  { val: 0, icon: '?', txt: 'N/A' },
];

const totalQuestions = assessmentData.reduce((sum, cat) => sum + cat.qs.length, 0);
const totalMaxScore = assessmentData.reduce((sum, cat) => sum + cat.max, 0);

const getScoreSignal = (pct) => {
  if (pct > 60) {
    return { label: 'Healthy', color: '#059669', bg: 'rgba(5,150,105,.08)' };
  }
  if (pct >= 40) {
    return { label: 'Watch', color: '#D97706', bg: 'rgba(217,119,6,.08)' };
  }
  return { label: 'Critical', color: '#DC2626', bg: 'rgba(220,38,38,.08)' };
};

const interpretationByStage = {
  'Mature Stage': {
    shortTerm: 'Your immediate priority is to protect what already works well, maintain governance discipline and keep decision visibility high.',
    midTerm: 'Over the medium term, you can optimise supplier strategy, sharpen workforce economics and fine-tune delivery quality.',
    longTerm: 'Long term, this maturity level supports resilient growth, stronger employer positioning and more confident workforce investment decisions.',
    howWeHelp: 'VAMEFO can support continuous optimisation, executive mentoring and targeted strategic reviews as your organisation scales.',
  },
  'Operational Stage': {
    shortTerm: 'In the short term, your organisation can stabilise execution by tightening a few governance, planning and visibility gaps.',
    midTerm: 'Over the medium term, stronger consistency across sourcing, suppliers and controls can improve cost efficiency and continuity.',
    longTerm: 'Long term, moving from operational to mature creates a stronger platform for scalable growth and more resilient workforce performance.',
    howWeHelp: 'VAMEFO can help translate existing foundations into a cleaner operating model with clearer controls, reporting and workforce architecture.',
  },
  'Transformational Stage Level': {
    shortTerm: 'In the short term, leadership should focus on the most visible pain points: fragmented sourcing, weak controls and inconsistent execution.',
    midTerm: 'Over the medium term, redesigning governance and delivery models can significantly improve resilience, transparency and workforce quality.',
    longTerm: 'Long term, this stage can evolve into a disciplined and scalable workforce architecture if the right structural changes are made now.',
    howWeHelp: 'VAMEFO can guide the transformation through structured advisory, governance redesign and fit-for-purpose sourcing models.',
  },
  'Limited Capability Level': {
    shortTerm: 'In the short term, urgent attention is needed to reduce risk, improve clarity and establish minimum control across workforce decisions.',
    midTerm: 'Over the medium term, the organisation will benefit from foundational work in governance, planning, supplier control and enabling processes.',
    longTerm: 'Long term, disciplined rebuilding of the workforce model can support continuity, compliance and sustainable organisational growth.',
    howWeHelp: 'VAMEFO can help establish the core structure, governance and advisory support needed to move the organisation toward a more stable stage.',
  },
};

const normalizePdfText = (value) =>
  String(value)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/–/g, '-')
    .replace(/—/g, '-')
    .replace(/•/g, '-')
    .replace(/\u00A0/g, ' ');

const escapePdfText = (value) =>
  normalizePdfText(value)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');

const loadImageAsJpeg = (src, backgroundColor = null) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d');

      if (!context) {
        reject(new Error('Unable to prepare the VAMEFO logo for the PDF.'));
        return;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      if (backgroundColor) {
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
      context.drawImage(image, 0, 0);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;
      for (let index = 0; index < data.length; index += 4) {
        const red = data[index];
        const green = data[index + 1];
        const blue = data[index + 2];
        if (red < 20 && green < 20 && blue < 20) {
          data[index + 3] = 0;
        }
      }
      context.putImageData(imageData, 0, 0);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
      const base64 = dataUrl.split(',')[1];
      resolve({
        width: image.naturalWidth,
        height: image.naturalHeight,
        binary: atob(base64),
      });
    };
    image.onerror = () => reject(new Error('Unable to load the VAMEFO logo for the PDF.'));
    image.src = src;
  });

const loadImageElement = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Unable to load the VAMEFO logo for the PDF.'));
    image.src = src;
  });

const wrapPdfLine = (text, maxLength = 88) => {
  const words = normalizePdfText(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';

  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxLength) {
      if (current) {
        lines.push(current);
      }
      current = word;
    } else {
      current = candidate;
    }
  });

  if (current) {
    lines.push(current);
  }

  return lines.length ? lines : [''];
};

const binaryToHex = (binary) => {
  let hex = '';
  for (let index = 0; index < binary.length; index += 1) {
    hex += binary.charCodeAt(index).toString(16).padStart(2, '0').toUpperCase();
  }
  return `${hex}>`;
};

const hexToRgb = (hex) => {
  const cleaned = hex.replace('#', '');
  const normalized = cleaned.length === 3
    ? cleaned.split('').map((char) => char + char).join('')
    : cleaned;

  return {
    r: parseInt(normalized.slice(0, 2), 16) / 255,
    g: parseInt(normalized.slice(2, 4), 16) / 255,
    b: parseInt(normalized.slice(4, 6), 16) / 255,
  };
};

const buildAssessmentPdf = async ({ totalScore, totalPossible, scorePct, level, categoryScores, recommendations, interpretation, allCategoriesGreen }) => {
  let logo = null;
  let logoHex = null;

  try {
    logo = await loadImageAsJpeg('/vamefo-brandmark-v2.png', '#0f172a');
    logoHex = binaryToHex(logo.binary);
  } catch (_error) {
    logo = null;
    logoHex = null;
  }

  const palette = {
    navy: hexToRgb('#0f172a'),
    gold: hexToRgb('#d4af37'),
    goldSoft: hexToRgb('#f4d57f'),
    slate: hexToRgb('#475569'),
    light: hexToRgb('#eef3f8'),
    white: hexToRgb('#ffffff'),
    level: hexToRgb(level.color),
  };

  const pageWidth = 612;
  const pageHeight = 792;
  const marginX = 44;
  const headerHeight = 98;
  const footerHeight = 34;
  const bottomLimit = pageHeight - footerHeight - 18;
  const disclaimerPageLines = [
    'Important Legal Disclaimer',
    'This assessment* is an automated, high-level and indicative summary based solely on self-declared information provided by the participant.',
    'It is not and does not yet constitute legal, contractual, financial, or professional advice, nor does it create any legal obligation, commitment, or advisory relationship between VAMEFO Management Consultancy and the participant.',
    "Any interpretation, decision, or implementation based on these results without VAMEFO Management Consultancy's inclusion in the process is undertaken entirely at the user's own risk.",
    'For the assessment to become actionable, binding, or implementation-ready, a direct engagement and a more in-depth assessment with VAMEFO Management Consultancy is required.',
    'To the fullest extent permitted by applicable law, the company disclaims all liability for any direct or indirect outcomes, damages, or losses arising from the use of or reliance on this assessment.',
    'This report and its contents are protected by copyright and all applicable intellectual property laws. Unauthorized reproduction, distribution, or use is strictly prohibited.',
  ];

  const pages = [];
  let currentPage = null;
  let currentY = 0;

  const setFill = (target, color) => {
    target.push(`${color.r.toFixed(3)} ${color.g.toFixed(3)} ${color.b.toFixed(3)} rg`);
  };

  const drawRect = (target, x, top, width, height, color) => {
    const pdfY = pageHeight - top - height;
    setFill(target, color);
    target.push(`${x} ${pdfY} ${width} ${height} re f`);
  };

  const drawText = (target, text, x, top, size = 11, color = palette.navy, font = 'F1') => {
    const pdfY = pageHeight - top;
    setFill(target, color);
    target.push('BT');
    target.push(`/${font} ${size} Tf`);
    target.push(`${x} ${pdfY} Td`);
    target.push(`(${escapePdfText(text)}) Tj`);
    target.push('ET');
  };

  const drawWrapped = (target, text, x, top, maxLength = 82, size = 11, color = palette.slate, lineHeight = 15, font = 'F1') => {
    const lines = wrapPdfLine(text, maxLength);
    lines.forEach((line, index) => {
      drawText(target, line, x, top + index * lineHeight, size, color, font);
    });
    return lines.length * lineHeight;
  };

  const drawLogo = (target, x, top, width, height) => {
    if (!logo) {
      return;
    }
    const pdfY = pageHeight - top - height;
    target.push('q');
    target.push(`${width} 0 0 ${height} ${x} ${pdfY} cm`);
    target.push('/Im1 Do');
    target.push('Q');
  };

  const startPage = () => {
    currentPage = [];
    pages.push(currentPage);
    drawRect(currentPage, 0, 0, pageWidth, pageHeight, palette.white);
    drawRect(currentPage, 0, 0, pageWidth, 84, palette.navy);
    drawRect(currentPage, 0, 84, pageWidth, 8, palette.gold);
    drawLogo(currentPage, 44, 16, 52, 52);
    drawText(currentPage, 'VAMEFO', 110, 42, 24, palette.white, 'F2');
    drawText(currentPage, 'Organization Maturity Assessment', 110, 66, 13, palette.goldSoft, 'F2');
    currentY = headerHeight + 26;
  };

  const startBlankPage = () => {
    currentPage = [];
    pages.push(currentPage);
    drawRect(currentPage, 0, 0, pageWidth, pageHeight, palette.white);
    currentY = 72;
  };

  const ensureSpace = (neededHeight) => {
    if (!currentPage) {
      startPage();
      return;
    }
    if (currentY + neededHeight > bottomLimit) {
      startPage();
    }
  };

  startPage();

  drawText(currentPage, 'Executive Summary', marginX, currentY, 22, palette.navy, 'F2');
  currentY += 26;
  currentY += drawWrapped(
    currentPage,
    `Assessment* outcome generated across strategic, operational, vendor, execution and technology dimensions.`,
    marginX,
    currentY,
    84,
    11,
    palette.slate,
    16,
    'F1'
  );

  currentY += 18;
  const statTop = currentY;
  const statConfigs = [
    { x: 44, label: 'Average Score', value: `${scorePct}%`, color: palette.level },
    { x: 236, label: 'Stage', value: level.name, color: palette.level },
    { x: 428, label: 'Assessment', value: allCategoriesGreen ? 'Strong' : 'In Progress', color: palette.navy },
  ];

  statConfigs.forEach((stat) => {
    drawRect(currentPage, stat.x, statTop, 140, 76, palette.light);
    drawText(currentPage, stat.label, stat.x + 14, statTop + 22, 10, palette.slate, 'F1');

    if (stat.label === 'Stage') {
      const wrappedStage = wrapPdfLine(stat.value, 16);
      wrappedStage.slice(0, 3).forEach((line, index) => {
        drawText(currentPage, line, stat.x + 14, statTop + 48 + index * 13, 8.5, stat.color, 'F2');
      });
      return;
    }

    if (stat.label === 'Assessment') {
      const wrappedAssessment = wrapPdfLine(stat.value, 12);
      wrappedAssessment.slice(0, 2).forEach((line, index) => {
        drawText(currentPage, line, stat.x + 14, statTop + 52 + index * 14, 15, stat.color, 'F2');
      });
      return;
    }

    drawText(currentPage, stat.value, stat.x + 14, statTop + 52, 18, stat.color, 'F2');
  });
  currentY += 94;

  drawText(currentPage, 'Interpretation', marginX, currentY, 16, palette.navy, 'F2');
  currentY += 18;
  currentY += drawWrapped(currentPage, level.desc, marginX, currentY, 86, 11, palette.slate, 16, 'F1');
  currentY += 10;
  currentY += drawWrapped(currentPage, `Short term: ${interpretation.shortTerm}`, marginX, currentY, 86, 10, palette.slate, 14, 'F1');
  currentY += 4;
  currentY += drawWrapped(currentPage, `Mid term: ${interpretation.midTerm}`, marginX, currentY, 86, 10, palette.slate, 14, 'F1');
  currentY += 4;
  currentY += drawWrapped(currentPage, `Long term: ${interpretation.longTerm}`, marginX, currentY, 86, 10, palette.slate, 14, 'F1');
  currentY += 4;
  currentY += drawWrapped(currentPage, `How VAMEFO can help: ${interpretation.howWeHelp}`, marginX, currentY, 86, 10, palette.slate, 14, 'F1');

  currentY += 24;
  drawText(currentPage, 'Category Breakdown', marginX, currentY, 18, palette.navy, 'F2');
  currentY += 18;

  categoryScores.forEach((score) => {
    const signal = getScoreSignal(score.pct);
    ensureSpace(54);
    drawRect(currentPage, marginX, currentY, 524, 34, palette.light);
    drawRect(currentPage, marginX + 220, currentY + 11, 190, 10, palette.white);
    drawRect(currentPage, marginX + 220, currentY + 11, Math.max(18, (190 * score.pct) / 100), 10, hexToRgb(signal.color));
    drawText(currentPage, score.cat, marginX + 12, currentY + 18, 10, palette.navy, 'F2');
    drawText(currentPage, `${score.pct}%`, 500, currentY + 18, 10, hexToRgb(signal.color), 'F2');
    currentY += 46;
  });

  currentY += 10;
  ensureSpace(70);
  drawText(currentPage, 'Recommended Solution Paths', marginX, currentY, 18, palette.navy, 'F2');
  currentY += 18;
  currentY += drawWrapped(
    currentPage,
    recommendations.solutions.length > 0 ? recommendations.solutions.join(' | ') : 'No specific solution path triggered from the answers provided.',
    marginX,
    currentY,
    86,
    11,
    palette.slate,
    16,
    'F1'
  );

  currentY += 18;
  ensureSpace(90);
  drawText(currentPage, 'Recommended Focus Areas', marginX, currentY, 18, palette.navy, 'F2');
  currentY += 18;

  const focusItems = recommendations.messages.length > 0
    ? recommendations.messages.slice(0, 6)
    : [{ category: 'Assessment', solution: 'Review', message: 'No high-priority corrective recommendations were triggered.' }];

  focusItems.forEach((item) => {
    const wrapped = wrapPdfLine(item.message, 76);
    const boxHeight = 42 + wrapped.length * 14;
    ensureSpace(boxHeight + 16);
    drawRect(currentPage, marginX, currentY, 524, boxHeight, palette.light);
    drawText(currentPage, item.category, marginX + 12, currentY + 16, 10, palette.level, 'F2');
    wrapped.forEach((line, index) => {
      drawText(currentPage, line, marginX + 12, currentY + 34 + index * 14, 10, palette.slate, 'F1');
    });
    currentY += boxHeight + 12;
  });

  ensureSpace(120);
  if (allCategoriesGreen) {
    drawText(currentPage, 'All Categories Strong', marginX, currentY, 18, palette.level, 'F2');
    currentY += 18;
    currentY += drawWrapped(
      currentPage,
      'Congratulations. Your organisation shows consistently strong results across all categories. We would be pleased to stay in touch for professional collaboration, executive advisory and continuous optimisation.',
      marginX,
      currentY,
      86,
      11,
      palette.slate,
      16,
      'F1'
    );
    currentY += 18;
    ensureSpace(120);
  }

  drawText(currentPage, 'Possible Engagement Models', marginX, currentY, 18, palette.navy, 'F2');
  currentY += 20;
  [
    'Management Consulting: governance, operating model, workforce planning and strategic redesign.',
    'RPO: faster recruitment execution, standardisation, scalability and reporting.',
    'MSP: external workforce governance, vendor control, transparency and compliance.',
    'VMS: tool consolidation, workflow automation and better technology visibility.',
  ].forEach((line) => {
    const height = drawWrapped(currentPage, `- ${line}`, marginX, currentY, 84, 10, palette.slate, 14, 'F1');
    currentY += height + 6;
  });

  startBlankPage();
  drawText(currentPage, 'Important Legal Disclaimer', marginX, currentY, 18, palette.navy, 'F2');
  currentY += 28;
  disclaimerPageLines.slice(1).forEach((line) => {
    currentY += drawWrapped(currentPage, line, marginX, currentY, 92, 10.5, palette.slate, 16, 'F1');
    currentY += 10;
  });

  const objects = [];
  const fontRegularObject = 4;
  const fontBoldObject = 5;
  const imageObject = 6;
  const firstPageObject = 7;
  const pageObjectNumbers = [];

  objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
  objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
  objects[5] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';
  if (logo && logoHex) {
    objects[6] = `<< /Type /XObject /Subtype /Image /Width ${logo.width} /Height ${logo.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter [/ASCIIHexDecode /DCTDecode] /Length ${logoHex.length} >>\nstream\n${logoHex}\nendstream`;
  }

  pages.forEach((pageCommands, index) => {
    const pageObjectNumber = firstPageObject + index * 2;
    const contentObjectNumber = pageObjectNumber + 1;
    const stream = pageCommands.join('\n');
    pageObjectNumbers.push(pageObjectNumber);
    const xObjectRef = logo && logoHex ? `/XObject << /Im1 ${imageObject} 0 R >>` : '';
    objects[pageObjectNumber] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularObject} 0 R /F2 ${fontBoldObject} 0 R >> ${xObjectRef} >> /Contents ${contentObjectNumber} 0 R >>`;
    objects[contentObjectNumber] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  });

  objects[2] = `<< /Type /Pages /Count ${pages.length} /Kids [${pageObjectNumbers.map((number) => `${number} 0 R`).join(' ')}] >>`;

  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  for (let i = 1; i < objects.length; i += 1) {
    offsets[i] = pdf.length;
    pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i < objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return new Blob([pdf], { type: 'application/pdf' });
};

const AssessmentSection = ({
  theme = 'dark',
  intro = null,
}) => {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL?.trim() || '';
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [leadForm, setLeadForm] = useState({
    name: '',
    company: '',
    email: '',
    contactBack: true,
    notes: '',
  });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState('');
  const [pdfEmailSubmitting, setPdfEmailSubmitting] = useState(false);
  const [pdfEmailSent, setPdfEmailSent] = useState(false);
  const [pdfEmailError, setPdfEmailError] = useState('');

  const metrics = useMemo(() => {
    let answered = 0;
    let total = 0;

    assessmentData.forEach((cat) => {
      cat.qs.forEach((q) => {
        const value = answers[q.id];
        if (value !== undefined) {
          answered += 1;
          total += value;
        }
      });
    });

    return {
      answered,
      total,
      pct: Math.round((answered / totalQuestions) * 100) || 0,
      scorePct: Math.round((total / totalMaxScore) * 100) || 0,
    };
  }, [answers]);

  const categoryScores = useMemo(
    () =>
      assessmentData.map((cat) => ({
        cat: cat.cat,
        color: cat.color,
        score: cat.qs.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0),
        max: cat.max,
        pct: Math.round((cat.qs.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0) / cat.max) * 100) || 0,
      })),
    [answers]
  );

  const currentLevel = useMemo(
    () => assessmentLevels.find((level) => metrics.scorePct >= level.minPct && metrics.scorePct <= level.maxPct) ?? assessmentLevels[assessmentLevels.length - 1],
    [metrics.scorePct]
  );

  const flatQuestions = useMemo(
    () =>
      assessmentData.flatMap((cat) =>
        cat.qs.map((question) => ({
          ...question,
          category: cat.cat,
          categoryColor: cat.color,
          categoryBg: cat.bg,
          categoryIcon: cat.icon,
          categoryTotal: cat.qs.length,
          questionInCategory: cat.qs.findIndex((item) => item.id === question.id) + 1,
        }))
      ),
    []
  );

  const activeQuestion = useMemo(
    () => flatQuestions.find((question) => answers[question.id] === undefined) ?? null,
    [answers, flatQuestions]
  );

  const activeQuestionIndex = useMemo(
    () => (activeQuestion ? flatQuestions.findIndex((question) => question.id === activeQuestion.id) : totalQuestions),
    [activeQuestion, flatQuestions]
  );

  const recommendations = useMemo(() => {
    const flaggedQuestions = assessmentData
      .flatMap((cat) =>
        cat.qs.map((q) => ({
          ...q,
          category: cat.cat,
          answer: answers[q.id],
        }))
      )
      .filter((q) => q.answer !== undefined && q.answer <= 1);

    const uniqueSolutions = [];
    const solutionSet = new Set();
    const messages = [];
    const messageSet = new Set();

    flaggedQuestions.forEach((question) => {
      if (question.solution && !solutionSet.has(question.solution)) {
        solutionSet.add(question.solution);
        uniqueSolutions.push(question.solution);
      }
      if (question.finalMessage && !messageSet.has(question.finalMessage)) {
        messageSet.add(question.finalMessage);
        messages.push({
          message: question.finalMessage,
          category: question.category,
          solution: question.solution,
        });
      }
    });

    return {
      solutions: uniqueSolutions,
      messages: messages.slice(0, 8),
    };
  }, [answers]);

  const allCategoriesGreen = useMemo(
    () => categoryScores.length > 0 && categoryScores.every((score) => score.pct > 60),
    [categoryScores]
  );

  const currentInterpretation = interpretationByStage[currentLevel.name] ?? interpretationByStage['Operational Stage'];

  const showToast = (message) => {
    setToastMessage(message);
    window.clearTimeout(window.__vamefoToastTimeout);
    window.__vamefoToastTimeout = window.setTimeout(() => setToastMessage(''), 4000);
  };

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (showResults) {
      setShowResults(false);
    }

    window.setTimeout(() => {
      document.getElementById('asmQuestions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const handleStartAssessment = (event) => {
    event.preventDefault();

    if (!leadForm.name || !leadForm.email) {
      showToast('Please add your contact details before starting the assessment.');
      return;
    }

    setAssessmentStarted(true);
    window.setTimeout(() => {
      document.getElementById('asmQuestions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleSubmit = () => {
    if (metrics.answered < totalQuestions) {
      showToast(`Please answer all questions (${metrics.answered}/${totalQuestions} done)`);
      const firstMissing = assessmentData
        .flatMap((cat) => cat.qs)
        .find((q) => answers[q.id] === undefined);

      if (firstMissing) {
        document.getElementById(`qcard-${firstMissing.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setShowResults(true);
    window.setTimeout(() => {
      document.getElementById('asmResult')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setAssessmentStarted(false);
    setLeadSubmitted(false);
    setLeadError('');
    setPdfEmailSent(false);
    setPdfEmailError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLeadChange = (event) => {
    const { name, value, type, checked } = event.target;
    setLeadForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    setLeadSubmitting(true);
    setLeadError('');

    try {
      await submitWeb3Form({
        subject: `Assessment Submission - ${leadForm.company || leadForm.name || 'VAMEFO Website'}`,
        from_name: 'VAMEFO Assessment',
        name: leadForm.name,
        company: leadForm.company,
        email: leadForm.email,
        replyto: leadForm.email,
        contact_back: leadForm.contactBack ? 'Yes' : 'No',
        notes: leadForm.notes || 'No additional notes provided.',
        assessment_score: `${metrics.total} / ${totalMaxScore}`,
        assessment_score_percent: `${metrics.scorePct}%`,
        assessment_stage: currentLevel.name,
        strategic_alignment: `${categoryScores[0]?.score ?? 0} / ${categoryScores[0]?.max ?? 0}`,
        operating_model_governance: `${categoryScores[1]?.score ?? 0} / ${categoryScores[1]?.max ?? 0}`,
        workforce_planning_forecasting: `${categoryScores[2]?.score ?? 0} / ${categoryScores[2]?.max ?? 0}`,
        execution_excellence: `${categoryScores[3]?.score ?? 0} / ${categoryScores[3]?.max ?? 0}`,
        vendor_compliance_control: `${categoryScores[4]?.score ?? 0} / ${categoryScores[4]?.max ?? 0}`,
        cost_visibility: `${categoryScores[5]?.score ?? 0} / ${categoryScores[5]?.max ?? 0}`,
        technology_enablement: `${categoryScores[6]?.score ?? 0} / ${categoryScores[6]?.max ?? 0}`,
        recommended_solutions: recommendations.solutions.join(', ') || 'None generated',
        recommended_focus_messages: recommendations.messages.map((item) => item.message).join(' | ') || 'None generated',
        short_term_interpretation: currentInterpretation.shortTerm,
        mid_term_interpretation: currentInterpretation.midTerm,
        long_term_interpretation: currentInterpretation.longTerm,
        vamefo_support: currentInterpretation.howWeHelp,
        all_categories_green: allCategoriesGreen ? 'Yes' : 'No',
        pdf_summary_requested: 'Client-side PDF generated for this assessment flow.',
      });

      setLeadSubmitted(true);
      setLeadForm((prev) => ({
        ...prev,
        notes: '',
      }));
    } catch (submitError) {
      setLeadError(submitError.message || 'There was a problem sending the assessment.');
    } finally {
      setLeadSubmitting(false);
    }
  };

  const getPdfFilename = () => `vamefo-assessment-${currentLevel.name.toLowerCase().replace(/\s+/g, '-')}.pdf`;

  const blobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(String(reader.result).split(',')[1] || '');
      reader.onerror = () => reject(new Error('Unable to prepare the PDF for email.'));
      reader.readAsDataURL(blob);
    });

  const createAssessmentPdfBlob = () =>
    buildAssessmentPdf({
      totalScore: metrics.total,
      totalPossible: totalMaxScore,
      scorePct: metrics.scorePct,
      level: currentLevel,
      categoryScores,
      recommendations,
      interpretation: currentInterpretation,
      allCategoriesGreen,
    });

  const handleSendPdfEmail = async () => {
    if (!leadForm.name || !leadForm.email) {
      showToast('Please add your name and email before requesting the PDF by email.');
      return;
    }

    setPdfEmailSubmitting(true);
    setPdfEmailError('');
    setPdfEmailSent(false);

    try {
      const pdfBlob = await createAssessmentPdfBlob();
      const pdfBase64 = await blobToBase64(pdfBlob);
      const response = await fetch('/api/send-assessment-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: leadForm.name,
          company: leadForm.company,
          email: leadForm.email,
          contactBack: leadForm.contactBack,
          notes: leadForm.notes,
          pdfBase64,
          pdfFilename: getPdfFilename(),
          scorePercent: metrics.scorePct,
          stage: currentLevel.name,
          totalScore: metrics.total,
          totalPossible: totalMaxScore,
          categoryScores,
          recommendations,
          interpretation: currentInterpretation,
        }),
      });

      const result = await response.json().catch(() => ({
        ok: false,
        error: 'The email API is not available on this deployment yet.',
      }));

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Unable to send the PDF by email right now.');
      }

      setPdfEmailSent(true);
      showToast('Assessment PDF sent by email.');
    } catch (error) {
      setPdfEmailError(error.message || 'Unable to send the PDF by email right now.');
    } finally {
      setPdfEmailSubmitting(false);
    }
  };

  const handleDownloadPdf = async () => {
    try {
      const pdfBlob = await createAssessmentPdfBlob();

      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = getPdfFilename();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      showToast(error.message || 'Unable to generate the PDF right now.');
    }
  };

  const handleBookingOpen = () => {
    if (!bookingUrl) {
      showToast('Add a 30-minute booking link to activate the calendar.');
      return;
    }
    setBookingOpen(true);
  };

  const isLight = theme === 'light';

  return (
    <section className={isLight ? 'py-24 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)]' : 'py-24 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_30%),linear-gradient(to_bottom,#060606,#121212,#0b0b0b)]'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold ${isLight ? 'border border-slate-200 bg-slate-50 text-slate-700' : 'border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#f4d57f]'}`}>
            Organization Maturity Assessment
          </span>
          <h2 className={`mt-6 text-4xl md:text-5xl font-bold ${isLight ? 'text-slate-950' : 'bg-gradient-to-r from-white via-[#f8f2de] to-[#d4af37] bg-clip-text text-transparent'}`}>
            Evaluate your HR and workforce governance maturity
          </h2>
          <p className={`mt-5 text-lg leading-relaxed ${isLight ? 'text-slate-600' : 'text-gray-300'}`}>
            {intro || 'This self-assessment helps leaders benchmark strategic alignment, governance and workforce planning maturity in a few minutes.'}
          </p>
        </motion.div>

        <div className={isLight ? 'rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden' : 'assessment-shell'}>
          <div className="asm-wrap">
            <div className="asm-hero">
              <h1>Organization Maturity Assessment</h1>
              <p>
                Evaluate your organization&apos;s HR and workforce governance maturity across strategic, operational and delivery dimensions.
              </p>
              <div className="asm-hero-meta">
                <div className="asm-meta-item">📋 {totalQuestions} questions</div>
                <div className="asm-meta-item">⏱ ~8 minutes</div>
                <div className="asm-meta-item">📊 4 assessment stages</div>
              </div>
            </div>

            {!assessmentStarted ? (
              <div className="mt-2 rounded-[24px] border border-slate-200 bg-slate-50 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-slate-950">Before you start</h3>
                <p className="mt-3 text-slate-600">
                  Add your contact details first so we can associate the assessment with your organisation and send the result summary to our team by email.
                </p>
                <form className="mt-6 space-y-4" onSubmit={handleStartAssessment}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-slate-400"
                      name="name"
                      onChange={handleLeadChange}
                      placeholder="Your name"
                      required
                      value={leadForm.name}
                    />
                    <input
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-slate-400"
                      name="company"
                      onChange={handleLeadChange}
                      placeholder="Company name"
                      value={leadForm.company}
                    />
                  </div>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-slate-400"
                    name="email"
                    onChange={handleLeadChange}
                    placeholder="Work email"
                    required
                    type="email"
                    value={leadForm.email}
                  />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <label className="flex items-center gap-3 text-slate-700">
                      <input checked={leadForm.contactBack} name="contactBack" onChange={handleLeadChange} type="checkbox" />
                      I would like to be contacted after the assessment.
                    </label>
                    <button className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800" type="submit">
                      Start Assessment
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <div className="asm-progress-bar" id="asmQuestions">
                  <span className="asm-progress-label">
                    Progress: <strong>{metrics.answered}</strong> / {totalQuestions}
                  </span>
                  <div className="asm-progress-track">
                    <div className="asm-progress-fill" style={{ width: `${metrics.pct}%` }} />
                  </div>
                  <span className="asm-progress-pct">{metrics.pct}%</span>
                </div>

                {activeQuestion ? (
                  <div className="asm-section" key={activeQuestion.id}>
                    <div className="asm-section-header" style={{ background: activeQuestion.categoryBg, borderLeftColor: activeQuestion.categoryColor }}>
                      <div className="asm-section-icon" style={{ background: activeQuestion.categoryBg }}>
                        {activeQuestion.categoryIcon}
                      </div>
                      <div>
                        <div className="asm-section-title" style={{ color: activeQuestion.categoryColor }}>
                          {activeQuestion.category}
                        </div>
                        <div className="asm-section-subtitle" style={{ color: activeQuestion.categoryColor }}>
                          Question {activeQuestion.questionInCategory} of {activeQuestion.categoryTotal} in this category
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className="asm-q"
                      id={`qcard-${activeQuestion.id}`}
                      initial={{ opacity: 0, y: 18 }}
                      key={activeQuestion.id}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="asm-q-top">
                        <div className="asm-q-num">{activeQuestionIndex + 1}</div>
                        <div>
                          <div className="asm-q-title-row">
                            <div className="asm-q-text">{activeQuestion.q}</div>
                            <div className="asm-help">
                              <button className="asm-help-btn" type="button" aria-label={`Clarification for ${activeQuestion.q}`}>
                                <Info className="h-4 w-4" />
                              </button>
                              <div className="asm-help-tooltip">{activeQuestion.sub}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="asm-options">
                        {options.map((option) => (
                          <div className="asm-opt" data-val={option.val} key={`${activeQuestion.id}-${option.val}`}>
                            <input
                              checked={false}
                              id={`${activeQuestion.id}_${option.val}`}
                              name={activeQuestion.id}
                              onChange={() => handleChange(activeQuestion.id, option.val)}
                              type="radio"
                              value={option.val}
                            />
                            <label htmlFor={`${activeQuestion.id}_${option.val}`}>
                              <span className="asm-opt-icon">{option.icon}</span>
                              <span className="asm-opt-txt">{option.txt}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6 md:p-8 text-center">
                    <h3 className="text-2xl font-bold text-emerald-900">Assessment complete</h3>
                    <p className="mt-3 text-emerald-800">All questions are answered. You can now view your assessment outcome.</p>
                  </div>
                )}

                <div className="asm-actions">
                  <button className="btn btn-outline" onClick={handleReset} type="button">
                    ↺ Reset
                  </button>
                  <button className="btn btn-primary" onClick={handleSubmit} style={{ fontSize: '15px', padding: '14px 32px' }} type="button">
                    View assessment outcome →
                  </button>
                </div>
              </>
            )}

            {showResults && (
              <div className="asm-result show" id="asmResult">
                <div className="asm-result-top">
                  <div className="asm-level-name" style={{ color: currentLevel.color }}>
                    {currentLevel.emoji} {currentLevel.name}
                  </div>
                  <div className="asm-level-desc">{currentLevel.desc}</div>
                </div>

                <div className="asm-levels-grid">
                  {assessmentLevels.map((level) => (
                    <div
                      className={`asm-level-card ${level.name === currentLevel.name ? 'current' : ''}`}
                      key={level.name}
                      style={level.name === currentLevel.name ? { borderColor: level.color } : undefined}
                    >
                      <div className="asm-level-emoji">{level.emoji}</div>
                      <div className="asm-level-card-name" style={{ color: level.color }}>
                        {level.name}
                      </div>
                      <div className="asm-level-card-range">
                        {level.minPct}% – {level.maxPct}%
                      </div>
                      {level.name === currentLevel.name && (
                        <div className="asm-level-badge" style={{ background: level.color }}>
                          YOUR RESULT
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="asm-cat-scores">
                  {categoryScores.map((score) => (
                    <div className="asm-cat-score" key={score.cat}>
                      <div className="asm-cat-score-label">{score.cat}</div>
                      <div className="asm-cat-score-bar">
                        <div className="asm-cat-score-fill" style={{ width: `${score.pct}%`, background: getScoreSignal(score.pct).color }} />
                      </div>
                      <div className="asm-cat-score-val" style={{ color: getScoreSignal(score.pct).color }}>
                        {score.pct}%
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-slate-950">Interpretation</h3>
                    <div className="mt-5 space-y-4 text-slate-600">
                      <p><strong className="text-slate-900">Short term:</strong> {currentInterpretation.shortTerm}</p>
                      <p><strong className="text-slate-900">Mid term:</strong> {currentInterpretation.midTerm}</p>
                      <p><strong className="text-slate-900">Long term:</strong> {currentInterpretation.longTerm}</p>
                      <p><strong className="text-slate-900">How VAMEFO can help:</strong> {currentInterpretation.howWeHelp}</p>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-white p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-slate-950">Contact & next step</h3>
                    <p className="mt-3 text-slate-600">
                      We already captured your core contact details before the assessment. You can now ask us to follow up and book an intake discussion.
                    </p>
                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700">
                      <div><strong>Name:</strong> {leadForm.name || 'Not provided'}</div>
                      <div className="mt-1"><strong>Company:</strong> {leadForm.company || 'Not provided'}</div>
                      <div className="mt-1"><strong>Email:</strong> {leadForm.email || 'Not provided'}</div>
                    </div>
                    <form className="mt-6 space-y-4" onSubmit={handleLeadSubmit}>
                      <textarea
                        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-slate-400"
                        name="notes"
                        onChange={handleLeadChange}
                        placeholder="Anything you'd like us to focus on if we contact you back?"
                        rows="4"
                        value={leadForm.notes}
                      />
                      <label className="flex items-center gap-3 text-slate-700">
                        <input checked={leadForm.contactBack} name="contactBack" onChange={handleLeadChange} type="checkbox" />
                        I would like to be contacted back for a follow-up discussion.
                      </label>
                      <div className="grid gap-3">
                        <button
                          className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70"
                          disabled={pdfEmailSubmitting}
                          onClick={handleSendPdfEmail}
                          type="button"
                        >
                          {pdfEmailSubmitting ? 'Sending PDF...' : 'Send PDF by email'}
                        </button>
                        <Link to="/contact" className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-50">
                          Contact
                        </Link>
                        <button
                          className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-50"
                          onClick={handleBookingOpen}
                          type="button"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Book a 30-minute call
                        </button>
                      </div>
                      {!bookingUrl && (
                        <p className="text-xs text-slate-500">
                          Booking calendar ready. Add your 30-minute scheduling link in <code>VITE_BOOKING_URL</code> to open the live calendar directly from this button.
                        </p>
                      )}
                      {pdfEmailSent && <p className="text-sm text-emerald-700">PDF sent successfully to {leadForm.email}.</p>}
                      {pdfEmailError && <p className="text-sm text-red-600">{pdfEmailError}</p>}
                      {leadSubmitted && <p className="text-sm text-emerald-700">Assessment details sent successfully. We&apos;ll receive your contact details by email.</p>}
                      {leadError && <p className="text-sm text-red-600">{leadError}</p>}
                    </form>
                  </div>
                </div>

                <div className="asm-actions" style={{ marginTop: '28px' }}>
                  <button className="btn btn-primary" onClick={handleDownloadPdf} type="button">
                    Download PDF summary
                  </button>
                  <button className="btn btn-outline" onClick={handleReset} type="button">
                    ↺ Restart
                  </button>
                </div>

                {allCategoriesGreen && (
                  <div className="mt-10 rounded-[24px] border border-emerald-200 bg-emerald-50 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-emerald-900">Congratulations</h3>
                    <p className="mt-3 text-emerald-800">
                      All categories are performing strongly. This is an excellent signal of workforce maturity. We would be pleased to stay in touch for future collaboration, executive advisory or continuous optimisation.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className={`toast ${toastMessage ? 'show' : ''}`}>
          <svg fill="none" height="16" stroke="#0E9E8C" strokeWidth="2.5" viewBox="0 0 24 24" width="16">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>{toastMessage}</span>
        </div>

        <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
          <DialogContent className="max-w-5xl border-slate-200 bg-white p-0 overflow-hidden">
            <DialogHeader className="border-b border-slate-200 px-6 py-5">
              <DialogTitle className="text-2xl text-slate-950">Book a 30-minute call</DialogTitle>
              <DialogDescription className="text-slate-600">
                Select a date and time directly in the calendar below. Once your booking service is connected, it will handle confirmations and notify you of availability automatically.
              </DialogDescription>
            </DialogHeader>
            <div className="h-[75vh] min-h-[560px] bg-slate-50">
              {bookingUrl ? (
                <iframe
                  className="h-full w-full"
                  src={bookingUrl}
                  title="VAMEFO booking calendar"
                />
              ) : (
                <div className="flex h-full items-center justify-center px-8 text-center text-slate-600">
                  Add <code className="mx-1 rounded bg-slate-200 px-2 py-1 text-slate-800">VITE_BOOKING_URL</code> to load your live booking calendar here.
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AssessmentSection;
