"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import SectionReveal from "@/components/SectionReveal";
import CustomCursor from "@/components/CustomCursor";

const filters = ["Vše", "Fade", "Klasika", "Vousy", "Holení"];

const images = [
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", tag: "Fade", alt: "Fade střih" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", tag: "Vousy", alt: "Úprava vousů" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", tag: "Klasika", alt: "Klasický střih" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80", tag: "Holení", alt: "Holení břitvou" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", tag: "Fade", alt: "Skin fade" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80", tag: "Klasika", alt: "Klasický střih s pomazánkou" },
  { src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80", tag: "Vousy", alt: "Beard design" },
  { src: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&q=80", tag: "Klasika", alt: "Gentleman střih" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", tag: "Fade", alt: "High fade" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", tag: "Holení", alt: "Straight razor shave" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", tag: "Vousy", alt: "Konturování vousů" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80", tag: "Fade", alt: "Taper fade" },
];

export default function Galerie() {
  const [active, setActive] = useState("Vše");
  const filtered = active === "Vše" ? images : images.filter((img) => img.tag === active);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-28 pb-24" style={{ backgroundColor: "#0a0706" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="gold-divider" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>Galerie</span>
                <span className="gold-divider" />
              </div>
              <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}>
                Naše práce
              </h1>
            </div>
          </SectionReveal>

          {/* Filters */}
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((f) => (
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
                  {f}
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
              <motion.div
                key={img.src + i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
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
                    {img.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-block px-8 py-3 text-sm tracking-widest border transition-all duration-300"
              style={{ borderColor: "rgba(201,164,107,0.4)", color: "#c9a46b" }}
            >
              ← Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
