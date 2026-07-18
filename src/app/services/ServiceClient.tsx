"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NextPages from "@/components/sections/Nextpages";

const services = [
  {
    id: "001",
    title: "Software Development",
    slug: "software-development",
    category: "Software",
    tagline: "Custom software built around your business",
    desc: "We design and develop custom software that streamlines operations, improves productivity, and supports long-term business growth. Every solution is tailored to your unique requirements.",
    image: "/services-bg.png",
    points: [
      "Business management systems",
      "Custom business applications",
      "Workflow automation",
      "Cloud-based software",
      "System integration",
    ],
    deliverables: [
      "Custom software solution",
      "Admin dashboard",
      "User documentation",
      "Deployment & support",
    ],
  },

  {
    id: "002",
    title: "Website Development",
    slug: "website-development",
    category: "Web",
    tagline: "Modern websites that grow your business",
    desc: "From business websites to powerful web applications, we create fast, responsive, and scalable digital experiences that strengthen your online presence and generate new opportunities.",
    image: null,
    points: [
      "Business websites",
      "Corporate websites",
      "E-commerce websites",
      "Booking systems",
      "Custom web applications",
    ],
    deliverables: ["Responsive website", "Content management", "Deployment", "Training & support"],
  },

  {
    id: "003",
    title: "ERP Solutions",
    slug: "erp-solutions",
    category: "Enterprise",
    tagline: "Manage your business from one platform",
    desc: "Our ERP solutions connect departments, automate daily operations, and provide real-time insights to help businesses make smarter decisions and improve efficiency.",
    image: null,
    points: [
      "Inventory management",
      "Sales & billing",
      "Accounting integration",
      "Employee management",
      "Reporting & analytics",
    ],
    deliverables: ["ERP implementation", "Custom modules", "Data migration", "User training"],
  },

  {
    id: "004",
    title: "AI Solutions",
    slug: "ai-solutions",
    category: "Artificial Intelligence",
    tagline: "Smarter business through AI",
    desc: "Leverage Artificial Intelligence to automate repetitive tasks, improve customer experiences, and gain valuable insights that help your business stay competitive.",
    image: null,
    points: [
      "AI chatbots",
      "Business automation",
      "AI assistants",
      "Intelligent workflows",
      "AI integration",
    ],
    deliverables: [
      "AI-powered solution",
      "Workflow automation",
      "Integration",
      "Training & support",
    ],
  },

  {
    id: "005",
    title: "Branding",
    slug: "branding",
    category: "Creative",
    tagline: "Build a brand people remember",
    desc: "We create professional brand identities that communicate your values, build trust, and help your business stand out in a competitive market.",
    image: null,
    points: [
      "Logo design",
      "Brand identity",
      "Brand strategy",
      "Social media branding",
      "Brand guidelines",
    ],
    deliverables: ["Logo package", "Brand guidelines", "Social media kit", "Marketing assets"],
  },

  {
    id: "006",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    category: "Mobile",
    tagline: "Powerful mobile experiences",
    desc: "We build intuitive Android and iOS applications that help businesses engage customers, streamline operations, and deliver seamless mobile experiences.",
    image: null,
    points: [
      "Android applications",
      "iOS applications",
      "Cross-platform apps",
      "Business apps",
      "App maintenance",
    ],
    deliverables: [
      "Mobile application",
      "App publishing support",
      "Documentation",
      "Maintenance & updates",
    ],
  },
];

export default function ServiceClient() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="flex flex-col">
      {/* ── HERO ── */}
      <div className="bg-background relative overflow-hidden px-6 pt-32 pb-20 md:px-10 lg:px-16">
        <Image
          src="/services-bg.png"
          alt="Services background"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted mb-4 text-[10px] tracking-[0.3em] uppercase"
          >
            (OUR SERVICES)
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-geom text-foreground leading-[0.92] font-black"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            WHAT WE
            <br />
            <span style={{ color: "var(--color-primary)" }}>OFFER</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-dm text-muted mt-6 max-w-lg text-sm leading-relaxed"
          >
            End-to-end digital services — from design and development to branding, SEO, and
            enterprise systems.
          </motion.p>
        </div>
      </div>

      {/* ── SERVICE ACCORDION LIST ── */}
      <div className="bg-surface px-6 py-16 md:px-10 lg:px-16">
        <div className="border-border mx-auto max-w-7xl border-t">
          {services.map((service, i) => {
            const isOpen = active === i;
            const isHovered = hovered === i;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border-border border-b"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Row */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="group w-full py-7 text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="font-dm text-muted shrink-0 text-[10px] tracking-widest">
                        {service.id}
                      </span>
                      <div>
                        <h2
                          className="font-geom leading-none font-black transition-colors duration-300"
                          style={{
                            fontSize: "clamp(1.8rem, 5vw, 4rem)",
                            color:
                              isOpen || isHovered
                                ? "var(--color-primary)"
                                : "var(--color-foreground)",
                          }}
                        >
                          {service.title}
                        </h2>
                        <p className="font-dm text-muted mt-1 hidden text-[11px] md:block">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <span className="font-dm border-border text-muted hidden rounded-full border px-3 py-1 text-[9px] tracking-[0.2em] uppercase md:block">
                        {service.category}
                      </span>
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300"
                        style={{
                          borderColor: isOpen ? "var(--color-primary)" : "var(--color-border)",
                          backgroundColor: isOpen ? "var(--color-primary)" : "transparent",
                        }}
                      >
                        <svg
                          className="h-3.5 w-3.5 transition-all duration-300"
                          style={{
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            color: isOpen ? "#000000" : "var(--color-muted)",
                          }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expandable detail */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-12 pl-8 md:grid-cols-3 md:pl-20">
                        {/* Description */}
                        <div className="md:col-span-1">
                          <p className="font-dm text-muted mb-6 text-sm leading-relaxed">
                            {service.desc}
                          </p>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[10px] font-bold tracking-[0.15em] text-black uppercase transition-all duration-300 hover:opacity-80"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          >
                            Start a Project →
                          </Link>
                        </div>

                        {/* What's included */}
                        <div>
                          <p className="font-dm text-muted mb-4 text-[9px] tracking-[0.2em] uppercase">
                            What's included
                          </p>
                          <ul className="flex flex-col gap-2.5">
                            {service.points.map((point, j) => (
                              <li
                                key={j}
                                className="font-dm text-foreground flex items-center gap-3 text-sm"
                              >
                                <span
                                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                                  style={{ backgroundColor: "var(--color-primary)" }}
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <p className="font-dm text-muted mb-4 text-[9px] tracking-[0.2em] uppercase">
                            Deliverables
                          </p>
                          <ul className="flex flex-col gap-2.5">
                            {service.deliverables.map((d, j) => (
                              <li
                                key={j}
                                className="font-dm text-foreground flex items-center gap-3 text-sm"
                              >
                                <span className="bg-border h-1.5 w-1.5 shrink-0 rounded-full" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── WHY IQONEX ── */}
      <div className="bg-background px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-muted mb-3 text-[10px] tracking-[0.25em] uppercase">
                (WHY CHOOSE US)
              </p>
              <h2
                className="font-geom text-foreground leading-[0.92] font-black"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
              >
                WHY WORK
                <br />
                WITH <span style={{ color: "var(--color-primary)" }}>IQONEX</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="border-border text-foreground hover:border-primary hover:text-primary inline-flex items-center gap-2 self-start rounded-full border px-6 py-3 text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-300 md:self-auto"
            >
              Get Started
            </Link>
          </div>

          <div
            className="grid grid-cols-1 gap-px md:grid-cols-3"
            style={{ backgroundColor: "var(--color-border)" }}
          >
            {[
              {
                num: "01",
                title: "One Team, Full Stack",
                desc: "Design, dev, SEO, branding — all under one roof. No juggling multiple agencies.",
              },
              {
                num: "02",
                title: "Transparent Process",
                desc: "Weekly updates, clear timelines, and direct communication throughout every project.",
              },
              {
                num: "03",
                title: "Results You Can Measure",
                desc: "Every project is tracked against clear KPIs. We don't just deliver — we deliver outcomes.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-background hover:bg-surface p-8 transition-colors duration-300"
              >
                <span className="font-dm text-muted text-[10px] tracking-widest">{item.num}</span>
                <h3 className="font-geom text-foreground group-hover:text-primary mt-4 mb-3 text-xl font-black transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-dm text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-surface px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-geom text-foreground leading-[0.92] font-black"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            LET'S BUILD
            <br />
            <span style={{ color: "var(--color-primary)" }}>SOMETHING GREAT</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-[10px] font-bold tracking-[0.2em] text-black uppercase transition-opacity duration-300 hover:opacity-80"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Start a Project →
            </Link>
            <Link
              href="/capabilities"
              className="border-border text-foreground hover:border-primary hover:text-primary inline-flex items-center justify-center rounded-full border px-8 py-4 text-[10px] font-medium tracking-[0.15em] uppercase transition-all duration-300"
            >
              View Capabilities
            </Link>
          </motion.div>
        </div>
      </div>

      <NextPages />
    </section>
  );
}
