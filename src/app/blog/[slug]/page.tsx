import Link from "next/link";
import NextPages from "@/components/sections/Nextpages";

// In production replace this with MDX files or a CMS fetch
const posts: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    content: string;
  }
> = {
  "future-of-ui-ux-design": {
    title: "The Future of UI/UX Design in 2025",
    category: "DESIGN",
    date: "Apr 12, 2025",
    readTime: "5 min read",
    content: `
      <p>The design landscape is shifting faster than ever. AI-assisted tools, accessibility mandates, and user expectations are converging to reshape how we think about digital experiences.</p>
      <h2>AI as a Design Partner</h2>
      <p>Tools like Figma AI, Adobe Firefly, and custom GPT integrations are moving from novelty to necessity. Designers who embrace these tools are shipping faster without sacrificing quality.</p>
      <h2>Micro-Interactions Matter More Than Ever</h2>
      <p>Users notice the small things — button feedback, loading states, transition curves. These micro-moments are where great design lives in 2025.</p>
      <h2>Accessibility First, Not Last</h2>
      <p>WCAG 3.0 compliance is becoming a legal requirement in more markets. Designing for accessibility from day one is no longer optional — it's table stakes.</p>
    `,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f0ede8]">
        <div className="text-center">
          <p className="font-geom mb-4 text-6xl font-black text-black/10">404</p>
          <p className="font-dm mb-6 text-sm text-black/40">Post not found</p>
          <Link
            href="/blog"
            className="text-[10px] font-bold tracking-widest text-orange-500 uppercase hover:text-orange-600"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col">
      {/* ── HERO ── */}
      <div className="bg-[#111110] px-6 pt-32 pb-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/30 uppercase transition-colors hover:text-white"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase">
              {post.category}
            </span>
            <span className="font-dm text-[10px] text-white/30">{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="font-dm text-[10px] text-white/30">{post.readTime}</span>
          </div>

          <h1
            className="font-geom leading-[0.92] font-black text-white"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="bg-[#f0ede8] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div
            className="prose prose-lg font-dm [&_h2]:font-geom leading-relaxed text-black/70 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#2a2a2a] [&_p]:mb-5 [&_p]:text-sm [&_p]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share / nav */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-black/40 uppercase transition-colors hover:text-black"
            >
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Posts
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-[10px] font-bold tracking-[0.15em] text-white uppercase transition-colors hover:bg-orange-600"
            >
              Work With Us →
            </Link>
          </div>
        </div>
      </div>

      <NextPages />
    </section>
  );
}
