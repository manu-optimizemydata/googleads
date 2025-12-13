# Brevo IP Authorization Setup

## Your IP Address
**Public IP:** `106.196.21.209`

## Steps to Authorize IP in Brevo

1. **Log in to Brevo:**
   - Go to: https://app.brevo.com/
   - Log in with your Brevo account

2. **Navigate to Security Settings:**
   - Click on your profile/account settings
   - Go to: **Security** → **Authorized IPs**
   - Or directly visit: https://app.brevo.com/security/authorised_ips

3. **Add Your IP Address:**
   - Click "Add IP Address" or "Authorize IP"
   - Enter: `106.196.21.209`
   - Save/Confirm

4. **Alternative: Disable IP Restrictions (Development Only):**
   - In Security settings, you can temporarily disable IP restrictions
   - **Note:** This is less secure, only for development/testing
   - Re-enable restrictions for production

## Testing After Authorization

Once you've authorized the IP, test the integration:

```bash
# Test the API endpoint
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "company":"Test Company",
    "phone":"+1234567890",
    "adSpend":"$3k–$10k",
    "service":"Audit & plan",
    "notes":"Test submission"
  }'
```

Or test via the web form at: http://localhost:5173

## Production Deployment

If you deploy to a server (Vercel, Netlify, etc.), you'll need to:
1. Get the server's IP address
2. Add it to Brevo's authorized IPs
3. Or use environment variables for the API key

## Email Destination
All form submissions will be sent to: **manu@optimizemydata.com**

