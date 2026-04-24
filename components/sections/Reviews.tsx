"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

const REVIEW_DATES_CS = ["březen 2026", "únor 2026", "leden 2026", "prosinec 2025", "listopad 2025", "říjen 2025"];
const REVIEW_DATES_EN = ["March 2026", "February 2026", "January 2026", "December 2025", "November 2025", "October 2025"];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#c9a46b" }}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { t, locale } = useLanguage();
  const dates = locale === "cs" ? REVIEW_DATES_CS : REVIEW_DATES_EN;
  const doubled = [...t.reviews.items, ...t.reviews.items];

  return (
    <section
      className="py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0a0706" }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="gold-divider" />
                <span
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: "#c9a46b", fontFamily: "var(--font-inter)" }}
                >
                  {t.reviews.sectionLabel}
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-cinzel)", color: "#f0ead6", fontWeight: 700 }}
              >
                {t.reviews.title}
              </h2>
            </div>

            <div
              className="flex items-center gap-3 px-6 py-3 self-start md:self-auto"
              style={{
                border: "1px solid rgba(201,164,107,0.25)",
                backgroundColor: "rgba(20,16,16,0.5)",
                backdropFilter: "blur(10px)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-lg font-bold"
                    style={{ color: "#c9a46b", fontFamily: "var(--font-cinzel)" }}
                  >
                    4.9
                  </span>
                  <Stars count={5} />
                </div>
                <div className="text-xs" style={{ color: "#8a7e6a" }}>
                  {locale === "cs" ? "Google recenze" : "Google reviews"}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      <div
        className="marquee-wrapper"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div className="marquee-track">
          {doubled.map((review, i) => {
            const date = dates[i % dates.length];
            return (
              <div
                key={i}
                className="flex-shrink-0 w-80 p-7 relative transition-transform duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(20,16,16,0.5)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(201,164,107,0.12)",
                  marginRight: "1.5rem",
                  boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute top-3 right-5 select-none quote-mark"
                >
                  &rdquo;
                </span>

                <Stars count={review.rating} />
                <p
                  className="mt-4 mb-6 text-sm leading-relaxed"
                  style={{ color: "#c9c0ad", fontFamily: "var(--font-inter)" }}
                >
                  {review.text}
                </p>
                <div className="flex items-center justify-between gap-2 pt-4 border-t" style={{ borderColor: "rgba(201,164,107,0.12)" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: "rgba(201,164,107,0.15)",
                        color: "#c9a46b",
                        fontFamily: "var(--font-cinzel)",
                      }}
                    >
                      {review.author[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm" style={{ color: "#f0ead6" }}>
                        {review.author}
                      </span>
                      <span className="text-[0.65rem] tracking-widest uppercase" style={{ color: "#8a7e6a" }}>
                        {date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
