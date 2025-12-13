# Setup Instructions

## Brevo API Integration

The form is configured to send leads to `manu@optimizemydata.com` via Brevo API.

### Environment Variables

Create a `.env` file in the root directory with:

```
BREVO_API_KEY=your_brevo_api_key_here
PORT=3001
```

**Important:** Never commit your `.env` file to git. The API key must be set as an environment variable for security.

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

1. Start the backend server:
```bash
npm run server
```

2. In a separate terminal, start the frontend:
```bash
npm run dev
```

Or run both simultaneously:
```bash
npm run dev:all
```

### API Endpoint

The backend server runs on `http://localhost:3001` and exposes:
- `POST /api/contact` - Handles form submissions and sends emails via Brevo

### Email Configuration

All form submissions are sent to: **manu@optimizemydata.com**

The email includes:
- Name
- Email
- Company
- Phone/WhatsApp
- Monthly ad spend
- Service needed
- Notes

