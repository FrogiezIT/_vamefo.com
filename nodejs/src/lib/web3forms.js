const WEB3FORMS_ACCESS_KEY = 'b563f556-ed54-4a6f-8181-45889a118e32';

export async function submitWeb3Form(payload) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...payload,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to submit form.');
  }

  return result;
}

