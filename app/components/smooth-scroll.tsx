"use client";

import Lenis from "lenis";
import { type ReactNode, useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (time) => 1 - Math.pow(1 - time, 3),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, []);

  return children;
}
