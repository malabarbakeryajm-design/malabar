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
      // When preloader finishes, signal window, Lenis and hero video to sync immediately
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new CustomEvent("site-loaded"));
    };
  }, [loading]);

  useEffect(() => {
    let currentProgress = 15;
    let imagesDone = false;
    let windowDone = false;
    let videoDone = false;

    // Detect when all critical visual elements in the DOM are loaded
    const checkImagesLoaded = () => {
      const images = Array.from(document.querySelectorAll("img"));
      if (images.length === 0) return Promise.resolve();
      return Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          });
        })
      );
    };

    // Detect hero video readiness (buffered first segments and metadata)
    const checkVideoLoaded = () => {
      const video = document.querySelector("video");
      if (!video) return Promise.resolve();
      if (video.readyState >= 3) return Promise.resolve();
      return new Promise<void>((resolve) => {
        const onReady = () => resolve();
        video.addEventListener("canplaythrough", onReady, { once: true });
        video.addEventListener("canplay", onReady, { once: true });
        video.addEventListener("loadeddata", onReady, { once: true });
        // Fallback for video
        setTimeout(resolve, 2400);
      });
    };

    // Smooth incremental animation towards target
    const interval = setInterval(() => {
      const allLoaded = imagesDone && windowDone && videoDone;
      if (allLoaded) {
        currentProgress = Math.min(100, currentProgress + 10);
      } else if (currentProgress < 85) {
        currentProgress += Math.floor(Math.random() * 5) + 3;
      }
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }
    }, 50);

    // Track window load
    if (document.readyState === "complete") {
      windowDone = true;
    } else {
      window.addEventListener("load", () => {
        windowDone = true;
      }, { once: true });
    }

    // Track images
    checkImagesLoaded().then(() => {
      imagesDone = true;
    });

    // Track video
    checkVideoLoaded().then(() => {
      videoDone = true;
    });

    // Check all systems ready
    Promise.all([
      new Promise<void>((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", () => resolve(), { once: true });
      }),
      checkImagesLoaded(),
      checkVideoLoaded(),
    ]).then(() => {
      imagesDone = true;
      windowDone = true;
      videoDone = true;
      setIsReady(true);
    });

    // Safety timeout: Maximum 3.2s on very poor cellular connections
    const maxSafetyTimer = setTimeout(() => {
      imagesDone = true;
      windowDone = true;
      videoDone = true;
      setIsReady(true);
      currentProgress = 100;
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(maxSafetyTimer);
    };
  }, []);

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

