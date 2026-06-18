"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";

const socials = ["INSTAGRAM", "FACEBOOK", "LINKEDIN"];
const HEADLINE = ["WHERE", "CREATIVITY MEETS", "TECHNOLOGY"];
const RADIUS = 100;

function SpotlightChar({
  char,
  mousePos,
}: {
  char: string;
  mousePos: { x: number; y: number } | null;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  let isClose = false;

  if (mousePos && ref.current) {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    isClose = Math.sqrt((mousePos.x - cx) ** 2 + (mousePos.y - cy) ** 2) < RADIUS;
  }

  return (
    <span
      ref={ref}
      className="inline-block transition-colors duration-150"
      style={{ color: isClose ? "#f97316" : "white" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    setIsInside(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
    setIsInside(false);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor circle */}
      {isInside && mousePos && (
        <div
          className="pointer-events-none fixed z-50 cursor-none rounded-full backdrop-blur-xs"
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Background */}
      <Image
        src="/hero-bg.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col px-6 pt-32 pb-10 md:px-10 lg:px-16">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-geom leading-[0.95] font-semibold tracking-wide select-none"
            // Smaller
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
          >
            {HEADLINE.map((line, li) => (
              <span key={li} className="block">
                {line.split("").map((char, ci) => (
                  <SpotlightChar key={`${li}-${ci}`} char={char} mousePos={mousePos} />
                ))}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <p className="w-20 shrink-0 text-[10px] tracking-[0.15em] text-white/40 uppercase">
                the iqonex
              </p>
              <div>
                <p className="font-dm text-[12px] leading-snug font-light text-white">
                  is the creative
                </p>
                <p className="font-dm text-[12px] leading-snug font-light text-white">
                  software company
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <p className="w-20 shrink-0 text-[10px] tracking-[0.15em] text-white/40 uppercase">
                location
              </p>
              <div>
                <p className="font-dm text-[12px] leading-snug font-light text-white">
                  6.8638°N, 80.9312°E
                </p>
                <p className="font-dm text-[12px] leading-snug font-light text-white">
                  Sri Lanka / Bandarawela
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-full border border-white/20 px-3 py-1.5 text-[9px] font-medium tracking-widest text-white/60 transition-all duration-200 hover:border-white/50 hover:text-white hover:backdrop-blur-none"
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
