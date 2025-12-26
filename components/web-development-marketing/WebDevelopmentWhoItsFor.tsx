"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  Briefcase,
  HeartHandshake,
  ShieldCheck,
  Clapperboard,
  ArrowRight,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const audiences = [
  {
    title: "Startups & Tech Companies",
    desc: "Building innovative websites that scale with your tech-driven solutions and growing customer base.",
    Icon: Sparkles,
    accent: "from-dts-neon/45 via-white/10 to-transparent",
    glow: "rgba(70,243,216,0.22)",
  },
  {
    title: "Corporate Websites",
    desc: "Professional websites with robust functionality for large corporations and institutions.",
    Icon: Briefcase,
    accent: "from-sky-400/35 via-white/10 to-transparent",
    glow: "rgba(56,189,248,0.18)",
  },
  {
    title: "E-commerce Businesses",
    desc: "Tailored e-commerce platforms with optimized shopping experiences and secure payment systems.",
    Icon: HeartHandshake,
    accent: "from-rose-400/35 via-white/10 to-transparent",
    glow: "rgba(251,113,133,0.18)",
  },
  {
    title: "Creative Agencies & Portfolios",
    desc: "Showcase your creative work through visually stunning websites designed to attract clients.",
    Icon: Crown,
    accent: "from-amber-400/35 via-white/10 to-transparent",
    glow: "rgba(245,158,11,0.16)",
  },
  {
    title: "Luxury & Lifestyle Brands",
    desc: "Premium website designs that reflect the elegance and exclusivity of your high-end brand.",
    Icon: ShieldCheck,
    accent: "from-emerald-400/35 via-white/10 to-transparent",
    glow: "rgba(52,211,153,0.16)",
  },
  {
    title: "Content Creators & Influencers",
    desc: "Personalized websites for influencers and content creators that amplify their digital presence.",
    Icon: Clapperboard,
    accent: "from-violet-400/35 via-white/10 to-transparent",
    glow: "rgba(167,139,250,0.16)",
  },
];

export default function WebDevelopmentWhoItsFor() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* Background (match Guest/FAQ family) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.12),transparent_55%),radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.12),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        {/* soft blobs */}
        <div className="absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
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
              Who this is for
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            Built for digital experiences{" "}
            <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]">
              where quality matters.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/70">
            If you need a website that combines performance, aesthetics, and scalability,
            this is the system that powers it.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {audiences.map((a, i) => {
            const Icon = a.Icon;

            return (
              <motion.div
                key={a.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.05}
                className="group relative"
              >
                {/* OUTER COLOR BLOOM (VISIBLE + STRONGER ON HOVER) */}
                <div
                  className="pointer-events-none absolute -inset-2 rounded-3xl blur-2xl opacity-35 transition-opacity duration-500 group-hover:opacity-70"
                  style={{
                    background: `radial-gradient(900px circle at 18% 0%, ${a.glow}, transparent 58%)`,
                  }}
                />

                {/* CARD */}
                <div
                  className="
                    relative overflow-hidden rounded-3xl
                    border border-white/10
                    bg-white/5 backdrop-blur-xl
                    p-6 md:p-7
                    transition-all duration-500
                    group-hover:border-dts-neon/55
                    group-hover:bg-white/7
                    group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_24px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* Top accent strip */}
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r ${a.accent}`} />

                  {/* Inner gradient border (subtle, makes color feel “on the card”) */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-50 [mask-image:linear-gradient(#000,transparent_85%)]">
                    <div className="absolute -inset-px rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_35%,rgba(255,255,255,0.06))]" />
                  </div>

                  {/* Sheen sweep */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 group-hover:opacity-100"
                    animate={{ x: ["-20%", "220%"] }}
                    transition={{
                      duration: 1.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1.9,
                    }}
                  />

                  {/* Corner shine */}
                  <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_62%)]" />

                  {/* Header row */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center
                        rounded-2xl border border-white/10 bg-white/5
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-300
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_30px_rgba(70,243,216,0.14)]
                        group-hover:-translate-y-0.5
                      "
                    >
                      <Icon className="h-5 w-5 text-white/90" />
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                      <span>Fit</span>
                      <span className="h-[3px] w-[3px] rounded-full bg-neutral-700" />
                      <span className="text-neutral-400/80 group-hover:text-neutral-300 transition-colors">
                        Premium
                      </span>
                    </div>
                  </div>

                  <h3 className="relative mt-5 text-[15px] font-medium text-white">
                    {a.title}
                  </h3>

                  <p className="relative mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/80">
                    {a.desc}
                  </p>

                  {/* Subtle CTA line */}
                  <div className="relative mt-5 inline-flex items-center gap-2 text-[13px] text-neutral-300/70">
                    <span className="transition-colors duration-300 group-hover:text-neutral-200">
                      See the setup
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* Bottom gradient divider */}
                  <div className="relative mt-6 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />

                  {/* Bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Left accent rail */}
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-dts-neon/60 via-transparent to-transparent opacity-30 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom line */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.28}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-200/70">
            Not sure which solution fits your business?
            <br />
            Let us help you choose the right setup based on your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
