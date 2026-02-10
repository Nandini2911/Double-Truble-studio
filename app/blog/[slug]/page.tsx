import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { marked } from "marked";
import { notFound } from "next/navigation";
import BlogExploreMore from "@/components/blog/BlogExploreMore";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  try {
    const { frontmatter, content } = getPostBySlug(slug);
    const posts = getAllPosts();

    const html = marked(content);

    return (
      <div className="dts-page-shell py-24">
        <div className="max-w-4xl mx-auto dts-section-shell p-14">

          {/* ✅ Cover Image */}
          {frontmatter.image && (
            <div className="mb-10 overflow-hidden rounded-xl">
              <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className="w-full h-[360px] object-cover rounded-xl"
              />
            </div>
          )}

          {/* ✅ Title */}
          <h1 className="text-4xl font-bold mb-6">
            {frontmatter.title}
          </h1>

          {/* ✅ Date */}
          <p className="text-gray-400 mb-10">
            {frontmatter.date}
          </p>

          {/* ✅ Markdown Content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          

        </div>
        {/* ✅ Explore More Section */}
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
