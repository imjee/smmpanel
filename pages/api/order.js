import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { SMM_PANEL_API_KEY, SMM_PANEL_API_URL } = process.env;
  const { service, link, quantity } = req.body;

  if (!service || !link || !quantity) {
    return res.status(400).json({ error: 'Missing required parameters.' });
  }

  try {
    const response = await fetch(SMM_PANEL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        key: SMM_PANEL_API_KEY,
        action: 'add',
        service: service,
        link: link,
        quantity: quantity,
      }),
    });

    const result = await response.json();

    if (result.order) {
      res.status(200).json({ message: 'Order submitted successfully!', orderId: result.order });
    } else {
      res.status(400).json({ error: result.error || 'Failed to create order.' });
    }
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
