"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pages = [
  { label: "CASES", href: "/#work" },
  { label: "CONTACTS", href: "/contact" },
  { label: "BLOG", href: "/blog" },
];

export default function NextPages() {
  return (
    <section className="bg-[#f0ede8] px-6 pt-10 pb-0 md:px-10 lg:px-16">
      <p className="mb-4 text-[10px] tracking-[0.25em] text-black/30 uppercase">(NEXT PAGES)</p>
      <div className="border-t border-black/10" />
      <ul>
        {pages.map((page, i) => (
          <motion.li
            key={page.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link
              href={page.href}
              className="group flex items-center border-b border-black/10 py-5 transition-opacity duration-300 hover:opacity-50"
            >
              <span
                className="font-geom leading-none font-black text-black"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                {page.label}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
