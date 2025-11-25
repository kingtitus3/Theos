"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { scrollToTarget } from "@/lib/utils";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-charcoal text-parchment">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://raw.githubusercontent.com/kingtitus3/Theos/main/public/images/spaces/main-hall.jpg"
      >
        <source src="/media/herofixed.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-4 pt-32 sm:pt-40 lg:pt-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-sm uppercase tracking-[0.3em] text-accent-gold"
        >
          Downtown Galveston, TX
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 font-serif text-5xl leading-tight sm:text-6xl"
        >
          {HERO_CONTENT.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-3 text-xl text-parchment/80"
        >
          {HERO_CONTENT.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-parchment/80"
        >
          {HERO_CONTENT.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg" onClick={() => scrollToTarget("#contact")}>
            {HERO_CONTENT.ctaPrimary}
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="border border-parchment"
            onClick={() => scrollToTarget("#pricing")}
          >
            {HERO_CONTENT.ctaSecondary}
          </Button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-4 text-sm text-parchment/80"
        >
          ⭐ Fast responses • ⭐ Transparent pricing • ⭐ Tours by appointment only
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 grid grid-cols-1 gap-6 text-sm sm:grid-cols-3"
        >
          {HERO_CONTENT.stats.map((stat) => (
            <div key={stat.label} className="border-l border-parchment/20 pl-4">
              <p className="text-xs uppercase tracking-[0.2em] text-parchment/60">
                {stat.label}
              </p>
              <p className="mt-2 text-lg font-semibold">{stat.value}</p>
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-parchment/60">
          Scroll to explore ↓
        </div>
      </div>
    </section>
  );
};
