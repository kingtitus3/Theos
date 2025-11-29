"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FloatingChatButton } from "@/components/booking/FloatingChatButton";
import { scrollToTarget } from "@/lib/utils";
import Link from "next/link";

export default function BestWeddingVendorsPage() {
  return (
    <>
      <article className="bg-sand py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-full bg-accent-brick/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-accent-brick">
                Vendor Guide
              </div>
              <h1 className="mb-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">
                💍 Best Wedding Vendors in Galveston
              </h1>
              <p className="text-lg text-charcoal/70 italic">
                Your complete list of trusted planners, photographers, florists, caterers &amp; more.
              </p>
              <p className="mt-4 text-sm text-charcoal/60">
                (2025–2026 Guide)
              </p>
            </header>

            {/* Content */}
            <div className="space-y-8 text-charcoal/80">
              <p className="text-lg leading-relaxed">
                Planning a Galveston wedding means choosing vendors who understand the island&apos;s architecture, weather, lighting, and overall vibe. Whether you&apos;re hosting your wedding indoors, outdoors, or at a historic brick venue like <strong className="text-charcoal">THEOS</strong>, having the right vendor team makes all the difference.
              </p>
              <p className="leading-relaxed">
                This updated <strong className="text-charcoal">2025–2026 vendor guide</strong> highlights the most trusted and talented wedding professionals serving Galveston — from planners to photographers to caterers and entertainment.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ Why Local Vendors Matter in Galveston
              </h2>
              <p className="leading-relaxed">Galveston is a unique blend of:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>coastal light</li>
                <li>historic architecture</li>
                <li>industrial/event spaces</li>
                <li>unpredictable weather</li>
                <li>tight downtown streets</li>
                <li>limited parking</li>
                <li>specific noise/time rules</li>
              </ul>
              <p className="leading-relaxed">Local vendors know:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>✔ How to navigate the weather</li>
                <li>✔ Which photo spots work best</li>
                <li>✔ Which décor styles fit brick/industrial venues</li>
                <li>✔ How to move quickly between locations</li>
                <li>✔ Which backup plans actually work</li>
              </ul>
              <p className="leading-relaxed">
                Hiring Galveston-experienced vendors = smoother wedding day.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🌸 Best Wedding Planners in Galveston (2025–2026)
              </h2>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. Events Company of Galveston</h3>
              <p className="leading-relaxed">
                Full-service planning, design, and day-of coordination.
              </p>
              <p className="leading-relaxed">Known for:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>calm energy</li>
                <li>seamless timelines</li>
                <li>polished setups</li>
              </ul>
              <p className="leading-relaxed">
                <a href="https://www.eventscompanyofgalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Events Company of Galveston →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Lovers Lane Events</h3>
              <p className="leading-relaxed">
                Chic, modern designs with a high attention to detail.
              </p>
              <p className="leading-relaxed">Great for:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>romantic weddings</li>
                <li>intimate weddings</li>
                <li>industrial + modern aesthetics</li>
              </ul>
              <p className="leading-relaxed">
                <a href="https://www.loverslaneevents.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Lovers Lane Events →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Island Event Professionals</h3>
              <p className="leading-relaxed">
                Budget-friendly planners who are great at logistics.
              </p>
              <p className="leading-relaxed">Perfect for:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>DIY brides</li>
                <li>Friday/Sunday weddings</li>
                <li>Outdoor ceremonies</li>
              </ul>

              <p className="leading-relaxed">
                <strong className="text-charcoal">Pro Tip:</strong> THEOS offers planner-friendly load-in and customizable layouts, making it easy for planners to execute any vision.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                📸 Best Photographers for Galveston Weddings
              </h2>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. Galveston Beach Photographers</h3>
              <p className="leading-relaxed">
                Experts in capturing sunset portraits and airy beach tones.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Houston-Based Photographers Who Travel to Galveston:</h3>
              <p className="leading-relaxed">
                (These are often the best value + best style.)
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li><a href="https://www.civicphotos.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Civic Photos</a></li>
                <li><a href="https://www.everandivy.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Ever &amp; Ivy</a></li>
                <li><a href="https://www.loveleephotography.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Lovelee Photography</a></li>
                <li><a href="https://www.stephaniecavephotography.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Stephanie Cave Photography</a></li>
              </ul>
              <p className="leading-relaxed">
                Their clean, modern editing looks <em>incredible</em> against THEOS&apos; brick textures.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🌺 Best Florists in Galveston
              </h2>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. Galveston Flower Company</h3>
              <p className="leading-relaxed">
                Classic arrangements, perfect for traditional and elegant weddings.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.galvestonflowercompany.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Galveston Flower Company →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Stems by Stacy</h3>
              <p className="leading-relaxed">
                Modern and airy florals with luxe touches.
              </p>
              <p className="leading-relaxed">Great for:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>winter weddings</li>
                <li>minimalist greenery</li>
                <li>moody floral palettes</li>
              </ul>
              <p className="leading-relaxed">
                <a href="https://www.stemsbystacy.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Stems by Stacy →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Island Florals &amp; Decor</h3>
              <p className="leading-relaxed">
                Affordable, reliable, and familiar with downtown venues.
              </p>

              <p className="leading-relaxed">
                <strong className="text-charcoal">Why florals pop at THEOS:</strong> The white-washed textures + industrial brick backdrop make greenery and florals visually explode on camera.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🍽 Best Caterers in Galveston
              </h2>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. Mosquito Café Catering</h3>
              <p className="leading-relaxed">
                Island-famous flavors, great service, and dependable quality.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.mosquitocafe.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Mosquito Café →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Chopin Mon Ami</h3>
              <p className="leading-relaxed">
                Elegant, elevated French-inspired catering — perfect for a formal vibe.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.chopinmonami.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Chopin Mon Ami →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Benno&apos;s on the Beach</h3>
              <p className="leading-relaxed">
                Laid-back local seafood option for coastal-themed weddings.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.bennosofgalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Benno&apos;s →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">4. Private Local Chefs</h3>
              <p className="leading-relaxed">
                A top trend for 2026 — luxury plated dinners for 40–120 guests.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🎶 Best DJs &amp; Entertainment
              </h2>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. Island Sound DJs</h3>
              <p className="leading-relaxed">
                Professional, organized, and great MC skills.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.islandsounddjs.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Island Sound DJs →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. DJ Twinz</h3>
              <p className="leading-relaxed">
                Crowd-pleasing mixes, great lighting packages, and reliable energy.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.djtwins.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit DJ Twinz →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Houston Entertainment Companies</h3>
              <p className="leading-relaxed">
                Most Houston DJs travel to Galveston and bring:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>photo booths</li>
                <li>uplighting</li>
                <li>cold sparks</li>
                <li>dance floor lighting</li>
              </ul>
              <p className="leading-relaxed">
                THEOS&apos;s open structure is perfect for elevated lighting and spark effects.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🍰 Best Cake Artists &amp; Bakers
              </h2>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. Cakes by Jula</h3>
              <p className="leading-relaxed">
                Classic, elegant wedding cakes in every size.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.cakesbyjula.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Cakes by Jula →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. PattyCakes Bakery</h3>
              <p className="leading-relaxed">
                Island favorite, great for groom&apos;s cakes and desserts.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.pattycakesbakery.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit PattyCakes Bakery →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Small Cottage Bakers (Home-Based)</h3>
              <p className="leading-relaxed">
                Budget-friendly + incredible artistry.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                💄 Best Hair &amp; Makeup Artists Serving Galveston
              </h2>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li><a href="https://www.blushsalongalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Blush Salon</a></li>
                <li><a href="https://www.beautiquegalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Beautique</a></li>
                <li>Houston HMUA teams who travel (common for weddings)</li>
              </ul>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Why this matters:</h3>
              <p className="leading-relaxed">
                THEOS&apos;s Loft Suite makes it easy for HMUA teams to get the bridal party ready on-site.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🪑 Best Rental &amp; Decor Companies
              </h2>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. A Finer Event</h3>
              <p className="leading-relaxed">
                Tables, chairs, linens, arches, chargers, and statement pieces.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.afinerevent.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit A Finer Event →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Island Events Rental</h3>
              <p className="leading-relaxed">
                Affordable basics — easy delivery.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.islandeventsrental.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Island Events Rental →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Houston Specialty Rental Companies</h3>
              <p className="leading-relaxed">For:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>velvet couches</li>
                <li>floral walls</li>
                <li>marquee letters</li>
                <li>luxury table settings</li>
                <li>LED dance floors</li>
              </ul>
              <p className="leading-relaxed">
                This stuff looks <em>amazing</em> inside THEOS.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                📍 Best Photo Locations Near THEOS
              </h2>
              <p className="leading-relaxed">Every couple should take photos at:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>The Strand District</li>
                <li>THEOS brick walls &amp; archway</li>
                <li>25th Street murals</li>
                <li>The Seawall at sunset</li>
                <li>Historic warehouses</li>
                <li>Artist Alley</li>
              </ul>
              <p className="leading-relaxed">These locations give you a mix of:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>coastal</li>
                <li>industrial</li>
                <li>historic</li>
                <li>editorial</li>
              </ul>
              <p className="leading-relaxed">
                Perfect for a diverse wedding album.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🛏 Best Places for Guests to Stay
              </h2>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. THEOS Loft Suite (onsite)</h3>
              <p className="leading-relaxed">Perfect for:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>bride getting ready</li>
                <li>couple&apos;s suite</li>
                <li>private pre-ceremony time</li>
              </ul>
              <p className="leading-relaxed">
                <Link href="/loft-suite" className="text-accent-brick hover:underline">Learn more about THEOS Loft Suite →</Link>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Two Airbnbs Next Door</h3>
              <p className="leading-relaxed">Great for:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>bridal party</li>
                <li>family</li>
                <li>out-of-town guests</li>
              </ul>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Tremont House</h3>
              <p className="leading-relaxed">
                Luxury boutique option in the Strand area.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.tremonthouse.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Tremont House →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">4. Grand Galvez</h3>
              <p className="leading-relaxed">
                Historic beachfront hotel with iconic charm.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.grandgalvez.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Grand Galvez →</a>
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                💡 Tips for Choosing Vendors for a 2026 Galveston Wedding
              </h2>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>✔ Choose vendors who&apos;ve worked in Galveston before</li>
                <li>✔ Ask about backup rain/wind plans</li>
                <li>✔ Confirm load-in/load-out timing (downtown is tight)</li>
                <li>✔ Share your venue floor plan early</li>
                <li>✔ Request a mood board if you&apos;re using florals or decor</li>
              </ul>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                💍 Plan Your 2026 Wedding at THEOS
              </h2>
              <p className="leading-relaxed">
                If you&apos;re planning a Galveston wedding for 2025 or 2026, we&apos;d love to help you create something unforgettable.
              </p>
              <p className="leading-relaxed">THEOS offers:</p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>A historic brick venue</li>
                <li>Open-air industrial layout</li>
                <li>Loft Suite included</li>
                <li>Lodging next door</li>
                <li>Friday &amp; Sunday availability</li>
                <li>Capacity up to 180 guests</li>
                <li>A blank canvas for any aesthetic</li>
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

              <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white/80 p-6">
                <h3 className="font-serif text-2xl text-charcoal mb-4">
                  📚 More Planning Resources
                </h3>
                <p className="text-sm text-charcoal/70 mb-4">
                  Looking for more wedding planning inspiration? Check out our comprehensive guides:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog/galveston-wedding-guide-2026" className="text-accent-brick hover:underline">
                      → Galveston Wedding Guide 2026
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/winter-wedding-ideas-theos" className="text-accent-brick hover:underline">
                      → 10 Stunning Winter Wedding Ideas for THEOS
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

