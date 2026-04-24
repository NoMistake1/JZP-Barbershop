"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

export default function Pricing() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="cenik" className="py-24 md:py-32 section-glow" style={{ backgroundColor: "#0a0706" }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
                {t.pricing.sectionLabel}
              </span>
              <span className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}>
              {t.pricing.title}
            </h2>
          </div>
        </SectionReveal>

        {/* Category tabs */}
        <SectionReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {t.pricing.categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className="px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
                style={{
                  backgroundColor: activeCategory === i ? "#c9a46b" : "transparent",
                  color: activeCategory === i ? "#0a0706" : "#8a7e6a",
                  border: "1px solid",
                  borderColor: activeCategory === i ? "#c9a46b" : "rgba(201,164,107,0.2)",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Price list */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Decorative border */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ border: "1px solid rgba(201,164,107,0.1)" }}
          />

          {t.pricing.categories[activeCategory].items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="pricing-row flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-6 md:px-8 py-5 group transition-colors duration-200"
              style={{ borderBottom: i < t.pricing.categories[activeCategory].items.length - 1 ? "1px solid rgba(201,164,107,0.08)" : "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(201,164,107,0.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0">
                <span
                  className="text-base"
                  style={{ color: "#f0ead6", fontFamily: "var(--font-inter)" }}
                >
                  {item.name}
                </span>
                {item.popular && (
                  <span className="pricing-badge">{t.pricing.popular}</span>
                )}
              </div>
              <span
                className="text-lg font-light"
                style={{ color: "#c9a46b", fontFamily: "var(--font-playfair)" }}
              >
                {item.price}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <SectionReveal delay={0.3}>
          <p
            className="text-center mt-8 text-sm"
            style={{ color: "#8a7e6a", fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "1rem" }}
          >
            {t.pricing.disclaimer}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
