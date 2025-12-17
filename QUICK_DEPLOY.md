# Quick Deploy Instructions

## Deploy to Vercel (Recommended - 5 minutes)

1. **Go to Vercel**: https://vercel.com/new
2. **Sign in** with GitHub
3. **Import Repository**: 
   - Select `manu-optimizemydata/googleads`
   - Click "Import"
4. **Configure Project**:
   - Framework Preset: Vite (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
5. **Add Environment Variable**:
   - Click "Environment Variables"
   - Add: `BREVO_API_KEY` = `your_brevo_api_key_here`
6. **Deploy**: Click "Deploy"
7. **Add Domain** (after first deploy):
   - Go to Project Settings → Domains
   - Add: `ppcexpert.online` and `www.ppcexpert.online`
   - Update your DNS records as instructed

That's it! The form will work at `https://www.ppcexpert.online`

