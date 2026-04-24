"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

const igImages = [
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
];

export default function InstagramFeed() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
                {t.instagram.sectionLabel}
              </span>
              <span className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}>
              {t.instagram.title}
            </h2>
            <a
              href="https://instagram.com/jzp_barbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-widest transition-colors"
              style={{ color: "#c9a46b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e4c48a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c9a46b")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {t.instagram.handle}
            </a>
          </div>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
          {igImages.map((src, i) => (
            <SectionReveal key={i} delay={i * 0.05}>
              <motion.a
                href="https://instagram.com/jzp_barbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-square overflow-hidden group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`JZP Barbershop Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Instagram overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(10,10,8,0.6)" }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#c9a46b">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </motion.a>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal>
          <div className="text-center">
            <a
              href="https://instagram.com/jzp_barbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-sm tracking-widest border transition-all duration-300"
              style={{ borderColor: "rgba(201,164,107,0.4)", color: "#c9a46b" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#c9a46b";
                (e.currentTarget as HTMLElement).style.color = "#0a0706";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#c9a46b";
              }}
            >
              {t.instagram.cta}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
