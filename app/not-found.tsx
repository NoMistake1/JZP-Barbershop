import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#0a0706" }}
    >
      {/* Decorative element */}
      <div className="mb-8">
        <span
          className="text-8xl font-bold"
          style={{ color: "rgba(201,164,107,0.15)", fontFamily: "Playfair Display, serif" }}
        >
          404
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-px" style={{ backgroundColor: "#c9a46b" }} />
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#c9a46b" }}>
          Stránka nenalezena
        </span>
        <div className="w-10 h-px" style={{ backgroundColor: "#c9a46b" }} />
      </div>

      <h1
        className="text-4xl md:text-5xl mb-4"
        style={{ fontFamily: "Playfair Display, serif", color: "#f0ead6" }}
      >
        Zdá se, že jste zašli příliš daleko.
      </h1>
      <p className="mb-10 text-base" style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}>
        Stránka, kterou hledáte, neexistuje nebo byla přesunuta.
      </p>

      <Link
        href="/"
        className="inline-block px-8 py-3 text-sm tracking-widest transition-all duration-300"
        style={{
          backgroundColor: "#c9a46b",
          color: "#0a0706",
          fontFamily: "var(--font-inter)",
        }}
      >
        ← Zpět na hlavní stránku
      </Link>
    </main>
  );
}
