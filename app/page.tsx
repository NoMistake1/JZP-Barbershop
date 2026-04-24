"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";
import FloatingCTA from "@/components/FloatingCTA";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Barbers from "@/components/sections/Barbers";
import Pricing from "@/components/sections/Pricing";
import Vouchers from "@/components/sections/Vouchers";
import Reviews from "@/components/sections/Reviews";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Preloader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <BeforeAfter />
        <Barbers />
        <Pricing />
        <Vouchers />
        <Reviews />
        <InstagramFeed />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </>
  );
}
