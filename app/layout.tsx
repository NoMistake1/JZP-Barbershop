import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { PreloaderProvider } from "@/contexts/PreloaderContext";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "JZP Barbershop Praha | Prémiový barbershop v centru Prahy",
  description:
    "JZP Barbershop — prémiový gentlemen's barbershop v srdci Prahy. Profesionální střihy, holení břitvou, úprava vousů. Rezervujte termín online.",
  keywords: [
    "barbershop Praha",
    "holení břitvou Praha",
    "fade střih Praha",
    "gentlemen barbershop",
    "JZP barbershop",
    "pánský holič Praha",
  ],
  openGraph: {
    title: "JZP Barbershop Praha",
    description: "Prémiový barbershop v srdci Prahy — střihy, holení, úprava vousů.",
    url: "https://jzpbarbershop.cz",
    siteName: "JZP Barbershop",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "https://jzpbarbershop.cz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JZP Barbershop Praha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JZP Barbershop Praha",
    description: "Prémiový barbershop v srdci Prahy.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jzpbarbershop.cz" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "JZP Barbershop",
  description: "Prémiový gentlemen's barbershop v srdci Prahy.",
  url: "https://jzpbarbershop.cz",
  telephone: "+420608965058",
  email: "info@jzpbarbershop.cz",
  image: "https://jzpbarbershop.cz/og-image.jpg",
  priceRange: "400–2000 Kč",
  address: {
    "@type": "PostalAddress",
    streetAddress: "nám. J. z Poděbrad 1382/2",
    addressLocality: "Praha 2 – Vinohrady",
    postalCode: "120 00",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.0782,
    longitude: 14.4486,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/j.z.p.barbershop_yasin/",
    "https://facebook.com/jzpbarbershop",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${cinzel.variable} ${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PreloaderProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </PreloaderProvider>
      </body>
    </html>
  );
}
