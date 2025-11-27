#!/bin/bash

# Script to set up Google Calendar service account using gcloud CLI
# Run this after installing gcloud CLI and authenticating

echo "Setting up Google Calendar service account..."

# Set your project ID (replace with your actual project ID)
PROJECT_ID="your-project-id"
SERVICE_ACCOUNT_NAME="theos-calendar-bot"
SERVICE_ACCOUNT_EMAIL="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

# 1. Set the project
gcloud config set project $PROJECT_ID

# 2. Create service account
echo "Creating service account..."
gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
  --display-name="Theos Calendar Bot" \
  --description="Service account for Theos event venue calendar bookings"

# 3. Grant calendar access (you'll need to do this manually in Google Calendar)
echo ""
echo "IMPORTANT: Share your calendar with this email:"
echo "$SERVICE_ACCOUNT_EMAIL"
echo ""
echo "To share:"
echo "1. Go to Google Calendar"
echo "2. Settings → Share with specific people"
echo "3. Add: $SERVICE_ACCOUNT_EMAIL"
echo "4. Give 'Make changes to events' permission"
echo ""

# 4. Create and download key
echo "Creating service account key..."
gcloud iam service-accounts keys create theos-calendar-key.json \
  --iam-account=$SERVICE_ACCOUNT_EMAIL

echo ""
echo "✅ Service account created!"
echo ""
echo "Add these to your .env.local:"
echo "GOOGLE_CALENDAR_ID=bookings@theosgalveston.com"
echo "GOOGLE_SERVICE_ACCOUNT_EMAIL=$SERVICE_ACCOUNT_EMAIL"
echo "GOOGLE_SERVICE_ACCOUNT_KEY=$(cat theos-calendar-key.json | jq -c)"
echo ""
echo "⚠️  Keep theos-calendar-key.json secure and add it to .gitignore"

