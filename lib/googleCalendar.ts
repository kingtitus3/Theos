import { calendar_v3, google } from "googleapis";

const calendarId = process.env.GOOGLE_CALENDAR_ID;
const clientEmail = process.env.GOOGLE_CALENDAR_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_CALENDAR_PRIVATE_KEY;

const hasCalendarConfig = Boolean(calendarId && clientEmail && privateKey);

const calendarClient = hasCalendarConfig
  ? google.calendar({
      version: "v3",
      auth: new google.auth.JWT({
        email: clientEmail!,
        key: privateKey!.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/calendar"],
      }),
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

export async function getAvailability(startISO: string, endISO: string) {
  const calendar = getCalendarClient();

  const res = await calendar.freebusy.query({
    requestBody: {
      timeMin: startISO,
      timeMax: endISO,
      timeZone: "America/Chicago",
      items: [{ id: calendarId }],
    },
  });

  const busy = res.data.calendars?.[calendarId]?.busy ?? [];
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
    calendarId,
    requestBody: {
      summary,
      description,
      start: { dateTime: startISO, timeZone: "America/Chicago" },
      end: { dateTime: endISO, timeZone: "America/Chicago" },
    },
  });

  return { success: true };
}

