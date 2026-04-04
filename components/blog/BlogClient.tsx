"use client";

import { useState } from "react";
import BlogHero from "./BlogHero";
import BlogCategories from "./BlogCategories";
import BlogGrid from "./BlogGrid";
import BlogFeatured from "./BlogFeatured";
import BlogPopular from "./BlogPopular";
import BlogCaseStudies from "./BlogCaseStudies";
import BlogTools from "./BlogTools";
import BlogAbout from "./BlogAbout";
import BlogNewsletter from "./BlogNewsletter";
import BlogCTA from "./BlogCTA";
import BlogExplore from "./BlogExplore";
import type { PostMeta } from "@/lib/blog";
import BlogSearchResults from "./BlogSearchResults";
import BlogFAQ from "./BlogFAQ";

type BlogClientProps = {
  posts: PostMeta[];
};

export default function BlogClient({ posts }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState<string>(""); // ✅ REAL STATE

  // 🔍 FILTER LOGIC (SEARCH + CATEGORY)
  const filteredPosts = posts.filter((post) => {
    const text = search.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(text) ||
      post.category.toLowerCase().includes(text) ||
      post.tags?.some((tag) =>
        tag.toLowerCase().includes(text)
      );

    const matchesCategory =
      activeCategory === "All" ||
      post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="dts-page-shell">

      {/* ✅ FIXED HERO */}
      <BlogHero
        search={search}
        setSearch={setSearch}
        results={filteredPosts}
      />
      {/* 🔥 NEW SEARCH SECTION */}
<BlogSearchResults
  results={filteredPosts}
  search={search}
/>

      <BlogExplore />

      {/* ✅ USE FILTERED POSTS */}
      <BlogFeatured posts={filteredPosts} />

      <div className="space-y-10 pb-16">

        <BlogCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* ✅ FILTERED GRID */}
        <BlogGrid
          posts={filteredPosts}
          activeCategory={activeCategory}
        />

        <BlogPopular posts={filteredPosts} />
        <BlogCaseStudies posts={filteredPosts} />

        <BlogTools setActiveCategory={setActiveCategory} />

        <BlogAbout />
        <BlogNewsletter />
        <BlogFAQ />
        <BlogCTA />

      </div>
    </div>
  );
}