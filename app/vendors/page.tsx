import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { ScrollToContactButton } from "@/components/layout/ScrollToContactButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2026 Galveston Island Wedding Vendor Directory | THEOS",
  description:
    "Browse a curated 2026 Galveston Island wedding vendor directory featuring planners, photographers, florists, caterers, DJs, beauty teams, rentals, and more that pair beautifully with THEOS.",
};

type Vendor = {
  name: string;
  website?: string;
  notes?: string;
  preferred?: boolean;
};

type VendorSection = {
  id: string;
  title: string;
  description?: string;
  vendors: Vendor[];
};

const VENDOR_SECTIONS: VendorSection[] = [
  {
    id: "planners",
    title: "Planners & Coordinators",
    description:
      "Start here. A great planner or coordinator will help you choose and manage the rest of your vendor team, especially for island logistics and backup plans.",
    vendors: [
      {
        name: "Water to Wine Events",
        website: "https://watertowineevents.com/galveston-wedding-planner",
        notes: "Full-service Galveston wedding planners; experienced with island logistics and vendors.",
        preferred: true,
      },
      {
        name: "Moments Event Planning & Design",
        website: "https://www.moments-events.com",
        notes: "Boutique planner based on Galveston Island.",
      },
      {
        name: "The Total Wedding Experience",
        website: "https://www.weddingwire.com/c/tx-texas/galveston/wedding-planners",
        notes: "Planning and coordination; listed among top planners serving Galveston.",
      },
      {
        name: "My Island Weddings",
        website: "https://www.myislandweddings.com",
        notes: "Specialized in beach weddings and elopements.",
      },
      {
        name: "Barefoot Weddings Galveston",
        website: "https://www.barefootweddingsgalveston.com",
        notes: "Beach weddings and elopements; simple ceremony packages.",
      },
      {
        name: "Events Company of Galveston",
        website: "https://www.eventscompanyofgalveston.com",
        notes: "Local event team familiar with downtown venues.",
        preferred: true,
      },
      {
        name: "Lovers Lane Events",
        website: "https://www.loverslaneevents.com",
        notes: "Romantic, design-forward planning; Galveston + Houston.",
        preferred: true,
      },
    ],
  },
  {
    id: "photography",
    title: "Photographers & Videography",
    description:
      "Vendors who understand Galveston light, weather, and THEOS’ brick + industrial textures.",
    vendors: [
      {
        name: "Degrees North Images",
        website: "https://www.degreesnorthimages.com",
        notes: "Island-based; elopements and full wedding coverage.",
      },
      {
        name: "Civic Photos",
        website: "https://www.civicphotos.com",
        notes: "Houston-based; often shoots in Galveston and downtown venues.",
        preferred: true,
      },
      {
        name: "Ever & Ivy",
        website: "https://www.everandivy.com",
        notes: "Modern, editorial-leaning wedding photography; travels to Galveston.",
      },
      {
        name: "Lovelee Photography",
        website: "https://www.loveleephotography.com",
        notes: "Clean, romantic style; Houston + Galveston.",
      },
      {
        name: "Stephanie Cave Photography",
        website: "https://www.stephaniecavephotography.com",
        notes: "Warm, story-driven wedding coverage; Houston + Galveston.",
      },
      {
        name: "Galveston Beach Photographers",
        notes: "Local teams who specialize in beach portraits and sunset sessions.",
      },
    ],
  },
  {
    id: "florists",
    title: "Florists & Floral Design",
    description:
      "Florists who know how to design for brick walls, high ceilings, and coastal weather.",
    vendors: [
      {
        name: "Galveston Flower Company",
        website: "https://www.galvestonflowercompany.com",
        notes: "Classic designs; great for timeless weddings.",
        preferred: true,
      },
      {
        name: "Stems by Stacy",
        website: "https://www.stemsbystacy.com",
        notes: "Modern, airy florals with luxe touches.",
        preferred: true,
      },
      {
        name: "Petal + Shine Floral & Event Design",
        website: "https://petalandshine.com",
        notes: "Floral + event design for Galveston and Houston.",
      },
      {
        name: "Bennett Floral",
        website: "https://www.bennettfloral.com",
        notes: "Established Galveston florist; close to downtown.",
      },
      {
        name: "Knapp Flower Shop",
        notes: "Local Galveston florist; ask about coastal-friendly florals.",
      },
      {
        name: "Island Florals & Decor",
        notes: "Affordable, reliable, and familiar with downtown venues.",
      },
    ],
  },
  {
    id: "catering",
    title: "Catering & Food",
    description:
      "Trusted caterers who know island logistics, historic venues, and coastal-friendly menus.",
    vendors: [
      {
        name: "Chopin Mon Ami Catering & Events",
        website: "https://www.chopinmonami.com",
        notes: "Frequently cater Galveston museums and historic venues.",
        preferred: true,
      },
      {
        name: "Mosquito Café Catering",
        website: "https://www.mosquitocafe.com",
        notes: "Island-favorite flavors and dependable service.",
        preferred: true,
      },
      {
        name: "Benno’s on the Beach",
        website: "https://www.bennosofgalveston.com",
        notes: "Laid-back coastal seafood; great for more casual receptions.",
        preferred: true,
      },
      {
        name: "Private Local Chefs",
        notes: "Great for intimate plated dinners or chef-driven experiences.",
      },
    ],
  },
  {
    id: "djs",
    title: "DJs & Entertainment",
    description:
      "Entertainment vendors who can work with THEOS’ open structure and downtown sound considerations.",
    vendors: [
      {
        name: "Island Sound DJs",
        website: "https://www.islandsounddjs.com",
        notes: "Professional, organized, and great MC skills.",
        preferred: true,
      },
      {
        name: "DJ Twinz",
        website: "https://www.djtwins.com",
        notes: "High-energy, crowd-pleasing mixes + lighting options.",
        preferred: true,
      },
      {
        name: "LG Event Entertainment & Production",
        website: "https://lgevententertainment.com",
        notes: "DJ, lighting, and production; Houston-based but travels.",
      },
      {
        name: "DJU Productions",
        website: "https://djuproductions.com",
        notes: "DJ + MC + lighting; Houston area, confirm Galveston events.",
      },
      {
        name: "Johnny Black Productions",
        website: "https://johnnyblackproductions.com",
        notes: "DJ & entertainment; often travels for coastal weddings.",
      },
    ],
  },
  {
    id: "cakes",
    title: "Cakes & Desserts",
    vendors: [
      {
        name: "Cakes by Jula",
        website: "https://www.cakesbyjula.com",
        notes: "Classic, elegant wedding cakes in every size.",
        preferred: true,
      },
      {
        name: "PattyCakes Bakery",
        website: "https://www.pattycakesbakery.com",
        notes: "Island favorite; great for groom’s cakes and dessert tables.",
        preferred: true,
      },
      {
        name: "Small Cottage Bakers (Home-Based)",
        notes: "Budget-friendly custom cakes and desserts.",
      },
    ],
  },
  {
    id: "beauty",
    title: "Beauty, Hair & Makeup",
    description:
      "Teams who understand coastal humidity, timelines, and getting-ready logistics at THEOS’ Loft Suite.",
    vendors: [
      {
        name: "Salty Skin + Hair",
        website: "https://www.saltyskinandhair.com",
        notes: "Island-based bridal glam team; specializes in coastal weddings.",
        preferred: true,
      },
      {
        name: "La Moda Salon & Day Spa",
        notes: "Local salon; great for small wedding parties.",
      },
      {
        name: "Atmosphere The Salon & Spa",
        notes: "Full-service salon on the island.",
      },
      {
        name: "Blush Salon",
        website: "https://www.blushsalongalveston.com",
        notes: "Galveston salon with bridal services.",
      },
      {
        name: "Beautique",
        website: "https://www.beautiquegalveston.com",
        notes: "Beauty boutique and salon in Galveston.",
      },
      {
        name: "Hey Lovely Makeup",
        website: "https://heylovelymakeup.com",
        notes: "Houston-based bridal beauty team; frequently travels.",
      },
      {
        name: "Blushworthy",
        website: "https://blushworthymakeup.com",
        notes: "On-site bridal makeup; Houston-based, confirm Galveston.",
      },
    ],
  },
  {
    id: "rentals",
    title: "Rentals, Decor & Tents",
    description:
      "Rental partners for tables, chairs, linens, lounges, decor, and tented add-ons for THEOS or nearby events.",
    vendors: [
      {
        name: "Island Events Rental",
        website: "https://www.islandeventsrental.com",
        notes: "Local basics; easy delivery on the island.",
        preferred: true,
      },
      {
        name: "A Finer Event",
        website: "https://www.afinerevent.com",
        notes: "Tables, chairs, linens, arches, chargers, and more.",
        preferred: true,
      },
      {
        name: "Tour de Tents",
        notes: "Island-based tents and outdoor setups.",
      },
      {
        name: "On Cloud9 Event Rentals",
        notes: "Event rentals serving Galveston and the coastal region.",
      },
      {
        name: "Any Occasion Tents & Events",
        website: "https://anyoccasionhouston.com",
        notes: "Tents, tables, linens, decor; commonly used for coastal events.",
      },
      {
        name: "Aztec Events & Tents",
        website: "https://www.aztecusa.com",
        notes: "Large-scale tenting and event rentals; confirm Galveston projects.",
      },
      {
        name: "Party Time Rentals",
        website: "https://www.partytimerentals.com",
        notes: "General party rentals; Houston area, confirm Galveston.",
      },
    ],
  },
  {
    id: "officiants",
    title: "Officiants & Ceremony Services",
    vendors: [
      {
        name: "Weddings by Lee Ann",
        notes: "Local officiant for Galveston beaches and venues.",
      },
      {
        name: "Barefoot Weddings Officiant",
        website: "https://www.barefootweddingsgalveston.com",
        notes: "Officiant services bundled with beach ceremonies.",
      },
      {
        name: "My Island Weddings Officiant",
        website: "https://www.myislandweddings.com",
        notes: "Officiant and ceremony setups for beach weddings.",
      },
    ],
  },
  {
    id: "lodging",
    title: "Lodging Near THEOS",
    description:
      "Places for you and your guests to stay within a short walk or drive of THEOS.",
    vendors: [
      {
        name: "THEOS Loft Suite",
        website: "https://www.theosgalveston.com/loft-suite",
        notes: "Private 1 bed / 1 bath suite directly above THEOS; ideal for getting-ready and overnight stay.",
        preferred: true,
      },
      {
        name: "Two Airbnbs Next Door",
        notes: "Literally next door to THEOS; perfect for family or wedding party.",
        preferred: true,
      },
      {
        name: "The Tremont House",
        website: "https://www.tremonthouse.com",
        notes: "Luxury boutique hotel in the Strand district.",
      },
      {
        name: "Grand Galvez",
        website: "https://www.grandgalvez.com",
        notes: "Historic beachfront hotel with classic architecture.",
      },
      {
        name: "The San Luis Resort",
        website: "https://www.sanluisresort.com",
        notes: "Resort-style property with guest accommodations.",
      },
      {
        name: "Airbnb / VRBO Beach Houses",
        notes: "Great for larger groups or full-weekend stays on the island.",
      },
    ],
  },
  {
    id: "extras",
    title: "Photo Booths & Directories",
    vendors: [
      {
        name: "ShutterBooth Houston",
        website: "https://shutterbooth.com/houston",
        notes: "Modern photo booths; travels to Galveston venues.",
      },
      {
        name: "Mint Photo Booth",
        website: "https://mintphotobooth.com",
        notes: "Stylish photo booth setups; confirm Galveston availability.",
      },
      {
        name: "Married On Island",
        website: "https://www.marriedonisland.com/vendors",
        notes: "Local wedding directory focused on Galveston.",
      },
      {
        name: "WeddingWire – Galveston Vendors",
        website: "https://www.weddingwire.com/c/tx-texas/galveston/wedding-vendors",
        notes: "Comprehensive wedding vendor directory with Galveston filters.",
      },
      {
        name: "Visit Galveston – Weddings",
        website: "https://www.visitgalveston.com/weddings",
        notes: "Official tourism site with venues and planning resources.",
      },
      {
        name: "THEOS 2026 Galveston Island Vendor CSV",
        website: "/2026-galveston-island-vendor-list.csv",
        notes: "Downloadable spreadsheet of this directory for your planning.",
      },
    ],
  },
];

export default function VendorsPage() {
  return (
    <section className="bg-sand py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Vendor Directory"
          title="2026 Galveston Island Wedding Vendor Directory"
          description="Browse trusted planners, photographers, florists, caterers, DJs, beauty teams, rentals, and more that pair beautifully with THEOS and downtown Galveston."
        />

        <div className="mt-8 mb-10 rounded-2xl border border-charcoal/10 bg-white/80 p-6">
          <p className="text-sm text-charcoal/80">
            This directory is designed to help you quickly build a vendor team for your wedding at{" "}
            <strong className="text-charcoal">THEOS</strong> or in downtown Galveston. Vendors marked with{" "}
            <span className="font-semibold text-accent-brick">“Preferred by THEOS”</span> are frequently
            recommended or align especially well with the venue.
          </p>
          <p className="mt-3 text-sm text-charcoal/80">
            You can also{" "}
            <a
              href="/2026-galveston-island-vendor-list.csv"
              className="font-medium text-accent-brick underline underline-offset-2 hover:text-accent-brick/80"
            >
              download the full 2026 Galveston Island vendor list as a CSV
            </a>{" "}
            to sort and filter in Google Sheets or Excel.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-8">
            {VENDOR_SECTIONS.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-serif text-2xl text-charcoal">{section.title}</h2>
                {section.description && (
                  <p className="mt-1 text-sm text-charcoal/75">{section.description}</p>
                )}
                <div className="mt-4 space-y-3">
                  {section.vendors.map((vendor) => (
                    <Card key={vendor.name} className="border border-charcoal/10 bg-white/90">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-medium text-charcoal">{vendor.name}</p>
                          {vendor.preferred && (
                            <span className="rounded-full bg-accent-brick/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-brick">
                              Preferred by THEOS
                            </span>
                          )}
                        </div>
                        {vendor.website && (
                          <a
                            href={vendor.website}
                            target={vendor.website.startsWith("http") ? "_blank" : undefined}
                            rel={vendor.website.startsWith("http") ? "noreferrer" : undefined}
                            className="block text-xs font-medium text-accent-brick hover:text-accent-brick/80 hover:underline"
                          >
                            Visit website →
                          </a>
                        )}
                        {vendor.notes && (
                          <p className="text-sm text-charcoal/75">{vendor.notes}</p>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <Card className="border border-charcoal/10 bg-white/90">
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-charcoal">Plan with THEOS</h3>
                <p className="text-sm text-charcoal/75">
                  Have questions about which vendors fit your date, budget, and aesthetic best? Share
                  your details and we can help you narrow this list.
                </p>
                <ScrollToContactButton
                  label="Ask About Vendors & Availability"
                  className="w-full"
                />
              </div>
            </Card>

            <Card className="border border-charcoal/10 bg-white/90">
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-charcoal">Quick links</h3>
                <ul className="space-y-2 text-sm text-charcoal/80">
                  <li>
                    <Link
                      href="/blog/best-wedding-vendors-galveston"
                      className="text-accent-brick hover:underline"
                    >
                      Best Wedding Vendors in Galveston →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/galveston-wedding-guide-2026"
                      className="text-accent-brick hover:underline"
                    >
                      Galveston Wedding Guide 2026 →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/winter-wedding-ideas-theos"
                      className="text-accent-brick hover:underline"
                    >
                      Winter Wedding Ideas for THEOS →
                    </Link>
                  </li>
                  <li>
                    <Link href="/giveaway" className="text-accent-brick hover:underline">
                      Bridal Giveaway & Newsletter →
                    </Link>
                  </li>
                </ul>
              </div>
            </Card>
          </aside>
        </div>
      </Container>
    </section>
  );
}


