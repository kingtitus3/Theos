import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env.local') });

// Import calendar functions
const { getAvailability, createCalendarEvent } = await import('../lib/googleCalendar.ts');

async function testBooking() {
  console.log('🧪 Testing Booking Functionality...\n');

  try {
    // Test 1: Check availability
    console.log('1️⃣ Testing availability check...');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 7); // 7 days from now
    tomorrow.setHours(10, 0, 0, 0);
    const endTime = new Date(tomorrow.getTime() + 8 * 60 * 60 * 1000); // 8 hours later

    const available = await getAvailability(tomorrow.toISOString(), endTime.toISOString());
    console.log(`   ✅ Availability check successful!`);
    console.log(`   📅 Date: ${tomorrow.toLocaleDateString()}`);
    console.log(`   ⏰ Time: 10:00 AM - 6:00 PM`);
    console.log(`   ${available ? '✅ Available' : '❌ Not Available'}\n`);

    // Test 2: Create a test event (tour)
    console.log('2️⃣ Testing tour booking...');
    const testDate = new Date();
    testDate.setDate(testDate.getDate() + 14); // 14 days from now
    testDate.setHours(14, 0, 0, 0);
    const tourEnd = new Date(testDate.getTime() + 60 * 60 * 1000); // 1 hour

    await createCalendarEvent({
      startISO: testDate.toISOString(),
      endISO: tourEnd.toISOString(),
      summary: 'Test Tour – Automated Test',
      description: 'This is an automated test event. You can delete this from Google Calendar.',
    });
    console.log(`   ✅ Tour booking successful!`);
    console.log(`   📅 Date: ${testDate.toLocaleDateString()}`);
    console.log(`   ⏰ Time: ${testDate.toLocaleTimeString()} - ${tourEnd.toLocaleTimeString()}`);
    console.log(`   📝 Event: Test Tour – Automated Test`);
    console.log(`   ⚠️  Please delete this test event from Google Calendar\n`);

    // Test 3: Create a test event (full event)
    console.log('3️⃣ Testing event booking...');
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 21); // 21 days from now
    eventDate.setHours(12, 0, 0, 0);
    const eventEnd = new Date(eventDate.getTime() + 6 * 60 * 60 * 1000); // 6 hours

    await createCalendarEvent({
      startISO: eventDate.toISOString(),
      endISO: eventEnd.toISOString(),
      summary: 'Test Event – Automated Test',
      description: 'This is an automated test event. You can delete this from Google Calendar.\nEvent Type: Test\nHours: 6',
    });
    console.log(`   ✅ Event booking successful!`);
    console.log(`   📅 Date: ${eventDate.toLocaleDateString()}`);
    console.log(`   ⏰ Time: ${eventDate.toLocaleTimeString()} - ${eventEnd.toLocaleTimeString()}`);
    console.log(`   📝 Event: Test Event – Automated Test`);
    console.log(`   ⚠️  Please delete this test event from Google Calendar\n`);

    console.log('✅ All booking tests passed!');
    console.log('\n📋 Summary:');
    console.log('   - Availability check: ✅ Working');
    console.log('   - Tour booking: ✅ Working');
    console.log('   - Event booking: ✅ Working');
    console.log('\n⚠️  Remember to delete the test events from Google Calendar!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
}

testBooking();

