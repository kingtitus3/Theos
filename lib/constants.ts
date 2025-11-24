export const HERO_CONTENT = {
  title: "Theos",
  subtitle: "A historic brick event venue in downtown Galveston.",
  description:
    "Original masonry, warm lighting, and an 80 × 40 open layout set the stage for unforgettable celebrations just steps from the Strand.",
  stats: [
    { label: "Size", value: "3,200 sq ft (80 × 40)" },
    { label: "Capacity", value: "Up to 180 guests" },
    {
      label: "Events",
      value: "Weddings • Social • Corporate • Productions",
    },
  ],
  ctaPrimary: "Check Availability",
  ctaSecondary: "Watch Tour",
};

export const ABOUT_CONTENT = {
  heading: "Historic character. Modern gatherings.",
  body: [
    "Theos is a restored historic brick venue in the heart of downtown Galveston. High ceilings, exposed masonry, and warm ambient lighting create an intimate yet open backdrop for weddings, parties, and corporate events.",
    "Just steps from the Strand and the island’s best bars, restaurants, and hotels, Theos blends old-town charm with a clean, modern feel. It’s a space that instantly feels special, while staying flexible enough to match your style.",
    "Bring your own vendors or work with our preferred partners, customize your layout, and make the night feel entirely yours.",
  ],
  eventTypes: [
    "Weddings & receptions",
    "Rehearsal dinners & welcome parties",
    "Birthday & anniversary celebrations",
    "Corporate mixers & offsites",
    "Holiday parties",
    "Styled shoots & content days",
  ],
  atAGlance: {
    size: "3,200 sq ft",
    dimensions: "80 ft long × 40 ft wide",
    capacity: "Up to 180 standing • 120–140 seated",
    location: "Downtown Galveston, just off the Strand",
  },
};

export const SPACES = [
  {
    id: "main-hall",
    name: "Main Brick Hall",
    image: "/images/spaces/main-hall.jpg",
    capacity: "Up to 180 guests",
    description:
      "The primary 3,200 sq ft event hall featuring original brick, warm lighting, and an 80 × 40 rectangular layout that’s easy to stage for ceremonies, receptions, and corporate events.",
    tags: ["Main Space", "Weddings", "Corporate", "Social"],
  },
  {
    id: "loft-suite",
    name: "Theos Loft Suite",
    image: "/images/spaces/loft.jpg",
    capacity: "1 bed • 1 bath",
    description:
      "A private upstairs 1-bed, 1-bath apartment perfect for getting ready, overnight stays, VIP hosting, or multi-day content shoots. Includes bedroom, full bathroom, kitchen, and lounge area.",
    tags: ["Loft", "Getting Ready", "Overnight", "VIP"],
  },
  {
    id: "entry",
    name: "Front Entry & Welcome Area",
    image: "/images/spaces/entry.jpg",
    capacity: "Flexible guest flow",
    description:
      "A welcoming entry that sets the tone as guests arrive, ideal for signage, welcome drinks, or a photo moment.",
    tags: ["Entry", "Arrival", "Photo Moment"],
  },
] as const;

export const GALLERY_FILTERS = [
  "All",
  "Weddings",
  "Social Events",
  "Corporate",
  "Styled Shoots",
] as const;

export type GalleryFilter = (typeof GALLERY_FILTERS)[number];

export const GALLERY_ITEMS: {
  src: string;
  alt: string;
  category: GalleryFilter;
}[] = [
  {
    src: "/images/gallery/wedding-1.jpg",
    alt: "Candlelit wedding reception at Theos with brick walls and string lights.",
    category: "Weddings",
  },
  {
    src: "/images/gallery/wedding-2.jpg",
    alt: "Ceremony setup in the main brick hall with an aisle and floral backdrop.",
    category: "Weddings",
  },
  {
    src: "/images/gallery/social-1.jpg",
    alt: "Birthday or social event with bar setup and guests mingling.",
    category: "Social Events",
  },
  {
    src: "/images/gallery/corporate-1.jpg",
    alt: "Corporate mixer with cocktail tables and branded signage.",
    category: "Corporate",
  },
  {
    src: "/images/gallery/detail-1.jpg",
    alt: "Detail shot of brick wall, candles, and decor at Theos.",
    category: "Styled Shoots",
  },
];

export const VIRTUAL_TOUR_CONTENT = {
  heading: "Walk through Theos before you book.",
  description:
    "Explore the main brick hall, entry area, and upstairs Loft Suite from anywhere. See how the light hits the brick, how guests flow through the space, and where your ceremony, bar, or DJ might live.",
  badge: "Virtual tour • ~2 minute walkthrough",
  videoSrc: "/media/virtual-tour.mp4",
  matterportEmbedUrl: "",
};

export const PRICING_PACKAGES = [
  {
    name: "Weekday Evenings",
    price: "Starting at $2,000",
    details: [
      "Up to 6 hours of event time",
      "Access to Main Brick Hall",
      "Standard tables and chairs",
      "On-site venue host",
    ],
    note: "Perfect for rehearsals, corporate mixers, and intimate celebrations.",
  },
  {
    name: "Weekend Evenings",
    price: "Starting at $3,500",
    details: [
      "Up to 8 hours of event time",
      "Full access to Main Brick Hall",
      "Standard tables and chairs",
      "Basic sound system",
      "On-site venue host",
    ],
    note: "Most popular for weddings and milestone events.",
  },
  {
    name: "Hourly / Micro Events",
    price: "Starting at $400/hr",
    details: [
      "Minimum 3-hour booking",
      "Ideal for shoots and pop-ups",
      "Flexible daytime or weeknight slots",
    ],
    note: "Great for styled shoots, content days, and smaller gatherings.",
  },
  {
    name: "Theos Loft Suite Add-On",
    price: "Starting at $300–$500",
    details: [
      "Private 1 bed / 1 bath loft upstairs",
      "Great for getting-ready or overnight stays",
      "Includes kitchen and lounge area",
      "Available with select event bookings",
    ],
    note: "Limited availability; can be bundled with event packages.",
  },
];

export const AVAILABILITY_FORM_COPY = {
  heading: "Check availability & get a ballpark estimate.",
  description:
    "Share a few details about your event and we’ll follow up with date availability, a ballpark rate, and next steps.",
};

export const AMENITIES = [
  { label: "Historic downtown Galveston location", icon: "MapPin" },
  { label: "3,200 sq ft brick main hall", icon: "BuildingOffice2" },
  { label: "Private upstairs Loft Suite (1 bed / 1 bath)", icon: "HomeModern" },
  { label: "Standard tables & chairs", icon: "TableCells" },
  { label: "Basic sound system", icon: "SpeakerWave" },
  { label: "Wi-Fi", icon: "Wifi" },
  { label: "Prep area for catering", icon: "Fire" },
  { label: "Bring your own licensed vendors", icon: "Truck" },
] as const;

export const FLOORPLAN_CONTENT = {
  heading: "Layouts that flex with your event.",
  description:
    "Theos is a single 80 × 40 open brick hall that can be staged for ceremonies, seated receptions, cocktail-style mixers, or corporate setups. The clean rectangular footprint makes planning straightforward for you and your vendors.",
  downloadLabel: "Download floorplan PDF",
  downloadHref: "/docs/floorplan.pdf",
  imageSrc: "/images/floorplan.jpg",
};

export const CAPACITY_CHART = [
  { layout: "Cocktail / Standing", maxGuests: "160–180" },
  { layout: "Seated Banquet (rounds)", maxGuests: "120–140" },
  { layout: "Theatre Style", maxGuests: "150+" },
  { layout: "Classroom", maxGuests: "90–110" },
  { layout: "Ceremony Seating", maxGuests: "Up to 150" },
];

export const FLOORPLAN_NOTES = [
  "Main Hall: 80 × 40 open rectangle",
  "Front entry area suitable for welcome table or photo moment",
  "Back area can host bar, DJ, or lounge",
  "Upstairs Loft Suite: private 1 bed / 1 bath with kitchen and lounge (add-on)",
];

export const TESTIMONIALS = [
  {
    name: "Emily & Marcus",
    eventType: "Wedding Reception",
    quote:
      "Theos gave us the downtown Galveston vibe we wanted without feeling stuffy. Our guests are still talking about the brick walls and how warm the room felt at night.",
    date: "2024",
  },
  {
    name: "Harbor Marketing Co.",
    eventType: "Corporate Mixer",
    quote:
      "Easy load-in, flexible layout, and a location our clients loved. Theos made it simple to look polished without overcomplicating the planning.",
    date: "2024",
  },
  {
    name: "Jasmine",
    eventType: "Birthday Celebration",
    quote:
      "We brought in our own DJ, catering, and décor, and Theos was the perfect blank canvas. It felt like a downtown loft party with island charm.",
    date: "2023",
  },
];

export const FAQS = [
  {
    question: "Can we bring our own caterer and bar service?",
    answer:
      "Yes. You’re welcome to bring your own licensed caterer and bar team. We can also share a list of preferred vendors who know the space well.",
  },
  {
    question: "Is the Loft Suite included with every booking?",
    answer:
      "The Loft Suite is an optional add-on for select events. It’s perfect for getting-ready, overnight stays, or VIP guests. Ask about availability when you inquire.",
  },
  {
    question: "What time do events need to end?",
    answer:
      "Most events end by 11:00 PM to respect downtown noise guidelines, but exact timing depends on the day of the week and your event type.",
  },
  {
    question: "Is there parking available?",
    answer:
      "There is street parking around the venue as well as nearby paid lots. We can recommend valet or shuttle options for larger events.",
  },
  {
    question: "How much is the deposit and when is it due?",
    answer:
      "A non-refundable deposit is required to reserve your date, with the remaining balance due closer to your event. Exact amounts and timelines are outlined in your contract.",
  },
  {
    question: "Do you provide decor or specialty rentals?",
    answer:
      "Standard tables and chairs are included with most rentals. Specialty furniture, linens, and decor can be arranged through your vendors or our preferred partners.",
  },
];

export const CONTACT_INFO = {
  heading: "Ready to see Theos in person?",
  description:
    "Share a few details about your event and we’ll follow up with availability, pricing, and a time to tour the space.",
  phone: "(409) 555-0123",
  email: "hello@theosgalveston.com",
  addressLine: "Downtown Galveston, TX",
  mapEmbedSrc: "",
};
