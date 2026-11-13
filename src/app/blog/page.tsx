import type { Metadata } from "next";

import { blogPosts } from "@/data/blog";

import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Software, Design & Digital Strategy Insights",
  description:
    "Practical articles from The IQONEX on software development, web technology, UI/UX design, branding, SEO, and digital product strategy.",
  keywords: [
    "software development insights",
    "web development blog",
    "UI UX design articles",
    "branding strategy",
    "SEO guidance",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "IQONEX Insights: Software, Design & Digital Strategy",
    description:
      "Practical guidance for building more useful software, websites, brands, and digital experiences.",
    url: "/blog",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The IQONEX insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IQONEX Insights",
    description: "Practical guidance on software, design, branding, SEO, and web technology.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "IQONEX Insights",
    url: "https://theiqonex.com/blog",
    description: metadata.description,
    publisher: { "@type": "Organization", name: "The IQONEX", url: "https://theiqonex.com" },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://theiqonex.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogClient />
    </>
  );
}
