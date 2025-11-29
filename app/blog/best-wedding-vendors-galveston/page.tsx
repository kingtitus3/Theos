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

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Water to Wine Events</h3>
              <p className="leading-relaxed">
                Full-service Galveston wedding planners — experienced with island logistics, weather, and local vendors.
              </p>
              <p className="leading-relaxed">
                <a href="https://watertowineevents.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Water to Wine Events →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">4. Moments Event Planning & Design</h3>
              <p className="leading-relaxed">
                Boutique planner based on Galveston Island — specializes in local weddings &amp; events.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.moments-events.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Moments Event Planning &amp; Design →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">5. The Total Wedding Experience</h3>
              <p className="leading-relaxed">
                Wedding + event planning &amp; coordination — listed among top planners serving Galveston.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">6. My Island Weddings</h3>
              <p className="leading-relaxed">
                Specialized in beach weddings / elopements — good for small ceremonies by the sea.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.myislandweddings.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit My Island Weddings →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">7. Barefoot Weddings Galveston</h3>
              <p className="leading-relaxed">
                Known for beach weddings, elopements, possibly simpler &amp; budget-friendly packages.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">8. Island Event Professionals</h3>
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
                <strong className="text-charcoal">Why local planners matter:</strong> Local planners understand Galveston-specific challenges — from permits to weather, from transport to lodging coordination — which makes them invaluable for island weddings.
              </p>
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

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Degrees North Images</h3>
              <p className="leading-relaxed">
                Island-based photographer / elopement &amp; wedding specialist.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.marriedonisland.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Find on Married On Island →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Houston-Based Photographers Who Travel to Galveston:</h3>
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
              <p className="leading-relaxed">
                <strong className="text-charcoal">Note:</strong> Photography/videography tends to be a fluid category — many vendors come from nearby areas but serve Galveston when booked. Always confirm travel details. Check local directories like <a href="https://www.marriedonisland.com/vendors" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Married On Island</a> and <a href="https://www.weddingwire.com/c/tx-texas/galveston/wedding-photographers" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">WeddingWire</a> for rotating photographers serving the island.
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
              <p className="leading-relaxed">
                <strong className="text-charcoal">Note:</strong> Because floristry is local and seasonal, checking local directories like <a href="https://www.weddingwire.com/c/tx-texas/galveston/wedding-florists" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">WeddingWire</a> and <a href="https://www.marriedonisland.com/vendors" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Married On Island</a> is recommended. Florists familiar with coastal wedding needs (humidity, salt air, beach florals, transport) are essential for island weddings.
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

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Chopin Mon Ami Catering &amp; Events</h3>
              <p className="leading-relaxed">
                Elegant, elevated French-inspired catering — perfect for a formal vibe. Known for catering many historic &amp; museum-style weddings on the island.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.cmacatering.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Chopin Mon Ami Catering →</a>
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
              
              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">1. Salty Skin + Hair</h3>
              <p className="leading-relaxed">
                Island-based bridal hair &amp; makeup, specialized for weddings, elopements, and events in coastal conditions.
              </p>
              <p className="leading-relaxed">
                <a href="https://www.saltyskinandhair.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Salty Skin + Hair →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">2. Blush Salon</h3>
              <p className="leading-relaxed">
                <a href="https://www.blushsalongalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Blush Salon →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">3. Beautique</h3>
              <p className="leading-relaxed">
                <a href="https://www.beautiquegalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Beautique →</a>
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">4. Houston HMUA Teams</h3>
              <p className="leading-relaxed">
                Many Houston hair &amp; makeup artists travel to Galveston for weddings. Check <a href="https://www.weddingwire.com/c/tx-texas/galveston/wedding-beauty-health" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">WeddingWire&apos;s beauty vendor list</a> for options.
              </p>

              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Why this matters:</h3>
              <p className="leading-relaxed">
                Because weather and environment (humidity, sea breeze) affect glam, a local glam team familiar with island weddings is a big advantage. THEOS&apos;s Loft Suite makes it easy for HMUA teams to get the bridal party ready on-site.
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
                🏛 Other Notable Wedding Venues in Galveston
              </h2>
              <p className="leading-relaxed">
                While THEOS is our top pick for historic brick venues, here are other popular options on the island:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li><a href="https://www.tremonthouse.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">The Tremont House</a> — Historic downtown hotel + event spaces + rooftop bar</li>
                <li><a href="https://www.grandgalvez.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Grand Galvez Resort &amp; Spa</a> — Beachfront resort / historic hotel — large weddings / guest accommodations</li>
                <li><a href="https://www.thebryanmuseum.org" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">The Bryan Museum</a> — Historic museum venue with preferred vendor lists</li>
                <li><a href="https://www.galvestonhistory.org/attractions/ashton-villa" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Ashton Villa</a> — Historic mansion / boutique-style venue</li>
                <li>Moody Mansion (Willis-Moody Mansion) — Historic mansion venue — classic architecture</li>
                <li>The San Luis Resort, Spa &amp; Conference Center — Resort-style venue + ballrooms + indoor/outdoor options</li>
                <li>Carr Mansion — Historic mansion / boutique-style venue for intimate to mid-size weddings</li>
                <li>Bayside Event Center — Waterfront / bayou-side venue — good for receptions with water view</li>
                <li>Hotel Lucine — Boutique hotel near the beach with event/banquet possibilities</li>
                <li>Beach Venues — East Beach / Stewart Beach / Public Beach Parks — For barefoot / beachfront ceremonies</li>
              </ul>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Tip:</strong> For many of these venues, check their &quot;preferred vendors&quot; or &quot;vendor partner&quot; lists — often those include florists, caterers, photographers, etc., who already know the venue well.
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

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">5. The San Luis Resort</h3>
              <p className="leading-relaxed">
                Resort-style venue with guest accommodations.
              </p>

              <h3 className="mt-8 mb-4 font-serif text-2xl text-charcoal">6. Airbnb/VRBO Beach Houses</h3>
              <p className="leading-relaxed">
                Great for larger groups or extended stays.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ✝️ Officiants &amp; Beach Wedding Services
              </h2>
              <p className="leading-relaxed">
                For couples wanting beach, courthouse, or non-traditional weddings:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Use <strong className="text-charcoal">beach-specialty planners</strong> (like My Island Weddings or Barefoot Weddings Galveston) — they often bundle officiant + setup + simple decor</li>
                <li>Request officiant details early — beach/waterfront weddings often have permit/time restrictions</li>
                <li>Consider local historic-venue chapels / churches for indoor or backup–friendly ceremonies</li>
              </ul>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                💡 Tips for Choosing Vendors for a 2026 Galveston Wedding
              </h2>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>✔ Choose vendors who&apos;ve worked in Galveston before</li>
                <li>✔ Ask about backup rain/wind plans</li>
                <li>✔ Confirm load-in/load-out timing (downtown is tight)</li>
                <li>✔ Share your venue floor plan early</li>
                <li>✔ Request a mood board if you&apos;re using florals or decor</li>
                <li>✔ For coastal weddings, choose caterers familiar with sea-air, timing logistics, and historic-venue restrictions</li>
                <li>✔ Use local rental services + planners who have done island setups — this ensures timing and transport are handled properly</li>
              </ul>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⚠️ Important Notes About Vendor Availability
              </h2>
              <p className="leading-relaxed">
                Despite this comprehensive list, vendor availability has some limitations:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Many photographers / videographers serving Galveston travel from nearby cities when booked — hard to pre-catalog reliably</li>
                <li>Rentals, specialized décor, large-scale production gear (lighting, sound, staging) often come from outside the island</li>
                <li>Seasonal / part-time vendors — Florists, bakers, dessert vendors, small rental shops may go in and out of service</li>
                <li>Some venues &amp; vendors may not actively maintain their public listing — you&apos;d need to verify availability when booking</li>
                <li>Local regulations, coastal weather, tides, and permit requirements can make availability unpredictable — good planning + backups + local vendor experience are essential</li>
              </ul>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Best approach:</strong> Regularly check local directories like <a href="https://www.marriedonisland.com/vendors" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Married On Island</a>, <a href="https://www.weddingwire.com/c/tx-texas/galveston" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">WeddingWire</a>, and <a href="https://www.visitgalveston.com/weddings" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Visit Galveston</a> to keep your vendor list fresh.
              </p>

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

              <div className="mt-12 rounded-2xl border-2 border-accent-brick/20 bg-accent-brick/5 p-6">
                <h3 className="font-serif text-2xl text-charcoal mb-4">
                  📥 Download Complete Vendor Directory
                </h3>
                <p className="text-sm text-charcoal/70 mb-4">
                  Get our complete 2026 Galveston Island vendor directory as a CSV file. Perfect for importing into spreadsheets, sharing with your planner, or keeping as a reference.
                </p>
                <a
                  href="/2026-galveston-island-vendor-list.csv"
                  download="2026-galveston-island-vendor-list.csv"
                  className="inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-6 py-3 text-base bg-accent-brick text-parchment hover:bg-accent-brick/90"
                >
                  Download 2026 Vendor List CSV →
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-charcoal/10 bg-white/80 p-6">
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

