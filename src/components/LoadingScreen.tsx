"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only lock scrolling while loading via Lenis stop/start to prevent breaking scroll physics
    if (loading) {
      if ((window as any).__lenisInstance) {
        (window as any).__lenisInstance.stop();
      }
      document.documentElement.classList.add("lenis-stopped");
    } else {
      if ((window as any).__lenisInstance) {
        (window as any).__lenisInstance.start();
      }
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      if ((window as any).__lenisInstance) {
        (window as any).__lenisInstance.start();
      }
      document.documentElement.classList.remove("lenis-stopped");
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new CustomEvent("site-loaded"));
    };
  }, [loading]);

  useEffect(() => {
    let currentProgress = 25;
    let imagesDone = false;
    let windowDone = false;
    let videoDone = false;

    // Detect when critical above-the-fold and priority images are loaded
    const checkImagesLoaded = () => {
      const images = Array.from(document.querySelectorAll("img"));
      if (images.length === 0) return Promise.resolve();
      // Filter for priority/hero images or first 6 critical assets to avoid waiting for lazy-loaded off-screen footers
      const criticalImages = images.slice(0, 8);
      return Promise.all(
        criticalImages.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          });
        })
      );
    };

    // Detect hero video readiness (buffered first segments and decoded first frame)
    const checkVideoLoaded = () => {
      const video = document.querySelector("video");
      if (!video) return Promise.resolve();
      // readyState >= 2 means HAVE_CURRENT_DATA: first frame is decoded and ready to render immediately
      if (video.readyState >= 2) return Promise.resolve();
      return new Promise<void>((resolve) => {
        let isDone = false;
        const finish = () => {
          if (!isDone) {
            isDone = true;
            resolve();
          }
        };

        // Proactive decoder unlock
        if (video.paused && video.currentTime === 0) {
          video.play().then(() => {
            video.pause();
            finish();
          }).catch(() => {});
        }

        video.addEventListener("loadeddata", finish, { once: true });
        video.addEventListener("canplay", finish, { once: true });
        video.addEventListener("seeked", finish, { once: true });
        // Max wait for video decode: 2200ms
        setTimeout(finish, 2200);
      });
    };

    // Snappy, energetic progress ticker (fires every 28ms)
    const interval = setInterval(() => {
      const allLoaded = imagesDone && windowDone && videoDone;
      if (allLoaded) {
        // Accelerate to 100% smoothly and swiftly
        currentProgress = Math.min(100, currentProgress + 14);
      } else if (currentProgress < 88) {
        // Steady climb while buffering
        currentProgress += Math.floor(Math.random() * 6) + 4;
      }
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (typeof window !== "undefined") {
            (window as any).__siteLoaded = true;
            window.dispatchEvent(new CustomEvent("site-loaded"));
          }
          setLoading(false);
        }, 220);
      }
    }, 28);

    // Track window load
    if (document.readyState === "complete" || document.readyState === "interactive") {
      windowDone = true;
    } else {
      window.addEventListener("DOMContentLoaded", () => {
        windowDone = true;
      }, { once: true });
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
        if (document.readyState === "complete" || document.readyState === "interactive") resolve();
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

    // Tight maximum safety timeout: 2.8s max so users never wait unnecessarily
    const maxSafetyTimer = setTimeout(() => {
      imagesDone = true;
      windowDone = true;
      videoDone = true;
      setIsReady(true);
      currentProgress = 100;
      setProgress(100);
      setTimeout(() => {
        if (typeof window !== "undefined") {
          (window as any).__siteLoaded = true;
          window.dispatchEvent(new CustomEvent("site-loaded"));
        }
        setLoading(false);
      }, 200);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(maxSafetyTimer);
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          (window as any).__siteLoaded = true;
          window.dispatchEvent(new CustomEvent("site-loaded"));
        }
      }}
    >
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

