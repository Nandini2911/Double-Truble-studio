// components/pr-media-digital/PRMediaDigitalIntro.tsx
"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const chips = ["Placement", "Perception", "Credibility", "Momentum"];

const pillars = [
  {
    k: "01",
    t: "Positioning before promotion",
    d: "We lock voice, audience-fit, and narrative clarity—then we go live.",
  },
  {
    k: "02",
    t: "Earned trust, not loud reach",
    d: "Media and digital work together to build authority that lasts.",
  },
  {
    k: "03",
    t: "Calm execution, sharp outcomes",
    d: "A measured rollout that looks effortless—because it’s structured.",
  },
];

export default function PRMediaDigitalIntro() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
      {/* ===== Background (same family as your FAQs/CTAs) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 dts-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_10%_12%,rgba(70,243,216,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(900px_circle_at_90%_30%,rgba(255,63,164,0.14),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(900px_circle_at_60%_110%,rgba(216,184,115,0.12),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#050507]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-10 lg:grid-cols-12 lg:items-start"
        >
          {/* ===== LEFT: Editorial header ===== */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(70,243,216,0.9)]" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300">
                Intro / Philosophy
              </p>
            </div>

            <h2 className="mt-6 font-heading text-3xl md:text-5xl text-white leading-[1.05]">
              Visibility,
              <span className="block text-white/80">built like a system.</span>
            </h2>

            <p className="mt-6 max-w-xl text-[14px] md:text-[15px] leading-relaxed text-neutral-300/80">
              PR, media, and digital should not compete for attention. They should
              reinforce each other—so your presence compounds with credibility and
              control.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-16 bg-white/12" />
              <div className="h-px w-10 bg-[rgba(70,243,216,0.35)]" />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {chips.map((x) => (
                <span
                  key={x}
                  className="
                    relative overflow-hidden rounded-full
                    border border-white/12 bg-white/4
                    px-4 py-2 text-[12px] text-neutral-200
                    backdrop-blur
                  "
                >
                  {/* ✅ always-on chip tint */}
                  <span className="pointer-events-none absolute inset-0 opacity-[0.22] bg-[radial-gradient(240px_circle_at_18%_0%,rgba(70,243,216,0.22),transparent_62%)]" />
                  <span className="relative">{x}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* ===== RIGHT: Redesigned cards with ALWAYS-ON COLOR EFFECT ===== */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="relative">
              {/* floating glow behind */}
              <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-dts-neon/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-14 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

              {/* Main statement card */}
              <div
                className="
                  group relative overflow-hidden rounded-3xl
                  border border-white/10 bg-white/5 backdrop-blur-xl
                  p-7 md:p-9
                  shadow-[0_24px_80px_rgba(0,0,0,0.65)]
                "
              >
                {/* ✅ ALWAYS-ON color wash (teal + pink + gold) */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.40] bg-[radial-gradient(900px_circle_at_16%_12%,rgba(70,243,216,0.18),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(900px_circle_at_92%_18%,rgba(255,63,164,0.14),transparent_62%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(900px_circle_at_60%_120%,rgba(216,184,115,0.12),transparent_60%)]" />

                {/* ✅ ALWAYS-ON inner gradient edge */}
                <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-[0.32] bg-[linear-gradient(135deg,rgba(70,243,216,0.28),transparent_40%,rgba(255,63,164,0.16),transparent_68%,rgba(216,184,115,0.12))]" />

                {/* top accent line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.55),rgba(255,63,164,0.38),rgba(216,184,115,0.30),transparent)] opacity-70" />

                {/* hover upgrade (extra pop) */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_18%_0%,rgba(70,243,216,0.18),transparent_60%)]" />
                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.42),rgba(255,63,164,0.18),rgba(216,184,115,0.18),rgba(70,243,216,0.30))] blur-[1.5px]" />

                {/* corner cut */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rotate-45 border border-white/10 bg-white/[0.02]" />

                <p className="relative text-[20px] md:text-[26px] leading-snug text-white">
                  Visibility is not about being everywhere.
                  <br />
                  <span className="text-white/70">
                    It’s about being in the right places—consistently, with intent.
                  </span>
                </p>

                <div className="relative mt-6 space-y-4 text-[14px] md:text-[15px] leading-relaxed text-neutral-300/85">
                  <p>
                    We align what you say, where you show up, and how people remember you.
                    Press coverage, creator moments, digital content, and performance—
                    mapped as one ecosystem.
                  </p>
                  <p className="text-neutral-400/85">
                    The goal is simple: authority that compounds—without chasing noise.
                  </p>
                </div>

                <div className="relative mt-7 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />
              </div>

              {/* Pillars: 3 mini cards under */}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.k}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.05 + i * 0.06 }}
                    className="
                      group relative overflow-hidden rounded-3xl
                      border border-white/10 bg-white/[0.03] backdrop-blur
                      p-6
                      transition-all duration-500
                      hover:border-dts-neon/55
                      hover:bg-white/[0.055]
                      hover:shadow-[0_0_0_1px_rgba(70,243,216,0.16),0_18px_60px_rgba(0,0,0,0.65)]
                    "
                  >
                    {/* ✅ ALWAYS-ON color wash on each card */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.34] bg-[radial-gradient(520px_circle_at_18%_10%,rgba(70,243,216,0.16),transparent_62%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(520px_circle_at_92%_18%,rgba(255,63,164,0.12),transparent_66%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(520px_circle_at_55%_120%,rgba(216,184,115,0.10),transparent_62%)]" />

                    {/* ✅ ALWAYS-ON inner edge */}
                    <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-[0.26] bg-[linear-gradient(135deg,rgba(70,243,216,0.22),transparent_44%,rgba(255,63,164,0.12),transparent_70%,rgba(216,184,115,0.10))]" />

                    {/* extra hover pop */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(520px_circle_at_18%_0%,rgba(70,243,216,0.18),transparent_60%)]" />

                    <div className="relative flex items-start justify-between gap-4">
                      <span className="font-heading text-[14px] text-neutral-500">
                        {p.k}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40 group-hover:bg-dts-neon/80 transition-colors" />
                    </div>

                    <p className="relative mt-3 text-[14px] font-semibold text-white/90">
                      {p.t}
                    </p>
                    <p className="relative mt-2 text-[13px] leading-relaxed text-neutral-400">
                      {p.d}
                    </p>

                    <div className="relative mt-5 h-px w-12 bg-white/10 transition-all duration-300 group-hover:w-20 group-hover:bg-dts-neon/45" />
                  </motion.div>
                ))}
              </div>

              <p className="mt-7 text-[12px] uppercase tracking-[0.28em] text-neutral-500">
                Structured • Credible • Calm execution
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
