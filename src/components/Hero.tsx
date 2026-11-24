"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
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
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const playVideo = () => {
      setIsVideoLoaded(true);
      if (video) {
        video.play().catch(() => {
          // Gracefully caught if browser requires interaction
        });
      }
    };

    // Auto-play immediately when preloader signals site is loaded
    const handleSiteLoaded = () => {
      playVideo();
    };

    // If site has already completed loading prior to component mount
    if (typeof window !== "undefined" && (window as any).__siteLoaded) {
      playVideo();
    }

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      if (typeof window !== "undefined" && (window as any).__siteLoaded) {
        playVideo();
      }
    };

    video.addEventListener("loadeddata", handleCanPlay);
    video.addEventListener("canplay", handleCanPlay);
    window.addEventListener("site-loaded", handleSiteLoaded);

    // Reliable fallback interaction handlers
    const unlockAndPlay = () => {
      playVideo();
    };

    window.addEventListener("touchstart", unlockAndPlay, { once: true, passive: true });
    window.addEventListener("pointerdown", unlockAndPlay, { once: true, passive: true });
    window.addEventListener("scroll", unlockAndPlay, { once: true, passive: true });
    window.addEventListener("click", unlockAndPlay, { once: true, passive: true });

    return () => {
      window.removeEventListener("site-loaded", handleSiteLoaded);
      window.removeEventListener("touchstart", unlockAndPlay);
      window.removeEventListener("pointerdown", unlockAndPlay);
      window.removeEventListener("scroll", unlockAndPlay);
      window.removeEventListener("click", unlockAndPlay);
      if (video) {
        video.removeEventListener("loadeddata", handleCanPlay);
        video.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, [videoSrc]);

  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden bg-brand-dark">
      {/* High-Resolution Poster Layer (Always rendered behind the video so no brown/blank background ever flashes) */}
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

      {/* Autoplaying Hero Video */}
      <div
        className={`absolute inset-0 w-full h-full z-[1] transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          aria-hidden="true"
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
      </div>

      {/* Subtle Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-brand-dark/40 pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(26,17,14,0.45)_100%)] pointer-events-none z-[2]" />
    </section>
  );
}
