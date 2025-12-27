// components/home/PromiseBlock.tsx
"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PromiseBlock() {
  return (
    <section className="relative py-14 md:py-18 px-4 sm:px-6">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(70,243,216,0.12),transparent_60%)]" />
        <div className="absolute -right-28 -bottom-10 h-96 w-96 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,63,164,0.10),transparent_60%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75, ease: EASE }}
        className="
          relative mx-auto w-full
          max-w-[900px] md:max-w-[1100px] 2xl:max-w-[1400px]
        "
      >
        {/* Header row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-400">
              Our promise
            </p>

            <h2 className="font-heading text-[1.45rem] sm:text-[1.7rem] md:text-[2rem] text-dts-fog leading-[1.15]">
              What you can expect—{" "}
              <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]">
                every time.
              </span>
            </h2>

            <p className="text-sm sm:text-[15px] text-neutral-300/90 leading-relaxed">
              Premium work needs premium process. Here’s what we protect: your time, your brand
              standards, and your outcome.
            </p>
          </div>

          {/* Tiny badge */}
          <div
            className="
              inline-flex w-fit items-center gap-2
              rounded-full border border-white/10 bg-black/35
              px-4 py-2
              text-[11px] uppercase tracking-[0.2em]
              text-neutral-200/90
              shadow-[0_14px_40px_rgba(0,0,0,0.35)]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-dts-neon/80 shadow-[0_0_10px_rgba(70,243,216,0.6)]" />
            process-led execution
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2">
          <PromiseCard
            title="Structure & Direction"
            subtitle="So things move with clarity."
            points={[
              "A partner who thinks with you, not for you.",
              "Clear structures, timelines and deliverables.",
              "Strong creative direction backed by business logic.",
            ]}
          />

          <PromiseCard
            title="Trust & Standards"
            subtitle="So the work holds up."
            points={[
              "Honest feedback and transparent communication.",
              "Work that looks premium and performs even better.",
              "A team that protects your brand like it’s our own.",
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------
   PROMISE CARD — Stylish (No 3D) + Gradient Border
------------------------------------------------------ */
function PromiseCard({
  title,
  subtitle,
  points,
}: {
  title: string;
  subtitle: string;
  points: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="group relative"
    >
      {/* Gradient border shell */}
      <div
        className="
          absolute inset-0 rounded-3xl
          bg-[linear-gradient(120deg,rgba(70,243,216,0.35),rgba(255,63,164,0.20),rgba(255,208,102,0.22))]
          opacity-0 blur-xl
          group-hover:opacity-100
          transition-opacity duration-400
        "
      />

      <div
        className="
          relative overflow-hidden
          rounded-3xl p-6 md:p-7
          border border-white/10
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.35))]
          backdrop-blur-xl
          shadow-[0_22px_70px_rgba(0,0,0,0.55)]
          transition-all duration-400
          group-hover:border-dts-neon/45
          group-hover:shadow-[0_28px_90px_rgba(0,0,0,0.65)]
          cursor-default
        "
      >
        {/* Shine sweep */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.10),transparent)]
            opacity-0 -translate-x-[160%]
            group-hover:opacity-60 group-hover:translate-x-[160%]
            transition-all duration-1400 ease-out
          "
        />

        {/* Header */}
        <div className="relative z-10">
          <p className="text-[12px] font-semibold text-dts-fog">{title}</p>
          <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-neutral-400">
            {subtitle}
          </p>
        </div>

        {/* Divider */}
        <div className="relative z-10 my-5 h-px w-full bg-white/10" />

        {/* Points */}
        <ul className="relative z-10 space-y-2.5 text-sm text-neutral-200/95">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2.5 items-start">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dts-neon/80 shadow-[0_0_10px_rgba(70,243,216,0.55)]" />
              <span className="leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
