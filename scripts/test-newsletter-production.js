#!/usr/bin/env node

/**
 * Test Newsletter Signup on Production
 * 
 * This script tests the newsletter signup API endpoint on production
 */

const testEmail = `test-${Date.now()}@example.com`;
const productionUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : "https://theos-site-q7sfa2yoo-dougs-projects-0287d5de.vercel.app";

async function testNewsletter() {
  try {
    console.log(`📧 Testing newsletter signup on production...`);
    console.log(`   Email: ${testEmail}`);
    console.log(`   URL: ${productionUrl}/api/newsletter\n`);
    
    const response = await fetch(`${productionUrl}/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: testEmail,
      }),
    });

    const data = await response.json();

    console.log(`\n📊 Response:`);
    console.log(`   Status: ${response.status} ${response.statusText}`);
    console.log(`   Success: ${data.success}`);
    console.log(`   Discount Code: ${data.discountCode || 'N/A'}`);

    if (response.ok && data.success) {
      console.log(`\n✅ Newsletter signup successful!`);
      console.log(`\n📋 Next steps:`);
      console.log(`   1. Check your Google Sheet (Newsletter tab) for the entry`);
      console.log(`   2. Check ${testEmail} for the discount code email`);
      console.log(`   3. Check Vercel logs for Google Sheets confirmation`);
    } else {
      console.error(`\n❌ Newsletter signup failed!`);
      if (data.error) {
        console.error(`   Error: ${data.error}`);
      }
    }
  } catch (error) {
    console.error("❌ Error testing newsletter:", error.message);
  }
}

testNewsletter();

