"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-brand-cream pt-20 lg:pt-0">
      
      {/* Left Content Half */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-10 md:p-20 relative z-10">
        <div className="max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-brand-gold" />
            <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-brand-gold font-medium">
              Since 2005
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-[80px] text-brand-dark leading-[1.05] mb-8"
          >
            Taste.<br />
            Tradition.<br />
            Trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-brand-text/70 text-[15px] md:text-lg font-light leading-relaxed max-w-md"
          >
            Bringing authentic and familiar flavours to the UAE market.
          </motion.p>
        </div>
      </div>

      {/* Right Image Half */}
      <motion.div 
        className="w-full lg:w-[45%] h-[50vh] lg:h-screen relative"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/about/hero-split.jpg"
          alt="Bright modern bakery interior"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        {/* Very light gradient to blend edges if needed on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-transparent lg:hidden" />
      </motion.div>

    </section>
  );
}
