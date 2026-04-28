"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NextPages from "@/components/sections/Nextpages";

const categories = ["ALL", "DESIGN", "DEVELOPMENT", "BRANDING", "SEO", "TECHNOLOGY"];

const posts = [
  {
    id: 1,
    slug: "future-of-ui-ux-design",
    category: "DESIGN",
    title: "The Future of UI/UX Design in 2025",
    excerpt:
      "How AI tools, micro-interactions, and accessibility-first thinking are reshaping the way we design digital products.",
    image: null,
    date: "Apr 12, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "nextjs-vs-astro",
    category: "DEVELOPMENT",
    title: "Next.js vs Astro — Which Should You Pick?",
    excerpt:
      "A practical breakdown of when to use Next.js and when Astro makes more sense for your project.",
    image: null,
    date: "Mar 28, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "brand-identity-mistakes",
    category: "BRANDING",
    title: "5 Brand Identity Mistakes That Kill Startups",
    excerpt:
      "Most startups get their brand wrong from day one. Here's what to avoid and how to build an identity that lasts.",
    image: null,
    date: "Mar 15, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "seo-in-2025",
    category: "SEO",
    title: "SEO in 2025 — What Actually Works",
    excerpt:
      "Google's algorithm has changed. Here's what's driving organic traffic today and how to stay ahead.",
    image: null,
    date: "Feb 20, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "tailwind-v4-guide",
    category: "DEVELOPMENT",
    title: "Tailwind CSS v4 — Complete Migration Guide",
    excerpt:
      "Everything you need to know about moving from Tailwind v3 to v4, including the new @theme syntax and breaking changes.",
    image: null,
    date: "Feb 5, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "color-psychology-branding",
    category: "BRANDING",
    title: "Color Psychology in Modern Branding",
    excerpt:
      "Why the colors you choose define how customers feel about your brand before they read a single word.",
    image: null,
    date: "Jan 18, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 7,
    slug: "web-performance-tips",
    category: "TECHNOLOGY",
    title: "10 Web Performance Tips That Actually Matter",
    excerpt:
      "From lazy loading to edge rendering — the optimizations that make a real difference to your Core Web Vitals.",
    image: null,
    date: "Jan 3, 2025",
    readTime: "6 min read",
    featured: false,
  },
];

function PostCard({
  post,
  index,
  featured = false,
}: {
  post: (typeof posts)[0];
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-[#e8e5e0] transition-colors duration-300 hover:bg-[#e0ddd8] ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      {/* Image / placeholder */}
      <div
        className={`relative shrink-0 overflow-hidden bg-[#d4d1cc] ${
          featured ? "aspect-video md:aspect-auto md:w-1/2" : "aspect-video"
        }`}
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-geom leading-none font-black text-black/5 select-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              {post.category}
            </span>
          </div>
        )}

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[9px] font-bold tracking-widest text-black/60 uppercase backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-between p-6 ${featured ? "md:p-10" : ""}`}>
        <div>
          {/* Meta */}
          <div className="mb-4 flex items-center gap-3">
            <span className="font-dm text-[10px] text-black/30">{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span className="font-dm text-[10px] text-black/30">{post.readTime}</span>
          </div>

          {/* Title */}
          <h2
            className={`font-geom mb-3 leading-tight font-black text-[#2a2a2a] transition-colors duration-300 group-hover:text-orange-500 ${
              featured ? "text-2xl md:text-4xl" : "text-lg"
            }`}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="font-dm line-clamp-3 text-sm leading-relaxed text-black/40">
            {post.excerpt}
          </p>
        </div>

        {/* Read more */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-orange-500 uppercase transition-colors group-hover:gap-3 hover:text-orange-600"
        >
          Read More
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState("ALL");

  const filtered = active === "ALL" ? posts : posts.filter((p) => p.category === active);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || active !== "ALL");
  const grid = active === "ALL" ? filtered.filter((p) => !p.featured) : filtered;

  return (
    <section className="flex flex-col">
      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-[#111110] px-6 pt-32 pb-20 md:px-10 lg:px-16">
        <div
          className="pointer-events-none absolute right-[-2%] bottom-[-15%] select-none"
          aria-hidden
        >
          <span
            className="font-geom leading-none font-black text-white/[0.03]"
            style={{ fontSize: "clamp(5rem, 20vw, 16rem)" }}
          >
            BLOG
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[10px] tracking-[0.3em] text-white/30 uppercase"
          >
            (OUR BLOG)
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-geom leading-[0.92] font-black text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            INSIGHTS &
            <br />
            <span className="text-orange-500">IDEAS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-dm mt-6 max-w-md text-sm leading-relaxed text-white/40"
          >
            Thoughts on design, development, branding, and everything in between.
          </motion.p>
        </div>
      </div>

      {/* ── FILTER ── */}
      <div className="border-b border-black/10 bg-[#f0ede8] px-6 pt-10 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto pb-0">
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

      {/* ── POSTS ── */}
      <div className="bg-[#f0ede8] px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured post — only on ALL */}
              {active === "ALL" && featured && (
                <div className="mb-4">
                  <PostCard post={featured} index={0} featured />
                </div>
              )}

              {/* Grid */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {grid.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>

              {/* Empty state */}
              {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="font-geom mb-3 text-4xl font-black text-black/10">COMING SOON</p>
                  <p className="font-dm text-sm text-black/30">No posts in this category yet.</p>
                </div>
              )}

              {/* Count */}
              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                <p className="font-dm text-[10px] tracking-widest text-black/30 uppercase">
                  {filtered.length} article{filtered.length !== 1 ? "s" : ""}
                </p>
                <p className="font-dm text-[10px] tracking-widest text-black/20 uppercase">
                  {active === "ALL" ? "Showing all" : active}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── NEXT PAGES ── */}
      <NextPages />
    </section>
  );
}
