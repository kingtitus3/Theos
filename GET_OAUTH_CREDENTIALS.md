# How to Get Google OAuth Credentials

## Step 1: Go to Google Cloud Console

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)

## Step 2: Enable APIs

1. Go to **APIs & Services** → **Library**
2. Enable these APIs:
   - **Google Calendar API**
   - **Google Sheets API**

## Step 3: Create OAuth Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **OAuth client ID**
3. If prompted, configure the OAuth consent screen:
   - User Type: **External** (unless you have a Google Workspace)
   - App name: "Theos Event Booking"
   - User support email: your email
   - Developer contact: your email
   - Scopes: Add these:
     - `https://www.googleapis.com/auth/calendar`
     - `https://www.googleapis.com/auth/spreadsheets`
   - Save and continue through the rest
4. Back at **Create OAuth client ID**:
   - Application type: **Web application**
   - Name: "Theos OAuth Client"
   - Authorized redirect URIs: Add `http://localhost`
   - Click **Create**
5. **Copy the Client ID and Client Secret** (you'll only see the secret once!)

## Step 4: Add to .env.local

Add these lines to your `.env.local` file:

```bash
GOOGLE_OAUTH_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
GOOGLE_OAUTH_CLIENT_SECRET=your-client-secret-here
REDIRECT_URI=http://localhost
```

## Step 5: Run the Token Generator

```bash
node scripts/get-refresh-token.mjs
```

The script will:
1. Check that your credentials are loaded
2. Generate an authorization URL
3. Guide you through getting a refresh token

---

**Note:** If you already have OAuth credentials set up for Google Calendar, you can reuse the same Client ID and Secret - just make sure the redirect URI `http://localhost` is added to your OAuth client configuration.

