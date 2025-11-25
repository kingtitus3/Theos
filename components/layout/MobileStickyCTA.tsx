"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { scrollToTarget } from "@/lib/utils";

export function MobileStickyCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) return null;

  const handleClick = () => {
    scrollToTarget("#contact");
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex flex-col text-xs text-white/80">
          <span className="font-medium text-white">Book a tour at Theos</span>
          <span>Check your date &amp; get pricing.</span>
        </div>
        <Button size="sm" onClick={handleClick}>
          Book a Tour
        </Button>
      </div>
    </div>
  );
}


