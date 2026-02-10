"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="py-28 text-center max-w-5xl mx-auto overflow-hidden">
      
      {/* Brand Name */}
      <motion.h2
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-dts-neon tracking-widest text-sm mb-6 uppercase"
      >
        Double Trouble Studio
      </motion.h2>

      {/* Main Heading */}
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold dts-heading-3d leading-tight"
        data-shadow="DTS Insights"
      >
      From Real Projects to Real Insights - The DTS Way.
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="mt-8 text-xl text-gray-300 leading-relaxed"
      >
        Explore how we execute{" "}
        <span className="text-dts-neon">
          PR, Celebrity, Events, Web, Ads, Social Media
        </span>{" "}
        and <span className="text-dts-neon">AI Marketing</span> for brands across India.
      </motion.p>

      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="mt-4 text-gray-500"
      >
        Behind every campaign, there’s a Double Trouble strategy.
      </motion.p>
    </section>
  );
}
