"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with subtle scale */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Premium artisan bakery products"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle chocolate overlay */}
        <div className="absolute inset-0 bg-[#542818]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col items-center md:items-start text-center md:text-left mt-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.2em] uppercase text-brand-gold mb-6"
        >
          MALABAR BAKERY LLC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-offwhite leading-tight mb-6 max-w-4xl"
        >
          A Heritage of Taste.<br />
          A Tradition of Quality.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-brand-offwhite/80 text-lg md:text-xl max-w-2xl mb-10 font-light"
        >
          Since 2005, Malabar Bakery has been bringing authentic flavours to customers and businesses across the UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link 
            href="/products" 
            className="bg-brand-offwhite text-brand-text px-8 py-4 text-xs tracking-widest uppercase hover:bg-brand-gold hover:text-brand-offwhite transition-colors duration-300"
          >
            Explore Our Products
          </Link>
          <Link 
            href="/business" 
            className="text-brand-offwhite text-xs tracking-widest uppercase border border-brand-offwhite px-8 py-4 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-offwhite/10 transition-colors duration-300"
          >
            Become a Business Partner
          </Link>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 w-full bg-brand-dark/80 backdrop-blur-sm border-t border-brand-offwhite/10 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-4 gap-4 divide-x divide-brand-offwhite/10">
          <div className="text-center px-4">
            <h4 className="text-brand-gold font-serif text-xl lg:text-2xl mb-1">Established 2005</h4>
          </div>
          <div className="text-center px-4">
            <h4 className="text-brand-gold font-serif text-xl lg:text-2xl mb-1">100+ Products</h4>
          </div>
          <div className="text-center px-4">
            <h4 className="text-brand-gold font-serif text-xl lg:text-2xl mb-1">500,000+ Items Daily</h4>
          </div>
          <div className="text-center px-4">
            <h4 className="text-brand-gold font-serif text-xl lg:text-2xl mb-1">200+ Team Members</h4>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-brand-offwhite/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
