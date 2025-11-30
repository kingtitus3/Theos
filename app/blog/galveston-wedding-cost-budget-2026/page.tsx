import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FloatingChatButton } from "@/components/booking/FloatingChatButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does a Galveston Wedding Cost in 2025–2026? | Theos Galveston",
  description:
    "Realistic budget breakdown for Galveston weddings in 2025–2026. Learn average costs, venue pricing, catering, florals, photography, and how to save money without sacrificing style at THEOS.",
  keywords: [
    "Galveston wedding cost",
    "Galveston wedding budget",
    "cost to get married in Galveston",
    "affordable Galveston wedding venues",
    "THEOS wedding pricing",
    "Galveston wedding expenses",
  ],
  openGraph: {
    title: "How Much Does a Galveston Wedding Cost in 2025–2026? (Realistic Budget Guide)",
    description:
      "Breaking down the true cost of getting married on Galveston Island — and how THEOS fits into every budget.",
    type: "article",
    url: "https://theosgalveston.com/blog/galveston-wedding-cost-budget-2026",
  },
};

export default function GalvestonWeddingCostBudget2026Page() {
  return (
    <>
      <article className="bg-sand py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-full bg-accent-brick/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-accent-brick">
                Budget Guide
              </div>
              <h1 className="mb-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">
                💰 How Much Does a Galveston Wedding Cost in 2025–2026?
              </h1>
              <p className="text-lg text-charcoal/70 italic">
                Breaking down the true cost of getting married on Galveston Island — and how THEOS fits into every budget.
              </p>
            </header>

            {/* Content */}
            <div className="space-y-8 text-charcoal/80">
              <p className="text-lg leading-relaxed">
                Planning a wedding in Galveston brings charm, history, and ocean energy you simply can&apos;t get on the mainland — but what does it actually cost? Whether you&apos;re hosting 30 guests or 120, this guide breaks down <strong className="text-charcoal">realistic 2025–2026 prices</strong> for Galveston weddings and how to build a budget without surprises.
              </p>
              <p className="leading-relaxed">
                This is the most accurate, modern, local-focused breakdown you&apos;ll find.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🌴 Average Cost of a Wedding in Galveston (2025–2026)
              </h2>
              <p className="leading-relaxed">
                After analyzing local venues, vendors, and island-based pricing, here&apos;s the real average:
              </p>

              <div className="rounded-2xl border-2 border-accent-brick/20 bg-accent-brick/5 p-6 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-charcoal/60">
                  Typical Galveston Wedding Cost
                </p>
                <p className="mt-2 text-4xl font-serif text-accent-brick">
                  $17,000 – $38,000
                </p>
              </div>

              <p className="leading-relaxed">
                The range varies based on:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Guest count</li>
                <li>Venue</li>
                <li>Catering style</li>
                <li>Décor choices</li>
                <li>Photography/videography</li>
                <li>Season and day of the week</li>
              </ul>
              <p className="leading-relaxed">
                Compared to Houston, Galveston weddings tend to be <strong className="text-charcoal">2–5% more affordable</strong>, especially for Friday and Sunday events.
              </p>
              <p className="leading-relaxed">
                THEOS is designed to give couples the <em>maximum value</em> in this price band by offering a stunning space, flexible layout, and minimal décor requirements.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                💸 Wedding Cost Breakdown in Galveston
              </h2>
              <p className="leading-relaxed">
                Below are the realistic price ranges for each category on the island.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                🏛 Venue
              </h3>
              <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                <p className="text-2xl font-serif text-accent-brick">$2,500 – $8,500</p>
              </div>
              <p className="leading-relaxed">
                Galveston&apos;s venue pricing varies based on:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Capacity</li>
                <li>Waterfront vs. downtown</li>
                <li>Historic vs. modern</li>
                <li>Season</li>
              </ul>
              <p className="leading-relaxed">
                <strong className="text-charcoal">THEOS sits in the accessible middle range</strong>, offering a cinematic space without inflated beachfront pricing.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                🍽 Catering
              </h3>
              <div className="space-y-2">
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Buffet-style:</p>
                  <p className="text-xl font-serif text-accent-brick">$28–$55 per person</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Plated:</p>
                  <p className="text-xl font-serif text-accent-brick">$45–$85 per person</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Food trucks:</p>
                  <p className="text-xl font-serif text-accent-brick">$1,500–$3,000</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Bar packages:</p>
                  <p className="text-xl font-serif text-accent-brick">$18–$42 per person</p>
                </div>
              </div>
              <p className="leading-relaxed">
                You&apos;ll find that Galveston has fewer caterers than Houston, so many vendors come from the mainland — which makes selecting the right venue even more important since load-in must be easy.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                💐 Florals &amp; Décor
              </h3>
              <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                <p className="text-2xl font-serif text-accent-brick">$800 – $4,500</p>
              </div>
              <p className="leading-relaxed">
                Galveston floral prices tend to be lower because:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>More greenery-heavy designs</li>
                <li>Coastal + botanical aesthetics</li>
                <li>Smaller weddings</li>
              </ul>
              <p className="leading-relaxed">
                At THEOS, couples often save thousands by leaning into:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Candle-heavy design</li>
                <li>Minimalist décor</li>
                <li>Greenery instead of large florals</li>
              </ul>
              <p className="leading-relaxed">
                The brick and wood interior provides natural warmth, meaning less décor is needed to make the room stunning.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                📸 Photography &amp; Videography
              </h3>
              <div className="space-y-2">
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Photography:</p>
                  <p className="text-xl font-serif text-accent-brick">$1,500 – $4,500</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Videography:</p>
                  <p className="text-xl font-serif text-accent-brick">$1,200 – $3,500</p>
                </div>
              </div>
              <p className="leading-relaxed">
                Island photographers tend to cost slightly less than Houston photographers, but many Houston-based creatives travel to Galveston regularly.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                🎧 DJs &amp; Entertainment
              </h3>
              <div className="space-y-2">
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">DJ:</p>
                  <p className="text-xl font-serif text-accent-brick">$900 – $2,000</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Live musicians:</p>
                  <p className="text-xl font-serif text-accent-brick">$250–$600 per hour</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Bands:</p>
                  <p className="text-xl font-serif text-accent-brick">$2,000 – $8,000</p>
                </div>
              </div>
              <p className="leading-relaxed">
                DJs are highly available and competitively priced on the island — and micro weddings often get lower quotes.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                🧁 Cake &amp; Desserts
              </h3>
              <div className="space-y-2">
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Cake:</p>
                  <p className="text-xl font-serif text-accent-brick">$200 – $600</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Dessert tables:</p>
                  <p className="text-xl font-serif text-accent-brick">$300–$1,200</p>
                </div>
              </div>
              <p className="leading-relaxed">
                Island bakeries are limited, so Galveston couples sometimes bring desserts from League City or Houston — still very cost-effective.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                💄 Beauty (Hair &amp; Makeup)
              </h3>
              <div className="space-y-2">
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Per person:</p>
                  <p className="text-xl font-serif text-accent-brick">$150 – $250</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Bridal glam:</p>
                  <p className="text-xl font-serif text-accent-brick">$250–$400</p>
                </div>
              </div>
              <p className="leading-relaxed">
                Most beauty vendors are mobile artists from mainland Houston or Clear Lake.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                🪑 Rentals
              </h3>
              <div className="space-y-2">
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Tables, chairs, linens:</p>
                  <p className="text-xl font-serif text-accent-brick">$500–$2,000</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Decor, arches, candles:</p>
                  <p className="text-xl font-serif text-accent-brick">$200–$1,200</p>
                </div>
                <div className="rounded-lg border border-charcoal/10 bg-white/80 p-4">
                  <p className="font-medium text-charcoal">Tents (if needed):</p>
                  <p className="text-xl font-serif text-accent-brick">$1,000–$4,000</p>
                </div>
              </div>
              <p className="leading-relaxed">
                <strong className="text-charcoal">THEOS couples usually spend less</strong> because the interior already has texture, depth, and ambiance — no draping required.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🧮 Sample Budgets for THEOS Weddings
              </h2>
              <p className="leading-relaxed">
                Here are real-world scenarios based on typical bookings.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                🎉 Micro Wedding (40 Guests)
              </h3>
              <div className="rounded-lg border-2 border-accent-brick/20 bg-accent-brick/5 p-6">
                <p className="text-2xl font-serif text-accent-brick mb-4">Budget: $8,500 – $16,500</p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>• Venue: $2,500–$4,000</li>
                  <li>• Catering + bar: $2,000–$4,000</li>
                  <li>• Photographer: $1,500–$2,500</li>
                  <li>• Florals + décor: $500–$1,500</li>
                  <li>• Cake: $250</li>
                  <li>• DJ: $800–$1,200</li>
                  <li>• Hair + makeup: $300–$600</li>
                </ul>
              </div>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                🥂 Classic Wedding (80 Guests)
              </h3>
              <div className="rounded-lg border-2 border-accent-brick/20 bg-accent-brick/5 p-6">
                <p className="text-2xl font-serif text-accent-brick mb-4">Budget: $14,000 – $27,000</p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>• Venue: $3,500–$5,000</li>
                  <li>• Catering + bar: $6,000–$11,000</li>
                  <li>• Photographer + video: $2,000–$5,000</li>
                  <li>• Florals + décor: $1,000–$3,000</li>
                  <li>• DJ: $1,000–$1,500</li>
                  <li>• Cake: $300–$500</li>
                  <li>• Beauty: $600–$1,000</li>
                </ul>
              </div>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                💫 Luxury Wedding (100–120 Guests)
              </h3>
              <div className="rounded-lg border-2 border-accent-brick/20 bg-accent-brick/5 p-6">
                <p className="text-2xl font-serif text-accent-brick mb-4">Budget: $26,000 – $42,000</p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>• Venue: $4,500–$8,500</li>
                  <li>• Catering + bar: $10,000–$18,000</li>
                  <li>• Full florals + installations: $3,000–$7,000</li>
                  <li>• Video + photo: $4,000–$8,000</li>
                  <li>• DJ or band: $1,200–$2,500</li>
                  <li>• Cake: $500+</li>
                </ul>
              </div>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🔥 How to Save Money on a Galveston Wedding (Without Sacrificing Style)
              </h2>

              <h3 className="mt-6 mb-3 font-serif text-xl text-charcoal">
                ✔ Choose a Friday or Sunday date
              </h3>
              <p className="leading-relaxed">
                THEOS offers preferred pricing for non-Saturday events.
              </p>

              <h3 className="mt-6 mb-3 font-serif text-xl text-charcoal">
                ✔ Go heavy on candles, light on florals
              </h3>
              <p className="leading-relaxed">
                The venue&apos;s natural texture does the work.
              </p>

              <h3 className="mt-6 mb-3 font-serif text-xl text-charcoal">
                ✔ Keep your guest count aligned with what the space is built for
              </h3>
              <p className="leading-relaxed">
                THEOS is optimized for 20–100 guest celebrations.
              </p>

              <h3 className="mt-6 mb-3 font-serif text-xl text-charcoal">
                ✔ Focus décor on 3 major areas
              </h3>
              <p className="leading-relaxed">
                Skip decorating every corner.
              </p>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Best ROI spots:</strong>
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Ceremony backdrop</li>
                <li>Tables</li>
                <li>Bar / focal wall</li>
              </ul>

              <h3 className="mt-6 mb-3 font-serif text-xl text-charcoal">
                ✔ Use local vendors when possible
              </h3>
              <p className="leading-relaxed">
                Less travel = lower cost.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ❤️ Ready to Build Your Galveston Wedding Budget?
              </h2>
              <p className="leading-relaxed">
                THEOS is one of the most flexible and design-forward venues on the island — beautiful enough for luxury weddings, accessible enough for intimate celebrations, and priced fairly for 2025–2026 couples.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-6 py-3 text-lg bg-accent-brick text-parchment hover:bg-accent-brick/90"
                >
                  Check Availability or Book a Tour
                </Link>
                <Link
                  href="/vendors"
                  className="inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-6 py-3 text-lg bg-transparent text-charcoal border border-charcoal/20 hover:bg-charcoal/5"
                >
                  Browse Vendor Directory
                </Link>
              </div>

              <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white/80 p-6">
                <h3 className="font-serif text-2xl text-charcoal mb-4">
                  📚 More Planning Resources
                </h3>
                <p className="text-sm text-charcoal/70 mb-4">
                  Planning your Galveston wedding budget? These guides pair perfectly with this cost breakdown:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/blog/galveston-wedding-guide-2026"
                      className="text-accent-brick hover:underline"
                    >
                      → Galveston Wedding Guide 2026
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/galveston-micro-wedding-guide-2026"
                      className="text-accent-brick hover:underline"
                    >
                      → Why Galveston Is the Best Place for a Micro Wedding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/best-months-to-get-married-galveston"
                      className="text-accent-brick hover:underline"
                    >
                      → The Best Months to Get Married in Galveston
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <FloatingChatButton />
    </>
  );
}

