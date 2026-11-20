"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only lock scrolling while loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  useEffect(() => {
    // Smooth progress simulation and asset readiness detector
    let current = 15;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 85 && !isReady) {
        current = 88; // pause around 88% until window loaded
      }
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setProgress(Math.min(current, 100));
    }, 80);

    const onWindowLoad = () => {
      setIsReady(true);
      setProgress(100);
      // Brief pause at 100% so the user sees the completed state before elegant exit
      setTimeout(() => {
        setLoading(false);
      }, 550);
    };

    if (document.readyState === "complete") {
      onWindowLoad();
    } else {
      window.addEventListener("load", onWindowLoad);
    }

    // Safety fallback: Never keep user stuck for more than 3 seconds even on extremely slow networks
    const fallbackTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }, 2800);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", onWindowLoad);
      clearTimeout(fallbackTimer);
    };
  }, [isReady]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1A110E] text-[#F8F1E8] select-none"
        >
          {/* Subtle Ambient Vignette & Warm Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,134,67,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Central Logo & Brand Identity */}
          <div className="relative z-10 flex flex-col items-center px-6 max-w-sm w-full">
            {/* Pulsing Aura Behind Logo */}
            <motion.div
              animate={{
                scale: [0.95, 1.08, 0.95],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 w-48 h-48 rounded-full bg-[#B88643]/20 blur-2xl pointer-events-none"
            />

            {/* Malabar Bakery Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-44 sm:w-52 h-24 mb-6"
            >
              <Image
                src="/images/logo-transparent.webp"
                alt="Malabar Bakery"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 176px, 208px"
              />
            </motion.div>

            {/* Eyebrow / Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif italic text-sm sm:text-base text-[#D4AF37] tracking-wider mb-8 text-center"
            >
              Taste. Tradition. Trust.
            </motion.p>

            {/* Luxury Minimalist Loading Bar */}
            <div className="w-48 sm:w-56 h-[2px] bg-[#35180F] rounded-full overflow-hidden relative shadow-inner mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B88643] via-[#E5C158] to-[#B88643] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            {/* Counter percentage / Status */}
            <div className="flex items-center justify-between w-48 sm:w-56 text-[10px] tracking-[0.2em] uppercase text-[#F8F1E8]/40 font-medium">
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
