// components/home/PromiseBlock.tsx
"use client";

import { motion } from "framer-motion";

export default function PromiseBlock() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45 }}
        className="
          mx-auto w-full 
          max-w-[900px] md:max-w-[1100px] 2xl:max-w-[1400px]
          space-y-5 sm:space-y-6
        "
      >
        {/* LABEL */}
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
          Our promise
        </p>

        {/* TITLE */}
        <h2 className="font-heading text-xl md:text-2xl text-dts-fog">
          What you can expect from us.
        </h2>

        {/* TWO PREMIUM CARDS */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <PromiseCard
            points={[
              "A partner who thinks with you, not for you.",
              "Clear structures, timelines and deliverables.",
              "Strong creative direction with business logic.",
            ]}
          />

          <PromiseCard
            points={[
              "Honest feedback and transparent communication.",
              "Work that looks premium and performs even better.",
              "A team that cares about your brand as much as you do.",
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------
   PROMISE CARD — Premium Hover Effects (No 3D)
------------------------------------------------------ */
function PromiseCard({ points }: { points: string[] }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -4,
        boxShadow: "0 0 45px rgba(70,243,216,0.25)",
        borderColor: "rgba(70,243,216,0.35)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        group relative
        rounded-2xl p-6 md:p-7
        bg-black/40 backdrop-blur-xl
        border border-white/10
        shadow-[0_0_20px_rgba(0,0,0,0.35)]
        transition-all duration-500 cursor-default
        text-sm text-neutral-200/95
      "
    >
      {/* Shine sweep */}
      <div
        className="
          absolute inset-0 rounded-2xl pointer-events-none
          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
          opacity-0
          -translate-x-[160%]
          group-hover:opacity-30
          group-hover:translate-x-[160%]
          transition-all duration-1100 ease-out
        "
      />

      {/* Content */}
      <ul className="relative z-10 space-y-2 md:space-y-3">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-dts-neon text-sm">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
