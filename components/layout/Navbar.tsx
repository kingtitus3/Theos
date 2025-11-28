"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn, scrollToTarget } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#spaces", label: "Spaces" },
  { href: "#gallery", label: "Gallery" },
  { href: "#virtual-tour", label: "Virtual Tour" },
  { href: "#pricing", label: "Pricing" },
  { href: "#amenities", label: "Amenities" },
  { href: "#accommodations", label: "Stay" },
  { href: "#floorplan", label: "Floorplan" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (isHomePage) {
      scrollToTarget(href);
    } else {
      // Navigate to homepage with anchor
      window.location.href = `/${href}`;
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors",
        solid ? "bg-charcoal/95 backdrop-blur" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 text-sm uppercase tracking-wide text-parchment">
        <Link href="/" className="relative h-8 w-28 sm:h-10 sm:w-32">
          <Image
            src="https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/logo.png"
            alt="Theos Event Space"
            fill
            className="object-contain"
            unoptimized
            priority
          />
        </Link>
        <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              className="text-xs font-semibold text-parchment/80 transition hover:text-white"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="hidden lg:inline-flex"
          onClick={() => handleNavClick("#contact")}
        >
          Book a Tour
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="lg:hidden"
          onClick={() => handleNavClick("#contact")}
        >
          Tour
        </Button>
      </nav>
    </header>
  );
};
