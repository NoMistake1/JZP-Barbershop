"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="custom-cursor-ring fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          borderColor: "rgba(201,164,107,0.5)",
          x: pos.x - (isHovering ? 20 : 16),
          y: pos.y - (isHovering ? 20 : 16),
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="custom-cursor-dot fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          backgroundColor: "#c9a46b",
          width: 6,
          height: 6,
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
