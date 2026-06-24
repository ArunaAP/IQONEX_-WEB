"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

// Only show homeShow: true projects
const homeProjects = projects.filter((p) => p.homeShow);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const shineX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const shineY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const shineBackground = useTransform(
    [shineX, shineY],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.13) 0%, transparent 60%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer"
      style={{ aspectRatio: "3/3.2", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-xl"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{
          scale: hovered ? 1.03 : 1,
          boxShadow: hovered
            ? "0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(223,255,3,0.2)"
            : "0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
        transition={{ scale: { duration: 0.4, ease: "easeOut" } }}
      >
        {/* Background */}
        {project.image ? (
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-[#111]">
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: hovered ? 0.4 : 0.15 }}
              transition={{ duration: 0.4 }}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 40% 40%, var(--color-primary) 0%, transparent 65%)",
              }}
            />
          </div>
        )}

        {/* Base overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: hovered
              ? "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)"
              : "linear-gradient(160deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 100%)",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Shine */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: shineBackground }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Neon top-right corner accent */}
        <motion.div
          className="absolute top-0 right-2 h-[2px] origin-right"
          style={{ backgroundColor: "var(--color-primary)", width: "40%" }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
        />

        {/* Neon bottom line */}
        <motion.div
          className="absolute right-0 bottom-0 left-0 h-[2px] origin-left"
          style={{ backgroundColor: "var(--color-primary)" }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />

        {/* Tag — glass */}
        <motion.div
          className="absolute top-3 left-3 z-10"
          animate={{ y: hovered ? -2 : 0, opacity: hovered ? 1 : 0.75 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="rounded-full px-3 py-1 text-[9px] font-medium tracking-widest text-white backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
            }}
          >
            {project.tag}
          </span>
        </motion.div>

        {/* Bottom content */}
        <div className="absolute right-0 bottom-0 left-0 z-10 p-4">
          <motion.h3
            className="font-dm text-sm leading-snug font-bold"
            animate={{
              color: hovered ? "var(--color-primary)" : project.image ? "#ffffff" : "#888",
              y: hovered ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
            transition={{ duration: 0.25 }}
          >
            <Link
              href="/work"
              className="mt-1.5 inline-block text-[9px] font-bold tracking-[0.15em] uppercase"
              style={{ color: "var(--color-primary)" }}
            >
              View Project →
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-surface px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <p className="text-muted mb-2 text-[10px] tracking-[0.25em] uppercase">(WHAT WE DO)</p>
            <h2 className="font-dm text-foreground text-4xl font-bold md:text-5xl">
              Our Latest Work
            </h2>
          </div>
          <Link
            href="/work"
            className="border-border text-foreground hover:border-primary hover:text-primary mt-2 hidden items-center rounded-full border px-5 py-2.5 text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-300 md:inline-flex"
          >
            View All Works
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {homeProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
