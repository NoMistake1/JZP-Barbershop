"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import SectionReveal from "@/components/SectionReveal";
import CustomCursor from "@/components/CustomCursor";
import { useLanguage } from "@/contexts/LanguageContext";

type FilterKey = "all" | "fade" | "classic" | "beard" | "shave";

const filterKeys: FilterKey[] = ["all", "fade", "classic", "beard", "shave"];

const images: { src: string; tag: Exclude<FilterKey, "all">; altCs: string; altEn: string }[] = [
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", tag: "fade", altCs: "Fade střih", altEn: "Fade cut" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", tag: "beard", altCs: "Úprava vousů", altEn: "Beard trim" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", tag: "classic", altCs: "Klasický střih", altEn: "Classic cut" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80", tag: "shave", altCs: "Holení břitvou", altEn: "Straight razor shave" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", tag: "fade", altCs: "Skin fade", altEn: "Skin fade" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80", tag: "classic", altCs: "Klasický střih s pomazánkou", altEn: "Classic cut with pomade" },
  { src: "/images/galerie-pic-1.png", tag: "classic", altCs: "Pánský střih", altEn: "Men's haircut" },
  { src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80&auto=format&fit=crop", tag: "fade", altCs: "Detail střihu", altEn: "Cut detail" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", tag: "fade", altCs: "High fade", altEn: "High fade" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", tag: "shave", altCs: "Holení břitvou", altEn: "Straight razor shave" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", tag: "beard", altCs: "Konturování vousů", altEn: "Beard contouring" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80", tag: "fade", altCs: "Taper fade", altEn: "Taper fade" },
];

export default function Galerie() {
  const router = useRouter();
  const { t, locale } = useLanguage();
  const [active, setActive] = useState<FilterKey>("all");
  const filterLabels = t.gallery.filters;
  const filtered = active === "all" ? images : images.filter((img) => img.tag === active);

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    let sameOrigin = false;
    if (typeof document !== "undefined" && document.referrer) {
      try {
        sameOrigin = new URL(document.referrer).origin === window.location.origin;
      } catch {}
    }
    if (sameOrigin) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const open = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);

  const swapTo = useCallback(
    (next: number) => {
      const len = filtered.length;
      if (len === 0) return;
      setFading(true);
      setTimeout(() => {
        setOpenIndex(((next % len) + len) % len);
        setFading(false);
      }, 300);
    },
    [filtered.length]
  );

  const next = useCallback(() => {
    if (openIndex === null) return;
    swapTo(openIndex + 1);
  }, [openIndex, swapTo]);

  const prev = useCallback(() => {
    if (openIndex === null) return;
    swapTo(openIndex - 1);
  }, [openIndex, swapTo]);

  useEffect(() => {
    setOpenIndex(null);
  }, [active]);

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
    document.body.classList.add("lightbox-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove("lightbox-open");
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
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-28 pb-24 relative" style={{ backgroundColor: "#0a0706" }}>
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <Link
            href="/"
            onClick={handleBack}
            aria-label={t.gallery.backHome}
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase transition-colors"
            style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a46b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7e6a")}
          >
            <span aria-hidden style={{ fontSize: "1.1rem", lineHeight: 1 }}>←</span>
            {t.gallery.back}
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="gold-divider" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>{t.gallery.pageLabel}</span>
                <span className="gold-divider" />
              </div>
              <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}>
                {t.gallery.pageTitle}
              </h1>
            </div>
          </SectionReveal>

          {/* Filters */}
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filterKeys.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300"
                  style={{
                    backgroundColor: active === f ? "#c9a46b" : "transparent",
                    color: active === f ? "#0a0706" : "#8a7e6a",
                    border: "1px solid",
                    borderColor: active === f ? "#c9a46b" : "rgba(201,164,107,0.2)",
                  }}
                >
                  {filterLabels[f]}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {filtered.map((img, i) => (
              <motion.button
                type="button"
                key={img.src + i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => open(i)}
                aria-label={locale === "cs" ? img.altCs : img.altEn}
                className="relative aspect-square overflow-hidden group w-full"
              >
                <Image
                  src={img.src}
                  alt={locale === "cs" ? img.altCs : img.altEn}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                  style={{ backgroundColor: "rgba(10,10,8,0.7)" }}
                >
                  <span
                    className="text-xs tracking-widest uppercase px-2 py-1"
                    style={{ backgroundColor: "rgba(201,164,107,0.2)", color: "#c9a46b", border: "1px solid rgba(201,164,107,0.4)" }}
                  >
                    {filterLabels[img.tag]}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {openIndex !== null && filtered[openIndex] && (
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
                className="lightbox-btn lightbox-close"
                style={{ top: "1.25rem", right: "1.25rem" }}
                aria-label={t.gallery.close}
              >
                ✕
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="lightbox-btn lightbox-prev"
                style={{ left: "1.25rem", top: "50%", transform: "translateY(-50%)" }}
                aria-label={t.gallery.prev}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="lightbox-btn lightbox-next"
                style={{ right: "1.25rem", top: "50%", transform: "translateY(-50%)" }}
                aria-label={t.gallery.next}
              >
                ›
              </button>
              <div onClick={(e) => e.stopPropagation()} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={filtered[openIndex].src}
                  alt={locale === "cs" ? filtered[openIndex].altCs : filtered[openIndex].altEn}
                  className={`lightbox-image${fading ? " fading" : ""}`}
                />
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-block px-8 py-3 text-sm tracking-widest border transition-all duration-300"
              style={{ borderColor: "rgba(201,164,107,0.4)", color: "#c9a46b" }}
            >
              ← {t.gallery.backHome}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
