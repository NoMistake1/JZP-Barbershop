import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dárkové poukazy | JZP Barbershop Praha",
  description: "Darujte nezapomenutelný zážitek v JZP Barbershop. Dárkové poukazy na prémiové holení a střihy v Praze.",
  openGraph: {
    title: "Dárkové poukazy — JZP Barbershop Praha",
    description: "Darujte prémiový barbershop zážitek. Platnost 12 měsíců.",
  },
};

function VoucherMockup() {
  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[1.7/1] rounded-sm overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1208 0%, #0a0706 50%, #1a1208 100%)",
        border: "1px solid rgba(201,164,107,0.5)",
        boxShadow: "0 0 80px rgba(201,164,107,0.2), inset 0 0 40px rgba(201,164,107,0.05)",
      }}
    >
      {[["top-3 left-3", "border-t border-l"], ["top-3 right-3", "border-t border-r"], ["bottom-3 left-3", "border-b border-l"], ["bottom-3 right-3", "border-b border-r"]].map(([pos, border], i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 ${border}`} style={{ borderColor: "rgba(201,164,107,0.5)" }} />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <div className="text-xs tracking-[0.5em] uppercase mb-2" style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}>
          JZP BARBERSHOP · PRAHA
        </div>
        <div className="text-4xl font-bold mb-3" style={{ color: "#c9a46b", fontFamily: "Playfair Display, serif" }}>
          Dárkový poukaz
        </div>
        <div className="w-20 h-px mb-3" style={{ backgroundColor: "rgba(201,164,107,0.5)" }} />
        <div className="text-xs tracking-widest uppercase" style={{ color: "#8a7e6a" }}>
          Platí na všechny služby · 12 měsíců platnost
        </div>
      </div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #c9a46b 0px, #c9a46b 1px, transparent 1px, transparent 20px)" }} />
    </div>
  );
}

export default function Poukazy() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
      style={{ backgroundColor: "#0a0706" }}
    >
      <div className="max-w-2xl w-full text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-px" style={{ backgroundColor: "#c9a46b" }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b", fontFamily: "var(--font-inter)" }}>
            Dárkové poukazy
          </span>
          <div className="w-10 h-px" style={{ backgroundColor: "#c9a46b" }} />
        </div>

        <h1 className="text-5xl md:text-6xl mb-4 leading-tight" style={{ fontFamily: "Playfair Display, serif", color: "#f0ead6" }}>
          Darujte výjimečný zážitek
        </h1>
        <p className="text-xl mb-4" style={{ color: "#c9a46b", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
          Ideální dárek pro každého muže — otce, partnera, přítele.
        </p>
        <p className="text-base mb-12 leading-relaxed" style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}>
          Naše dárkové poukazy jsou elegantně navrženy a dostupné v digitální i fyzické podobě.
          Platnost 12 měsíců od data vydání. Poukaz platí na všechny služby v ceníku.
        </p>

        {/* Voucher mockup */}
        <div className="mb-12">
          <VoucherMockup />
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {["Platí na vše", "12 měsíců", "Fyzicky i digitálně"].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span style={{ color: "#c9a46b", fontSize: "1.5rem" }}>✦</span>
              <span className="text-sm" style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}>{f}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#booking"
            className="flex-1 py-4 text-center text-sm tracking-widest"
            style={{ backgroundColor: "#c9a46b", color: "#0a0706", fontFamily: "var(--font-inter)" }}
          >
            Koupit online
          </a>
          <a
            href="tel:+420777123456"
            className="flex-1 py-4 text-center text-sm tracking-widest border"
            style={{ borderColor: "rgba(201,164,107,0.4)", color: "#c9a46b", fontFamily: "var(--font-inter)" }}
          >
            Kontaktovat nás
          </a>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm tracking-widest transition-colors"
            style={{ color: "#8a7e6a" }}
          >
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </main>
  );
}
