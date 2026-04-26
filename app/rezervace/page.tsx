import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rezervace | JZP Barbershop Praha",
  description: "Rezervujte si termín v JZP Barbershop Praha online. Vyberte si svého barbera a preferovaný čas.",
};

export default function Rezervace() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ backgroundColor: "#0a0706" }}
    >
      <div className="max-w-lg w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-px" style={{ backgroundColor: "#c9a46b" }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b", fontFamily: "var(--font-inter)" }}>
            Rezervace
          </span>
          <div className="w-10 h-px" style={{ backgroundColor: "#c9a46b" }} />
        </div>

        <h1 className="text-5xl mb-4" style={{ fontFamily: "Playfair Display, serif", color: "#f0ead6" }}>
          Rezervovat termín
        </h1>
        <p className="text-base mb-12 leading-relaxed" style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}>
          Pro rezervaci termínu nás kontaktujte telefonicky nebo e-mailem.
          Online booking systém bude brzy k dispozici.
        </p>

        <div className="space-y-4 mb-12">
          <a
            href="tel:+420608965058"
            className="flex items-center justify-center gap-3 w-full py-4 text-sm tracking-widest border"
            style={{ borderColor: "rgba(201,164,107,0.4)", color: "#c9a46b", fontFamily: "var(--font-inter)" }}
          >
            📞 +420 608 965 058
          </a>
          <a
            href="mailto:info@jzpbarbershop.cz"
            className="flex items-center justify-center gap-3 w-full py-4 text-sm tracking-widest"
            style={{ backgroundColor: "#c9a46b", color: "#0a0706", fontFamily: "var(--font-inter)" }}
          >
            ✉ info@jzpbarbershop.cz
          </a>
        </div>

        <p className="text-xs mb-8" style={{ color: "#8a7e6a" }}>
          Otevřeno: Po–Pá 9:00–20:00 · So 9:00–17:00
        </p>

        <Link href="/" className="text-sm tracking-widest" style={{ color: "#8a7e6a" }}>
          ← Zpět na hlavní stránku
        </Link>
      </div>
    </main>
  );
}
