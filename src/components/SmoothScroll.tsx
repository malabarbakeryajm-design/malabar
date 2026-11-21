"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ultra-luxurious, butter-smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.25,
      // Fluid ease-out quartic curve: instant response with soft, weightless deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      autoRaf: false, // We control the RAF loop with precision
    });

    (window as any).__lenisInstance = lenis;

    // Direct synchronization on scroll
    lenis.on("scroll", () => {
      // Dispatches custom event for components listening to high-fidelity Lenis coordinates
      window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: lenis }));
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenisInstance;
    };
  }, []);

  return <>{children}</>;
}
