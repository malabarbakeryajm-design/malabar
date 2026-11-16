"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-[#F8F1E8] pt-[120px] md:pt-[140px] pb-16 lg:py-0">
      
      {/* =========================================================================
          HERO BACKGROUND: Desktop Landscape & Mobile Optimized Portrait
         ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Mobile Portrait Background (hidden on md+) */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/images/about/about-hero-sweets-mobile.webp"
            alt="Malabar Bakery Traditional Sweets Background Mobile"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>

        {/* Desktop Landscape Background (hidden on mobile) */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/images/about/about-hero-sweets.webp"
            alt="Malabar Bakery Traditional Sweets Background Desktop"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* =========================================================================
          LEFT EDITORIAL CONTENT: Since 2005, Taste. Tradition. Trust.
         ========================================================================= */}
      <div className="relative z-10 max-w-[1340px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-xl lg:max-w-2xl py-8">
          
          {/* Label / Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3.5 mb-6 md:mb-8"
          >
            <div className="w-10 h-[1.5px] bg-[#B88643]" />
            <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#B88643] font-semibold">
              Since 2005
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#35180F] leading-[1.04] tracking-tight mb-8 font-normal"
          >
            Taste.<br />
            Tradition.<br />
            Trust.
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="text-[#35180F]/80 text-base md:text-lg font-light leading-relaxed max-w-md"
          >
            Bringing authentic and familiar flavours to the UAE market.
          </motion.p>

        </div>
      </div>

    </section>
  );
}