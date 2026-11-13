import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import NextPages from "@/components/sections/Nextpages";
import { blogPosts, formatBlogDate, getBlogPost, type BlogPost } from "@/data/blog";

const SITE_URL = "https://theiqonex.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "The IQONEX", url: SITE_URL }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [SITE_URL],
      section: post.category,
      tags: post.keywords,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `${post.title} — The IQONEX`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function ArrowLeft() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = post.relatedSlugs
    .map(getBlogPost)
    .filter((item): item is BlogPost => Boolean(item));
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: [`${SITE_URL}${post.image}`],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
      author: { "@type": "Organization", name: "The IQONEX", url: `${SITE_URL}/about` },
      publisher: {
        "@type": "Organization",
        name: "The IQONEX",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
      articleSection: post.category,
      keywords: post.keywords.join(", "),
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
      ],
    },
  ];

  return (
    <article className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
      />

      <header className="relative overflow-hidden bg-[#111110] px-6 pt-28 pb-16 md:px-10 md:pt-36 md:pb-20 lg:px-16">
        <div
          className="pointer-events-none absolute right-[-3%] bottom-[-30%] select-none"
          aria-hidden="true"
        >
          <span className="font-geom text-[13rem] leading-none font-black text-white/[0.025] uppercase md:text-[22rem]">
            {post.category.slice(0, 3)}
          </span>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="focus-visible:outline-primary mb-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-white/40 uppercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <ArrowLeft /> Back to insights
          </Link>
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] text-white/35">
            <span className="bg-primary rounded-full px-3 py-1 font-bold tracking-[0.14em] text-black uppercase">
              {post.category}
            </span>
            <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>{post.readTime}</span>
          </div>
          <h1
            className="font-geom max-w-5xl leading-[0.96] font-black tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.7rem, 7vw, 6.8rem)" }}
          >
            {post.title}
          </h1>
          <p className="font-dm mt-7 max-w-3xl text-base leading-7 text-white/55 md:text-lg md:leading-8">
            {post.excerpt}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-[10px] text-white/35">
            <p>
              By{" "}
              <Link
                href="/about"
                className="hover:text-primary font-semibold text-white/65 underline decoration-white/20 underline-offset-4"
              >
                The IQONEX team
              </Link>
            </p>
            <p>
              Published <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            </p>
            {post.updatedAt !== post.publishedAt && (
              <p>
                Updated <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time>
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="bg-[#f0ede8] px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[220px_minmax(0,760px)] lg:justify-center lg:gap-16">
          <aside className="self-start lg:sticky lg:top-24" aria-label="Article table of contents">
            <p className="mb-4 text-[9px] font-bold tracking-[0.2em] text-black/35 uppercase">
              In this article
            </p>
            <nav>
              <ol className="space-y-3 border-l border-black/10 pl-4">
                {post.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="font-dm block text-xs leading-5 text-black/40 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                    >
                      <span className="mr-2 text-black/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div>
            <section
              aria-labelledby="key-takeaways"
              className="mb-14 rounded-2xl border border-black/10 bg-[#e6e3dd] p-6 md:p-8"
            >
              <p className="mb-3 text-[9px] font-bold tracking-[0.2em] text-[#6d7c00] uppercase">
                Article summary
              </p>
              <h2
                id="key-takeaways"
                className="font-geom text-2xl font-black text-[#242424] md:text-3xl"
              >
                KEY TAKEAWAYS
              </h2>
              <ul className="mt-5 space-y-3">
                {post.takeaways.map((takeaway) => (
                  <li key={takeaway} className="font-dm flex gap-3 text-sm leading-6 text-black/60">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9fb000]" />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </section>

            <div className="space-y-14">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-geom text-3xl leading-tight font-black tracking-[-0.01em] text-[#242424] md:text-4xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="font-dm text-base leading-8 text-black/65">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-6 space-y-3 rounded-xl border border-black/[0.07] bg-white/35 p-5 md:p-6">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="font-dm flex gap-3 text-sm leading-6 text-black/60"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#9fb000]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {post.sources && (
              <section
                aria-labelledby="sources-title"
                className="mt-16 border-t border-black/10 pt-8"
              >
                <h2
                  id="sources-title"
                  className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase"
                >
                  Sources and further reading
                </h2>
                <ul className="mt-4 space-y-3">
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-dm inline-flex items-center gap-2 text-sm text-black/55 underline decoration-black/20 underline-offset-4 transition-colors hover:text-black"
                      >
                        {source.label}
                        <ArrowUpRight />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-16 rounded-2xl bg-[#171716] p-7 text-white md:p-10">
              <p className="text-primary text-[9px] font-bold tracking-[0.2em] uppercase">
                Need a practical partner?
              </p>
              <h2 className="font-geom mt-3 text-3xl leading-tight font-black md:text-4xl">
                TURN THE IDEA INTO BETTER DIGITAL WORK.
              </h2>
              <p className="font-dm mt-4 max-w-xl text-sm leading-6 text-white/50">
                Tell us what you are building, improving, or trying to understand. We will help you
                identify a useful next step.
              </p>
              <Link
                href="/contact"
                className="bg-primary focus-visible:outline-primary mt-7 inline-flex min-h-11 items-center gap-3 rounded-full px-5 text-[9px] font-bold tracking-[0.16em] text-black uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Start a conversation <ArrowUpRight />
              </Link>
            </section>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="related-articles"
        className="bg-[#e5e2dc] px-6 py-16 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-black/10 pb-5">
            <div>
              <p className="mb-2 text-[9px] font-bold tracking-[0.2em] text-black/35 uppercase">
                Continue reading
              </p>
              <h2
                id="related-articles"
                className="font-geom text-3xl font-black text-[#242424] md:text-4xl"
              >
                RELATED ARTICLES
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-[9px] font-bold tracking-[0.16em] text-black/45 uppercase hover:text-black sm:block"
            >
              View all articles
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group rounded-2xl border border-black/[0.07] bg-[#efede8] p-6 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:p-7"
              >
                <p className="text-[9px] font-bold tracking-[0.16em] text-[#6d7c00] uppercase">
                  {related.category}
                </p>
                <h3 className="font-geom mt-3 text-2xl leading-tight font-black text-[#242424] md:text-3xl">
                  {related.title}
                </h3>
                <p className="font-dm mt-3 line-clamp-2 text-sm leading-6 text-black/45">
                  {related.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-black/45 uppercase group-hover:text-black">
                  Read article <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NextPages />
    </article>
  );
}
