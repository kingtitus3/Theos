# Fix "Error 403: org_internal"

## Problem
Your OAuth client is configured for "Internal" users only (Google Workspace organization). If you're using `bookings@theosgalveston.com`, you have two options:

1. **Keep it Internal** - If the OAuth client is in the same Google Workspace organization as `bookings@theosgalveston.com`, it should work. Make sure `bookings@theosgalveston.com` is added as a test user.

2. **Change to External** - If you want to allow personal Google accounts or accounts from other organizations, change it to External.

## Solution: Change OAuth Consent Screen to External

### Step 1: Go to OAuth Consent Screen
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to **APIs & Services** → **OAuth consent screen**

### Step 2: Change User Type
1. At the top, you'll see **User Type: Internal**
2. Click **EDIT APP** (or the pencil icon)
3. Change **User Type** from **Internal** to **External**
4. Click **SAVE AND CONTINUE**

### Step 3: Configure App Information
Fill in the required fields:
- **App name:** theobookingapp
- **User support email:** bookings@theosgalveston.com
- **App logo:** (optional)
- **App domain:** (optional, can leave blank)
- **Developer contact information:** bookings@theosgalveston.com
- Click **SAVE AND CONTINUE**

### Step 4: Add Scopes
1. Click **ADD OR REMOVE SCOPES**
2. Add these scopes:
   - `https://www.googleapis.com/auth/calendar`
   - `https://www.googleapis.com/auth/spreadsheets`
3. Click **UPDATE** then **SAVE AND CONTINUE**

### Step 5: Add Test Users (if app is in Testing mode)
1. If the app is in "Testing" mode, add test users:
   - Click **+ ADD USERS**
   - Add: `bookings@theosgalveston.com`
   - Click **ADD**
2. Click **SAVE AND CONTINUE**

### Step 6: Summary
Review and click **BACK TO DASHBOARD**

### Step 7: Try Again
Run the script again:
```bash
node scripts/get-refresh-token.mjs
```

---

## Alternative: Create New OAuth Client

If you can't change the existing client to External, create a new one:

1. Go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **OAuth client ID**
3. Configure OAuth consent screen (set to **External**)
   - App name: **theobookingapp**
4. Create OAuth client with:
   - Type: **Web application**
   - Name: "theobookingapp OAuth Client"
   - Authorized redirect URIs: `http://localhost`
5. Update your `.env.local` with the new Client ID and Secret

---

## Note
If your organization requires Internal-only apps, you may need to:
- Use a Google Workspace account that's part of the organization
- Or get admin approval to make the app External

