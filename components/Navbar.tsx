"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type NavItem =
  | { kind: "section"; id: string; key: "barbers" | "pricing" | "work" | "vouchers" | "contact" }
  | { kind: "link"; href: string; key: "gallery"; observeId?: string };

const navItems: NavItem[] = [
  { kind: "section", id: "barberi", key: "barbers" },
  { kind: "section", id: "cenik", key: "pricing" },
  { kind: "section", id: "nase-prace", key: "work" },
  { kind: "section", id: "poukazy", key: "vouchers" },
  { kind: "link", href: "/galerie", key: "gallery", observeId: "galerie-home" },
  { kind: "section", id: "kontakt", key: "contact" },
];

function LangPill() {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="lang-pill">
      {(["en", "cs"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={locale === l ? "active" : ""}
          aria-pressed={locale === l}
        >
          {l === "cs" ? "CZ" : "EN"}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach((item) => {
      const id = item.kind === "section" ? item.id : item.observeId;
      if (!id) return;
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navLabels: Record<NavItem["key"], string> = {
    barbers: t.nav.barbers,
    pricing: t.nav.pricing,
    work: t.nav.work,
    vouchers: t.nav.vouchers,
    gallery: t.nav.gallery,
    contact: t.nav.contact,
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[800] transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(10,7,6,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,164,107,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          {onHome ? (
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-1 group shrink-0"
              aria-label="JZP Barbershop"
            >
              <span
                className="text-2xl font-bold tracking-wider"
                style={{ color: "#c9a46b", fontFamily: "var(--font-cinzel)" }}
              >
                JZP
              </span>
              <span
                className="text-sm tracking-[0.25em] font-light ml-1 mt-1 hidden sm:inline"
                style={{ color: "#f0ead6", fontFamily: "var(--font-inter)" }}
              >
                BARBERSHOP
              </span>
            </button>
          ) : (
            <Link href="/#hero" className="flex items-center gap-1 group shrink-0" aria-label="JZP Barbershop">
              <span
                className="text-2xl font-bold tracking-wider"
                style={{ color: "#c9a46b", fontFamily: "var(--font-cinzel)" }}
              >
                JZP
              </span>
              <span
                className="text-sm tracking-[0.25em] font-light ml-1 mt-1 hidden sm:inline"
                style={{ color: "#f0ead6", fontFamily: "var(--font-inter)" }}
              >
                BARBERSHOP
              </span>
            </Link>
          )}

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                (item.kind === "section" && activeSection === item.id) ||
                (item.kind === "link" &&
                  ((onHome && item.observeId === activeSection) || pathname === item.href));
              const className = `nav-link-underline text-xs tracking-widest uppercase transition-colors ${isActive ? "active" : ""}`;
              const style = {
                color: isActive ? "#c9a46b" : "#f0ead6",
                fontFamily: "var(--font-inter)",
              } as const;
              if (item.kind === "link") {
                return (
                  <Link key={item.key} href={item.href} className={className} style={style}>
                    {navLabels[item.key]}
                  </Link>
                );
              }
              if (!onHome) {
                return (
                  <Link key={item.id} href={`/#${item.id}`} className={className} style={style}>
                    {navLabels[item.key]}
                  </Link>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={className}
                  style={style}
                >
                  {navLabels[item.key]}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LangPill />
            <a
              href="#booking"
              className="px-5 py-2 text-xs tracking-widest border transition-all duration-300"
              style={{
                borderColor: "#c9a46b",
                color: "#c9a46b",
                backgroundColor: "transparent",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#c9a46b";
                (e.currentTarget as HTMLElement).style.color = "#0a0706";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#c9a46b";
              }}
            >
              {t.nav.book}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px"
              style={{ backgroundColor: "#c9a46b" }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px"
              style={{ backgroundColor: "#c9a46b" }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px"
              style={{ backgroundColor: "#c9a46b" }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[750] flex flex-col lg:hidden"
            style={{ backgroundColor: "rgba(10,7,6,0.98)" }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-8 pt-20">
              {navItems.map((item, i) => {
                const isActive =
                  (item.kind === "section" && activeSection === item.id) ||
                  (item.kind === "link" &&
                    ((onHome && item.observeId === activeSection) || pathname === item.href));
                const style = {
                  color: isActive ? "#c9a46b" : "#f0ead6",
                  fontFamily: "var(--font-cinzel)",
                } as const;
                const className = "text-2xl tracking-widest uppercase";
                if (item.kind === "link") {
                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={className}
                        style={style}
                      >
                        {navLabels[item.key]}
                      </Link>
                    </motion.div>
                  );
                }
                if (!onHome) {
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        href={`/#${item.id}`}
                        onClick={() => setMobileOpen(false)}
                        className={className}
                        style={style}
                      >
                        {navLabels[item.key]}
                      </Link>
                    </motion.div>
                  );
                }
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => scrollTo(item.id)}
                    className={className}
                    style={style}
                  >
                    {navLabels[item.key]}
                  </motion.button>
                );
              })}

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 text-sm tracking-widest border"
                style={{ borderColor: "#c9a46b", color: "#c9a46b" }}
              >
                {t.nav.book}
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="lang-pill">
                  {(["en", "cs"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLocale(l)}
                      className={locale === l ? "active" : ""}
                    >
                      {l === "cs" ? "CZ" : "EN"}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
