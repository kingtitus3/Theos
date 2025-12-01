# Fix "Error 403: org_internal"

## Problem
Your OAuth client is configured for "Internal" users only (Google Workspace organization), but you're trying to sign in with a personal Google account.

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
- **App name:** Theos Event Booking (or any name)
- **User support email:** Your email (titus.edwards7@gmail.com)
- **App logo:** (optional)
- **App domain:** (optional, can leave blank)
- **Developer contact information:** Your email
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
   - Add: `titus.edwards7@gmail.com`
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
4. Create OAuth client with:
   - Type: **Web application**
   - Name: "Theos OAuth Client"
   - Authorized redirect URIs: `http://localhost`
5. Update your `.env.local` with the new Client ID and Secret

---

## Note
If your organization requires Internal-only apps, you may need to:
- Use a Google Workspace account that's part of the organization
- Or get admin approval to make the app External

