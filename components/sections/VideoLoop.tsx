"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VideoLoop() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !videoRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const v = videoRef.current;
      const pauseFirstFrame = () => {
        v.pause();
        try { v.currentTime = 0; } catch {}
      };
      if (v.readyState >= 1) pauseFirstFrame();
      else v.addEventListener("loadedmetadata", pauseFirstFrame, { once: true });
    }
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden video-loop-section"
      style={{
        height: "clamp(65vh, 80vh, 820px)",
        backgroundColor: "#0a0706",
      }}
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/loop-poster.jpg"
        >
          <source src="/video/loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,7,6,0.45) 0%, rgba(10,7,6,0.65) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex items-center justify-center px-6 video-loop-text-wrap">
        <p
          className="text-center italic"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            color: "#f5ecde",
            maxWidth: "820px",
            lineHeight: 1.3,
            textShadow: "0 2px 30px rgba(0,0,0,0.5)",
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          &ldquo;{t.videoLoop.quote}&rdquo;
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: clamp(55vh, 65vh, 600px) !important;
          }
          p {
            font-size: clamp(1.25rem, 5.5vw, 1.75rem) !important;
          }
        }
        @media (max-width: 480px) {
          section {
            height: 50vh !important;
          }
          .video-loop-text-wrap {
            padding: 0 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
