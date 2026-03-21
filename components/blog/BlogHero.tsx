"use client";

import { motion } from "framer-motion";
import type { PostMeta } from "@/lib/blog";

type BlogHeroProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  results: PostMeta[];
};

export default function BlogHero({
  search,
  setSearch,
  results,
}: BlogHeroProps) {
  return (
    <section className="py-28 text-center max-w-5xl mx-auto px-4 overflow-hidden">

      {/* Brand */}
      <motion.h2
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-dts-neon tracking-widest text-sm mb-6 uppercase"
      >
        Double Trouble Studio
      </motion.h2>

      {/* Heading */}
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl md:text-6xl font-bold dts-heading-3d leading-tight"
      >
        From Real Projects to Real Insights - The DTS Way.
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-8 text-xl text-gray-300 leading-relaxed"
      >
        Explore how we execute{" "}
        <span className="text-dts-neon">
          PR, Celebrity, Events, Web, Ads, Social Media
        </span>{" "}
        and <span className="text-dts-neon">AI Marketing</span>.
      </motion.p>

      {/* 🔍 SEARCH BAR */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-10"
      >
        <input
          type="text"
          placeholder="Search insights (PR, AI, Events...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl mx-auto p-4 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:border-dts-neon transition"
        />
      </motion.div>


      {/* Bottom Line */}
      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-6 text-gray-500"
      >
        Behind every campaign, there’s a Double Trouble strategy.
      </motion.p>

    </section>
  );
}