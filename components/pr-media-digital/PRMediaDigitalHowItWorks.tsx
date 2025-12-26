// components/pr-media-digital/PRMediaDigitalHowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Rocket, LineChart } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const steps = [
  {
    step: "01",
    title: "Brand & Objective Clarity",
    desc: "We define your positioning, voice, and outcomes before anything goes live.",
    Icon: Compass,
  },
  {
    step: "02",
    title: "Strategic Mapping",
    desc: "Messaging, platforms, media lists, creators, and timelines are aligned.",
    Icon: Layers,
  },
  {
    step: "03",
    title: "Precision Execution",
    desc: "PR, digital, media, and influencers roll out seamlessly—no gaps, no confusion.",
    Icon: Rocket,
  },
  {
    step: "04",
    title: "Measurement & Refinement",
    desc: "Coverage, sentiment, reach, engagement, and conversions are tracked and optimised.",
    Icon: LineChart,
  },
];

export default function PRMediaDigitalHowItWorks() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-20 dts-section">
      {/* ===== DTS BACKGROUND LANGUAGE (same as your FAQs/CTAs) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        {/* grid helper (site-wide) */}
        <div className="absolute inset-0 dts-grid" />
        {/* soft palette glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_12%,rgba(255,63,164,0.14),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_85%_80%,rgba(216,184,115,0.12),transparent_60%)]" />
        {/* dividers */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050507]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-3xl"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgba(70,243,216,0.9)]" />
            <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300">
              How it works
            </p>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-5 font-heading text-2xl md:text-4xl text-white"
          >
            A calm process.{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.12)]
              "
            >
              A sharp outcome.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-neutral-300/85"
          >
            Structured from strategy to execution—so your visibility looks effortless,
            but is built with precision.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {steps.map(({ step, title, desc, Icon }, idx) => (
            <motion.div
              key={step}
              variants={item}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.035]
                p-7 md:p-8
                transition-all duration-500
                hover:border-dts-neon/55
                hover:bg-white/[0.06]
                hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_24px_70px_rgba(0,0,0,0.70)]
              "
            >
              {/* always-on tint (teal + white sheen) */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[radial-gradient(circle_at_18%_14%,rgba(70,243,216,0.12),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />

              {/* brand top accent (like your FAQ dividers) */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.45),rgba(255,63,164,0.35),rgba(216,184,115,0.28),transparent)] opacity-70" />

              {/* corner editorial cut */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rotate-45 border border-white/10 bg-white/[0.02]" />

              {/* hover glow (extra only on hover) */}
              <div className="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(closest-side,rgba(70,243,216,0.16),transparent_70%)]" />

              {/* light sweep */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-[60%] opacity-0 group-hover:opacity-100 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.14),transparent)]"
                animate={{ x: ["-20%", "220%"] }}
                transition={{ duration: 1.15, ease: "easeInOut", delay: 0.1 + idx * 0.02 }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-neutral-400">
                    {step}
                  </p>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold text-white">
                    {title}
                  </h3>
                </div>

                {/* icon chip */}
                <span
                  className="
                    inline-flex h-11 w-11 items-center justify-center rounded-2xl
                    border border-white/12 bg-white/[0.04] backdrop-blur
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                    transition-all duration-300
                    group-hover:border-dts-neon/60
                    group-hover:bg-dts-neon/10
                    group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.14)]
                  "
                >
                  <Icon size={18} className="text-white/75" />
                </span>
              </div>

              <p className="relative mt-4 text-sm md:text-[15px] leading-relaxed text-neutral-300/85">
                {desc}
              </p>

              {/* divider line (turns into brand gradient on hover) */}
              <div
                className="
                  relative mt-7 h-px w-full
                  bg-white/10
                  transition-all duration-500
                  group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                "
              />

              {/* micro footer */}
              <p className="relative mt-5 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                Step {step} • Structured • Clean
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
