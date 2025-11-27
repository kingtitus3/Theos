#!/usr/bin/env node

/**
 * Social Media Posting Script for Theos
 * 
 * Usage:
 *   node scripts/social-post.js "Your post text here" --image path/to/image.jpg
 * 
 * Platforms: Instagram, Facebook
 * 
 * Setup:
 *   1. Install dependencies: npm install axios form-data
 *   2. Set up Facebook/Instagram API credentials
 *   3. Add to .env.local:
 *      - FACEBOOK_PAGE_ACCESS_TOKEN
 *      - INSTAGRAM_BUSINESS_ACCOUNT_ID
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const axios = require('axios');
const FormData = require('form-data');

const POST_TEXT = process.argv[2];
const IMAGE_PATH = process.argv.includes('--image') 
  ? process.argv[process.argv.indexOf('--image') + 1]
  : null;

if (!POST_TEXT) {
  console.error('Error: Post text is required');
  console.log('Usage: node scripts/social-post.js "Your post text" [--image path/to/image.jpg]');
  process.exit(1);
}

async function postToFacebook() {
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  if (!token) {
    console.warn('⚠️  Facebook token not found. Skipping Facebook post.');
    return;
  }

  try {
    const pageId = process.env.FACEBOOK_PAGE_ID || '61584310322904';
    
    if (IMAGE_PATH) {
      // Post with image
      const form = new FormData();
      form.append('message', POST_TEXT);
      form.append('access_token', token);
      
      // Upload image first
      const imageStream = fs.createReadStream(IMAGE_PATH);
      form.append('source', imageStream);
      
      const response = await axios.post(
        `https://graph.facebook.com/v18.0/${pageId}/photos`,
        form,
        { headers: form.getHeaders() }
      );
      
      console.log('✅ Posted to Facebook with image:', response.data.id);
    } else {
      // Text-only post
      const response = await axios.post(
        `https://graph.facebook.com/v18.0/${pageId}/feed`,
        {
          message: POST_TEXT,
          access_token: token,
        }
      );
      
      console.log('✅ Posted to Facebook:', response.data.id);
    }
  } catch (error) {
    console.error('❌ Facebook post failed:', error.response?.data || error.message);
  }
}

async function postToInstagram() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
  
  if (!token || !accountId) {
    console.warn('⚠️  Instagram credentials not found. Skipping Instagram post.');
    return;
  }

  try {
    if (!IMAGE_PATH) {
      console.warn('⚠️  Instagram requires an image. Skipping Instagram post.');
      return;
    }

    // Step 1: Upload image
    const form = new FormData();
    form.append('image_url', fs.createReadStream(IMAGE_PATH));
    form.append('caption', POST_TEXT);
    form.append('access_token', token);

    const uploadResponse = await axios.post(
      `https://graph.facebook.com/v18.0/${accountId}/media`,
      form,
      { headers: form.getHeaders() }
    );

    const creationId = uploadResponse.data.id;

    // Step 2: Publish the post
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds

    const publishResponse = await axios.post(
      `https://graph.facebook.com/v18.0/${accountId}/media_publish`,
      {
        creation_id: creationId,
        access_token: token,
      }
    );

    console.log('✅ Posted to Instagram:', publishResponse.data.id);
  } catch (error) {
    console.error('❌ Instagram post failed:', error.response?.data || error.message);
  }
}

async function main() {
  console.log('🚀 Posting to social media...\n');
  console.log('Post text:', POST_TEXT);
  if (IMAGE_PATH) console.log('Image:', IMAGE_PATH);
  console.log('');

  await Promise.all([
    postToFacebook(),
    postToInstagram(),
  ]);

  console.log('\n✨ Done!');
}

main().catch(console.error);

