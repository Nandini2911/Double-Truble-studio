// components/home/FinalCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-6 md:py-8 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}

        whileHover={{
          scale: 1.02,
          y: -6,
          boxShadow: "0 0 55px rgba(70,243,216,0.25)",
          borderColor: "rgba(70,243,216,0.35)",
        }}

        className="
          group relative
          mx-auto w-full
          max-w-[900px] md:max-w-[1100px] 2xl:max-w-[1400px]
          rounded-3xl p-6 md:p-8
          border border-white/10 
          bg-black/40 backdrop-blur-xl
          shadow-[0_0_25px_rgba(0,0,0,0.45)]
          transition-all duration-500

          /* NEW: CENTER EVERYTHING */
          flex flex-col items-center justify-center gap-4 text-center
        "
      >
        {/* Glow behind card */}
        <div
          className="
            absolute inset-0 rounded-3xl pointer-events-none
            bg-[radial-gradient(circle_at_center,#46F3D840,transparent_70%)]
            opacity-0 group-hover:opacity-20
            blur-2xl transition-all duration-700
          "
        />

        {/* Shine sweep */}
        <div
          className="
            absolute inset-0 rounded-3xl pointer-events-none
            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)]
            opacity-0 -translate-x-[150%]
            group-hover:opacity-30
            group-hover:translate-x-[150%]
            transition-all duration-1400 ease-out
          "
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.24em] text-dts-neon">
            Let&apos;s begin
          </p>

          <h2 className="font-heading text-lg md:text-xl text-dts-fog leading-snug">
            Ready to make your brand impossible to ignore?
          </h2>

          <p className="text-sm md:text-[15px] text-neutral-200/95 leading-relaxed">
            Share where you are, what you&apos;re building and what&apos;s keeping you 
            up at night. We’ll come back with a clear, structured way forward—
            not a copy-paste pitch.
          </p>

          {/* CTA BUTTON – UNCHANGED */}
          <Link
            href="/contact"
            className="
              relative group
              inline-flex items-center justify-center
              px-5 py-2.5
              rounded-full
              text-[12px] md:text-[13px]
              font-medium tracking-wide
              text-dts-fog
              border border-white/15
              bg-white/5
              backdrop-blur-md
              transition-all duration-400
              hover:border-dts-neon
              hover:shadow-[0_0_22px_rgba(70,243,216,0.35)]
              whitespace-nowrap
            "
          >
            <div
              className="
                absolute inset-0 rounded-full
                bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)]
                opacity-0
                -translate-x-[160%]
                group-hover:opacity-100
                group-hover:translate-x-[160%]
                transition-all duration-1100 ease-out
              "
            />
            <span className="relative z-10">START PROJECT</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

