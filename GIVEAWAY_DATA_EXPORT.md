# Giveaway Data Export Options

## Current State
Right now, giveaway entries are **only sent via email**:
- Confirmation email to entrant
- Notification email to you (`bookings@theosgalveston.com`)

**No database storage or export exists yet.**

---

## Export Options

### Option 1: Google Sheets (Recommended)
**Pros:**
- Easy to view/share
- Can sort/filter entries
- Free
- Can export to CSV anytime

**Setup:**
1. Create a Google Sheet
2. Add headers: Name, Email, Phone, Partner, Date, Instagram, TikTok, How They Heard, Timestamp
3. Get Google Sheets API credentials
4. Auto-append each entry as a new row

**Implementation:** ~30 minutes

---

### Option 2: CSV File Download
**Pros:**
- Simple
- No external dependencies
- Can download all entries anytime

**Cons:**
- Need to manually download
- Not real-time

**Implementation:** ~15 minutes

---

### Option 3: Airtable
**Pros:**
- Beautiful interface
- Easy filtering/sorting
- Can create views
- Free tier available

**Setup:**
1. Create Airtable base
2. Set up webhook or use Airtable API
3. Auto-append entries

**Implementation:** ~45 minutes

---

### Option 4: Notion Database
**Pros:**
- Great for organizing
- Can add notes/tags
- Free

**Cons:**
- API setup is more complex

**Implementation:** ~1 hour

---

## Recommendation

**Start with Google Sheets** - it's the easiest and most flexible.

Would you like me to:
1. Set up Google Sheets auto-export?
2. Create a CSV download endpoint?
3. Set up Airtable integration?
4. Something else?

Let me know which option you prefer!

