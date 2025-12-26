// components/about/AboutCallToAction.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center py-14 space-y-5 max-w-xl mx-auto"
    >
      <h2 className="font-heading text-xl md:text-2xl text-dts-fog leading-snug">
        Let’s Build Something Worth Talking About
      </h2>

      <Link
        href="/contact"
        className="mt-2 inline-flex dts-animated-border"
      >
        <span>START PROJECT</span>
      </Link>
    </motion.section>
  );
}
