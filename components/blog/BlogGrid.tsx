"use client";

import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

type Props = {
  posts: any[];
  activeCategory: string;
};

export default function BlogGrid({ posts, activeCategory }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section
      id="blog-grid"
className="w-full px-4 md:px-8 py-20"    >
      {/* 🔥 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          {activeCategory === "All"
            ? "All Articles"
            : `${activeCategory} Articles`}
        </h2>

        {/* Optional count */}
        <p className="text-sm text-gray-400">
          Showing {currentPosts.length} of {filteredPosts.length} blogs
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
       {currentPosts.map((post) => (
  <div
    key={post.slug}   // ✅ MOVE KEY HERE
    className="h-full transition hover:-translate-y-1"
  >
    <BlogCard {...post} />
  </div>
))}
      </div>

      {/* 🔢 PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">

          {/* Prev */}
          <button
            onClick={() =>
              setCurrentPage((p) => Math.max(p - 1, 1))
            }
            className="px-5 py-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur hover:border-dts-neon hover:text-dts-neon transition"
          >
            ← Prev
          </button>

          {/* Pages */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);

                document
                  .getElementById("blog-grid")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                currentPage === i + 1
                  ? "bg-dts-neon text-black font-semibold"
                  : "border border-white/10 text-gray-400 hover:border-dts-neon hover:text-dts-neon"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(p + 1, totalPages)
              )
            }
            className="px-5 py-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur hover:border-dts-neon hover:text-dts-neon transition"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}