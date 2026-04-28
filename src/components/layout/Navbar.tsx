"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR WORK", href: "/#work" },
  { label: "BLOG", href: "/#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xs" : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex h-14 max-w-[1800px] items-center px-6">
        {/* LEFT — Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="iQONEX"
              width={100}
              height={32}
              className="object-contain invert"
              priority
            />
          </Link>
        </div>

        {/* CENTER — Pill Nav */}
        <div
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/20 md:flex"
          style={{ padding: "3px" }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace("/#", "/"));

            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  lineHeight: 1,
                }}
                className={`inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 font-medium tracking-widest whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* RIGHT — Actions */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <button className="hidden items-center justify-center p-2 text-white/60 transition-colors hover:text-white md:flex">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <Link
            href="/contact"
            style={{ fontSize: "10px", letterSpacing: "0.12em", lineHeight: 1 }}
            className="hidden items-center rounded-full bg-orange-500 px-5 py-2 font-bold text-white uppercase transition-colors hover:bg-orange-600 md:inline-flex"
          >
            CONTACT
          </Link>

          {/* Mobile hamburger */}
          <button className="p-2 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-80" : "max-h-0"} bg-black/95 backdrop-blur-md`}
      >
        <ul className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-3 text-[12px] font-medium tracking-widest text-white/60 uppercase transition hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center rounded-full bg-orange-500 px-6 py-2.5 text-[12px] font-bold tracking-widest text-white uppercase"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
