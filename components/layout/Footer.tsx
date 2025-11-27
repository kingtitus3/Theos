import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/theosgalveston/" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61584310322904" },
];

export const Footer = () => (
  <footer className="bg-charcoal text-parchment">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 sm:py-12 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="relative h-10 w-36 sm:h-12 sm:w-40 mb-2">
          <Image
            src="https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/logo.png"
            alt="Theos Event Space"
            fill
            className="object-contain brightness-0 invert"
            unoptimized
          />
        </div>
        <p className="mt-2 text-sm text-parchment/70">
          Historic brick venue for modern gatherings.
        </p>
        <div className="mt-4 space-y-1 text-sm text-parchment/70">
          <p>{CONTACT_INFO.addressLine}</p>
          <p>{CONTACT_INFO.phone}</p>
          <p>{CONTACT_INFO.email}</p>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <p className="uppercase tracking-wide text-parchment/60">Connect</p>
        <div className="flex flex-wrap gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-parchment/70 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-4 sm:py-6 text-center text-xs text-parchment/50">
      © {new Date().getFullYear()} Theos. All rights reserved.
    </div>
  </footer>
);
