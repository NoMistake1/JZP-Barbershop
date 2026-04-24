"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

const RESULTS = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80",
    alt: "Skin fade s texturovaným topem",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80",
    alt: "Klasický střih s holením břitvou",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=80",
    alt: "Úprava vousů a konturování",
  },
];

export default function BeforeAfter() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const centerOn = (index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll<HTMLElement>(".results-item");
    const item = items[index];
    if (!item) return;
    const target = item.offsetLeft - (track.clientWidth - item.clientWidth) / 2;
    track.scrollTo({ left: target, behavior });
  };

  // Initial center on middle item
  useEffect(() => {
    requestAnimationFrame(() => centerOn(1, "auto"));
    setMounted(true);
  }, []);

  // Auto-demo once per session on first viewport entry
  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;
    const track = trackRef.current;
    if (!track) return;
    if (sessionStorage.getItem("results-demoed") === "1") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const animateBy = (delta: number, duration: number) =>
      new Promise<void>((resolve) => {
        const start = track.scrollLeft;
        const target = start + delta;
        const t0 = performance.now();
        const ease = (p: number) => {
          // cubic-bezier(0.4, 0, 0.2, 1) approximation — smooth
          return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        };
        const step = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          track.scrollLeft = start + (target - start) * ease(p);
          if (p < 1) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });

    const observer = new IntersectionObserver(
      async (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting || entry.intersectionRatio < 0.4) return;
        observer.disconnect();
        sessionStorage.setItem("results-demoed", "1");
        await animateBy(220, 700);
        await sleep(250);
        await animateBy(-440, 900);
        await sleep(250);
        centerOn(1, "smooth");
      },
      { threshold: 0.4 }
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, [mounted]);

  // Mouse drag
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let startX = 0;
    let startScroll = 0;
    let dragging = false;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.classList.add("dragging");
      track.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      track.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove("dragging");
      try { track.releasePointerCapture(e.pointerId); } catch {}
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);
    track.addEventListener("pointerleave", onPointerUp);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
      track.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  const scrollByOne = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector<HTMLElement>(".results-item");
    const step = item ? item.offsetWidth + 16 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="nase-prace" className="py-24 md:py-32" style={{ backgroundColor: "#0a0706" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
                {t.work.sectionLabel}
              </span>
              <span className="gold-divider" />
            </div>
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "var(--font-cinzel)", color: "#f0ead6", fontWeight: 700 }}
            >
              {t.work.title}
            </h2>
            <p
              className="text-base md:text-lg"
              style={{
                color: "#8a7e6a",
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
              }}
            >
              {t.work.subtitle}
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByOne(-1)}
            aria-label="Previous"
            className="results-arrow absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByOne(1)}
            aria-label="Next"
            className="results-arrow absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex"
          >
            ›
          </button>

          <div ref={trackRef} className="results-track">
            {RESULTS.map((r, i) => (
              <div key={i} className="results-item">
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, 420px"
                  className="object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
