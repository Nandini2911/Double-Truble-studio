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
      "@graph": [

        {
          "@type": "Blog",
          "@id": "https://www.dtsworld.in/blog#blog",
          "name": "Double Trouble Studio Blog",
          "description":
            "Insights, strategies and real case studies from PR, celebrity, events and digital marketing projects.",
          "url": "https://www.dtsworld.in/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Double Trouble Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.dtsworld.in/logo.png"
            }
          }
        },

        {
          "@type": "Organization",
          "@id": "https://www.dtsworld.in/#organization",
          "name": "Double Trouble Studio",
          "url": "https://www.dtsworld.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.dtsworld.in/logo.png"
          },
          "sameAs": [
            "https://www.instagram.com/",
            "https://www.linkedin.com/"
          ]
        },

        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.dtsworld.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://www.dtsworld.in/blog"
            }
          ]
        },

        {
          "@type": "WebPage",
          "@id": "https://www.dtsworld.in/blog/#webpage",
          "url": "https://www.dtsworld.in/blog",
          "name": "Double Trouble Studio Blog",
          "datePublished": "2025-01-01",
          "dateModified": new Date().toISOString()
        },

        {
          "@type": "FAQPage",
          "@id": "https://www.dtsworld.in/blog/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What kind of content do you publish on the blog?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We publish insights, strategies, and real case studies from PR, branding, digital marketing, events, and celebrity management projects."
              }
            },
            {
              "@type": "Question",
              "name": "Who is this blog for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "This blog is for founders, marketers, brands, and teams looking for clarity, strategy, and execution-focused insights."
              }
            },
            {
              "@type": "Question",
              "name": "Are your articles based on real experience?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Every article is based on real project experience, industry understanding, and practical execution insights."
              }
            },
            {
              "@type": "Question",
              "name": "How often do you publish new content?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We publish content consistently based on insights, trends, and meaningful learnings from ongoing projects."
              }
            },
            {
              "@type": "Question",
              "name": "Can I apply these strategies to my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Most strategies are designed to be practical and adaptable across different industries and business stages."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer services related to these topics?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. These insights come directly from services we offer including branding, PR, digital marketing, and experiential execution."
              }
            }
          ]
        },

        {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            "h1",
            ".faq-question"
          ]
        }

      ]
    }),
  }}
/>

      {/* ✅ UI */}
      <BlogClient posts={posts} />
    </>
  );
}