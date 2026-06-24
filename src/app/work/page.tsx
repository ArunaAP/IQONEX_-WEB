"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NextPages from "@/components/sections/Nextpages";
import { projects } from "@/data/projects";

const categories = ["ALL", "WEB", "MOBILE", "BRANDING", "SEO", "ERP"];

export default function WorkPage() {
  const [active, setActive] = useState("ALL");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "ALL" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="flex flex-col">
      {/* ── HERO ── */}
      <div className="bg-background relative overflow-hidden px-6 pt-32 pb-16 md:px-10 lg:px-16">
        {/* Faint background text */}
        <div
          className="pointer-events-none absolute right-[-2%] bottom-[-10%] select-none"
          aria-hidden
        >
          <span
            className="font-geom leading-none font-black text-white/[0.03]"
            style={{ fontSize: "clamp(6rem, 22vw, 18rem)" }}
          >
            WORK
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted mb-4 text-[10px] tracking-[0.3em] uppercase"
          >
            (OUR WORK)
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-geom text-foreground leading-[0.92] font-black"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            OUR LATEST
            <br />
            <span style={{ color: "var(--color-primary)" }}>PROJECTS</span>
          </motion.h1>
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="border-border bg-surface border-b px-6 pt-8 md:px-10 lg:px-16">
        <div className="scrollbar-hide mx-auto flex max-w-7xl gap-1 overflow-x-auto pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="shrink-0 rounded-full px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-200"
              style={{
                backgroundColor: active === cat ? "var(--color-primary)" : "transparent",
                color: active === cat ? "#000000" : "var(--color-muted)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div className="bg-surface px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                  style={{ aspectRatio: project.featured ? "16/9" : "4/3" }}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Background */}
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#1a1a1a]">
                      {/* Neon glow for no-image cards */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{ opacity: hovered === project.id ? 0.3 : 0.1 }}
                        transition={{ duration: 0.4 }}
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 30% 40%, var(--color-primary) 0%, transparent 60%)",
                        }}
                      />
                    </div>
                  )}

                  {/* Overlay — lightens on hover instead of darkening */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background:
                        hovered === project.id
                          ? project.image
                            ? "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.2) 100%)"
                            : "rgba(0,0,0,0.0)"
                          : project.image
                            ? "linear-gradient(160deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.5) 100%)"
                            : "rgba(0,0,0,0.0)",
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Neon bottom line on hover */}
                  <motion.div
                    className="absolute right-0 bottom-0 left-0 h-[2px] origin-left"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    animate={{ scaleX: hovered === project.id ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />

                  {/* Tag — glass */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="rounded-full px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase backdrop-blur-md"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Year — top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[9px] font-medium tracking-widest text-white/30 transition-colors duration-300 group-hover:text-white/60">
                      {project.year}
                    </span>
                  </div>

                  {/* Content — bottom */}
                  <div className="absolute right-0 bottom-0 left-0 z-10 p-5">
                    <AnimatePresence>
                      {hovered === project.id && (
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="mb-2 text-[11px] leading-relaxed text-white/60"
                        >
                          {project.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="flex items-end justify-between">
                      <motion.h3
                        className="font-geom leading-none font-black"
                        animate={{
                          color:
                            hovered === project.id
                              ? "var(--color-primary)"
                              : project.image
                                ? "#ffffff"
                                : "#888888",
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Arrow on hover */}
                      <motion.div
                        animate={{
                          opacity: hovered === project.id ? 1 : 0,
                          x: hovered === project.id ? 0 : -8,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full"
                          style={{ backgroundColor: "var(--color-primary)" }}
                        >
                          <svg
                            className="h-3.5 w-3.5 text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="font-geom text-muted mb-3 text-4xl font-black">COMING SOON</p>
              <p className="font-dm text-muted text-sm">No projects in this category yet.</p>
            </div>
          )}

          {/* Project count */}
          <div className="border-border mt-8 flex items-center justify-between border-t pt-6">
            <p className="font-dm text-muted text-[10px] tracking-widest uppercase">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </p>
            <p className="font-dm text-muted text-[10px] tracking-widest uppercase">
              {active === "ALL" ? "Showing all" : active}
            </p>
          </div>
        </div>
      </div>

      <NextPages />
    </section>
  );
}
