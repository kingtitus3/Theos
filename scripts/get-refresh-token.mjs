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

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim() || '';
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim() || '';
// Try multiple redirect URIs - use the one configured in Google Cloud Console
const redirectUri = process.env.REDIRECT_URI?.trim() || 'http://localhost';

console.log('\n🔍 Checking environment variables...');
console.log(`   GOOGLE_OAUTH_CLIENT_ID: ${clientId ? `✅ Set (${clientId.substring(0, 20)}...)` : '❌ Missing'}`);
console.log(`   GOOGLE_OAUTH_CLIENT_SECRET: ${clientSecret ? '✅ Set' : '❌ Missing'}`);
console.log(`   REDIRECT_URI: ${redirectUri}\n`);

if (!clientId || !clientSecret) {
  console.error('❌ Missing required environment variables!');
  console.error('\nPlease add these to your .env.local file:');
  console.error('   GOOGLE_OAUTH_CLIENT_ID=your-client-id');
  console.error('   GOOGLE_OAUTH_CLIENT_SECRET=your-client-secret');
  console.error('   REDIRECT_URI=http://localhost (optional)');
  console.error('\nMake sure .env.local is in the project root directory.');
  process.exit(1);
}

try {
  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
    prompt: 'consent',
  });

  console.log('✅ OAuth URL generated successfully!');
  console.log('\n📋 Open this URL in your browser:\n');
  console.log(authUrl);
  console.log('\n');
} catch (error) {
  console.error('❌ Failed to generate OAuth URL:', error.message);
  process.exit(1);
}

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
