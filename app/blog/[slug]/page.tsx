import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { marked } from "marked";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ✅ Metadata */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = getPostBySlug(slug);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        images: [`https://www.dtsworld.in${frontmatter.image}`],
      },
    };
  } catch {
    return {
      title: "DTS Blog",
      description: "Insights from Double Trouble Studio",
    };
  }
}

/* ✅ Categories */
const categories = [
  "All",
  "Guest Management",
  "Celebrity Management",
  "Events & Weddings",
  "PR, Media & Digital Marketing",
  "Web Development & Marketing",
  "AI Video & VFX",
  "Strategic Road Map",
  "Crisis Management",
];

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  try {
    const { frontmatter, content } = getPostBySlug(slug);
    const posts = getAllPosts();

    /* 🔥 FORMAT DATE (ISO) */
    const publishedDate = new Date(frontmatter.date).toISOString();

    /* 🔥 DYNAMIC FAQ FROM CONTENT */
    const faqs: any[] = [];
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("###")) {
        const question = lines[i].replace("###", "").trim();
        const answer = lines[i + 1] || "";

        faqs.push({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        });
      }
    }

    /* ✅ BLOG SCHEMA */
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `https://www.dtsworld.in/blog/${slug}#post`,
      headline: frontmatter.title,
      description: frontmatter.description,
      image: [`https://www.dtsworld.in${frontmatter.image}`],
      author: {
        "@type": "Person",
        name: frontmatter.author || "Double Trouble Studio",
      },
      publisher: {
        "@type": "Organization",
        name: "Double Trouble Studio",
        logo: {
          "@type": "ImageObject",
          url: "https://www.dtsworld.in/logo.png",
        },
      },
      datePublished: publishedDate,
      dateModified: publishedDate,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.dtsworld.in/blog/${slug}`,
      },

      /* 🔥 SPEAKABLE SCHEMA */
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".blog-content p"],
      },
    };

    /* ✅ FAQ SCHEMA (ONLY IF FOUND) */
    const faqSchema =
      faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs,
          }
        : null;

    /* ✅ BREADCRUMB */
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.dtsworld.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.dtsworld.in/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: frontmatter.title,
          item: `https://www.dtsworld.in/blog/${slug}`,
        },
      ],
    };

    /* ✅ MARKDOWN */
    const renderer = new marked.Renderer();

    renderer.heading = ({ tokens, depth }) => {
      const text = tokens.map((t: any) => t.text || "").join("");
      const id = text.toLowerCase().replace(/[^\w]+/g, "-");
      const level = depth === 1 ? 2 : depth;

      return `<h${level} id="${id}">${text}</h${level}>`;
    };

    marked.setOptions({ renderer });

    const html = marked.parse(content);

    /* 🔥 RELATED */
    const relatedPosts = posts
      .filter((p) => p.slug !== slug)
      .slice(0, 4);

    /* 🔥 EXPLORE */
    const explorePosts = posts
      .filter((p) => p.slug !== slug)
      .slice(0, 6);

    /* 🔥 TOC */
    const headings = content
      .split("\n")
      .filter((line) => line.startsWith("##"))
      .map((line) => {
        const text = line.replace("##", "").trim();
        const id = text.toLowerCase().replace(/[^\w]+/g, "-");
        return { text, id };
      });

    return (
      <>
        {/* ✅ BLOG */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogSchema),
          }}
        />

        {/* ✅ BREADCRUMB */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* ✅ FAQ (ONLY IF EXISTS) */}
        {faqSchema && (
          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        )}

        <div className="dts-page-shell py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6">

            {/* BLOG */}
            <div className="lg:col-span-2 dts-section-shell p-10">

              {frontmatter.image && (
                <img
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  className="w-full h-[360px] object-cover rounded-xl mb-10"
                />
              )}

              <h1 className="text-4xl font-bold mb-4">
                {frontmatter.title}
              </h1>

              <div className="flex gap-4 text-sm text-gray-400 mb-8">
                <span>By {frontmatter.author}</span>
                <span>•</span>
                <span>{frontmatter.readTime}</span>
                <span>•</span>
                <span>{frontmatter.date}</span>
              </div>

              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              {/* CTA */}
              <div className="mt-20 p-10 border border-white/10 rounded-xl text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Want results like this for your brand?
                </h3>
                <p className="text-gray-400 mb-6">
                  We help brands execute PR, events & digital campaigns.
                </p>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-dts-neon text-black rounded-lg"
                >
                  Start Project →
                </Link>
              </div>
            </div>

            {/* SIDEBAR */}
         <aside className="space-y-10 sticky top-28 h-fit">

  {/* 🔥 TOC */}
  {headings.length > 0 && (
    <div className="dts-section-shell p-6">
      <h3 className="text-lg font-semibold mb-4">
        Contents
      </h3>

      <ul className="space-y-2 text-sm text-gray-400">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#${h.id}`}
              className="hover:text-dts-neon transition"
            >
              → {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* 🔥 RELATED BLOGS (RESTORED DESIGN) */}
  <div className="dts-section-shell p-6">
    <h3 className="text-xl font-semibold mb-4">
      Related Blogs
    </h3>

    {relatedPosts.map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="flex gap-3 p-2 hover:bg-white/5 rounded-lg transition"
      >
        <img
          src={post.image}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <p className="text-sm line-clamp-2">
          {post.title}
        </p>
      </Link>
    ))}
  </div>

  {/* 🔥 EXPLORE BLOGS (RESTORED DESIGN) */}
  <div className="dts-section-shell p-6">
    <h3 className="text-xl font-semibold mb-4">
      Explore More
    </h3>

    {explorePosts.map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="flex gap-3 p-2 hover:bg-white/5 rounded-lg transition"
      >
        <img
          src={post.image}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <p className="text-sm line-clamp-2">
          {post.title}
        </p>
      </Link>
    ))}

    <Link
      href="/blog"
      className="text-dts-neon text-sm mt-4 inline-block"
    >
      View All →
    </Link>
  </div>

  {/* 📂 CATEGORIES (RESTORED WITH COUNT) */}
  <div className="dts-section-shell p-6">
    <h3 className="text-xl font-semibold mb-5">
      Categories
    </h3>

    {categories.map((cat) => {
      const count =
        cat === "All"
          ? posts.length
          : posts.filter((p) => p.category === cat).length;

      return (
        <Link
          key={cat}
          href={`/blog?category=${encodeURIComponent(cat)}`}
          className="flex justify-between px-4 py-2 border border-white/10 rounded-lg mb-2 hover:border-dts-neon transition"
        >
          <span>{cat}</span>
          <span>{count}</span>
        </Link>
      );
    })}
  </div>

</aside>
          </div>
        </div>
      </>
    );
  } catch {
    notFound();
  }
}