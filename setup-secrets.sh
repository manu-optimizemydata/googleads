#!/bin/bash

echo "🔧 Setting up GitHub Secrets for Vercel Deployment"
echo ""
echo "I'll help you get the Vercel credentials and set them up."
echo ""

# Step 1: Get Vercel Token
echo "📝 Step 1: Get Vercel Token"
echo "1. Open: https://vercel.com/account/tokens"
echo "2. Click 'Create Token'"
echo "3. Name it: github-actions"
echo "4. Copy the token"
echo ""
read -p "Paste your VERCEL_TOKEN here: " VERCEL_TOKEN

if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Token is required. Exiting."
    exit 1
fi

# Step 2: Get Org ID and Project ID
echo ""
echo "📝 Step 2: Get Vercel Org ID and Project ID"
echo "1. Go to your Vercel project: https://vercel.com/dashboard"
echo "2. Click on your project (googleads)"
echo "3. Go to Settings → General"
echo "4. Scroll down to find Team ID and Project ID"
echo ""
read -p "Paste your VERCEL_ORG_ID (Team ID) here: " VERCEL_ORG_ID
read -p "Paste your VERCEL_PROJECT_ID here: " VERCEL_PROJECT_ID

if [ -z "$VERCEL_ORG_ID" ] || [ -z "$VERCEL_PROJECT_ID" ]; then
    echo "❌ Org ID and Project ID are required. Exiting."
    exit 1
fi

# Set the secrets
echo ""
echo "🔐 Setting GitHub secrets..."
echo ""

gh secret set VERCEL_TOKEN --repo manu-optimizemydata/googleads --body "$VERCEL_TOKEN" && echo "✅ VERCEL_TOKEN set"
gh secret set VERCEL_ORG_ID --repo manu-optimizemydata/googleads --body "$VERCEL_ORG_ID" && echo "✅ VERCEL_ORG_ID set"
gh secret set VERCEL_PROJECT_ID --repo manu-optimizemydata/googleads --body "$VERCEL_PROJECT_ID" && echo "✅ VERCEL_PROJECT_ID set"

echo ""
echo "✅ All secrets configured!"
echo ""
echo "You can verify at: https://github.com/manu-optimizemydata/googleads/settings/secrets/actions"





