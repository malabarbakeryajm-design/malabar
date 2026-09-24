"use client";

import { motion } from "framer-motion";

export default function QualitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
    },
  };

  return (
    <section className="relative py-20 md:py-[120px] px-6 bg-[#542818] overflow-hidden">
      {/* Subtle radial lighting effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,149,50,0.06)_0%,transparent_60%)] pointer-events-none" />
      {/* Optional: Film grain texture (using a CSS pattern or simple pseudo element) */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-10 md:mb-12">
          <div className="w-12 h-[1px] bg-[#C89532]/40" />
          <span className="text-[11px] md:text-[13px] uppercase tracking-[0.22em] text-[#C89532] text-center">
            The Malabar Promise
          </span>
          <div className="w-12 h-[1px] bg-[#C89532]/40" />
        </motion.div>

        {/* Main Typography */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="flex flex-col items-center">
            <motion.span
              variants={itemVariants}
              className="font-serif uppercase text-brand-cream text-[clamp(64px,8vw,140px)] leading-[0.9] tracking-tight"
            >
              QUALITY
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="font-serif text-[#C89532]/90 text-[clamp(42px,5vw,80px)] leading-[1] italic font-light mt-2 md:mt-0"
            >
              in every bake.
            </motion.span>
          </h2>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center max-w-sm mx-auto mb-16 md:mb-24">
          <motion.div variants={lineVariants} className="flex-1 h-[1px] bg-[#C89532]/30" />
          <motion.span variants={itemVariants} className="mx-4 text-[#C89532] text-sm">
            ❖
          </motion.span>
          <motion.div variants={lineVariants} className="flex-1 h-[1px] bg-[#C89532]/30" />
        </div>

        {/* Three Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {[
            {
              num: "01",
              title: "QUALITY",
              desc: "Carefully selected ingredients and consistent processes.",
            },
            {
              num: "02",
              title: "CRAFT",
              desc: "Traditional inspiration blended with modern production.",
            },
            {
              num: "03",
              title: "TRUST",
              desc: "A commitment to quality and consistency.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.num}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center px-4 md:px-12 py-8 md:py-0"
            >
              {/* Desktop Vertical Dividers */}
              {index !== 2 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-full max-h-[120px] bg-[#C89532]/20" />
              )}
              {/* Mobile Horizontal Dividers */}
              {index !== 0 && (
                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[#C89532]/20" />
              )}

              <span className="font-serif text-[#C89532] mb-3 text-sm">{item.num}</span>
              <h3 className="font-serif text-brand-cream text-2xl mb-4 tracking-wide uppercase">
                {item.title}
              </h3>
              <p className="text-brand-cream/60 text-sm md:text-base font-light leading-relaxed max-w-[280px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
