"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import SectionReveal from "@/components/SectionReveal";
import CustomCursor from "@/components/CustomCursor";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-28 pb-24 relative" style={{ backgroundColor: "#0a0706" }}>
        <div className="max-w-3xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="gold-divider" />
                <span
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: "#c9a46b" }}
                >
                  {p.pageLabel}
                </span>
                <span className="gold-divider" />
              </div>
              <h1
                className="text-4xl md:text-5xl mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}
              >
                {p.pageTitle}
              </h1>
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
              >
                {p.lastUpdated}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <p
              className="text-base md:text-lg leading-relaxed mb-12"
              style={{ color: "#c9b896", fontFamily: "var(--font-inter)" }}
            >
              {p.intro}
            </p>
          </SectionReveal>

          <div className="space-y-12">
            {p.sections.map((section, idx) => {
              const list = "list" in section ? section.list : undefined;
              const bodyAfter = "bodyAfter" in section ? section.bodyAfter : undefined;
              return (
                <SectionReveal key={section.heading} delay={Math.min(idx * 0.04, 0.3)}>
                  <section>
                    <h2
                      className="text-xl md:text-2xl mb-4"
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        color: "#c9a46b",
                        fontWeight: 600,
                      }}
                    >
                      {section.heading}
                    </h2>
                    <div className="space-y-3">
                      {section.body.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-sm md:text-base leading-relaxed"
                          style={{ color: "#c9b896", fontFamily: "var(--font-inter)" }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {list && list.length > 0 && (
                      <ul className="mt-4 space-y-2 pl-1">
                        {list.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm md:text-base leading-relaxed flex gap-3"
                            style={{ color: "#c9b896", fontFamily: "var(--font-inter)" }}
                          >
                            <span
                              aria-hidden
                              className="shrink-0 mt-2 block"
                              style={{
                                width: "6px",
                                height: "6px",
                                backgroundColor: "#c9a46b",
                                transform: "rotate(45deg)",
                              }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {bodyAfter && bodyAfter.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {bodyAfter.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: "#c9b896", fontFamily: "var(--font-inter)" }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </section>
                </SectionReveal>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-block px-8 py-3 text-sm tracking-widest border transition-all duration-300"
              style={{
                borderColor: "rgba(201,164,107,0.4)",
                color: "#c9a46b",
                backgroundColor: "transparent",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#c9a46b";
                (e.currentTarget as HTMLElement).style.color = "#0a0706";
                (e.currentTarget as HTMLElement).style.borderColor = "#c9a46b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#c9a46b";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,164,107,0.4)";
              }}
            >
              ← {p.back}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
