import { calendar_v3, google } from "googleapis";
import { readFileSync } from "fs";

const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
const serviceAccountKeyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH?.trim();
const serviceAccountKeyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.trim();
const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();

// Authentication priority: Service Account > OAuth > Application Default Credentials
let auth: any = null;

// 1. Try Service Account first (works on Vercel and locally)
if (serviceAccountKeyPath || serviceAccountKeyJson) {
  try {
    let keyData: any;
    if (serviceAccountKeyJson) {
      keyData = typeof serviceAccountKeyJson === 'string' ? JSON.parse(serviceAccountKeyJson) : serviceAccountKeyJson;
    } else if (serviceAccountKeyPath) {
      keyData = JSON.parse(readFileSync(serviceAccountKeyPath, 'utf8'));
    }
    
    auth = new google.auth.GoogleAuth({
      credentials: keyData,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });
    console.log("✅ Using Service Account for Google Calendar authentication");
  } catch (error: any) {
    console.warn("⚠️ Service Account setup failed, trying OAuth:", error.message);
  }
}

// 2. Try OAuth2 with refresh token (works on Vercel)
if (!auth && oauthClientId && oauthClientSecret && oauthRefreshToken) {
  try {
    const oauth2Client = new google.auth.OAuth2(oauthClientId, oauthClientSecret, "http://localhost");
    oauth2Client.setCredentials({ refresh_token: oauthRefreshToken });
    auth = oauth2Client;
    console.log("✅ Using OAuth2 for Google Calendar authentication");
  } catch (error: any) {
    console.warn("⚠️ OAuth2 setup failed, falling back to Application Default Credentials:", error.message);
  }
}

// 3. Fall back to Application Default Credentials (works with gcloud auth application-default login)
if (!auth) {
  auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  console.log("✅ Using Application Default Credentials for Google Calendar authentication");
}

const calendarClient = calendarId && auth
  ? google.calendar({
      version: "v3",
      auth: auth,
    })
  : null;

function ensureConfigured() {
  if (!calendarClient || !calendarId) {
    throw new Error("Google Calendar is not configured. Please set GOOGLE_CALENDAR_ID and either service account key, OAuth credentials, or use 'gcloud auth application-default login'.");
  }
}

function getCalendarClient(): calendar_v3.Calendar {
  ensureConfigured();
  return calendarClient!;
}

function getCalendarId(): string {
  ensureConfigured();
  return calendarId!;
}

export async function getAvailability(startISO: string, endISO: string) {
  const calendar = getCalendarClient();
  const id = getCalendarId();

  const res = await calendar.freebusy.query({
    requestBody: {
      timeMin: startISO,
      timeMax: endISO,
      timeZone: "America/Chicago",
      items: [{ id: calendarId }],
    },
  });

  const busy = res.data.calendars?.[id]?.busy ?? [];
  return busy.length === 0;
}

interface CreateEventOptions {
  startISO: string;
  endISO: string;
  summary: string;
  description?: string;
}

export async function createCalendarEvent({
  startISO,
  endISO,
  summary,
  description,
}: CreateEventOptions) {
  const calendar = getCalendarClient();

  await calendar.events.insert({
    calendarId: getCalendarId(),
    requestBody: {
      summary,
      description,
      start: { dateTime: startISO, timeZone: "America/Chicago" },
      end: { dateTime: endISO, timeZone: "America/Chicago" },
    },
  });

  return { success: true };
}

