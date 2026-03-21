"use client";

import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

type Props = {
  posts: any[];
};

export default function BlogFeatured({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // 🔍 Filter featured posts
  const featured = posts.filter((p) => p.featured);

  // 🔁 Reset page if posts change
  useEffect(() => {
    setCurrentPage(1);
  }, [posts]);

  // 📊 Pagination logic
  const totalPages = Math.ceil(featured.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = featured.slice(
    startIndex,
    startIndex + postsPerPage
  );

  if (featured.length === 0) return null;

  return (
    <section  id="featured-section" className=" p-12 max-w-screen-xl mx-auto mt-20 mb-20">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-10">
        Featured Blogs
      </h2>

      {/* 🔥 GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
        {currentPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {/* 🔢 PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-12">

          {/* Prev */}
          <button
            onClick={() =>
              setCurrentPage((p) => Math.max(p - 1, 1))
            }
            className="px-4 py-2 border border-gray-700 rounded-lg text-sm hover:border-dts-neon transition"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
               document
  .getElementById("featured-section")
  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`px-3 py-1 rounded-lg text-sm transition ${
                currentPage === i + 1
                  ? "bg-dts-neon text-black"
                  : "border border-gray-700 text-gray-400 hover:border-dts-neon"
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
            className="px-4 py-2 border border-gray-700 rounded-lg text-sm hover:border-dts-neon transition"
          >
            Next
          </button>

        </div>
      )}
    </section>
  );
}