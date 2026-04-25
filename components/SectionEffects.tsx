"use client";

import { useEffect } from "react";

export default function SectionEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    const cleanups: Array<() => void> = [];

    if (!isCoarse) {
      const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-glow"));
      sections.forEach((el) => {
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          el.style.setProperty("--gx", `${x}%`);
          el.style.setProperty("--gy", `${y}%`);
        };
        const onEnter = () => el.classList.add("active");
        const onLeave = () => el.classList.remove("active");

        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
      });
    } else {
      const drifters = Array.from(document.querySelectorAll<HTMLElement>(".has-drift"));
      if (drifters.length > 0) {
        let ticking = false;
        const update = () => {
          drifters.forEach((s) => {
            const r = s.getBoundingClientRect();
            const progress = 1 - (r.top + r.height / 2) / window.innerHeight;
            const clamped = Math.max(-0.5, Math.min(1.5, progress));
            s.style.setProperty("--drift", `${clamped * 50}px`);
          });
          ticking = false;
        };
        const onScroll = () => {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(update);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
        cleanups.push(() => window.removeEventListener("scroll", onScroll));
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
