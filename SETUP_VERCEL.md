# Automated Vercel Deployment Setup

## One-Time Setup (5 minutes)

### Step 1: Get Vercel Credentials

1. **Go to Vercel Dashboard**: https://vercel.com/account/tokens
2. **Create a new token**: 
   - Name it: `github-actions`
   - Copy the token (you'll need it in Step 3)

### Step 2: Create Project on Vercel (First Time Only)

1. Go to: https://vercel.com/new
2. Import your GitHub repo: `manu-optimizemydata/googleads`
3. **Don't deploy yet** - just create the project
4. After project is created, go to **Settings → General**
5. Copy:
   - **Project ID** (you'll need this)
   - **Team/Org ID** (from the URL or settings)

### Step 3: Add GitHub Secrets

1. Go to your GitHub repo: https://github.com/manu-optimizemydata/googleads
2. Click **Settings → Secrets and variables → Actions**
3. Add these secrets:

   - `VERCEL_TOKEN` = Your Vercel token from Step 1
   - `VERCEL_ORG_ID` = Your Vercel org/team ID from Step 2
   - `VERCEL_PROJECT_ID` = Your Vercel project ID from Step 2
   - `BREVO_API_KEY` = `your_brevo_api_key_here`

### Step 4: Add Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. **Settings → Environment Variables**
3. Add: `BREVO_API_KEY` = `your_brevo_api_key_here`
4. Select all environments (Production, Preview, Development)

### Step 5: Add Domain

1. In Vercel project: **Settings → Domains**
2. Add: `ppcexpert.online` and `www.ppcexpert.online`
3. Update DNS records as instructed

## After Setup

Once you push to GitHub, it will **automatically deploy** to Vercel!

The GitHub Actions workflow will:
- Build your frontend
- Deploy to Vercel production
- Use the serverless function at `/api/contact.js`

---

## Alternative: Quick Manual Deploy

If you prefer to deploy manually right now:

1. Go to: https://vercel.com/new
2. Import: `manu-optimizemydata/googleads`
3. Add env var: `BREVO_API_KEY`
4. Click Deploy
5. Add domain: `ppcexpert.online`

