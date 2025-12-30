# Setup GitHub Secrets for Vercel Deployment

## Step 1: Get Vercel Credentials

### Get Vercel Token:
1. Go to: https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it: `github-actions`
4. Copy the token (you'll need it)

### Get Vercel Org ID and Project ID:
1. Go to: https://vercel.com/your-project-name/settings/general
2. Scroll down to find:
   - **Team ID** (this is your Org ID)
   - **Project ID**
3. Copy both

## Step 2: Set GitHub Secrets

Go to: https://github.com/manu-optimizemydata/googleads/settings/secrets/actions

Click "New repository secret" and add these 4 secrets:

1. **VERCEL_TOKEN**
   - Value: Your Vercel token from Step 1

2. **VERCEL_ORG_ID**
   - Value: Your Team/Org ID from Step 2

3. **VERCEL_PROJECT_ID**
   - Value: Your Project ID from Step 2

4. **VITE_API_URL** (optional)
   - Value: Leave empty or set to your Vercel domain (e.g., `https://your-project.vercel.app`)

## Quick Command (if you have the values):

```bash
gh secret set VERCEL_TOKEN --repo manu-optimizemydata/googleads
gh secret set VERCEL_ORG_ID --repo manu-optimizemydata/googleads
gh secret set VERCEL_PROJECT_ID --repo manu-optimizemydata/googleads
```





