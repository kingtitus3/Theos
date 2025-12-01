import readline from 'node:readline';
import { google } from 'googleapis';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

// Load .env.local from project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '../.env.local');

if (existsSync(envPath)) {
  config({ path: envPath });
  console.log('✅ Loaded .env.local');
} else {
  console.warn('⚠️ .env.local not found, using system environment variables');
}

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID || '';
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET || '';
// Try multiple redirect URIs - use the one configured in Google Cloud Console
const redirectUri = process.env.REDIRECT_URI || 'http://localhost';

if (!clientId || !clientSecret) {
  console.error('❌ Missing required environment variables:');
  console.error(`   GOOGLE_OAUTH_CLIENT_ID: ${clientId ? '✅' : '❌ Missing'}`);
  console.error(`   GOOGLE_OAUTH_CLIENT_SECRET: ${clientSecret ? '✅' : '❌ Missing'}`);
  console.error('\nPlease set these in your .env.local file');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/spreadsheets',
  ],
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
