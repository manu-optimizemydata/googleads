# Production Troubleshooting Guide

## Common Issues and Solutions

### 1. Check if API endpoint is accessible

Test the endpoint directly:
```bash
curl -X POST https://www.ppcexpert.online/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","company":"Test","phone":"123"}'
```

**Expected**: JSON response with `success: true` or error message
**If 404**: Serverless function not deployed correctly
**If 500**: Check BREVO_API_KEY environment variable

---

### 2. Verify Environment Variable in Vercel

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Check that `BREVO_API_KEY` exists and is set for:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

**If missing**: Add it and redeploy

---

### 3. Check Vercel Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click on "Functions" tab
3. Click on `/api/contact` function
4. Check "Logs" for errors

**Common errors**:
- `BREVO_API_KEY is not set` → Add environment variable
- `Module not found` → Function file not in correct location
- `Syntax error` → Check function code

---

### 4. Verify File Structure

The `api/contact.js` file must be in the root `api/` folder:
```
googleads/
  ├── api/
  │   └── contact.js  ← Must be here
  ├── src/
  ├── vercel.json
  └── package.json
```

---

### 5. Check Browser Console

Open browser DevTools (F12) → Console tab
Submit the form and check for errors:

- **404 on `/api/contact`**: Function not deployed
- **CORS error**: Check CORS headers in function
- **Network error**: Check network tab for actual response

---

### 6. Verify vercel.json Configuration

Your `vercel.json` should have:
```json
{
  "rewrites": [
    {
      "source": "/api/contact",
      "destination": "/api/contact.js"
    }
  ]
}
```

---

### 7. Force Redeploy

Sometimes a redeploy fixes issues:

1. Vercel Dashboard → Your Project
2. Go to "Deployments" tab
3. Click "..." on latest deployment
4. Click "Redeploy"

Or via CLI:
```bash
vercel --prod --force
```

---

## Quick Diagnostic Checklist

- [ ] `BREVO_API_KEY` is set in Vercel environment variables
- [ ] `api/contact.js` file exists in repository
- [ ] Function appears in Vercel Functions tab
- [ ] No errors in Vercel function logs
- [ ] Domain is correctly configured in Vercel
- [ ] Latest code is deployed (check deployment timestamp)

---

## Still Not Working?

1. **Check Vercel Function Logs** (most important!)
2. **Test endpoint directly** with curl (see above)
3. **Share the error message** from browser console or Vercel logs

