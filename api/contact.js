// Vercel serverless function for contact form
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  if (!BREVO_API_KEY) {
    console.error('Error: BREVO_API_KEY environment variable is not set');
    console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('BREVO')));
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error: BREVO_API_KEY not set',
      error: 'Missing BREVO_API_KEY environment variable'
    });
  }

  const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

  try {
    console.log('Received form submission:', req.body);
    const { name, email, company, phone, adSpend, service, notes } = req.body;

    // Validate required fields
    if (!name || !email || !company || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Create email content
    const emailContent = `
      <h2>New Lead from Optimize My Data</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
      <p><strong>Monthly Ad Spend:</strong> ${adSpend || 'Not specified'}</p>
      <p><strong>Service Needed:</strong> ${service || 'Not specified'}</p>
      <p><strong>Notes:</strong> ${notes || 'None'}</p>
    `;

    // Send email via Brevo REST API
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Optimize My Data',
          email: 'noreply@optimizemydata.com'
        },
        to: [
          {
            email: 'manu@optimizemydata.com',
            name: 'Manu'
          }
        ],
        replyTo: {
          email: email,
          name: name
        },
        subject: 'New Lead: Optimize My Data Contact Form',
        htmlContent: emailContent,
        textContent: emailContent.replace(/<[^>]*>/g, '')
      })
    });

    let result;
    try {
      result = await response.json();
    } catch (jsonError) {
      const text = await response.text();
      console.error('Brevo API response (not JSON):', text);
      throw new Error('Invalid response from email service');
    }

    if (response.ok) {
      console.log('Email sent successfully:', result.messageId);
      return res.status(200).json({ 
        success: true, 
        message: 'Thank you! We will contact you soon.',
        messageId: result.messageId 
      });
    } else {
      console.error('Brevo API error:', result);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly.',
        error: result.message || result.error || 'Unknown error'
      });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error stack:', error.stack);
    console.error('Error message:', error.message);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

