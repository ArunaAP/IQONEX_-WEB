"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NextPages from "@/components/sections/Nextpages";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Happy Clients" },
  { value: "5", label: "Core Services" },
];

const team = [
  { name: "Aruna Wijesinghe", role: "Founder" },
  //   { name: "Jane Smith", role: "Lead Developer" },
  //   { name: "Mike Lee", role: "Brand Strategist" },
  //   { name: "Sara Perera", role: "SEO Specialist" },
];

const values = [
  {
    id: "01",
    title: "Client First",
    desc: "We prioritize collaboration and transparency with every client, ensuring your vision drives every decision.",
  },
  {
    id: "02",
    title: "Creative Excellence",
    desc: "We push boundaries combining aesthetic design with functional engineering to deliver standout products.",
  },
  {
    id: "03",
    title: "Technology Driven",
    desc: "We stay at the forefront of tech trends, using modern stacks and tools to future-proof your product.",
  },
  {
    id: "04",
    title: "Results Focused",
    desc: "Every project is measured by real outcomes — traffic, conversions, engagement, and growth.",
  },
];

export default function AboutPage() {
  return (
    <section className="flex flex-col">
      {/* ── HERO ── */}
      <div className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-[#111110]">
        <Image
          src="/hero-bg.png"
          alt="About background"
          fill
          priority
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

        <div className="relative z-10 px-6 pt-32 pb-16 md:px-10 lg:px-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[10px] tracking-[0.3em] text-white/40 uppercase"
          >
            (ABOUT US)
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-geom leading-[0.92] font-black text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            WE ARE THE
            <br />
            CREATIVE <span className="text-orange-500">MINDS</span>
            <br />
            BEHIND THE CODE
          </motion.h1>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className="bg-[#f0ede8] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-[10px] tracking-[0.25em] text-black/30 uppercase">
              (WHO WE ARE)
            </p>
            <p className="font-dm text-2xl leading-snug font-bold text-[#2a2a2a] md:text-3xl">
              Our software company is a creative and{" "}
              <span className="text-orange-500">technology-driven</span> firm that specializes in
              providing a wide range of <span className="text-orange-500">digital services</span> to
              clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="font-dm text-sm leading-relaxed text-black/50">
              Founded with a passion for design and technology, iQONEX has grown into a full-service
              digital agency. We work with startups and established businesses alike, crafting
              solutions that are not only beautiful but functional and scalable.
            </p>
            <p className="font-dm text-sm leading-relaxed text-black/50">
              From UI/UX design to full-stack development, branding, SEO, and ERP systems — we cover
              the entire digital spectrum under one roof.
            </p>
            <div className="mt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-[10px] font-medium tracking-[0.15em] text-black uppercase transition-all duration-300 hover:border-black/60 hover:bg-black hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="bg-[#1a1a18] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
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

      {/* ── VALUES ── */}
      <div className="bg-[#f0ede8] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-[10px] tracking-[0.25em] text-black/30 uppercase">(OUR VALUES)</p>
          <h2
            className="font-geom mb-12 leading-none font-black text-[#2a2a2a]"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            WHAT WE STAND FOR
          </h2>

          <div className="border-t border-black/10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col gap-4 border-b border-black/10 py-8 transition-opacity hover:opacity-70 md:flex-row md:items-start md:gap-16"
              >
                <span className="mt-1 shrink-0 text-[10px] tracking-widest text-black/30">
                  {v.id}
                </span>
                <h3 className="font-geom w-48 shrink-0 text-xl font-black text-[#2a2a2a] md:text-2xl">
                  {v.title}
                </h3>
                <p className="font-dm text-sm leading-relaxed text-black/50">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TEAM ── */}
      <div className="bg-[#1a1a18] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-[10px] tracking-[0.25em] text-white/20 uppercase">(THE TEAM)</p>
          <h2
            className="font-geom mb-12 leading-none font-black text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            PEOPLE BEHIND
            <br />
            <span className="text-orange-500">IQONEX</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                {/* Avatar placeholder */}
                <div className="mb-4 flex aspect-square items-end rounded-xl bg-white/5 p-4 transition-colors duration-300 group-hover:bg-white/10">
                  <div>
                    <p className="font-dm text-sm font-semibold text-white">{member.name}</p>
                    <p className="mt-0.5 text-[10px] tracking-widest text-white/30 uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NEXT PAGES ── */}
      <NextPages />
    </section>
  );
}
