import { FaInstagram, FaFacebook, FaTiktok, FaPinterest, FaXTwitter, FaThreads } from "react-icons/fa6";

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    href: "https://www.instagram.com/theosgalveston/", 
    icon: FaInstagram,
    label: "Instagram"
  },
  { 
    href: "https://www.facebook.com/profile.php?id=61584310322904", 
    icon: FaFacebook,
    label: "Facebook"
  },
  { 
    href: "https://www.tiktok.com/@theosgalveston", 
    icon: FaTiktok,
    label: "TikTok"
  },
  { 
    href: "https://pin.it/fGVe2g3w8", 
    icon: FaPinterest,
    label: "Pinterest"
  },
  { 
    href: "https://x.com/theosgalveston", 
    icon: FaXTwitter,
    label: "X (Twitter)"
  },
  { 
    href: "https://www.threads.net/@theosgalveston", 
    icon: FaThreads,
    label: "Threads"
  },
];

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

export function SocialIcons({ className = "", iconSize = 24, showLabels = false }: SocialIconsProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition"
            aria-label={link.label}
          >
            <Icon size={iconSize} />
            {showLabels && <span className="text-sm">{link.label}</span>}
          </a>
        );
      })}
    </div>
  );
}

