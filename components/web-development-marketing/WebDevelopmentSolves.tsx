"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, MousePointer2, Layers } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const problems = [
  {
    title: "Slow Website Load Time",
    desc: "A slow website can lead to a poor user experience, high bounce rates, and lost sales opportunities.",
    Icon: Globe,
    tint: "rgba(70,243,216,0.22)",
  },
  {
    title: "Unoptimized Mobile Experience",
    desc: "With mobile-first indexing, a non-optimized mobile experience can hurt your SEO and user engagement.",
    Icon: Smartphone,
    tint: "rgba(255,63,164,0.18)",
  },
  {
    title: "Poor User Experience (UX)",
    desc: "Complicated navigation, confusing layouts, and lack of intuitive design can frustrate visitors and drive them away.",
    Icon: MousePointer2,
    tint: "rgba(216,184,115,0.18)",
  },
  {
    title: "Lack of Scalability",
    desc: "A website that can’t grow with your business leads to unnecessary downtime and complicated changes in the future.",
    Icon: Layers,
    tint: "rgba(255,255,255,0.10)",
  },
];

export default function WebDevelopmentSolves() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ===== PREMIUM BACKGROUND (same family as Guest Hero) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.14),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.12),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-neutral-300/80 backdrop-blur-xl">
              Why web development matters
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            What goes wrong{" "}
            <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]">
              before we step in.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/70">
            These issues quietly kill performance, SEO, and trust — even when the site “looks fine.”
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {problems.map(({ title, desc, Icon, tint }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i * 0.06}
              className="group relative"
            >
              {/* OUTER BLOOM (visible on idle, stronger on hover) */}
              <div
                className="pointer-events-none absolute -inset-2 rounded-3xl blur-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background: `radial-gradient(900px circle at 20% 0%, ${tint}, transparent 58%)`,
                }}
              />
              <div className="pointer-events-none absolute -inset-2 rounded-3xl blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-60 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.16),transparent_55%)]" />

              {/* Card */}
              <div
                className="
                  relative overflow-hidden rounded-3xl
                  border border-white/10 bg-white/5 backdrop-blur-xl
                  p-6 md:p-7
                  transition-all duration-500
                  group-hover:border-dts-neon/50
                  group-hover:bg-white/7
                  group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_24px_70px_rgba(0,0,0,0.70)]
                "
              >
                {/* Top accent gradient line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.60),rgba(255,63,164,0.35),rgba(216,184,115,0.30),transparent)] opacity-55 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Sheen sweep */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-20%", "220%"] }}
                  transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.7,
                  }}
                />

                {/* Corner shine */}
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_62%)]" />

                {/* Icon */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="
                      inline-flex h-12 w-12 items-center justify-center
                      rounded-2xl border border-white/10 bg-white/5
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                      transition-all duration-300
                      group-hover:border-dts-neon/60
                      group-hover:bg-dts-neon/10
                      group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_30px_rgba(70,243,216,0.14)]
                    "
                  >
                    <Icon className="h-5 w-5 text-white/85" />
                  </span>

                  <span className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                    Risk
                  </span>
                </div>

                <h3 className="mt-5 text-[16px] font-medium text-white">
                  {title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/80">
                  {desc}
                </p>

                {/* Left accent rail */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-dts-neon/70 via-transparent to-transparent opacity-35 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Bottom divider */}
                <div className="mt-6 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.25}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-200/70">
            Web development isn’t just about building websites.
            <br />
            It’s about building seamless, engaging experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
