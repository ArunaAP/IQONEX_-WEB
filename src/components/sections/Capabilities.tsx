"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const capabilities = [
  {
    title: "Access to the Latest Technology",
    description: "Digital agencies consist of skilled professionals with expertise in various digital disciplines, including.",
  },
  {
    title: "Data-Driven Decision Making",
    description: "This data-driven approach allows businesses to make informed decisions, optimize their strategies.",
  },
  {
    title: "Focus on Core Competencies",
    description: "This streamline approach ensures that time and resources are allocated efficiently, leading to increased.",
  },
  {
    title: "Creative & Strategic Thinking",
    description: "We combine creative vision with strategic execution to deliver solutions that truly stand out.",
  },
  {
    title: "Scalable & Flexible Solutions",
    description: "Our solutions grow with your business, adapting to new challenges and opportunities as they arise.",
  },
  {
    title: "End-to-End Project Management",
    description: "From concept to launch, we manage every phase of your project with precision and transparency.",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Capabilities() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const totalPages = Math.ceil(capabilities.length / ITEMS_PER_PAGE);
  const visible = capabilities.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  const goToPage = (i: number) => {
    setDirection(i > page ? 1 : -1);
    setPage(i);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="bg-[#f0ede8] px-6 py-20 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 mb-2">(HOW IT WORKING)</p>
            <h2 className="font-dm font-bold text-4xl md:text-5xl text-[#3a3a3a]">Our Capabilities</h2>
          </div>
          <Link
            href="/about"
            className="hidden md:inline-flex items-center border border-black/20 hover:border-black/60 text-black text-[10px] font-medium tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-black hover:text-white mt-2"
          >
            View All Capabilities
          </Link>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-black/10"
          >
            {visible.map((cap, i) => (
              <div key={i} className="px-6 first:pl-0 last:pr-0 flex flex-col gap-4">
                <div>
                  <h3 className="font-dm font-bold text-lg text-[#3a3a3a] leading-snug mb-4">
                    {cap.title}
                  </h3>
                  <div className="border-t border-black/15" />
                </div>
                <p className="text-[13px] text-[#888] leading-relaxed flex-1">
                  {cap.description}
                </p>
                <button className="text-[10px] font-bold tracking-[0.15em] uppercase text-orange-500 hover:text-orange-600 transition-colors text-left">
                  Read More
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-12">
            {Array.from({ length: totalPages }).map((_, i) => {
              const isActive = i === page;
              return (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: isActive ? 18 : 8,
                    height: isActive ? 18 : 8,
                    border: isActive ? "1.5px solid rgba(0,0,0,0.5)" : "none",
                    backgroundColor: isActive ? "transparent" : "rgba(0,0,0,0.3)",
                  }}
                />
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}