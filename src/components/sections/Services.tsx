"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "001",
    label: "UI/UX",
    description:
      "We craft intuitive and beautiful user experiences that delight users and drive engagement across all platforms.",
  },
  {
    id: "002",
    label: "WEB DEV",
    description:
      "The digital landscape is ever-evolving, and digital agencies stay at the forefront of technology and industry trends.",
  },
  {
    id: "003",
    label: "BRANDING",
    description:
      "We build strong, memorable brand identities that communicate your values and connect with your audience.",
  },
  {
    id: "004",
    label: "SEO",
    description:
      "Data-driven SEO strategies that increase your visibility, drive organic traffic, and grow your business.",
  },
  {
    id: "005",
    label: "ERP",
    description:
      "Custom ERP solutions that streamline your operations, improve efficiency, and scale with your business.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative flex min-h-screen flex-col overflow-hidden">
      <Image
        src="/services-bg.png"
        alt="Services background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="relative z-10 flex flex-1 flex-col px-6 py-16 pt-30 md:px-10 lg:px-16">
        <p className="mb-6 text-[10px] tracking-[0.25em] text-white/40 uppercase">(OUR SERVICES)</p>
        <div className="border-t border-white/15" />

        <div className="flex flex-1 flex-col">
          {services.map((service, i) => {
            const isActive = active === i;
            const isHovered = hovered === i;

            // text color logic
            let textColor = "white"; // default
            if (isActive || isHovered) textColor = "#1f1f1f"; // dark gray on active/hover

            return (
              <div key={service.id}>
                <motion.div
                  className={`relative flex cursor-pointer items-center transition-all duration-300 ${
                    isActive || isHovered ? "bg-primary px-4" : "px-0"
                  }`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ minHeight: "80px" }}
                >
                  <h2
                    className="font-geom leading-none font-black tracking-tight transition-all duration-300 select-none"
                    style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", color: textColor }}
                  >
                    {service.label}
                  </h2>

                  <span
                    className="ml-4 shrink-0 rounded-full border px-2 py-0.5 text-[10px] tracking-widest transition-colors duration-300"
                    style={{
                      borderColor:
                        isActive || isHovered ? "rgba(31,31,31,0.3)" : "rgba(255,255,255,0.2)",
                      color: isActive || isHovered ? "rgba(31,31,31,0.6)" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {service.id}
                  </span>

                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.p
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="ml-auto hidden max-w-xs text-right text-[11px] leading-relaxed lg:block"
                        style={{ color: "rgba(31,31,31,0.7)" }}
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
                <div className="border-t border-white/15" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
