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
    // Select portrait-optimized mobile stream on mobile devices
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setVideoSrc("/videos/hero-scrub-mobile.mp4");
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.pause();

    // Explicitly load video to start pre-buffering
    try {
      video.load();
    } catch {}

    let targetTime = 0;
    let isSeeking = false;
    let animId: number;

    const duration = () => video.duration || 10;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Direct, buttery-smooth seek loop tied directly to frame rendering
    const updateLoop = () => {
      if (video.readyState >= 1) {
        const diff = targetTime - video.currentTime;
        // Direct seek without debounce/locking when video is GOP-1 all-intra
        if (Math.abs(diff) > 0.008 && !isSeeking) {
          isSeeking = true;

          // Smooth interpolation towards scroll target
          const factor = isMobile ? 0.45 : 0.4;
          const delta = diff * factor;
          const next = video.currentTime + delta;

          try {
            if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
              (video as any).fastSeek(next);
            } else {
              video.currentTime = next;
            }
          } catch {
            isSeeking = false;
          }
        }
      }

      // Dynamic camera depth following current video playback progress
      if (videoWrapperRef.current) {
        const dur = duration();
        const progress = dur > 0 ? Math.max(0, Math.min(1, video.currentTime / dur)) : 0;
        const scale = 1.0 + progress * 0.08;
        videoWrapperRef.current.style.transform = `scale(${scale}) translateZ(0)`;
      }

      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);

    const handleSeeked = () => {
      isSeeking = false;
      setIsVideoLoaded(true);
    };
    video.addEventListener("seeked", handleSeeked);

    // Scroll progress handler: maps scroll position to video timeline (Bidirectional: forward & backward)
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = container.offsetHeight - viewportHeight;
      if (totalScrollable <= 0) return;

      const currentScrolled = -rect.top;
      // Normalizing progress: 0 at top of hero, 1 at bottom before unpinning
      const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollable));
      // Clamp to duration - 0.05 so video stays at final frame and doesn't wrap or stop early
      const maxVideoTime = Math.max(0, duration() - 0.04);
      const calculatedTime = progress * maxVideoTime;

      // Bidirectional scrubbing: scrolls smoothly both downwards and upwards
      targetTime = calculatedTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("lenis-scroll", handleScroll, { passive: true });

    // Initial check and ready listener
    const handleReady = () => {
      setIsVideoLoaded(true);
      handleScroll();
    };

    if (video.readyState >= 1) {
      setIsVideoLoaded(true);
      handleScroll();
    } else {
      video.addEventListener("loadeddata", handleReady, { once: true });
      video.addEventListener("canplay", handleReady, { once: true });
      video.addEventListener("loadedmetadata", handleReady, { once: true });
    }

    // Proactive decoder unlock on mobile & desktop (fires on any early touch, pointer, scroll or loading complete)
    const unlockDecoder = () => {
      if (video.paused && video.currentTime === 0) {
        video.play().then(() => {
          video.pause();
          handleScroll();
        }).catch(() => {});
      }
    };

    window.addEventListener("touchstart", unlockDecoder, { once: true, passive: true });
    window.addEventListener("pointerdown", unlockDecoder, { once: true, passive: true });
    window.addEventListener("wheel", unlockDecoder, { once: true, passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("site-loaded", handleReady, { once: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("lenis-scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("site-loaded", handleReady);
      window.removeEventListener("touchstart", unlockDecoder);
      window.removeEventListener("pointerdown", unlockDecoder);
      window.removeEventListener("wheel", unlockDecoder);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("loadeddata", handleReady);
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
        {/* High-Resolution Poster Layer (Always rendered behind the video so no brown/blank background ever flashes during scrub/seeking) */}
        <div className="absolute inset-0 z-0">
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
          className={`absolute inset-0 w-full h-full will-change-transform z-[1] transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-brand-dark/40 pointer-events-none z-[2]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(26,17,14,0.45)_100%)] pointer-events-none z-[2]" />
      </div>
    </section>
  );
}
