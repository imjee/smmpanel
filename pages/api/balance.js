import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { SMM_PANEL_API_KEY, SMM_PANEL_API_URL } = process.env;

  try {
    const response = await fetch(SMM_PANEL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        key: SMM_PANEL_API_KEY,
        action: 'balance',
      }),
    });

    const balanceData = await response.json();

    if (response.ok) {
      res.status(200).json(balanceData);
    } else {
      res.status(response.status).json({ error: balanceData.error || 'Failed to fetch balance.' });
    }
  } catch (error) {
    console.error('Error fetching balance:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
