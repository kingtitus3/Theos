# Service Account Setup Guide

## Why Service Accounts?

✅ **Fully CLI-based** - No browser needed  
✅ **Works on Vercel** - Just upload the key file  
✅ **No refresh tokens** - Keys don't expire  
✅ **More secure** - Scoped permissions  

## Quick Setup

### Step 1: Run the Setup Script

```bash
./scripts/setup-service-account.sh
```

This will:
- Create a service account
- Download the key file
- Show you the service account email

### Step 2: Share Your Calendar & Sheet

The script will show you the service account email (e.g., `theos-service-account@theos-bookings.iam.gserviceaccount.com`)

**Share your Google Calendar:**
1. Go to Google Calendar
2. Settings → Share with specific people
3. Add the service account email
4. Give "Make changes to events" permission

**Share your Google Sheet:**
1. Open your Google Sheet
2. Click "Share" (top right)
3. Add the service account email
4. Give "Editor" permission

### Step 3: Configure Environment Variables

**For local development (.env.local):**
```bash
GOOGLE_SERVICE_ACCOUNT_KEY_PATH=./theos-service-account-key.json
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
GOOGLE_SHEETS_ID=your-sheet-id
```

**For Vercel:**
1. Go to Vercel → Your Project → Settings → Environment Variables
2. Add:
   ```bash
   GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"...","private_key":"...","client_email":"..."}
   GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
   GOOGLE_SHEETS_ID=your-sheet-id
   ```
3. To get the JSON value:
   ```bash
   cat theos-service-account-key.json | jq -c
   ```
   Copy the entire output and paste it as the value

### Step 4: Test

The code automatically uses service accounts if the key is provided. No code changes needed!

## Authentication Priority

The code tries authentication methods in this order:
1. **Service Account** (if `GOOGLE_SERVICE_ACCOUNT_KEY_PATH` or `GOOGLE_SERVICE_ACCOUNT_KEY` is set)
2. **OAuth Refresh Token** (if OAuth credentials are set)
3. **Application Default Credentials** (gcloud auth - for local dev)

## Manual Setup (if script doesn't work)

```bash
# 1. Set project
gcloud config set project theos-bookings

# 2. Create service account
gcloud iam service-accounts create theos-service-account \
  --display-name="Theos Service Account" \
  --description="Service account for Theos calendar and sheets access"

# 3. Get the email
SERVICE_ACCOUNT_EMAIL="theos-service-account@theos-bookings.iam.gserviceaccount.com"

# 4. Create key
gcloud iam service-accounts keys create theos-service-account-key.json \
  --iam-account=$SERVICE_ACCOUNT_EMAIL

# 5. Share calendar and sheet with: $SERVICE_ACCOUNT_EMAIL
```

## Security Notes

- ✅ The key file is in `.gitignore` (won't be committed)
- ✅ For Vercel, use environment variable (not file upload)
- ✅ Service accounts have scoped permissions (more secure than OAuth)
- ⚠️ Keep the key file secure - treat it like a password

## Troubleshooting

**"Permission denied" errors:**
- Make sure you shared the calendar/sheet with the service account email
- Check that permissions are "Editor" or "Make changes to events"

**"Invalid key" errors:**
- Verify the JSON is valid
- For Vercel, make sure you pasted the entire JSON (use `jq -c` to compress it)

**Key file not found:**
- Check the path in `GOOGLE_SERVICE_ACCOUNT_KEY_PATH`
- Make sure the file exists in your project root

---

**That's it!** Service accounts are now your primary authentication method. 🎉

