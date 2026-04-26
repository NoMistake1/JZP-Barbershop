"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePreloader } from "@/contexts/PreloaderContext";

function useCounter(target: number, start: boolean, durationMs = 2800, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startT = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - startT) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, durationMs]);
  return decimals === 0 ? Math.round(value) : value.toFixed(decimals);
}

function Counter({
  target,
  suffix = "",
  decimals = 0,
  label,
  start,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  label: string;
  start: boolean;
}) {
  const v = useCounter(target, start, 2800, decimals);
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-3xl md:text-4xl font-semibold mb-1"
        style={{ color: "#c9a46b", fontFamily: "var(--font-cinzel)" }}
      >
        {v}
        {suffix}
      </div>
      <div
        className="text-[0.65rem] md:text-xs tracking-[0.25em] uppercase"
        style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
      >
        {label}
      </div>
    </div>
  );
}

const PARTICLES = [
  { size: 4, top: "18%", left: "12%", anim: "float-1", duration: 18, delay: 0 },
  { size: 6, top: "32%", left: "82%", anim: "float-2", duration: 22, delay: 2 },
  { size: 3, top: "68%", left: "22%", anim: "float-3", duration: 20, delay: 4 },
  { size: 8, top: "55%", left: "72%", anim: "float-1", duration: 24, delay: 1 },
  { size: 5, top: "78%", left: "48%", anim: "float-2", duration: 19, delay: 3 },
  { size: 4, top: "24%", left: "55%", anim: "float-3", duration: 21, delay: 5 },
];

export default function Hero() {
  const { t, locale } = useLanguage();
  const { isLoading } = usePreloader();
  const ref = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);
  const [countersVisible, setCountersVisible] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (isLoading || countersVisible) return;
    const el = countersRef.current;
    if (!el) return;
    const start = () => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setCountersVisible(true);
            obs.disconnect();
          }
        },
        { threshold: [0, 0.3, 0.6, 0.9] }
      );
      obs.observe(el);
      return obs;
    };
    const t = window.setTimeout(() => {
      const obs = start();
      (window as unknown as { __countersObs?: IntersectionObserver }).__countersObs = obs;
    }, 200);
    return () => {
      window.clearTimeout(t);
      const w = window as unknown as { __countersObs?: IntersectionObserver };
      if (w.__countersObs) {
        w.__countersObs.disconnect();
        delete w.__countersObs;
      }
    };
  }, [countersVisible, isLoading]);

  const words = t.hero.headline.split(" ");
  const accentIndex = 1;

  const counters = [
    { target: 2019, label: locale === "cs" ? "Otevřeno" : "Founded" },
    { target: 4800, suffix: "+", label: locale === "cs" ? "Klientů" : "Clients" },
    { target: 4, label: locale === "cs" ? "Barberů" : "Barbers" },
    { target: 4.9, decimals: 1, suffix: "★", label: "Google" },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 1: base gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0706 0%, #141010 40%, #1c1614 70%, #0a0706 100%)",
        }}
      />
      {/* Layer 2: radial glows */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(92,63,46,0.35) 0%, transparent 55%),
                            radial-gradient(circle at 85% 70%, rgba(201,164,107,0.15) 0%, transparent 55%)`,
        }}
      />
      {/* Layer 3: grid with radial mask */}
      <div className="absolute inset-0 z-0 hero-grid" />

      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: p.top,
              left: p.left,
              animation: `${p.anim} ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full"
      >
        <motion.div
          initial="hidden"
          animate={!isLoading ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="gold-divider" />
            <span
              className="text-[0.65rem] md:text-xs tracking-[0.4em] uppercase"
              style={{ color: "#c9a46b", fontFamily: "var(--font-inter)", fontWeight: 600 }}
            >
              Praha · Est. 2019
            </span>
            <span className="gold-divider" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontWeight: 900,
              color: "#f0ead6",
              letterSpacing: "0.015em",
              wordSpacing: "0.12em",
            }}
          >
            {words.map((w, i) => (
              <span key={i} className={i === accentIndex ? "gold-gradient-text" : ""}>
                {w}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-2xl mb-12"
            style={{
              color: "#8a7e6a",
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#booking"
              className="inline-block px-8 py-4 text-sm tracking-[0.2em]"
              style={{
                color: "#0a0706",
                backgroundColor: "#c9a46b",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(201,164,107,0)",
                  "0 0 24px rgba(201,164,107,0.4)",
                  "0 0 0px rgba(201,164,107,0)",
                ],
              }}
              transition={{ boxShadow: { repeat: Infinity, duration: 3, delay: 2 } }}
            >
              {t.hero.cta} →
            </motion.a>
            <button
              onClick={() => {
                const el = document.getElementById("nase-prace");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-8 py-4 text-sm tracking-[0.2em] border transition-colors"
              style={{
                color: "#c9a46b",
                borderColor: "rgba(201,164,107,0.3)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {t.hero.scrollDown} ↓
            </button>
          </motion.div>

          {/* Counters */}
          <motion.div
            ref={countersRef}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 max-w-3xl mx-auto pt-10 border-t"
            style={{ borderColor: "rgba(201,164,107,0.15)" }}
          >
            {counters.map((c, i) => (
              <Counter
                key={i}
                target={c.target}
                suffix={c.suffix}
                decimals={c.decimals}
                label={c.label}
                start={countersVisible}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: !isLoading ? 1 : 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-[calc(10vh+1.5rem)] md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, transparent, #c9a46b)",
            transformOrigin: "bottom",
            animation: "scroll-pulse 2s ease-in-out infinite",
          }}
        />
        <span
          className="text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
        >
          {locale === "cs" ? "Scroll" : "Scroll"}
        </span>
      </motion.div>
    </section>
  );
}
