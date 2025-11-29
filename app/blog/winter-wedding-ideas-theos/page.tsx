"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FloatingChatButton } from "@/components/booking/FloatingChatButton";
import { scrollToTarget } from "@/lib/utils";
import Link from "next/link";

export default function WinterWeddingIdeasPage() {
  return (
    <>
      <article className="bg-sand py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-full bg-accent-brick/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-accent-brick">
                Winter Wedding Guide
              </div>
              <h1 className="mb-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">
                ❄️ 10 Stunning Winter Wedding Ideas for THEOS
              </h1>
              <p className="text-lg text-charcoal/70 italic">
                Aesthetic, cozy, and timeless winter wedding inspiration for Galveston brides.
              </p>
              <p className="mt-4 text-sm text-charcoal/60">
                (2025–2026 Guide)
              </p>
            </header>

            {/* Content */}
            <div className="space-y-8 text-charcoal/80">
              <p className="text-lg leading-relaxed">
                Winter weddings are becoming one of the biggest trends in Texas — and for good reason. Cooler weather, moodier lighting, elegant color palettes, and more open availability make December–February the perfect season to get married.
              </p>
              <p className="leading-relaxed">
                If you&apos;re planning a winter wedding at <strong className="text-charcoal">THEOS Galveston</strong>, this guide will show you exactly how to transform our historic brick venue into a warm, romantic, unforgettable setting.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 1. Candle-Lit Glow Everywhere
              </h2>
              <p className="leading-relaxed">
                Nothing elevates a winter wedding like soft, flickering candlelight against THEOS&apos; exposed brick walls.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Best ideas:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Hundreds of pillar candles lining the aisle</li>
                <li>Floating candles on every table</li>
                <li>A candle-lit backdrop behind your sweetheart table</li>
                <li>White + gold candle pillars around the archway</li>
              </ul>
              <p className="leading-relaxed">
                The open industrial space turns into a warm winter sanctuary.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 2. Winter White Elegance
              </h2>
              <p className="leading-relaxed">
                Timeless. Clean. Magazine-ready.
              </p>
              <p className="leading-relaxed">
                White tones look <em>incredible</em> against THEOS&apos; raw textures.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Use:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>White florals (roses, hydrangeas, baby&apos;s breath)</li>
                <li>White linens</li>
                <li>White draping behind the ceremony</li>
                <li>Crystal or silver accents</li>
              </ul>
              <p className="leading-relaxed">
                Add soft greenery for contrast. Your photos will look angelic.
              </p>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Floral vendors:</strong> Work with <a href="https://www.galvestonflowercompany.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Galveston Flower Company</a> or <a href="https://www.stemsbystacy.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Stems by Stacy</a> to create stunning white floral arrangements.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 3. Luxe Velvet Accents
              </h2>
              <p className="leading-relaxed">
                Winter is the best time to bring in texture.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Top choices:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Velvet bridesmaid dresses</li>
                <li>Velvet table runners</li>
                <li>Velvet lounge seating</li>
                <li>Emerald, navy, burgundy, or black velvet napkins</li>
              </ul>
              <p className="leading-relaxed">
                Velvet instantly adds richness and depth to the industrial space.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 4. Mocha, Champagne & Gold Palette
              </h2>
              <p className="leading-relaxed">
                A warm, dreamy combination perfect for winter weddings.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Palette ideas:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Champagne linens</li>
                <li>Gold cutlery</li>
                <li>Warm mocha florals</li>
                <li>Soft amber lighting</li>
                <li>Gold rim glassware</li>
              </ul>
              <p className="leading-relaxed">
                It&apos;s elegant, modern, and fits THEOS&apos; aesthetic beautifully.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 5. Winter Greenery Wall or Arch
              </h2>
              <p className="leading-relaxed">
                Get the lush winter forest look <em>indoors</em>.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Best greenery for winter:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Cedar</li>
                <li>Pine</li>
                <li>Eucalyptus</li>
                <li>Magnolia leaves</li>
                <li>Olive branches</li>
              </ul>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Create:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>A full ceremony arch</li>
                <li>A greenery photo backdrop</li>
                <li>A greenery wall behind the sweetheart table</li>
              </ul>
              <p className="leading-relaxed">
                This adds softness to the industrial backdrop.
              </p>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Floral vendors:</strong> <a href="https://www.galvestonflowercompany.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Galveston Flower Company</a> and <a href="https://www.stemsbystacy.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Stems by Stacy</a> specialize in creating stunning greenery installations.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 6. &quot;Snowfall&quot; Lighting Installations
              </h2>
              <p className="leading-relaxed">
                Lighting is the secret to winter magic.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Ideas that work extremely well at THEOS:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Hanging warm string lights from the rafters</li>
                <li>Fairy lights draped along the brick wall</li>
                <li>&quot;Snowfall&quot; LED curtain lights behind the ceremony</li>
                <li>Cold sparklers for your first dance</li>
              </ul>
              <p className="leading-relaxed">
                The clean white-painted walls reflect light beautifully.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 7. Hot Cocoa or Coffee Bar
              </h2>
              <p className="leading-relaxed">
                Winter weddings = cozy drinks your guests will rave about.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Serve:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Gourmet cocoa</li>
                <li>Coffee + espresso</li>
                <li>Flavored syrups</li>
                <li>Bailey&apos;s, Kahlúa, spiced rum add-ons</li>
                <li>Marshmallows + toppings</li>
              </ul>
              <p className="leading-relaxed">
                This works perfectly near the bar or lounge area of THEOS.
              </p>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Catering options:</strong> <a href="https://www.mosquitocafe.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Mosquito Café</a>, <a href="https://www.chopinmonami.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Chopin Mon Ami</a>, or <a href="https://www.bennosofgalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Benno&apos;s</a> can help create the perfect winter beverage station.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 8. Winter Floral Installations
              </h2>
              <p className="leading-relaxed">
                The industrial look makes florals <em>pop</em>.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Best winter florals:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>White roses</li>
                <li>Amaryllis</li>
                <li>Anemones</li>
                <li>Ranunculus</li>
                <li>Dusty miller</li>
                <li>Baby&apos;s breath</li>
                <li>Branches &amp; winter greens</li>
              </ul>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Install above:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Sweetheart table</li>
                <li>Entry arch</li>
                <li>Aisle markers</li>
                <li>Photo corner</li>
              </ul>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Floral vendors:</strong> <a href="https://www.galvestonflowercompany.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Galveston Flower Company</a> and <a href="https://www.stemsbystacy.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Stems by Stacy</a> excel at creating dramatic floral installations.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 9. Moody Black &amp; Gold Theme
              </h2>
              <p className="leading-relaxed">
                A strong winter vibe that pairs beautifully with THEOS&apos; structure.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">Use:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>Matte black dinnerware</li>
                <li>Gold chairs + gold candle holders</li>
                <li>Black linens</li>
                <li>Gold flatware</li>
                <li>Black + white florals</li>
              </ul>
              <p className="leading-relaxed">
                This is a bold, modern aesthetic that screams winter sophistication.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                ⭐ 10. Open-Air Winter Ceremony at THEOS
              </h2>
              <p className="leading-relaxed">
                One of THEOS&apos; unique features is its open-air industrial layout — perfect in cool weather.
              </p>
              <h3 className="mt-6 mb-4 font-serif text-xl text-charcoal">For winter ceremonies:</h3>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>White aisle runner</li>
                <li>Double-row candles</li>
                <li>Greenery column accents</li>
                <li>Micro heaters if needed</li>
                <li>Soft overhead lighting</li>
              </ul>
              <p className="leading-relaxed">
                When the weather hits 55–65°, it&apos;s perfect.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                🔔 Bonus: Why Winter Weddings at THEOS Are a Hidden Gem
              </h2>
              <p className="leading-relaxed">
                Most couples don&apos;t know this, but winter weddings come with huge advantages:
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>✔ Lower vendor prices</li>
                <li>✔ More open dates</li>
                <li>✔ More flexible travel/lodging</li>
                <li>✔ Cooler (and more comfortable) weather</li>
                <li>✔ Aesthetic indoor/outdoor lighting</li>
                <li>✔ Stunning photos with THEOS&apos; textures</li>
                <li>✔ Easier to secure your dream planner, florist, or photographer</li>
                <li>✔ THEOS looks <strong className="text-charcoal">gorgeous</strong> in candle-lit, winter-themed setups</li>
              </ul>
              <p className="leading-relaxed">
                Winter weddings at THEOS feel intimate, warm, modern, and beautifully cinematic.
              </p>
              <p className="leading-relaxed">
                <strong className="text-charcoal">Planning help:</strong> Work with <a href="https://www.eventscompanyofgalveston.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Events Company of Galveston</a> or <a href="https://www.loverslaneevents.com" target="_blank" rel="noreferrer" className="text-accent-brick hover:underline">Lovers Lane Events</a> to bring your winter vision to life.
              </p>

              <h2 className="mt-12 mb-6 font-serif text-3xl text-charcoal">
                💍 Planning a Winter Wedding in 2025–2026?
              </h2>
              <p className="leading-relaxed">
                We&apos;d love to show you how THEOS can bring your wedding vision to life.
              </p>
              <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                <li>📍 Downtown Galveston</li>
                <li>🏛 Historic brick event venue</li>
                <li>🛏 Loft Suite + lodging next door</li>
                <li>📅 Friday &amp; Sunday availability</li>
                <li>✨ Perfect for winter candle-lit weddings</li>
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" onClick={() => scrollToTarget("#contact")}>
                  Check Availability or Book a Tour
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

