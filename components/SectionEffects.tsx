"use client";

import { useEffect } from "react";

export default function SectionEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-glow"));
    const cleanups: Array<() => void> = [];

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

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
