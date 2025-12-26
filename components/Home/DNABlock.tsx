// components/home/DNABlock.tsx
"use client";

import { motion } from "framer-motion";

export default function DNABlock() {
  return (
    <section className="py-10 md:py-14 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="
          group relative mx-auto w-full
          max-w-[900px] md:max-w-[1100px] 2xl:max-w-[1400px]
          rounded-2xl px-6 sm:px-9 md:px-12 py-10 md:py-14
          bg-[#0a0c11]/70 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_25px_rgba(0,0,0,0.4)]
          transition-all duration-500
          hover:border-dts-neon/40
          hover:shadow-[0_0_35px_rgba(70,243,216,0.20)]
        "
      >
        {/* Soft shine on hover */}
        <div
          className="
            absolute inset-0 rounded-2xl pointer-events-none
            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
            opacity-0 -translate-x-[160%]
            group-hover:opacity-20 group-hover:translate-x-[160%]
            transition-all duration-1200 ease-out
          "
        />

        {/* CONTENT */}
        <div className="relative z-10 space-y-6 md:space-y-7">
          {/* LABEL */}
          <p className="text-[11px] uppercase tracking-[0.24em] text-dts-neon/80">
            The Double Trouble Studio DNA
          </p>

          {/* TITLE */}
          <h2 className="font-heading text-xl md:text-2xl text-dts-fog leading-snug max-w-3xl">
            Clarity over chaos. Preparation over improvisation.
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-3xl text-sm sm:text-[15px] md:text-base text-neutral-300 leading-relaxed">
            We believe in design with intention and creativity with accountability.
            Every project is built on strong research, cultural understanding, 
            aesthetic discipline and performance-led thinking. This isn&apos;t just 
            marketing—this is brand architecture.
          </p>

          {/* BULLETS */}
          <div
            className="
              grid gap-3 sm:gap-4
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              text-sm sm:text-[15px] text-neutral-200/90
            "
          >
            {[
              "Strong research & category understanding",
              "Sharp visual & verbal identity",
              "Long-term brand value over quick fixes",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-dts-neon">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
