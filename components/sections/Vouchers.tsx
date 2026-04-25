"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

export default function Vouchers() {
  const { t } = useLanguage();

  return (
    <section id="poukazy" className="py-24 md:py-32 section-atmosphere section-atmosphere-vouchers vouchers-section has-drift has-grain" style={{ backgroundColor: "#0a0706" }}>
      <div className="drift-layer" aria-hidden />
      <div className="grain-layer" aria-hidden />
      <span className="atmosphere-particle" style={{ width: 4, height: 4, top: "18%", left: "72%", animation: "float-1 24s ease-in-out infinite" }} />
      <span className="atmosphere-particle" style={{ width: 6, height: 6, top: "58%", left: "18%", animation: "float-2 24s ease-in-out 3s infinite" }} />
      <span className="atmosphere-particle" style={{ width: 5, height: 5, top: "82%", left: "62%", animation: "float-3 24s ease-in-out 5s infinite" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Voucher photo */}
          <SectionReveal direction="left">
            <div className="voucher-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/poukaz.png"
                alt="JZP Barbershop dárkový poukaz"
                loading="lazy"
              />
            </div>
          </SectionReveal>

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
