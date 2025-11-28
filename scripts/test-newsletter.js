#!/usr/bin/env node

/**
 * Test Newsletter Signup
 * 
 * This script tests the newsletter signup API endpoint
 */

const testEmail = `test-${Date.now()}@example.com`;

async function testNewsletter() {
  try {
    console.log(`📧 Testing newsletter signup with email: ${testEmail}`);
    
    const response = await fetch("http://localhost:3000/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: testEmail,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ Newsletter signup successful!");
      console.log("Response:", JSON.stringify(data, null, 2));
      console.log(`\n📊 Check your Google Sheet to see if the entry was added.`);
      console.log(`📧 Check ${testEmail} for the discount code email.`);
    } else {
      console.error("❌ Newsletter signup failed!");
      console.error("Status:", response.status);
      console.error("Response:", JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error("❌ Error testing newsletter:", error.message);
    console.error("\n💡 Make sure your Next.js dev server is running:");
    console.error("   npm run dev");
  }
}

testNewsletter();

