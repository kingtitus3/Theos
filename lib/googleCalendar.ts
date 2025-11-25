import { calendar_v3, google } from "googleapis";

const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim();
const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();

const hasCalendarConfig = Boolean(calendarId && oauthClientId && oauthClientSecret && oauthRefreshToken);

const oauth2Client = hasCalendarConfig
  ? new google.auth.OAuth2(oauthClientId, oauthClientSecret, "http://localhost")
  : null;

if (oauth2Client && oauthRefreshToken) {
  oauth2Client.setCredentials({ refresh_token: oauthRefreshToken });
}

const calendarClient = oauth2Client
  ? google.calendar({
      version: "v3",
      auth: oauth2Client,
    })
  : null;

function ensureConfigured() {
  if (!hasCalendarConfig || !calendarClient || !calendarId) {
    throw new Error("Google Calendar is not configured. Please set the required environment variables.");
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

