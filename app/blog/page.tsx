import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FloatingChatButton } from "@/components/booking/FloatingChatButton";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wedding Planning Blog | Theos Galveston",
  description:
    "Expert wedding planning guides, vendor recommendations, and inspiration for your Galveston wedding at Theos.",
  keywords: [
    "Galveston wedding blog",
    "wedding planning guide",
    "Galveston wedding tips",
    "wedding venue blog",
  ],
};

const BLOG_POSTS = [
  {
    slug: "best-wedding-vendors-galveston",
    title: "💍 Best Wedding Vendors in Galveston",
    description:
      "Your complete list of trusted planners, photographers, florists, caterers & more for your Galveston wedding. Find the best wedding vendors serving THEOS and downtown Galveston.",
    date: "2024-12-02",
    category: "Vendor Guide",
    image: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/wedding%20mock%20up%202.png",
  },
  {
    slug: "winter-wedding-ideas-theos",
    title: "❄️ 10 Stunning Winter Wedding Ideas for THEOS",
    description:
      "Aesthetic, cozy, and timeless winter wedding inspiration for Galveston brides. Discover 10 stunning winter wedding ideas perfect for THEOS historic brick venue.",
    date: "2024-12-01",
    category: "Wedding Ideas",
    image: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/detail-2.jpg",
  },
  {
    slug: "galveston-wedding-guide-2026",
    title: "🌴 Galveston Wedding Guide 2026",
    description:
      "Everything you need to plan your dream coastal Texas wedding in Galveston. Venues, vendors, lodging, permits, photoshoot spots, budgeting tips, and why couples choose this island for their big day.",
    date: "2024-11-28",
    category: "Planning Guide",
    image: "https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/gallery/wedding%20mock%20up%202.png",
  },
  // Add more blog posts here as you create them
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-sand py-12 sm:py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Blog"
            title="Wedding Planning Guides & Inspiration"
            description="Expert tips, vendor recommendations, and everything you need to plan your perfect Galveston wedding."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Card key={post.slug} className="group overflow-hidden transition-shadow hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-video w-full overflow-hidden bg-charcoal">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-accent-brick">
                        {post.category}
                      </span>
                      <span className="text-xs text-charcoal/60">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>
                    <h3 className="mb-3 font-serif text-2xl text-charcoal group-hover:text-accent-brick transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70 line-clamp-3">
                      {post.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 text-accent-brick hover:text-accent-brick/80"
                    >
                      Read More →
                    </Button>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          {BLOG_POSTS.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-charcoal/60">More blog posts coming soon!</p>
            </div>
          )}
        </Container>
      </section>
      <FloatingChatButton />
    </>
  );
}

