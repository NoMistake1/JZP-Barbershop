"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600&q=80", alt: "Skin fade detail" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1600&q=80", alt: "Holení břitvou" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=80", alt: "Interiér barbershopu" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80", alt: "Pánský styling" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=80", alt: "Detail střihu" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=80", alt: "Úprava vousů" },
  { src: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1600&q=80", alt: "Barber při práci" },
  { src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=1600&q=80", alt: "Atmosféra salonu" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);

  const swapTo = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => {
      setOpenIndex(((next % IMAGES.length) + IMAGES.length) % IMAGES.length);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    if (openIndex === null) return;
    swapTo(openIndex + 1);
  }, [openIndex, swapTo]);

  const prev = useCallback(() => {
    if (openIndex === null) return;
    swapTo(openIndex - 1);
  }, [openIndex, swapTo]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  return (
    <section id="galerie-home" className="py-24 md:py-32" style={{ backgroundColor: "#0a0706" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
                {t.gallery.sectionLabel}
              </span>
              <span className="gold-divider" />
            </div>
            <h2
              className="text-4xl md:text-5xl mb-3"
              style={{ fontFamily: "var(--font-cinzel)", color: "#f0ead6", fontWeight: 700 }}
            >
              {t.gallery.title}
            </h2>
            <p
              className="text-sm md:text-base"
              style={{ color: "#8a7e6a", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              {t.gallery.subtitle}
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {IMAGES.map((img, i) => (
            <SectionReveal key={i} delay={(i % 4) * 0.05}>
              <button
                type="button"
                onClick={() => open(i)}
                className="relative aspect-square overflow-hidden group w-full"
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(201,164,107,0.08)", border: "1px solid rgba(201,164,107,0.3)" }}
                />
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="lightbox-btn"
            style={{ top: "1.25rem", right: "1.25rem" }}
            aria-label={t.gallery.close}
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="lightbox-btn"
            style={{ left: "1.25rem", top: "50%", transform: "translateY(-50%)" }}
            aria-label={t.gallery.prev}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="lightbox-btn"
            style={{ right: "1.25rem", top: "50%", transform: "translateY(-50%)" }}
            aria-label={t.gallery.next}
          >
            ›
          </button>
          <div onClick={(e) => e.stopPropagation()} className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES[openIndex].src}
              alt={IMAGES[openIndex].alt}
              className={`lightbox-image${fading ? " fading" : ""}`}
            />
          </div>
        </div>
      )}
    </section>
  );
}
