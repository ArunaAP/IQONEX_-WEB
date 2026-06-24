"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const capabilities = [
  {
    title: "Access to the Latest Technology",
    description:
      "Digital agencies consist of skilled professionals with expertise in various digital disciplines, including.",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "This data-driven approach allows businesses to make informed decisions, optimize their strategies.",
  },
  {
    title: "Focus on Core Competencies",
    description:
      "This streamline approach ensures that time and resources are allocated efficiently, leading to increased.",
  },
  {
    title: "Creative & Strategic Thinking",
    description:
      "We combine creative vision with strategic execution to deliver solutions that truly stand out.",
  },
  {
    title: "Scalable & Flexible Solutions",
    description:
      "Our solutions grow with your business, adapting to new challenges and opportunities as they arise.",
  },
  {
    title: "End-to-End Project Management",
    description:
      "From concept to launch, we manage every phase of your project with precision and transparency.",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Capabilities() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
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
    <section className="bg-surface overflow-hidden px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="mb-10 flex items-start justify-between">
          <div>
            <p className="text-muted mb-2 text-[10px] tracking-[0.25em] uppercase">
              (HOW IT WORKING)
            </p>
            <h2 className="font-dm text-foreground text-4xl font-bold md:text-5xl">
              Our Capabilities
            </h2>
          </div>
          <Link
            href="/capabilities"
            className="border-border text-foreground hover:border-primary hover:text-primary mt-2 hidden items-center rounded-full border px-5 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-300 md:inline-flex"
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
            className="divide-border grid grid-cols-1 gap-0 divide-y md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            {visible.map((cap, i) => (
              <div
                key={i}
                className="group flex flex-col gap-4 px-6 py-6 transition-colors duration-300 first:pl-0 last:pr-0 hover:bg-black/30"
              >
                {/* Number */}
                <p className="text-muted text-[10px] tracking-[0.2em]">
                  {String(page * ITEMS_PER_PAGE + i + 1).padStart(2, "0")}
                </p>

                <div>
                  <h3 className="font-dm text-foreground group-hover:text-primary mb-4 text-lg leading-snug font-bold transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <div className="border-border group-hover:border-primary/30 border-t transition-colors duration-300" />
                </div>

                <p className="text-muted flex-1 text-[13px] leading-relaxed">{cap.description}</p>

                <button className="text-muted hover:text-primary text-left text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-200">
                  Read More →
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => {
              const isActive = i === page;
              return (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? 20 : 8,
                    height: 8,
                    backgroundColor: isActive ? "var(--color-primary)" : "var(--color-border)",
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
