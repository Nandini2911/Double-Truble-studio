"use client";

import { useState, useEffect } from "react";
import type { PostMeta } from "@/lib/blog";
import { useRouter } from "next/navigation";

type Props = {
  results: PostMeta[];
  search: string;
};

export default function BlogSearchResults({ results, search }: Props) {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // 🔁 Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  if (!search) return null;

  // 📊 Pagination logic
  const totalPages = Math.ceil(results.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = results.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section className="max-w-7xl mx-auto w-full px-6  mb-24">

      {/* 🔍 Title */}
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        🔍 Results for "{search}"
      </h2>

      {/* ❌ No Results */}
      {results.length === 0 ? (
        <p className="text-gray-500 mt-4 text-center">
          No results found 🚫
        </p>
      ) : (
        <>
          {/* 🔥 GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div
                key={post.slug}
                onClick={() => router.push(`/blog/${post.slug}`)}
                className="border border-white/10 rounded-2xl overflow-hidden bg-[#031313] hover:border-dts-neon hover:shadow-[0_0_20px_rgba(0,255,200,0.15)] hover:-translate-y-1 transition duration-300 cursor-pointer"
              >
                {/* 🖼 IMAGE */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                {/* 📝 CONTENT */}
                <div className="p-5">
                  <p className="text-xs text-dts-neon uppercase tracking-wide">
                    {post.category}
                  </p>

                  <h3 className="text-lg font-semibold mt-2 leading-snug hover:text-dts-neon transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex gap-4 mt-3 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
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

              {/* Pages */}
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    window.scrollTo({ top: 300, behavior: "smooth" });
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
        </>
      )}
    </section>
  );
}