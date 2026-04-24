"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

function VoucherCard() {
  const { t } = useLanguage();
  return (
    <div
      className="relative w-full max-w-sm aspect-[1.7/1] rounded-sm overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1208 0%, #0a0706 50%, #1a1208 100%)",
        border: "1px solid rgba(201,164,107,0.4)",
        boxShadow: "0 0 60px rgba(201,164,107,0.15), inset 0 0 30px rgba(201,164,107,0.05)",
      }}
    >
      {/* Decorative corners */}
      {[["top-2 left-2", "border-t border-l"], ["top-2 right-2", "border-t border-r"], ["bottom-2 left-2", "border-b border-l"], ["bottom-2 right-2", "border-b border-r"]].map(([pos, border], i) => (
        <div
          key={i}
          className={`absolute ${pos} w-6 h-6 ${border}`}
          style={{ borderColor: "rgba(201,164,107,0.4)" }}
        />
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <div className="text-xs tracking-[0.4em] uppercase mb-2" style={{ color: "#8a7e6a" }}>
          JZP BARBERSHOP · PRAHA
        </div>
        <div
          className="text-3xl font-bold mb-2"
          style={{ color: "#c9a46b", fontFamily: "var(--font-playfair)" }}
        >
          {t.vouchers.giftText}
        </div>
        <div className="w-16 h-px mb-3" style={{ backgroundColor: "rgba(201,164,107,0.4)" }} />
        <div className="text-xs tracking-widest" style={{ color: "#8a7e6a" }}>
          {t.vouchers.validFor} · {t.vouchers.validity}
        </div>
      </div>

      {/* Subtle diagonal stripe */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #c9a46b 0px, #c9a46b 1px, transparent 1px, transparent 20px)",
        }}
      />
    </div>
  );
}

export default function Vouchers() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section id="poukazy" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D flip card */}
          <div className="flex justify-center">
            <div ref={ref} style={{ perspective: 1000 }}>
              <motion.div
                initial={{ rotateY: 180, opacity: 0 }}
                animate={inView ? { rotateY: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <VoucherCard />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <SectionReveal direction="right" delay={0.3}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-divider" style={{ width: 30 }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
                  {t.vouchers.sectionLabel}
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}
              >
                {t.vouchers.title}
              </h2>

              <p
                className="text-xl mb-4"
                style={{ color: "#c9a46b", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
              >
                {t.vouchers.subtitle}
              </p>

              <p
                className="text-base mb-10 leading-relaxed"
                style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
              >
                {t.vouchers.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[t.vouchers.validFor, t.vouchers.validity].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span style={{ color: "#c9a46b" }}>✦</span>
                    <span className="text-sm" style={{ color: "#8a7e6a" }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#booking"
                  className="flex-1 py-4 text-center text-sm tracking-widest transition-all duration-300"
                  style={{ backgroundColor: "#c9a46b", color: "#0a0706" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e4c48a")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a46b")}
                >
                  {t.vouchers.buyOnline}
                </a>
                <a
                  href="#kontakt"
                  className="flex-1 py-4 text-center text-sm tracking-widest border transition-all duration-300"
                  style={{ borderColor: "rgba(201,164,107,0.4)", color: "#c9a46b" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,164,107,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {t.vouchers.contact}
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
