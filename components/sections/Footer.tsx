"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type FooterNavItem =
  | { kind: "section"; id: string; key: "barbers" | "pricing" | "work" | "vouchers" | "contact" }
  | { kind: "link"; href: string; key: "gallery" };

const footerNavItems: FooterNavItem[] = [
  { kind: "section", id: "barberi", key: "barbers" },
  { kind: "section", id: "cenik", key: "pricing" },
  { kind: "section", id: "nase-prace", key: "work" },
  { kind: "section", id: "poukazy", key: "vouchers" },
  { kind: "link", href: "/galerie", key: "gallery" },
  { kind: "section", id: "kontakt", key: "contact" },
];

const socials = [
  { href: "https://www.instagram.com/j.z.p.barbershop_yasin/", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { href: "https://facebook.com", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { href: "https://tiktok.com/@jzp_barbershop", label: "TikTok", path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.74a8.25 8.25 0 0 0 4.82 1.53V6.81a4.85 4.85 0 0 1-1.05-.12z" },
];

export default function Footer() {
  const { t } = useLanguage();

  const navLabels: Record<FooterNavItem["key"], string> = {
    barbers: t.nav.barbers,
    pricing: t.nav.pricing,
    work: t.nav.work,
    vouchers: t.nav.vouchers,
    gallery: t.nav.gallery,
    contact: t.nav.contact,
  };

  return (
    <footer style={{ backgroundColor: "#060604" }}>
      {/* Gold top line */}
      <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, #c9a46b, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold" style={{ color: "#c9a46b", fontFamily: "var(--font-playfair)" }}>JZP</span>
              <span className="text-sm tracking-[0.25em] font-light ml-1" style={{ color: "#f0ead6" }}>BARBERSHOP</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#8a7e6a" }}>
              {t.footer.claim}
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-300"
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6" style={{ color: "#c9a46b", fontFamily: "var(--font-inter)" }}>
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {footerNavItems.map((item) => {
                const href = item.kind === "section" ? `/#${item.id}` : item.href;
                const key = item.kind === "section" ? item.id : item.key;
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      className="text-sm transition-colors"
                      style={{ color: "#8a7e6a" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a46b")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7e6a")}
                    >
                      {navLabels[item.key]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6" style={{ color: "#c9a46b", fontFamily: "var(--font-inter)" }}>
              {t.contact.sectionLabel}
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "#8a7e6a" }}>
              <li>{t.contact.address}</li>
              <li>
                <a href={`tel:${t.contact.phone}`} style={{ color: "#8a7e6a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a46b")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7e6a")}
                >
                  {t.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${t.contact.email}`} style={{ color: "#8a7e6a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a46b")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7e6a")}
                >
                  {t.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(201,164,107,0.08)", color: "#8a7e6a" }}
        >
          <p>© {new Date().getFullYear()} JZP Barbershop. {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link href="/privacy" style={{ color: "#8a7e6a" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a46b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7e6a")}>{t.footer.privacy}</Link>
            <button style={{ color: "#8a7e6a" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a46b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#8a7e6a")}>{t.footer.cookies}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
