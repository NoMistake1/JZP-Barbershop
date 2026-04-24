"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FloatingCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById("kontakt");

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    const scrollHandler = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", scrollHandler);
    if (contactEl) observer.observe(contactEl);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[700] lg:hidden"
        >
          <a
            href="#booking"
            className="block px-8 py-3 text-sm tracking-[0.2em] font-medium"
            style={{
              backgroundColor: "#c9a46b",
              color: "#0a0706",
              boxShadow: "0 4px 30px rgba(201,164,107,0.4)",
            }}
          >
            {t.floatingCta}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
