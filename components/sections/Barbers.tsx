"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

const barberImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
];

export default function Barbers() {
  const { t } = useLanguage();

  return (
    <section id="barberi" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
                {t.barbers.sectionLabel}
              </span>
              <span className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}>
              {t.barbers.title}
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.barbers.members.map((barber, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <motion.div
                className="group relative flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Image
                    src={barberImages[i]}
                    alt={`${barber.name} — barber JZP Barbershop Praha`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ backgroundColor: "rgba(10,10,8,0.2)" }}
                  />
                  {/* Gold border on hover */}
                  <motion.div
                    className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "#c9a46b" }}
                  />
                </div>

                {/* Info */}
                <div>
                  <h3
                    className="text-xl mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}
                  >
                    {barber.name}
                  </h3>
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: "#c9a46b", fontFamily: "var(--font-inter)" }}
                  >
                    {barber.role}
                  </p>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
                  >
                    {barber.specialty}
                  </p>

                  {/* Instagram */}
                  <a
                    href={`https://instagram.com/${barber.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest flex items-center gap-2 mb-4 transition-colors"
                    style={{ color: "#8a7e6a" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a46b")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7e6a")}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    {barber.instagram}
                  </a>

                  {/* Book button */}
                  <a
                    href="#booking"
                    className="block w-full py-2.5 text-center text-xs tracking-widest border transition-all duration-300"
                    style={{ borderColor: "rgba(201,164,107,0.3)", color: "#c9a46b" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#c9a46b";
                      (e.currentTarget as HTMLElement).style.color = "#0a0706";
                      (e.currentTarget as HTMLElement).style.borderColor = "#c9a46b";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#c9a46b";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,164,107,0.3)";
                    }}
                  >
                    {t.barbers.bookWith} {barber.name.split(" ")[0]}
                  </a>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
