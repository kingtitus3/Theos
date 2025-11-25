import { google } from "googleapis";

const calendarIdEnv = process.env.GOOGLE_CALENDAR_ID;
const clientEmail = process.env.GOOGLE_CALENDAR_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_CALENDAR_PRIVATE_KEY;

if (!calendarIdEnv || !clientEmail || !privateKey) {
  throw new Error("Missing Google Calendar environment variables");
}

const calendarId = calendarIdEnv as string;

const auth = new google.auth.JWT({
  email: clientEmail,
  key: privateKey.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

export async function getAvailability(startISO: string, endISO: string) {
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

