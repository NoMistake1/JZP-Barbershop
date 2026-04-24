"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("jzp-cookies");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("jzp-cookies", "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[900] px-4 py-4 md:px-8"
          style={{
            backgroundColor: "#141010",
            borderTop: "1px solid #c9a46b",
          }}
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between">
            <p className="text-sm" style={{ color: "#8a7e6a" }}>
              {t.cookie.text}
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => setVisible(false)}
                className="px-5 py-2 text-xs tracking-widest border transition-colors"
                style={{
                  borderColor: "#8a7e6a",
                  color: "#8a7e6a",
                }}
              >
                {t.cookie.settings}
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-xs tracking-widest transition-colors"
                style={{
                  backgroundColor: "#c9a46b",
                  color: "#0a0706",
                }}
              >
                {t.cookie.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
