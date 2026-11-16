"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/videos/hero-scrub-fast.mp4");

  useEffect(() => {
    // Select fast 720p stream on mobile for instant buffering and smooth scrubbing
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setVideoSrc("/videos/hero-scrub-mobile.mp4");
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = true;
    video.pause();

    let targetTime = 0;
    let maxTimeReached = 0;
    let isSeeking = false;
    let animId: number;

    const duration = () => video.duration || 10;

    // Smooth forward-seek loop driven by requestAnimationFrame
    const updateLoop = () => {
      if (video.readyState >= 2 && !isSeeking) {
        const diff = targetTime - video.currentTime;
        if (diff > 0.005) {
          isSeeking = true;
          // Step smoothly towards target
          const next = Math.min(targetTime, video.currentTime + Math.max(0.04, diff * 0.28));
          try {
            video.currentTime = next;
          } catch {
            isSeeking = false;
          }
        }
      }

      // Dynamic camera depth
      if (videoWrapperRef.current) {
        const dur = duration();
        const progress = dur > 0 ? maxTimeReached / dur : 0;
        const scale = 1.0 + progress * 0.08;
        videoWrapperRef.current.style.transform = `scale(${scale}) translateZ(0)`;
      }

      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);

    const handleSeeked = () => {
      isSeeking = false;
    };
    video.addEventListener("seeked", handleSeeked);

    // Scroll progress handler: maps scroll position to video timeline (Forward only)
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = container.offsetHeight - viewportHeight;
      if (totalScrollable <= 0) return;

      const currentScrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollable));
      const calculatedTime = progress * duration();

      // FORWARD SCROLLING ONLY
      if (calculatedTime > maxTimeReached) {
        maxTimeReached = calculatedTime;
        targetTime = calculatedTime;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const handleReady = () => {
      setIsVideoLoaded(true);
      handleScroll();
    };

    if (video.readyState >= 2) {
      setIsVideoLoaded(true);
      handleScroll();
    } else {
      video.addEventListener("canplay", handleReady, { once: true });
      video.addEventListener("loadedmetadata", handleReady, { once: true });
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("loadedmetadata", handleReady);
    };
  }, [videoSrc]);

  return (
    <section ref={containerRef} className="relative w-full h-[380vh] bg-brand-dark">
      {/* Pinned Sticky Viewport with Mobile dynamic viewport height support */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-brand-dark"
      >
        {/* Fallback Poster Image */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${
            isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Image
            src="/images/hero-poster.webp"
            alt="Malabar Bakery Cinematic"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Smooth Scrub Video */}
        <div
          ref={videoWrapperRef}
          className="absolute inset-0 w-full h-full will-change-transform z-0"
          style={{ transform: "scale(1) translate3d(0,0,0)" }}
        >
          <video
            ref={videoRef}
            key={videoSrc}
            src={videoSrc}
            muted
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            preload="auto"
            tabIndex={-1}
            aria-hidden="true"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
            style={{
              willChange: "transform",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>

        {/* Subtle Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-brand-dark/40 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(26,17,14,0.45)_100%)] pointer-events-none z-[1]" />
      </div>
    </section>
  );
}
