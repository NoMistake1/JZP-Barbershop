"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/contexts/PreloaderContext";

export default function Preloader() {
  const { isLoading, setIsLoading } = usePreloader();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("jzp-preloader-shown", "1");
          }, 600);
          return 100;
        }
        return p + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isLoading, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0a0706" }}
        >
          {/* SVG Logo */}
          <div className="mb-12">
            <svg
              width="160"
              height="80"
              viewBox="0 0 160 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* J */}
              <motion.path
                d="M 10 15 L 10 55 Q 10 70 -5 70 Q -15 70 -15 60"
                stroke="#c9a46b"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              />
              {/* J dot */}
              <motion.circle
                cx="10"
                cy="8"
                r="3"
                fill="#c9a46b"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              />
              {/* Z */}
              <motion.path
                d="M 30 15 L 60 15 L 30 55 L 60 55"
                stroke="#c9a46b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              />
              {/* P */}
              <motion.path
                d="M 75 55 L 75 15 L 95 15 Q 110 15 110 30 Q 110 45 95 45 L 75 45"
                stroke="#c9a46b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.0 }}
              />
            </svg>
          </div>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-xs tracking-[0.3em] mb-12"
            style={{ color: "#8a7e6a", fontFamily: "var(--font-inter)" }}
          >
            BARBERSHOP · PRAHA
          </motion.div>

          {/* Progress bar */}
          <div
            className="w-48 h-px relative"
            style={{ backgroundColor: "#1c1614" }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{
                backgroundColor: "#c9a46b",
                width: `${progress}%`,
                transition: "width 0.05s linear",
                boxShadow: "0 0 8px rgba(201,164,107,0.6)",
              }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xs"
            style={{ color: "#8a7e6a" }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
