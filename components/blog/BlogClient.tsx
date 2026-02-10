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

export default function BlogClient({ posts }: any) {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="dts-page-shell">
      <BlogHero />
        <BlogExplore />
<BlogFeatured posts={posts} />
     <div className="space-y-10 pb-16">
        <BlogCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
<BlogGrid posts={posts} activeCategory={activeCategory} />
        
   
        <BlogPopular posts={posts} />
        <BlogCaseStudies posts={posts} />
<BlogTools setActiveCategory={setActiveCategory} />
        
        <BlogAbout />
        <BlogNewsletter />
        <BlogCTA />
      </div>
    </div>
  );
}
