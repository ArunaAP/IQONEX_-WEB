"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NextPages from "@/components/sections/Nextpages";

const categories = ["ALL", "WEB", "MOBILE", "BRANDING", "SEO", "ERP"];

const projects = [
  {
    id: 1,
    title: "IQONEX POS",
    category: "WEB",
    tag: "WEB",
    image: "/works/pos-system-img.png",
    year: "2024",
    desc: "A modern point-of-sale system built for retail businesses.",
  },
  {
    id: 2,
    title: "Ceylon Fresh Flower Farm",
    category: "WEB",
    tag: "WEB",
    image: "/works/ceylon-fresh-flower.png",
    year: "2024",
    desc: "E-commerce platform for a flower farm business in Sri Lanka.",
    featured: true,
  },
  {
    id: 3,
    title: "Brand Identity — Studio X",
    category: "BRANDING",
    tag: "BRANDING",
    image: null,
    year: "2023",
    desc: "Full brand identity design including logo, colors, and typography.",
  },
  {
    id: 4,
    title: "SEO Campaign — RetailCo",
    category: "SEO",
    tag: "SEO",
    image: null,
    year: "2023",
    desc: "Organic traffic grew 240% in 6 months through targeted SEO.",
  },
  {
    id: 5,
    title: "Mobile App — DeliveryX",
    category: "MOBILE",
    tag: "MOBILE",
    image: null,
    year: "2024",
    desc: "Cross-platform delivery tracking app for drivers and customers.",
  },
  {
    id: 6,
    title: "ERP System — ManufacturePro",
    category: "ERP",
    tag: "ERP",
    image: null,
    year: "2023",
    desc: "Custom ERP solution managing inventory, HR, and finance.",
  },
  {
    id: 7,
    title: "Portfolio — Creative Agency",
    category: "WEB",
    tag: "WEB",
    image: null,
    year: "2024",
    desc: "Award-winning portfolio site for a creative agency.",
  },
  {
    id: 8,
    title: "Brand — GreenLeaf",
    category: "BRANDING",
    tag: "BRANDING",
    image: null,
    year: "2024",
    desc: "Eco-friendly brand identity with packaging design.",
  },
];

export default function WorkPage() {
  const [active, setActive] = useState("ALL");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "ALL" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="flex flex-col">
      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-[#111110] px-6 pt-32 pb-16 md:px-10 lg:px-16">
        {/* Background faint text */}
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
            className="mb-4 text-[10px] tracking-[0.3em] text-white/30 uppercase"
          >
            (OUR WORK)
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-geom leading-[0.92] font-black text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            OUR LATEST
            <br />
            <span className="text-orange-500">PROJECTS</span>
          </motion.h1>
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="border-b border-black/10 bg-[#f0ede8] px-6 pt-10 md:px-10 lg:px-16">
        <div className="scrollbar-hide mx-auto flex max-w-7xl gap-1 overflow-x-auto pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-200 ${
                active === cat
                  ? "bg-black text-white"
                  : "text-black/40 hover:bg-black/5 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div className="bg-[#f0ede8] px-6 py-12 md:px-10 lg:px-16">
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
                    <div className="absolute inset-0 bg-[#d8d8d4] transition-colors duration-300 group-hover:bg-[#ccccc8]" />
                  )}

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      project.image
                        ? "bg-black/20 group-hover:bg-black/60"
                        : "bg-transparent group-hover:bg-black/5"
                    }`}
                  />

                  {/* Tag — top left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full border border-black/20 bg-white/80 px-3 py-1 text-[9px] font-bold tracking-widest text-black/60 uppercase backdrop-blur-sm">
                      {project.tag}
                    </span>
                  </div>

                  {/* Year — top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[9px] font-medium tracking-widest text-black/30 transition-colors duration-300 group-hover:text-white/50">
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
                          className={`mb-2 text-[11px] leading-relaxed ${
                            project.image ? "text-white/70" : "text-black/40"
                          }`}
                        >
                          {project.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="flex items-end justify-between">
                      <h3
                        className={`font-geom leading-none font-black transition-colors duration-300 ${
                          project.image ? "text-white" : "text-[#2a2a2a]"
                        }`}
                        style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
                      >
                        {project.title}
                      </h3>

                      {/* Arrow on hover */}
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{
                          opacity: hovered === project.id ? 1 : 0,
                          x: hovered === project.id ? 0 : -8,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            project.image ? "bg-white/20" : "bg-black/10"
                          }`}
                        >
                          <svg
                            className={`h-3.5 w-3.5 ${project.image ? "text-white" : "text-black"}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
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
              <p className="font-geom mb-3 text-4xl font-black text-black/10">COMING SOON</p>
              <p className="font-dm text-sm text-black/30">No projects in this category yet.</p>
            </div>
          )}

          {/* Project count */}
          <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
            <p className="font-dm text-[10px] tracking-widest text-black/30 uppercase">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </p>
            <p className="font-dm text-[10px] tracking-widest text-black/20 uppercase">
              {active === "ALL" ? "Showing all" : active}
            </p>
          </div>
        </div>
      </div>

      {/* ── NEXT PAGES ── */}
      <NextPages />
    </section>
  );
}
