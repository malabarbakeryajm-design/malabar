"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay postponed or prevented:", err);
      });
    }
  }, []);

  // 120fps fluid scroll-driven animation effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.9, 0.3]);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Scroll Animation Effect: 120fps Parallax & Smooth Depth on Scroll */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          scale,
          y,
          opacity,
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Lightweight subtle top & bottom gradient transitions */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-dark/60 to-transparent pointer-events-none z-[2]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark/70 to-transparent pointer-events-none z-[2]" />
      </motion.div>

      {/* Elegant Minimalist Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold/80 font-medium">Scroll</span>
        <div className="w-[1px] h-10 bg-brand-offwhite/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
