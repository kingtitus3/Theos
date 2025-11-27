import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env.local') });

// Import after loading env vars
const { getAvailability } = await import('../lib/googleCalendar.ts');

async function test() {
  try {
    console.log('Testing Google Calendar connection...\n');
    
    // Test availability check
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);
    const endTime = new Date(tomorrow.getTime() + 8 * 60 * 60 * 1000);
    
    console.log('Checking availability for tomorrow 10am-6pm...');
    const available = await getAvailability(tomorrow.toISOString(), endTime.toISOString());
    console.log(`✅ Availability check successful! Available: ${available}\n`);
    
    console.log('✅ Google Calendar is configured and working!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

test();

