"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    tag: "WEB",
    title: "IQONEX POS",
    image: null,
    featured: false,
  },
  {
    tag: "WEB",
    title: "Ceylon Fresh Flower Farm Web",
    image: "/works/ceylon-fresh.jpg",
    featured: true,
    readMore: true,
  },
  {
    tag: "WEB",
    title: "Ceylon Fresh Flower Farm Web",
    image: null,
    featured: false,
  },
  {
    tag: "WEB",
    title: "Ceylon Fresh Flower Farm Web",
    image: null,
    featured: false,
  },
];

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="bg-[#f0ede8] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start justify-between">
          <div>
            <p className="mb-2 text-[10px] tracking-[0.25em] text-black/30 uppercase">
              (WHAT WE DO)
            </p>
            <h2 className="font-dm text-4xl font-bold text-[#2a2a2a] md:text-5xl">
              Our Latest Work
            </h2>
          </div>
          <Link
            href="/work"
            className="mt-2 hidden items-center rounded-full border border-black/20 px-5 py-2.5 text-[10px] font-medium tracking-[0.15em] text-black uppercase transition-all duration-300 hover:border-black/60 hover:bg-black hover:text-white md:inline-flex"
          >
            View All Works
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
              style={{ aspectRatio: "3/3.2" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Background */}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-[#d8d8d4]" />
              )}

              {/* Overlay on hover */}
              {project.image && (
                <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />
              )}

              {/* Tag pill — top left */}
              <div className="absolute top-3 left-3 z-10">
                <span className="rounded-full border border-black/20 bg-white/80 px-3 py-1 text-[9px] font-medium tracking-widest text-black/70 backdrop-blur-sm">
                  {project.tag}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute right-0 bottom-0 left-0 z-10 p-4">
                <h3
                  className={`font-dm text-sm leading-snug font-bold ${
                    project.image ? "text-white" : "text-[#2a2a2a]"
                  }`}
                >
                  {project.title}
                </h3>

                {project.readMore && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/work"
                      className="mt-2 inline-block text-[9px] font-bold tracking-[0.15em] text-orange-400 uppercase hover:text-orange-300"
                    >
                      Read More
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
