"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextPages from "@/components/sections/Nextpages";

const capabilities = [
  {
    id: "01",
    title: "Access to the Latest Technology",
    category: "Technology",
    desc: "Digital agencies consist of skilled professionals with expertise in various digital disciplines. We stay ahead of the curve, using cutting-edge tools and frameworks to build future-proof solutions.",
    points: [
      "Modern tech stacks",
      "Cloud-native architecture",
      "AI & automation integration",
      "Performance optimization",
    ],
  },
  {
    id: "02",
    title: "Data-Driven Decision Making",
    category: "Strategy",
    desc: "This data-driven approach allows businesses to make informed decisions, optimize their strategies, and stay competitive in an ever-changing market landscape.",
    points: ["Analytics & reporting", "A/B testing", "User behavior tracking", "KPI dashboards"],
  },
  {
    id: "03",
    title: "Focus on Core Competencies",
    category: "Operations",
    desc: "This streamline approach ensures that time and resources are allocated efficiently, leading to increased productivity and better business outcomes.",
    points: [
      "Process automation",
      "Workflow optimization",
      "Resource planning",
      "Outsourcing strategy",
    ],
  },
  {
    id: "04",
    title: "Creative & Strategic Thinking",
    category: "Design",
    desc: "We combine creative vision with strategic execution to deliver solutions that truly stand out. Every pixel and every line of code is crafted with purpose.",
    points: ["UI/UX design", "Brand storytelling", "Visual identity", "Creative direction"],
  },
  {
    id: "05",
    title: "Scalable & Flexible Solutions",
    category: "Engineering",
    desc: "Our solutions grow with your business, adapting to new challenges and opportunities as they arise. Built to scale from day one.",
    points: [
      "Microservices architecture",
      "API-first development",
      "Multi-platform support",
      "Load balancing",
    ],
  },
  {
    id: "06",
    title: "End-to-End Project Management",
    category: "Management",
    desc: "From concept to launch, we manage every phase of your project with precision and transparency. You're always in the loop.",
    points: ["Agile methodology", "Sprint planning", "Regular reporting", "Post-launch support"],
  },
];

export default function CapabilitiesPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="flex flex-col">
      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-[#111110] px-6 pt-32 pb-16 md:px-10 lg:px-16">
        {/* Watermark */}
        <div
          className="pointer-events-none absolute right-[-2%] bottom-[-15%] select-none"
          aria-hidden
        >
          <span
            className="font-geom leading-none font-black text-white/[0.03]"
            style={{ fontSize: "clamp(5rem, 20vw, 16rem)" }}
          >
            SKILLS
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[10px] tracking-[0.3em] text-white/30 uppercase"
          >
            (HOW IT WORKING)
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-geom leading-[0.92] font-black text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            OUR
            <br />
            <span className="text-primary">CAPABILITIES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-dm mt-6 max-w-lg text-sm leading-relaxed text-white/40"
          >
            We bring together technology, design, and strategy to deliver digital solutions that
            drive real results.
          </motion.p>
        </div>
      </div>

      {/* ── CAPABILITIES LIST ── */}
      <div className="bg-surface px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-white/60">
            {capabilities.map((cap, i) => {
              const isOpen = active === i;
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-white/10"
                >
                  {/* Row header */}
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="font-dm shrink-0 text-[10px] tracking-widest text-white/75">
                        {cap.id}
                      </span>
                      <h2
                        className="font-geom group-hover:text-primary leading-none font-black text-white/60 transition-colors duration-300"
                        style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
                      >
                        {cap.title}
                      </h2>
                    </div>

                    <div className="flex shrink-0 items-center gap-4">
                      <span className="font-dm hidden rounded-full border border-white/50 px-3 py-1 text-[9px] tracking-[0.2em] text-white/80 uppercase md:block">
                        {cap.category}
                      </span>
                      {/* Plus / minus */}
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-primtext-primary bg-primtext-primary"
                            : "border-white/10 bg-transparent"
                        }`}
                      >
                        <svg
                          className={`h-3.5 w-3.5 transition-all duration-300 ${isOpen ? "rotate-45 text-white" : "text-white/70"}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-10 pl-10 md:grid-cols-2 md:pl-24">
                          <p className="font-dm text-sm leading-relaxed text-white/50">
                            {cap.desc}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {cap.points.map((point, j) => (
                              <li
                                key={j}
                                className="font-dm flex items-center gap-3 text-sm text-white"
                              >
                                <span className="bg-primtext-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-[#1a1a18] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "6", label: "Core Capabilities" },
            { value: "10+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center border-r border-white/5 text-center last:border-0"
            >
              <span
                className="font-geom mb-2 leading-none font-black text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {stat.value}
              </span>
              <span className="font-dm text-[10px] tracking-[0.2em] text-white/30 uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-scroll px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-geom leading-[0.92] font-black text-white"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            READY TO START
            <br />
            <span className="text-primary">YOUR PROJECT?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-light inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[10px] font-bold tracking-[0.2em] text-black uppercase transition-colors duration-300 hover:bg-orange-600"
            >
              Get in Touch →
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-8 py-4 text-[10px] font-medium tracking-[0.15em] text-black uppercase transition-all duration-300 hover:border-black/60 hover:bg-black hover:text-white"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── NEXT PAGES ── */}
      <NextPages />
    </section>
  );
}
