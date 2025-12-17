# Production Deployment Guide

This guide covers deploying the contact form to production.

## Option 1: Vercel (Recommended - Easiest)

Vercel can host both frontend and backend on the same domain (`ppcexpert.online`).

### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

3. **Set Environment Variable**:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add `BREVO_API_KEY` with your Brevo API key value
   - Add `VITE_API_URL` (leave empty or set to your Vercel domain)

4. **Configure Domain**:
   - In Vercel dashboard, go to Settings → Domains
   - Add `ppcexpert.online` and `www.ppcexpert.online`

5. **Redeploy**:
   ```bash
   vercel --prod
   ```

The serverless function at `/api/contact.js` will handle form submissions automatically.

---

## Option 2: Render

Deploy the backend separately on Render.

### Steps:

1. **Push code to GitHub** (if not already done)

2. **Create New Web Service on Render**:
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Use these settings:
     - **Name**: `ppcexpert-backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `node server.js`
     - **Plan**: Free

3. **Add Environment Variables**:
   - `BREVO_API_KEY`: Your Brevo API key
   - `PORT`: `10000` (Render uses this port)
   - `NODE_ENV`: `production`

4. **Deploy Frontend**:
   - Build the frontend: `npm run build`
   - Deploy the `dist` folder to your hosting (Netlify, Vercel, etc.)
   - Set `VITE_API_URL` to your Render backend URL (e.g., `https://ppcexpert-backend.onrender.com`)

---

## Option 3: Railway

Similar to Render, deploy backend on Railway.

### Steps:

1. **Push code to GitHub**

2. **Create New Project on Railway**:
   - Go to https://railway.app
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Add Environment Variables**:
   - `BREVO_API_KEY`: Your Brevo API key
   - `PORT`: Railway will set this automatically

4. **Deploy Frontend**:
   - Build: `npm run build`
   - Deploy `dist` folder to your hosting
   - Set `VITE_API_URL` to your Railway backend URL

---

## Environment Variables

### Backend (Required):
- `BREVO_API_KEY`: Your Brevo API key for sending emails
- `PORT`: Port number (usually auto-set by hosting platform)
- `NODE_ENV`: Set to `production` in production

### Frontend (Optional):
- `VITE_API_URL`: Backend API URL (e.g., `https://api.ppcexpert.online`)
  - If empty, form will use same-origin (`/api/contact`)
  - Required if backend is on different domain

---

## Testing Production

After deployment, test the form:

```bash
curl -X POST https://www.ppcexpert.online/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Co",
    "phone": "+1234567890",
    "adSpend": "$300–$3k",
    "service": "Audit & plan",
    "notes": "Test submission"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you! We will contact you soon.",
  "messageId": "..."
}
```

---

## Troubleshooting

### 404 Error on `/api/contact`
- **Vercel**: Ensure `api/contact.js` exists and is committed
- **Other platforms**: Check that `VITE_API_URL` is set correctly in frontend build

### CORS Errors
- Backend CORS is configured for `ppcexpert.online` domains
- If using different domain, update `allowedOrigins` in `server.js`

### Email Not Sending
- Verify `BREVO_API_KEY` is set correctly in production environment
- Check server logs for Brevo API errors
- Ensure Brevo account is active and has sending credits

---

## Quick Deploy Commands

### Vercel:
```bash
vercel --prod
```

### Render:
Deploy via GitHub integration (automatic on push)

### Railway:
Deploy via GitHub integration (automatic on push)

