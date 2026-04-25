"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

const PAIRS = [
  {
    before: "/images/after-1.png",
    after: "/images/before-1.png",
    altBefore: "Před střihem",
    altAfter: "Po střihu — skin fade",
  },
  {
    before: "/images/after-2.png",
    after: "/images/before-2.png",
    altBefore: "Před úpravou vousů",
    altAfter: "Po profesionální úpravě vousů",
  },
  {
    before: "/images/after-3.png",
    after: "/images/before-3.png",
    altBefore: "Před holením",
    altAfter: "Po holení břitvou",
  },
];

function CompareSlider({
  before,
  after,
  altBefore,
  altAfter,
}: {
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const setPos = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pctRaw = ((clientX - rect.left) / rect.width) * 100;
    const pct = Math.max(5, Math.min(95, pctRaw));
    el.style.setProperty("--divider", `${pct}%`);
    el.style.setProperty("--reveal", `${100 - pct}%`);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => setPos(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) setPos(e.touches[0].clientX);
  };

  return (
    <div
      ref={wrapRef}
      className="compare-slider relative overflow-hidden select-none"
      style={
        {
          aspectRatio: "4 / 5",
          border: "1px solid rgba(201,164,107,0.15)",
          ["--divider" as string]: "50%",
          ["--reveal" as string]: "50%",
        } as React.CSSProperties
      }
      onMouseMove={onMouseMove}
      onTouchStart={onTouchMove}
      onTouchMove={onTouchMove}
    >
      {/* Before (bottom) */}
      <Image
        src={before}
        alt={altBefore}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover pointer-events-none"
        draggable={false}
      />
      {/* After (top, clipped) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: "inset(0 var(--reveal, 50%) 0 0)" }}
      >
        <Image
          src={after}
          alt={altAfter}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span
        className="absolute top-3 left-3 px-2 py-1 uppercase pointer-events-none"
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          color: "#f0ead6",
          backgroundColor: "rgba(10,7,6,0.7)",
          fontFamily: "var(--font-inter)",
          fontWeight: 500,
        }}
      >
        Před
      </span>
      <span
        className="absolute top-3 right-3 px-2 py-1 uppercase pointer-events-none"
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          color: "#0a0706",
          backgroundColor: "rgba(201,164,107,0.95)",
          fontFamily: "var(--font-inter)",
          fontWeight: 600,
        }}
      >
        Po
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: "var(--divider, 50%)",
          width: "2px",
          background: "#c9a46b",
          transform: "translateX(-1px)",
        }}
      />

      {/* Handle */}
      <div
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          left: "var(--divider, 50%)",
          top: "50%",
          width: "44px",
          height: "44px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          backgroundColor: "#c9a46b",
          color: "#0a0706",
          fontFamily: "var(--font-inter)",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "0.1em",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        ‹ ›
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { t } = useLanguage();

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {PAIRS.map((pair, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <CompareSlider {...pair} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
