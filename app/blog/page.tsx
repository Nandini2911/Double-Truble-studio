import { getAllPosts } from "@/lib/blog";
import BlogClient from "@/components/blog/BlogClient";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dtsworld.in"),

  title:
    "DTS Blog — Real Insights from PR, Celebrity, Events, Web & Digital Marketing Projects",

  description:
    "Explore real insights, strategies and breakdowns from Double Trouble Studio’s work in guest management, celebrity coordination, events, PR, media, websites, AI videos and digital marketing systems.",

  alternates: {
    canonical: "https://www.dtsworld.in/blog",
  },

  openGraph: {
    title: "Double Trouble Studio Blog",
    description:
      "Strategies and insights from real DTS projects across events, PR, celebrities, web and digital marketing.",
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
      {/* ✅ BLOG SCHEMA */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Double Trouble Studio Insights Blog",
            url: "https://www.dtsworld.in/blog",
            description:
              "Real insights from DTS projects across PR, events, celebrities, web and digital marketing.",

            publisher: {
              "@type": "Organization",
              name: "Double Trouble Studio",
              url: "https://www.dtsworld.in",
              logo: {
                "@type": "ImageObject",
                url: "https://www.dtsworld.in/logo.png",
              },
            },

            blogPost: posts.map((post, index) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              url: `https://www.dtsworld.in/blog/${post.slug}`,
              image: `https://www.dtsworld.in${post.image}`,
              datePublished: post.date,
              position: index + 1,
            })),
          }),
        }}
      />

      {/* ✅ ITEM LIST SCHEMA */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://www.dtsworld.in/blog/${post.slug}`,
            })),
          }),
        }}
      />

      <BlogClient posts={posts} />
    </>
  );
}
