"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-surface px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Section tag */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-[10px] tracking-[0.25em] text-white/60 uppercase"
        >
          (ABOUT US)
        </motion.p>

        {/* Main text */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-dm mb-12 text-2xl leading-snug font-bold tracking-tight text-white md:text-3xl lg:text-4xl"
        >
          Our software company is a creative and <br />
          <span className="text-primary">technology-driven</span> firm that specializes <br /> in
          providing a wide range of{" "}
          <span className="text-primary">
            digital <br />
            services
          </span>{" "}
          to clients.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-[10px] font-medium tracking-[0.2em] text-white uppercase transition-all duration-300 hover:border-black/60 hover:bg-white hover:text-black"
          >
            More About Company
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
