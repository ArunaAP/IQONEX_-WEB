"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";
import gsap from "gsap";

const socials = [
  {
    name: "INSTAGRAM",
    url: "https://instagram.com/theiqonex",
  },
  {
    name: "FACEBOOK",
    url: "https://facebook.com/theiqonex",
  },
  {
    name: "LINKEDIN",
    url: "https://linkedin.com/company/theiqonex",
  },
];
const HEADLINE = ["WHERE", "CREATIVITY ", "MEETS", "TECHNOLOGY"];
const NEON_WORDS = ["MEETS", "TECHNOLOGY"];

function SpotlightChar({ char, isNeon }: { char: string; isNeon: boolean }) {
  return (
    <span className="inline-block" style={{ color: isNeon ? "var(--color-primary)" : "white" }}>
      {char === " " ? "\u00A0" : char}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;

      // Normalize: -1 to +1 from center
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;

      // Background moves opposite direction (parallax depth)
      gsap.to(bgRef.current, {
        x: nx * -6,
        y: ny * -4,
        duration: 1.2,
        ease: "power2.out",
      });

      // Overlay subtle shift
      gsap.to(overlayRef.current, {
        x: nx * -2.5,
        y: ny * -4,
        duration: 1.4,
        ease: "power2.out",
      });

      // Headline moves same direction as cursor (floats forward)
      gsap.to(headlineRef.current, {
        x: nx * 4.5,
        y: ny * 2.5,
        duration: 1.0,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      // Reset everything to center
      gsap.to([bgRef.current, overlayRef.current, headlineRef.current], {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Background — extra size so parallax shift doesn't show edges */}
      <div ref={bgRef} className="absolute inset-[-40px] will-change-transform">
        <Image
          src="/hero-bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlays */}
      <div ref={overlayRef} className="absolute inset-[-40px] will-change-transform">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col px-6 pt-32 pb-10 md:px-10 lg:px-16">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <motion.h1
            ref={headlineRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-geom leading-[0.95] font-black tracking-wide will-change-transform select-none"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
          >
            {HEADLINE.map((line, li) => {
              const words = line.split(" ");
              return (
                <span key={li} className="block">
                  {words.map((word, wi) => (
                    <span key={wi}>
                      {wi > 0 && <span>&nbsp;</span>}
                      {word.split("").map((char, ci) => (
                        <SpotlightChar
                          key={`${li}-${wi}-${ci}`}
                          char={char}
                          isNeon={NEON_WORDS.includes(word)}
                        />
                      ))}
                    </span>
                  ))}
                </span>
              );
            })}
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
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-3 py-1.5 text-[9px] font-medium tracking-widest text-white/60 transition-all duration-200 hover:border-white/50 hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
            <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>

            {/* Animated line */}
            <div className="relative h-12 w-[1px] overflow-hidden bg-white/10">
              <motion.div
                className="bg-primary absolute top-0 left-0 w-full"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                style={{ height: "50%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
