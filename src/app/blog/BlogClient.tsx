"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import NextPages from "@/components/sections/Nextpages";
import { blogCategories, blogPosts, formatBlogDate, type BlogPost } from "@/data/blog";

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PostGraphic({ post }: { post: BlogPost }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#d8d5cf]">
      {!imageFailed ? (
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <span className="font-geom absolute right-4 bottom-[-0.12em] text-[6rem] leading-none font-black text-black/[0.055] uppercase md:text-[8rem]">
            {post.category.slice(0, 3)}
          </span>
          <div className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/35 backdrop-blur-sm">
            <span className="font-geom text-2xl font-black text-black/35">
              {String(post.id).padStart(2, "0")}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function PostCard({
  post,
  index,
  featured = false,
}: {
  post: BlogPost;
  index: number;
  featured?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.055 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-[#e8e5e0] transition-colors duration-300 hover:bg-[#e2dfda] ${featured ? "md:flex-row" : ""}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className={`relative block shrink-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-black ${featured ? "aspect-video md:aspect-auto md:w-[48%]" : "aspect-[16/10]"}`}
      >
        <PostGraphic post={post} />
        <span className="absolute top-4 left-4 rounded-full border border-black/10 bg-white/75 px-3 py-1 text-[9px] font-bold tracking-widest text-black/55 uppercase backdrop-blur-sm">
          {post.category}
        </span>
      </Link>
      <div className={`flex flex-1 flex-col justify-between p-6 ${featured ? "md:p-10" : ""}`}>
        <div>
          <div className="mb-4 flex items-center gap-3 text-[10px] text-black/35">
            <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span>{post.readTime}</span>
          </div>
          <h2
            className={`font-geom leading-[1.05] font-black tracking-[-0.01em] text-[#242424] ${featured ? "text-3xl md:text-5xl" : "text-2xl"}`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="transition-colors hover:text-[#6d7c00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              {post.title}
            </Link>
          </h2>
          <p className="font-dm mt-4 line-clamp-3 text-sm leading-6 text-black/50">
            {post.excerpt}
          </p>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="group mt-7 inline-flex w-fit items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-[#6d7c00] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Read article <ArrowRight />
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogClient() {
  const [active, setActive] = useState<(typeof blogCategories)[number]>("ALL");
  const filtered =
    active === "ALL" ? blogPosts : blogPosts.filter((post) => post.category === active);
  const featured = active === "ALL" ? filtered.find((post) => post.featured) : undefined;
  const grid = featured ? filtered.filter((post) => post.slug !== featured.slug) : filtered;

  return (
    <section className="flex flex-col">
      <div className="relative overflow-hidden bg-[#111110] px-6 pt-32 pb-20 md:px-10 lg:px-16">
        <div
          className="pointer-events-none absolute right-[-2%] bottom-[-15%] select-none"
          aria-hidden="true"
        >
          <span
            className="font-geom leading-none font-black text-white/[0.03]"
            style={{ fontSize: "clamp(5rem, 20vw, 16rem)" }}
          >
            BLOG
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-4 text-[10px] tracking-[0.3em] text-white/35 uppercase">
            (IQONEX Insights)
          </p>
          <h1
            className="font-geom leading-[0.92] font-black tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            USEFUL THINKING.
            <br />
            <span className="text-primary">BETTER DIGITAL WORK.</span>
          </h1>
          <p className="font-dm mt-7 max-w-xl text-sm leading-6 text-white/50 md:text-base">
            Practical guidance on software, websites, product design, branding, SEO, and the
            technology behind effective digital experiences.
          </p>
        </div>
      </div>

      <div className="border-b border-black/10 bg-[#f0ede8] px-6 pt-9 md:px-10 lg:px-16">
        <div
          className="mx-auto flex max-w-7xl gap-1 overflow-x-auto"
          role="tablist"
          aria-label="Filter articles by category"
        >
          {blogCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${active === category ? "bg-black text-white" : "text-black/40 hover:bg-black/5 hover:text-black"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#f0ede8] px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {featured && (
                <div className="mb-4">
                  <PostCard post={featured} index={0} featured />
                </div>
              )}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {grid.map((post, index) => (
                  <PostCard key={post.slug} post={post} index={index} />
                ))}
              </div>
              <div className="mt-9 flex items-center justify-between border-t border-black/10 pt-6">
                <p className="text-[10px] tracking-widest text-black/35 uppercase">
                  {filtered.length} article{filtered.length === 1 ? "" : "s"}
                </p>
                <p className="text-[10px] tracking-widest text-black/25 uppercase">
                  {active === "ALL" ? "All topics" : active}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <NextPages />
    </section>
  );
}
