"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FloatingChatButton } from "@/components/booking/FloatingChatButton";
import { scrollToTarget } from "@/lib/utils";
import Link from "next/link";

export default function GalvestonWeddingGuide2026Page() {
  return (
    <>
      <article className="bg-sand py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-full bg-accent-brick/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-accent-brick">
                Wedding Guide
              </div>
              <h1 className="mb-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">
                🌴 Galveston Wedding Guide 2026
              </h1>
              <p className="text-lg text-charcoal/70 italic">
                Everything You Need to Plan Your Dream Coastal Texas Wedding
              </p>
              <p className="mt-4 text-sm text-charcoal/60">
                Planning a Galveston wedding for 2026? You&apos;re in the right place.
              </p>
            </header>

            {/* Content */}
            <div className="space-y-8 text-charcoal/80">
              <p className="text-lg leading-relaxed">
                Galveston is one of Texas&apos; most charming coastal destinations — full of history,
                architecture, beaches, and unforgettable venues that feel worlds away from the city.
              </p>
              <p className="leading-relaxed">
                This <strong className="text-charcoal">Galveston Wedding Guide 2026</strong> breaks down everything you need to
                know: venues, vendors, lodging, permits, photoshoot spots, budgeting tips, and why so
                many couples choose this island for their big day.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ Why Galveston Is the Perfect Wedding Destination in 2026
              </h2>
              <p className="leading-relaxed">Galveston offers a blend you can&apos;t find anywhere else:</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">✔ Historic architecture</h3>
              <p className="leading-relaxed">Exposed brick, ironwork, Victorian-era charm, and industrial textures.</p>

              <h3 className="mt-6 mb-4 font-serif text-2xl text-charcoal">✔ Coastal beauty</h3>
              <p className="leading-relaxed">Sunsets, beaches, palms, and warm breezes year-round.</p>

              <h3 className="mt-6 mb-4 font-serif text-2xl text-charcoal">✔ Affordable compared to Houston</h3>
              <p className="leading-relaxed">Lower venue + vendor costs while still delivering luxury vibes.</p>

              <h3 className="mt-6 mb-4 font-serif text-2xl text-charcoal">✔ Endless photo opportunities</h3>
              <p className="leading-relaxed">From The Strand to the pier, from warehouses to historic mansions.</p>

              <h3 className="mt-6 mb-4 font-serif text-2xl text-charcoal">✔ Destination vibes without leaving Texas</h3>
              <p className="leading-relaxed">Perfect for couples wanting a getaway feel without flights or travel drama.</p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🏛 Top Wedding Venues in Galveston (2026 Update)
              </h2>
              <p className="leading-relaxed">Here are the top venue categories brides look for — and where THEOS fits in.</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">
                1. Historic Indoor Venues (Most popular for 2026)
              </h3>
              <p className="leading-relaxed">These offer character, photo-ready backdrops, and weather flexibility.</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>
                  <strong className="text-charcoal">THEOS Galveston</strong> — exposed brick, industrial charm, indoor/outdoor flow,
                  Loft Suite, lodging next door
                </li>
                <li><a href="https://www.galvestonhistory.org/attractions/ashton-villa" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Ashton Villa</a></li>
                <li><a href="https://thebryanmuseum.org" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">The Bryan Museum</a></li>
                <li><a href="https://www.tremonthouse.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">The Tremont House</a></li>
              </ul>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Why couples choose THEOS:</strong> The 80×40 brick hall allows complete
                customization, from elegant weddings to modern industrial themes.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Outdoor & Beachfront Venues</h3>
              <p className="leading-relaxed">Perfect for sunset ceremonies, seaside receptions, and laid-back vibes.</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Galveston Beach</li>
                <li>Beachtown</li>
                <li>Garten Verein</li>
              </ul>
              <p className="leading-relaxed">
                <em>Tip:</em> Always plan a weather backup — Galveston humidity and wind can surprise you.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Warehouse & Industrial Venues</h3>
              <p className="leading-relaxed">These are trending heavily for 2026.</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Downtown Galveston lofts</li>
                <li>Repurposed warehouses</li>
                <li>THEOS (industrial brick look with open-air structure)</li>
              </ul>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                📅 Choosing Your Wedding Season in Galveston
              </h2>
              <p className="leading-relaxed">Every season has pros and cons.</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">Spring (March–May)</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>✔ Best weather</li>
                <li>✔ Most popular</li>
                <li>✔ Ideal for outdoor photos</li>
                <li>✘ Higher vendor demand</li>
              </ul>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">Summer (June–August)</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>✔ Longer daylight</li>
                <li>✔ Beach-friendly</li>
                <li>✘ Hot + humid</li>
                <li>✘ Afternoon storms</li>
              </ul>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">Fall (September–November)</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>✔ Gorgeous sunsets</li>
                <li>✔ Cooler temps</li>
                <li>✔ Lower competition than spring</li>
                <li>⭐ <strong className="text-charcoal">Most recommended</strong></li>
              </ul>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">Winter (December–February)</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>✔ Most affordable</li>
                <li>✔ Unique moody vibe</li>
                <li>✔ Great for industrial or brick venues</li>
                <li>✘ Occasional cold fronts</li>
              </ul>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Winter weddings at THEOS</strong> are some of the most aesthetic — deep tones,
                candles, industrial ambiance, and a cozy open-air feel.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                📸 Best Photo Spots in Galveston (Perfect for 2026 Brides)
              </h2>
              <p className="leading-relaxed">Your photographer will love these locations:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>
                  <strong className="text-charcoal">✔ The Strand Historic District</strong> — Brick, ironwork, and vintage signs.
                </li>
                <li>
                  <strong className="text-charcoal">✔ THEOS Venue Walls & Archways</strong> — Industrial white-washed texture with
                  open skyline.
                </li>
                <li>
                  <strong className="text-charcoal">✔ 25th Street / Downtown Corridors</strong> — Storefronts, murals, architectural
                  charm.
                </li>
                <li>
                  <strong className="text-charcoal">✔ Seawall Boulevard</strong> — Beach, palms, golden sunset.
                </li>
                <li>
                  <strong className="text-charcoal">✔ Moody Gardens Grounds</strong> — Tropical greenery.
                </li>
                <li>
                  <strong className="text-charcoal">✔ Historic Mansions</strong> — Bishop&apos;s Palace, Ashton Villa, Moody Mansion.
                </li>
              </ul>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                📝 Marriage License Requirements for Galveston (2026)
              </h2>
              <p className="leading-relaxed">Quick guide:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Obtained at <strong className="text-charcoal">Galveston County Clerk</strong></li>
                <li>Valid for <strong className="text-charcoal">90 days</strong></li>
                <li>
                  <strong className="text-charcoal">72-hour waiting period</strong> (unless waived)
                </li>
                <li>Both partners must be present</li>
                <li>Bring valid ID</li>
                <li>Approx cost: <strong className="text-charcoal">$82</strong></li>
              </ul>
              <p className="leading-relaxed">
                <em>Pro tip:</em> Don&apos;t wait — set an appointment.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🍽 Top Wedding Vendors in Galveston (2026)
              </h2>
              <p className="leading-relaxed">These are the categories you&apos;ll need:</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">CATERING</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li><a href="https://www.mosquitocafe.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Mosquito Café</a></li>
                <li><a href="https://www.chopinmonami.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Chopin Mon Ami</a></li>
                <li><a href="https://www.bennosofgalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Benno&apos;s</a></li>
                <li>Local coastal chefs (popular for elevated private catering)</li>
              </ul>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">PHOTOGRAPHERS</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Galveston Beach Photographers</li>
                <li>Island East End creatives</li>
                <li>Houston photographers (they travel!)</li>
              </ul>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">PLANNERS</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li><a href="https://www.eventscompanyofgalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Events Company of Galveston</a></li>
                <li><a href="https://www.loverslaneevents.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Lovers Lane Events</a></li>
                <li>Local independent planners</li>
              </ul>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">FLORISTS</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li><a href="https://www.galvestonflowercompany.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Galveston Flower Company</a></li>
                <li><a href="https://www.stemsbystacy.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Stems by Stacy</a></li>
              </ul>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">DJ / ENTERTAINMENT</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li><a href="https://www.djtwins.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">DJ Twinz</a></li>
                <li><a href="https://www.islandsounddjs.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Island Sound DJs</a></li>
              </ul>
              <p className="leading-relaxed">Need referrals? THEOS provides a full list after booking.</p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🛏 Where to Stay in Galveston (2026 Weddings)
              </h2>
              <p className="leading-relaxed">Your guests will love:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>
                  <strong className="text-charcoal">THEOS Loft Suite</strong> (getting ready suite, included for wedding rentals)
                </li>
                <li>
                  <strong className="text-charcoal">Two Airbnb rentals next door</strong> (perfect for family/wedding party)
                </li>
                <li><a href="https://www.tremonthouse.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Tremont House</a></li>
                <li><a href="https://www.grandgalvez.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Grand Galvez</a></li>
                <li>Airbnb/VRBO beach houses</li>
              </ul>
              <p className="leading-relaxed">Local lodging is a HUGE plus for your wedding weekend.</p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                💰 Galveston Wedding Budgets for 2026 (Realistic Guide)
              </h2>
              <p className="leading-relaxed">Here&apos;s what couples actually spend:</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">$12,000–$18,000 — Small weddings</h3>
              <p className="leading-relaxed">Loft Suite, simple decor, small catering.</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">$20,000–$35,000 — Standard weddings</h3>
              <p className="leading-relaxed">Most common.</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">$40,000+ — Large / luxury weddings</h3>
              <p className="leading-relaxed">Live band, full-service planning, premium florals.</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">Venue Cost Range (2026)</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Galveston average: <strong className="text-charcoal">$3,500–$7,500</strong></li>
                <li>
                  THEOS: Transparent pricing with Friday/Sunday flexibility (Most couples spend between{" "}
                  <strong className="text-charcoal">$3,000–$6,000</strong>)
                </li>
              </ul>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🎨 Wedding Styles That Look AMAZING at THEOS
              </h2>
              <p className="leading-relaxed">If you&apos;re planning at THEOS, these wedding aesthetics shine:</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">🤍 Winter White Industrial</h3>
              <p className="leading-relaxed">Candles • whites • silvers • greenery</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">✨ Elegant Modern Coastal</h3>
              <p className="leading-relaxed">Soft blues • neutrals • airy textures</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">🌙 Moody Industrial</h3>
              <p className="leading-relaxed">Black • gold • amber lighting</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">🌿 Rustic Chic</h3>
              <p className="leading-relaxed">Wood • greenery • warm florals</p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">💐 Spring Garden Inside Brick Walls</h3>
              <p className="leading-relaxed">Pastels • draped installations</p>

              <p className="leading-relaxed">
                THEOS is a <strong className="text-charcoal">blank canvas with character</strong> — your aesthetic will pop.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🔔 Why THEOS Is One of Galveston&apos;s Top Wedding Venues for 2026
              </h2>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Historic brick look</li>
                <li>Open-air industrial structure</li>
                <li>80×40 flexible floor plan</li>
                <li>Loft Suite included</li>
                <li>Lodging next door</li>
                <li>Downtown location</li>
                <li>Affordable Friday/Sunday dates</li>
                <li>Perfect for weddings up to 180 guests</li>
                <li>Stunning blank canvas for decor</li>
              </ul>
              <p className="leading-relaxed">Brides call it a <em>&quot;hidden gem in downtown Galveston.&quot;</em></p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                💍 Ready to Plan Your Galveston Wedding?
              </h2>
              <p className="leading-relaxed">Start your 2026 planning with a private tour of THEOS.</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>📍 <strong className="text-charcoal">Downtown Galveston</strong></li>
                <li>📅 <strong className="text-charcoal">Friday & Sunday weddings available</strong></li>
                <li>🏛 <strong className="text-charcoal">Historic brick venue</strong></li>
                <li>🛏 <strong className="text-charcoal">Loft Suite + Airbnbs next door</strong></li>
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" onClick={() => scrollToTarget("#contact")}>
                  Book a Tour
                </Button>
                <Link
                  href="/giveaway"
                  className="inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-6 py-3 text-lg bg-transparent text-charcoal border border-charcoal/20 hover:bg-charcoal/5"
                >
                  Enter Bridal Giveaway
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </article>
      <FloatingChatButton />
    </>
  );
}

