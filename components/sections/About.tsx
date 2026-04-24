"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

function CountUp({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numTarget = typeof target === "string" ? parseInt(target) : target;

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const step = numTarget / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= numTarget) {
        setCount(numTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, numTarget]);

  return (
    <span ref={ref}>
      {typeof target === "string" && isNaN(numTarget)
        ? target
        : count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="o-nas" className="py-24 md:py-32 section-glow" style={{ backgroundColor: "#0a0706" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <SectionReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
                alt="Interiér JZP Barbershop Praha s tmavým dřevem a koženými křesly"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Golden frame accent */}
              <div
                className="absolute inset-0 border"
                style={{ borderColor: "rgba(201,164,107,0.2)" }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border"
                style={{ borderColor: "rgba(201,164,107,0.1)" }}
              />
            </div>
          </SectionReveal>

          {/* Content */}
          <SectionReveal direction="right" delay={0.2}>
            <div>
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-divider" style={{ width: 30 }} />
                <span
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: "#c9a46b", fontFamily: "var(--font-inter)" }}
                >
                  {t.about.sectionLabel}
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl mb-8 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}
              >
                {t.about.title}
              </h2>

              {/* Gold border left text */}
              <div
                className="pl-6 mb-6"
                style={{ borderLeft: "2px solid #c9a46b" }}
              >
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
                >
                  {t.about.body}
                </p>
              </div>

              <p
                className="text-base leading-relaxed mb-12"
                style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
              >
                {t.about.body2}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: "rgba(201,164,107,0.15)" }}>
                {[
                  { label: t.about.stat1Label, value: t.about.stat1Value, suffix: "" },
                  { label: t.about.stat2Label, value: t.about.stat2Value, suffix: "+" },
                  { label: t.about.stat3Label, value: t.about.stat3Value, suffix: "" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-3xl md:text-4xl font-bold mb-1"
                      style={{ color: "#c9a46b", fontFamily: "var(--font-playfair)" }}
                    >
                      {stat.value === "4800+" ? (
                        <><CountUp target={4800} />+</>
                      ) : stat.value === "2019" ? (
                        <CountUp target={2019} />
                      ) : (
                        <CountUp target={stat.value} />
                      )}
                    </div>
                    <div
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
