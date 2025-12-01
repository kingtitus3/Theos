#!/bin/bash

# Setup Google Service Account for Theos Calendar and Sheets
# Run this script to create a service account and download the key

set -e

PROJECT_ID="theos-bookings"
SERVICE_ACCOUNT_NAME="theos-service-account"
SERVICE_ACCOUNT_EMAIL="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

echo "🔧 Setting up Google Service Account for Theos..."
echo ""

# 1. Set the project
echo "📋 Setting project to: $PROJECT_ID"
gcloud config set project $PROJECT_ID

# 2. Create service account (if it doesn't exist)
echo ""
echo "👤 Creating service account..."
if gcloud iam service-accounts describe $SERVICE_ACCOUNT_EMAIL &>/dev/null; then
  echo "✅ Service account already exists: $SERVICE_ACCOUNT_EMAIL"
else
  gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
    --display-name="Theos Service Account" \
    --description="Service account for Theos calendar and sheets access"
  echo "✅ Service account created: $SERVICE_ACCOUNT_EMAIL"
fi

# 3. Create and download key
echo ""
echo "🔑 Creating service account key..."
KEY_FILE="theos-service-account-key.json"
gcloud iam service-accounts keys create $KEY_FILE \
  --iam-account=$SERVICE_ACCOUNT_EMAIL

echo ""
echo "✅ Service account key created: $KEY_FILE"
echo ""

# 4. Display instructions
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 NEXT STEPS:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Share your Google Calendar with this email:"
echo "   📧 $SERVICE_ACCOUNT_EMAIL"
echo ""
echo "   To share:"
echo "   • Go to Google Calendar"
echo "   • Settings → Share with specific people"
echo "   • Add: $SERVICE_ACCOUNT_EMAIL"
echo "   • Give 'Make changes to events' permission"
echo ""
echo "2. Share your Google Sheet with this email:"
echo "   📧 $SERVICE_ACCOUNT_EMAIL"
echo ""
echo "   To share:"
echo "   • Open your Google Sheet"
echo "   • Click 'Share' (top right)"
echo "   • Add: $SERVICE_ACCOUNT_EMAIL"
echo "   • Give 'Editor' permission"
echo ""
echo "3. Add to .env.local:"
echo "   GOOGLE_SERVICE_ACCOUNT_KEY_PATH=./theos-service-account-key.json"
echo ""
echo "4. For Vercel, add the key file content as environment variable:"
echo "   GOOGLE_SERVICE_ACCOUNT_KEY=$(cat $KEY_FILE | jq -c)"
echo ""
echo "   Or upload the key file to Vercel and reference it."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
