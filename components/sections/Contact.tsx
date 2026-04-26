"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";

const dayIndexMap: Record<string, number> = {
  Pondělí: 1, Úterý: 2, Středa: 3, Čtvrtek: 4, Pátek: 5, Sobota: 6, Neděle: 0,
  Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 0,
};

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const today = new Date().getDay();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 section-glow" style={{ backgroundColor: "#0a0706" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
                {t.contact.sectionLabel}
              </span>
              <span className="gold-divider" />
            </div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}>
              {t.contact.title}
            </h2>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <SectionReveal direction="left">
            <div>
              {/* Address, phone, email */}
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1 1 16 0c0 4.97-3.582 9-8 9z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  ),
                  label: t.contact.address,
                  href: "https://maps.google.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  ),
                  label: t.contact.phone,
                  href: `tel:${t.contact.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: t.contact.email,
                  href: `mailto:${t.contact.email}`,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("https") ? "_blank" : undefined}
                  rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 mb-6 group"
                >
                  <span
                    className="mt-0.5 transition-colors group-hover:text-gold"
                    style={{ color: "#c9a46b" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="text-base transition-colors"
                    style={{ color: "#8a7e6a" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ead6")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7e6a")}
                  >
                    {item.label}
                  </span>
                </a>
              ))}

              {/* Opening hours */}
              <div className="mt-8">
                <h3
                  className="text-lg mb-4"
                  style={{ fontFamily: "var(--font-playfair)", color: "#f0ead6" }}
                >
                  {t.contact.openingHours}
                </h3>
                <div className="space-y-2">
                  {t.contact.hours.map((h, i) => {
                    const isToday = dayIndexMap[h.day] === today;
                    return (
                      <div
                        key={i}
                        className="flex justify-between py-2 text-sm"
                        style={{
                          borderBottom: "1px solid rgba(201,164,107,0.08)",
                          backgroundColor: isToday ? "rgba(201,164,107,0.05)" : "transparent",
                          paddingLeft: isToday ? "8px" : "0",
                          paddingRight: isToday ? "8px" : "0",
                        }}
                      >
                        <span style={{ color: isToday ? "#c9a46b" : "#8a7e6a" }}>{h.day}</span>
                        <span style={{ color: isToday ? "#c9a46b" : "#8a7e6a" }}>{h.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-8">
                {[
                  { href: "https://www.instagram.com/j.z.p.barbershop_yasin/", label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  { href: "https://facebook.com", label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { href: "https://tiktok.com/@jzp_barbershop", label: "TikTok", icon: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.74a8.25 8.25 0 0 0 4.82 1.53V6.81a4.85 4.85 0 0 1-1.05-.12z" },
                ].map(({ href, label, icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, color: "#e4c48a" }}
                    className="flex items-center justify-center w-12 h-12 border transition-colors"
                    style={{ borderColor: "rgba(201,164,107,0.2)", color: "#8a7e6a" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#c9a46b";
                      (e.currentTarget as HTMLElement).style.color = "#c9a46b";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,164,107,0.2)";
                      (e.currentTarget as HTMLElement).style.color = "#8a7e6a";
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d={icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Right: Map + form */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="flex flex-col gap-8">
              {/* Map iframe */}
              <div className="relative overflow-hidden" style={{ height: 280 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.213!2d14.4278!3d50.0815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e80a1e4d09%3A0x2e1e1d0f2c1e1d0f!2sV%C3%A1clavsk%C3%A9+n%C3%A1m%C4%9Bst%C3%AD%2C+Praha!5e0!3m2!1scs!2scz!4v1600000000000!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JZP Barbershop mapa"
                />
              </div>

              {/* Contact form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: "name" as const, label: t.contact.formName, type: "text" },
                  { key: "email" as const, label: t.contact.formEmail, type: "email" },
                ].map((field) => (
                  <input
                    key={field.key}
                    type={field.type}
                    placeholder={field.label}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 text-sm transition-colors"
                    style={{
                      backgroundColor: "#141010",
                      border: "1px solid rgba(201,164,107,0.15)",
                      color: "#f0ead6",
                      fontFamily: "var(--font-inter)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a46b")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,164,107,0.15)")}
                  />
                ))}
                <textarea
                  placeholder={t.contact.formMessage}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm resize-none transition-colors"
                  style={{
                    backgroundColor: "#141010",
                    border: "1px solid rgba(201,164,107,0.15)",
                    color: "#f0ead6",
                    fontFamily: "var(--font-inter)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a46b")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,164,107,0.15)")}
                />
                <button
                  type="submit"
                  className="w-full py-4 text-sm tracking-widest transition-all duration-300"
                  style={{ backgroundColor: "#c9a46b", color: "#0a0706" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e4c48a")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a46b")}
                >
                  {t.contact.formSend} →
                </button>
              </form>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
