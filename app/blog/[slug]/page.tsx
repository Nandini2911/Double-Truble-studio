import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { marked } from "marked";
import { notFound } from "next/navigation";
import BlogExploreMore from "@/components/blog/BlogExploreMore";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

/* ✅ Dynamic Metadata (Next 16 compatible) */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = getPostBySlug(slug);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      alternates: {
        canonical: `https://www.dtsworld.in/blog/${slug}`,
      },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        url: `https://www.dtsworld.in/blog/${slug}`,
        type: "article",
        images: [
          {
            url: `https://www.dtsworld.in${frontmatter.image}`,
          },
        ],
      },
    };
  } catch {
    return {
      title: "DTS Blog",
      description: "Insights from Double Trouble Studio",
    };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  try {
    const { frontmatter, content } = getPostBySlug(slug);
    const posts = getAllPosts();
    const html = marked(content);

    return (
      <div className="dts-page-shell py-24">
        <div className="max-w-4xl mx-auto dts-section-shell p-14">

          {frontmatter.image && (
            <div className="mb-10 overflow-hidden rounded-xl">
              <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className="w-full h-[360px] object-cover rounded-xl"
              />
            </div>
          )}

          <h1 className="text-4xl font-bold mb-6">
            {frontmatter.title}
          </h1>

          <p className="text-gray-400 mb-10">
            {frontmatter.date}
          </p>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <BlogExploreMore
          posts={posts}
          currentSlug={slug}
        />
      </div>
    );
  } catch {
    notFound();
  }
}