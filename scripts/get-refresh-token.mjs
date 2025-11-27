import readline from 'node:readline';
import { google } from 'googleapis';

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID || '';
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET || '';
// Try multiple redirect URIs - use the one configured in Google Cloud Console
const redirectUri = process.env.REDIRECT_URI || 'http://localhost';

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/calendar'],
  prompt: 'consent',
});

console.log('Open this URL in your browser:\n', authUrl);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('\nPaste the "code" query parameter from the redirect URL: ', async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code.trim());
    console.log('\nRefresh token:', tokens.refresh_token);
  } catch (error) {
    console.error('Error exchanging code:', error);
  } finally {
    rl.close();
  }
});
