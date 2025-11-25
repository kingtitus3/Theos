"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}

export const SectionHeader = ({ eyebrow, title, description, tone = "dark" }: SectionHeaderProps) => {
  const isLight = tone === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mb-8 space-y-3 sm:mb-10 sm:space-y-4 text-center"
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs uppercase tracking-[0.3em]",
            isLight ? "text-accent-gold" : "text-accent-brick",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-serif text-2xl sm:text-3xl lg:text-4xl", isLight ? "text-parchment" : "text-charcoal")}>
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto max-w-2xl text-sm sm:text-base px-2",
            isLight ? "text-parchment/80" : "text-charcoal/70",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
