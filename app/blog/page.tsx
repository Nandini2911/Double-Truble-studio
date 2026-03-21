import { getAllPosts } from "@/lib/blog";
import BlogClient from "@/components/blog/BlogClient";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dtsworld.in"),
  title:
    "DTS Blog — Real Insights from PR, Celebrity, Events, Web & Digital Marketing Projects",
  description:
    "Explore real insights, strategies and breakdowns from Double Trouble Studio’s work.",
  alternates: {
    canonical: "https://www.dtsworld.in/blog",
  },
  openGraph: {
    title: "Double Trouble Studio Blog",
    description:
      "Strategies and insights from real DTS projects.",
    url: "https://www.dtsworld.in/blog",
    siteName: "Double Trouble Studio",
    images: ["/og-home-page.webp"],
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ✅ SCHEMA */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Double Trouble Studio Insights Blog",
            url: "https://www.dtsworld.in/blog",
          }),
        }}
      />

      {/* ✅ ONLY THIS */}
      <BlogClient posts={posts} />
    </>
  );
}