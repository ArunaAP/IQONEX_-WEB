import Image from "next/image";
import Link from "next/link";

const socials = [
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "FACEBOOK", href: "https://facebook.com" },
  { label: "LINKEDIN", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1a1a18] px-10 pt-12 pb-8 md:px-10 lg:px-16">
      {/* Watermark */}
      <div
        className="pointer-events-none absolute bottom-[-8%] left-[-2%] z-0 select-none"
        aria-hidden="true"
      >
        <span
          className="font-geom leading-none font-black text-white/[0.05]"
          style={{ fontSize: "clamp(8rem, 28vw, 22rem)" }}
        >
          IQONEX
        </span>
      </div>

      <div className="relative z-10">
        {/* Logo + tagline row */}
        <div className="mb-6 flex items-start gap-8">
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
          <p className="mt-0.5 items-start text-[9px] leading-relaxed tracking-[0.15em] text-white/30 uppercase">
            WE ARE PRIORITIZE COLLABORATION
            <br />
            WITH OUR CLIENTS
          </p>
        </div>

        {/* GET IN TOUCH */}
        <h2
          className="font-geom mb-6 leading-none font-black text-white"
          style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
        >
          GET IN TOUCH <span className="text-orange-500">@</span>
        </h2>

        {/* Contact + socials row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:theiqonex@gmail.com"
              className="font-dm text-sm tracking-wide text-white/50 underline decoration-white/20 underline-offset-4 transition-colors hover:text-orange-400"
            >
              theiqonex@gmail.com
            </a>
            <a
              href="tel:+94769828585"
              className="font-dm text-sm tracking-wide text-white/50 transition-colors hover:text-white"
            >
              +94 7698 28585
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-1.5 text-[9px] font-medium tracking-widest text-white/50 transition-all duration-200 hover:border-white/50 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-5">
          <p className="font-dm text-[11px] text-white/20">
            Copyright © {new Date().getFullYear()} theiqonex. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
