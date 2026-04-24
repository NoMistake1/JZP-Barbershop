"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

const pairs = [
  {
    before: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
    after: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    altBefore: "Před střihem — delší vlasy",
    altAfter: "Po střihu — fade střih",
  },
  {
    before: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&q=80",
    after: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    altBefore: "Před úpravou vousů",
    altAfter: "Po profesionální úpravě vousů",
  },
  {
    before: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    after: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    altBefore: "Před holením",
    altAfter: "Po holení břitvou",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
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
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 2), 98));
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePos(e.clientX);
  };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      style={{ cursor: "ew-resize" }}
    >
      {/* Before (full width) */}
      <div className="absolute inset-0">
        <Image src={before} alt={altBefore} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute bottom-4 left-4 text-xs tracking-widest uppercase px-2 py-1" style={{ backgroundColor: "rgba(10,10,8,0.8)", color: "#8a7e6a" }}>
          PŘED
        </div>
      </div>

      {/* After (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image src={after} alt={altAfter} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute bottom-4 right-4 text-xs tracking-widest uppercase px-2 py-1" style={{ backgroundColor: "rgba(10,10,8,0.8)", color: "#c9a46b" }}>
          PO
        </div>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-px h-full" style={{ backgroundColor: "#c9a46b" }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            backgroundColor: "#c9a46b",
            color: "#0a0706",
            boxShadow: "0 0 20px rgba(201,164,107,0.5)",
          }}
        >
          ↔
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { t } = useLanguage();

  return (
    <section id="nase-prace" className="py-24 md:py-32" style={{ backgroundColor: "#0d0d0b" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
                {t.work.sectionLabel}
              </span>
              <span className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}>
              {t.work.title}
            </h2>
            <p className="text-sm tracking-widest" style={{ color: "#8a7e6a", fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "1.1rem" }}>
              {t.work.subtitle}
            </p>
          </div>
        </SectionReveal>

        {/* Compare sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {pairs.map((pair, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <CompareSlider {...pair} />
            </SectionReveal>
          ))}
        </div>

        {/* Gallery grid */}
        <SectionReveal>
          <h3
            className="text-2xl mb-8 text-center"
            style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}
          >
            {t.work.galleryTitle}
          </h3>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((src, i) => (
            <SectionReveal key={i} delay={i * 0.07}>
              <motion.div
                className="relative aspect-square overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`Ukázka práce JZP Barbershop — střih ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(201,164,107,0.1)", border: "1px solid rgba(201,164,107,0.3)" }}
                />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
