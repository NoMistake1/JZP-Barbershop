"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";
import FloatingCTA from "@/components/FloatingCTA";
import SectionEffects from "@/components/SectionEffects";

import Hero from "@/components/sections/Hero";
import VideoLoop from "@/components/sections/VideoLoop";
import Barbers from "@/components/sections/Barbers";
import Pricing from "@/components/sections/Pricing";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Vouchers from "@/components/sections/Vouchers";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
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
        <VideoLoop />
        <Barbers />
        <Pricing />
        <BeforeAfter />
        <Vouchers />
        <Gallery />
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
      <CookieBanner />
      <SectionEffects />
    </>
  );
}
