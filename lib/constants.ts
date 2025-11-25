export const HERO_CONTENT = {
  title: "Host Your Event in a Historic Brick Venue in Downtown Galveston",
  subtitle: "3,200 sq ft of warm brick, golden light, and a private Loft Suite upstairs.",
  description:
    "Theos is an 80 × 40 open hall with original masonry, modern comforts, and a 1 bed / 1 bath Loft Suite — perfect for weddings, receptions, parties, and corporate events just steps from the Strand.",
  stats: [
    { label: "Size", value: "3,200 sq ft (80 × 40)" },
    { label: "Capacity", value: "Up to 180 guests" },
    { label: "Spaces", value: "Main Hall + Loft Suite" },
  ],
  ctaPrimary: "Book a Tour",
  ctaSecondary: "Check Availability",
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

type Space = {
  id: string;
  name: string;
  image: string;
  alt: string;
  capacity: string;
  description: string;
  tags: readonly string[];
};

export const SPACES: ReadonlyArray<Space> = [
  {
    id: "main-hall",
    name: "Main Brick Hall",
    image:
      "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/wedding%20mock%20up%202.png",
    alt: "Industrial-chic wedding ceremony at Theos main brick hall with white aisle runner, wooden cross-back chairs, candlelit pathway, and elegant floral arch in downtown Galveston.",
    capacity: "Up to 180 guests",
    description:
      "The primary 3,200 sq ft event hall featuring original brick, warm lighting, and an 80 × 40 rectangular layout that's easy to stage for ceremonies, receptions, and corporate events.",
    tags: ["Main Space", "Weddings", "Corporate", "Social"],
  },
  {
    id: "loft-suite",
    name: "Theos Loft Suite",
    image:
      "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/spaces/loft.jpg",
    alt: "Loft Suite upstairs at Theos event venue in Galveston, perfect for getting-ready or overnight stays.",
    capacity: "1 bed • 1 bath",
    description:
      "A private upstairs 1-bed, 1-bath apartment perfect for getting ready, overnight stays, VIP hosting, or multi-day content shoots. Includes bedroom, full bathroom, kitchen, and lounge area.",
    tags: ["Loft", "Getting Ready", "Overnight", "VIP"],
  },
  {
    id: "entry",
    name: "Front Entry & Welcome Area",
    image:
      "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/red%20carpet%20entry.png",
    alt: "Elegant red carpet entrance at Theos with golden gates, floral archway, crystal chandelier, and welcome sign in downtown Galveston.",
    capacity: "Flexible guest flow",
    description:
      "A welcoming entry that sets the tone as guests arrive, ideal for signage, welcome drinks, or a photo moment.",
    tags: ["Entry", "Arrival", "Photo Moment"],
  },
];

export const GALLERY_FILTERS = ["All", "Main Hall", "Loft Suite", "Events", "Details"] as const;

export type GalleryFilter = (typeof GALLERY_FILTERS)[number];

export const GALLERY_ITEMS: {
  src: string;
  alt: string;
  category: GalleryFilter;
}[] = [
  // Wedding Events
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/wedding-3.jpg",
    alt: "Wedding celebration at Theos event space with elegant table settings and floral centerpieces.",
    category: "Events",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/wedding-4.jpg",
    alt: "Romantic wedding decor at Theos featuring white flowers, crystal chandeliers, and warm lighting.",
    category: "Events",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/wedding-5.jpg",
    alt: "Wedding event at Theos brick venue with sophisticated white and gold decor in downtown Galveston.",
    category: "Events",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/wedding%20mockup.png",
    alt: "Wedding mockup showing elegant event setup at Theos historic brick venue.",
    category: "Events",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/wedding%20mock%20up%202.png",
    alt: "Industrial-chic wedding ceremony at Theos with white aisle runner, wooden cross-back chairs, candlelit pathway, and elegant floral arch in downtown Galveston.",
    category: "Events",
  },
  // Social Events
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/social-2.jpg",
    alt: "Social gathering at Theos event venue in downtown Galveston with guests enjoying the main brick hall.",
    category: "Events",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/social-3.jpg",
    alt: "Celebration event inside Theos, a 3,200 sq ft historic brick event space in downtown Galveston.",
    category: "Events",
  },
  // Corporate Events
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/corporate-1.jpg",
    alt: "Corporate networking event at Theos with professionals mingling in the main brick hall.",
    category: "Events",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/corporate%20mockup%201.png",
    alt: "Corporate event mockup at Theos showing professional event setup in the brick venue.",
    category: "Events",
  },
  // Special Events
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/Quince%20mock%20up.png",
    alt: "Quinceañera celebration at Theos with pink and gold decor, floral arrangements, and elegant table settings.",
    category: "Events",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/red%20carpet%20entry.png",
    alt: "Elegant red carpet entrance at Theos with golden gates, floral archway, and welcome sign.",
    category: "Events",
  },
  // Main Hall Details
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/detail-1.jpg",
    alt: "Architectural details of Theos main brick hall showing historic brick walls and warm lighting.",
    category: "Main Hall",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/detail-2.jpg",
    alt: "Interior details of Theos event venue highlighting the brick architecture and industrial design.",
    category: "Main Hall",
  },
  {
    src: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/detail-3.jpg",
    alt: "Detailed view of Theos brick venue showing the unique character and ambiance of the space.",
    category: "Main Hall",
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

export const PRICING_BREAKDOWN = {
  headline: "Transparent, Simple Pricing",
  subheadline:
    "Theos is priced to stay competitive in Galveston while maximizing value for weddings, private events, and corporate gatherings. Weekend dates and the Loft Suite book quickly.",
  snapshot: {
    text: "Most couples and hosts spend between $3,000–$6,000 for their event at Theos, depending on the day of week and whether the Loft Suite is added.",
  },
  packages: [
    {
      name: "Saturday Events (Peak)",
      price: "$4,250",
      details: [
        "Full 8–10 hour rental",
        "3,200 sq ft brick main hall (80 × 40)",
        "Tables, chairs, venue host, basic sound",
        "Perfect for weddings & receptions",
      ],
      addOns: ["Loft Suite: +$500", "Additional hour: +$250/hr"],
      notes: "Saturdays are the highest-demand dates and typically book months in advance.",
    },
    {
      name: "Friday & Sunday",
      price: "$3,250",
      details: [
        "6–8 hour rental",
        "Full access to main hall",
        "Tables, chairs & venue host included",
      ],
      addOns: ["Loft Suite: +$400"],
      notes: "Ideal for weddings, parties, receptions, and corporate socials. Strong value without Saturday pricing.",
    },
    {
      name: "Weekday Evenings (Mon–Thu)",
      price: "$1,950",
      details: [
        "5–6 hour rental",
        "Great for corporate events, showers, rehearsal dinners, and mixers",
        "Tables & chairs included",
      ],
      addOns: ["Loft Suite: +$300"],
      notes: "Most cost-effective option for private events.",
    },
    {
      name: "Weekday Micro-Events (3–4 Hours)",
      price: "$1,350",
      details: [
        "3–4 hour block",
        "Up to ~60 guests",
        "Perfect for micro-weddings, elopements, showers, & intimate gatherings",
      ],
      addOns: ["Loft Suite available upon request"],
      notes:
        "Designed for smaller groups who want a high-vibe historic venue without the full-day rates.",
    },
    {
      name: "Hourly / Content / Short Rentals",
      price: "$175–$250/hr (3 hr min)",
      details: [
        "Best for photo/video shoots, pop-ups, content days",
        "Use of main hall only",
      ],
      addOns: ["Peak/last-minute hours: $350–$400/hr"],
      notes: "Priced below resort & hotel rates but above basic halls to reflect the unique brick aesthetic.",
    },
  ],
  loftSuite: {
    name: "The Loft Suite Add-On",
    price: "$300–$600",
    description:
      "1 bed / 1 bath upstairs apartment — perfect for weddings (getting ready), overnight guests, photography prep, or VIPs.",
    benefits: [
      "Elevated convenience for wedding parties",
      "Great for travelling hosts",
      "Adds privacy and luxury to your event day",
      "High-value, high-margin add-on",
    ],
  },
  notes: [
    "No hidden fees — all taxes and costs are disclosed before booking.",
    "Deposit required to secure your date.",
    "Payment plans available for qualifying bookings.",
    "Tours available by appointment only.",
  ],
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
  imageSrc:
    "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/floorplan.jpg",
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
      "Most events wrap by 2:00 AM to respect downtown guidelines, but exact timing depends on the day of the week and your event type.",
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
  heading: "Book a Tour or Check Your Date",
  description:
    "Share a few details about your event and we’ll respond quickly with date availability, pricing, and a time to walk the space with you. Weekend dates and the Loft Suite book up fast.",
  phone: "(409) 765-5539",
  email: "titus.edwardsiii@3910enterprises.com",
  addressLine: "2527 Market St, Galveston, TX 77550",
  mapEmbedSrc: "",
};
