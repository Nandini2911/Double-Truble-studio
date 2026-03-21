import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { marked } from "marked";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

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
    const html = marked(content);

    /* 🔥 SMART RELATED */
    const relatedPosts = posts
      .filter((p) => p.slug !== slug)
      .map((p) => {
        let score = 0;
        if (p.category === frontmatter.category) score += 3;
        if (p.title.includes(frontmatter.category)) score += 2;
        return { ...p, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    /* 🔥 EXPLORE */
    const explorePosts = posts
      .filter((p) => p.slug !== slug)
      .slice(0, 6);

    /* 🔥 TABLE OF CONTENTS */
    const headings = content
      .split("\n")
      .filter((line) => line.startsWith("##"))
      .map((line) => line.replace("##", "").trim());

    return (
      <div className="dts-page-shell py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6">

          {/* 📝 BLOG CONTENT */}
          <div className="lg:col-span-2 dts-section-shell p-10">

            {frontmatter.image && (
              <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className="w-full h-[360px] object-cover rounded-xl mb-10"
              />
            )}

            {/* TITLE */}
            <h1 className="text-4xl font-bold mb-4">
              {frontmatter.title}
            </h1>

            {/* 🔥 AUTHOR + META */}
            <div className="flex gap-4 text-sm text-gray-400 mb-8">
              <span>By {frontmatter.author}</span>
              <span>•</span>
              <span>{frontmatter.readTime}</span>
              <span>•</span>
              <span>{frontmatter.date}</span>
            </div>

            {/* CONTENT */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* 🔥 CTA */}
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

          {/* 👉 SIDEBAR */}
<aside className="space-y-10 sticky top-28 h-fit">
            {/* 🔥 TOC */}
            {headings.length > 0 && (
              <div className="dts-section-shell p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Contents
                </h3>

                <ul className="space-y-2 text-sm text-gray-400">
                  {headings.map((h, i) => (
                    <li key={i} className="hover:text-dts-neon cursor-pointer">
                      → {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 🔥 RELATED */}
            <div className="dts-section-shell p-6">
              <h3 className="text-xl font-semibold mb-4">
                Related Blogs
              </h3>

              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="flex gap-3 p-2 hover:bg-white/5 rounded-lg">
                  <img src={post.image} className="w-16 h-16 rounded-lg object-cover" />
                  <p className="text-sm">{post.title}</p>
                </Link>
              ))}
            </div>

            {/* 🔥 EXPLORE */}
            <div className="dts-section-shell p-6">
              <h3 className="text-xl font-semibold mb-4">
                Explore More
              </h3>

              {explorePosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="flex gap-3 p-2 hover:bg-white/5 rounded-lg">
                  <img src={post.image} className="w-16 h-16 rounded-lg object-cover" />
                  <p className="text-sm line-clamp-2">{post.title}</p>
                </Link>
              ))}

              <Link href="/blog" className="text-dts-neon text-sm mt-4 inline-block">
                View All →
              </Link>
            </div>

            {/* 📂 CATEGORIES */}
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
                    className="flex justify-between px-4 py-2 border border-white/10 rounded-lg mb-2 hover:border-dts-neon"
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
    );
  } catch {
    notFound();
  }
}