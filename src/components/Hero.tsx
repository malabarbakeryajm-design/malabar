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

    let targetTime = 0;
    let isSeeking = false;
    let animId: number;

    const duration = () => video.duration || 10;

    // Timeout-guarded seeking to prevent decoder freeze/lag on slow or busy devices
    let seekTimeout: NodeJS.Timeout | null = null;

    // Direct, ultra-smooth bidirectional seek step loop driven by requestAnimationFrame
    const updateLoop = () => {
      if (video.readyState >= 1 && !isSeeking) {
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > 0.005) {
          isSeeking = true;

          // Clear any dangling seek timeout
          if (seekTimeout) clearTimeout(seekTimeout);
          // Safety fallback: if hardware decoder drops the 'seeked' event, unlock after 120ms
          seekTimeout = setTimeout(() => {
            isSeeking = false;
          }, 120);

          // Step towards target smoothly forward or backward with proportional stepping
          const step = Math.sign(diff) * Math.max(0.04, Math.abs(diff) * 0.4);
          const next = diff > 0 
            ? Math.min(targetTime, video.currentTime + step)
            : Math.max(targetTime, video.currentTime + step);

          try {
            if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
              (video as any).fastSeek(next);
            } else {
              video.currentTime = next;
            }
          } catch {
            isSeeking = false;
            if (seekTimeout) clearTimeout(seekTimeout);
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
      if (seekTimeout) clearTimeout(seekTimeout);
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
      const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollable));
      const calculatedTime = progress * duration();

      // Bidirectional scrubbing: scrolls smoothly both downwards and upwards
      targetTime = calculatedTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

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

    // Proactive decoder unlock on mobile (fires on any early touch, pointer or scroll interaction)
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

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
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
