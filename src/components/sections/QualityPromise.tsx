"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

export default function QualityPromise() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 1.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden h-screen w-full py-[100px] px-6 md:py-0 bg-[#542818]"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/quality-bg.webp')" }}
      />
      
      {/* Background Lighting & Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,149,50,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,149,50,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(84,40,24,0),rgba(40,20,10,0.4)_100%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Decorative Wheat SVG (Background) */}
      <div className="absolute top-1/4 -translate-y-1/2 left-0 w-full h-full pointer-events-none flex justify-between px-10 md:px-20 z-0 opacity-10 text-[#C89532]">
        <svg viewBox="0 0 100 200" className="w-[30vw] md:w-[15vw] h-auto max-h-[400px]">
          <path fill="currentColor" d="M10,200 C30,100 80,50 90,0 C80,30 20,90 0,200 Z" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="70" cy="80" r="4" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 100 200" className="w-[30vw] md:w-[15vw] h-auto max-h-[400px] scale-x-[-1]">
          <path fill="currentColor" d="M10,200 C30,100 80,50 90,0 C80,30 20,90 0,200 Z" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="70" cy="80" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Main Content Center Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="relative z-10 max-w-[1100px] w-full mx-auto flex flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6 md:mb-10">
          <div className="w-8 md:w-12 h-[1px] bg-[#C89532]/60" />
          <span className="font-sans text-[11px] md:text-[13px] uppercase tracking-[0.25em] text-[#C89532]">
            The Malabar Promise
          </span>
          <div className="w-8 md:w-12 h-[1px] bg-[#C89532]/60" />
        </motion.div>

        {/* Main Slogan */}
        <motion.div variants={itemVariants} className="text-center mb-8 md:mb-14">
          <h2 className="flex flex-col items-center">
            <span className="sr-only">Quality in Every Bake.</span>
            <span
              aria-hidden="true"
              className="font-serif uppercase text-[#F7F0E6] text-[clamp(60px,18vw,90px)] md:text-[clamp(90px,10vw,155px)] font-medium leading-[0.8] md:leading-[0.85] tracking-[-0.03em]"
            >
              Quality
            </span>
            <span
              aria-hidden="true"
              className="font-serif text-[#D49A35] text-[clamp(38px,11vw,58px)] md:text-[clamp(50px,6vw,90px)] italic font-normal leading-[0.9] mt-2 md:mt-0"
            >
              in every bake.
            </span>
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center w-full max-w-xs mx-auto mb-16 md:mb-24">
          <motion.div variants={lineVariants} className="flex-1 h-[1px] bg-[#C89532]/40" />
          <motion.span variants={itemVariants} className="mx-4 text-[#C89532] text-xs">
            ❖
          </motion.span>
          <motion.div variants={lineVariants} className="flex-1 h-[1px] bg-[#C89532]/40" />
        </div>

        {/* Three Values */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {[
            {
              num: "01",
              title: "QUALITY",
              desc: "Carefully selected ingredients and consistent processes to ensure every bite is perfect.",
            },
            {
              num: "02",
              title: "CRAFT",
              desc: "Traditional inspiration blended seamlessly with modern production techniques.",
            },
            {
              num: "03",
              title: "TRUST",
              desc: "A steadfast commitment to quality and consistency that you can rely on.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.num}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center px-4 md:px-8 group"
            >
              {/* Desktop Vertical Divider */}
              {index !== 2 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3/4 max-h-[140px] bg-[#C89532]/35">
                  {/* Center Diamond/Point */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#C89532]" />
                </div>
              )}

              <span className="font-serif text-[#D19A38] text-[18px] md:text-[24px] mb-2 md:mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                {item.num}
              </span>
              <h3 className="relative font-serif text-[#F7F0E6] text-[24px] md:text-[28px] lg:text-[34px] font-medium mb-4 transition-colors duration-500 group-hover:text-white">
                {item.title}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C89532] transition-all duration-500 group-hover:w-1/2" />
              </h3>
              <p className="font-sans text-[rgba(247,240,230,0.72)] text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] max-w-[280px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
