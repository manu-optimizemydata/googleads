import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load default .env and fall back to .env.local if present
dotenv.config();
dotenv.config({ path: '.env.local', override: false });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const BREVO_API_KEY = process.env.BREVO_API_KEY;
if (!BREVO_API_KEY) {
  console.error('Error: BREVO_API_KEY environment variable is not set');
  process.exit(1);
}
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received form submission:', req.body);
    const { name, email, company, phone, adSpend, service, notes } = req.body;

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
      res.status(200).json({ 
        success: true, 
        message: 'Thank you! We will contact you soon.',
        messageId: result.messageId 
      });
    } else {
      console.error('Brevo API error:', result);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly.',
        error: result.message || result.error || 'Unknown error'
      });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again or contact us directly.' 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Brevo API configured for: manu@optimizemydata.com`);
});

