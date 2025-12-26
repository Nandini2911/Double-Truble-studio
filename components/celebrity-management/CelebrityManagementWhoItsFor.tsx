"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  Briefcase,
  ShieldCheck,
  Clapperboard,
  Users,
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
    title: "Brands & marketers",
    desc: "Campaigns, launches, and endorsements where the right celebrity fit impacts credibility and ROI.",
    Icon: Sparkles,
    accent: "from-dts-neon/35 via-white/10 to-transparent",
  },
  {
    title: "Corporate & luxury events",
    desc: "Appearances, keynote moments, and brand-led gatherings requiring seamless celebrity coordination.",
    Icon: Briefcase,
    accent: "from-sky-400/25 via-white/10 to-transparent",
  },
  {
    title: "Celebrities & public figures",
    desc: "Actors, creators, and personalities seeking structured representation and clean execution.",
    Icon: Crown,
    accent: "from-amber-400/25 via-white/10 to-transparent",
  },
  {
    title: "Founders & HNIs",
    desc: "Private appearances, discreet associations, and reputation-sensitive engagements.",
    Icon: ShieldCheck,
    accent: "from-emerald-400/25 via-white/10 to-transparent",
  },
  {
    title: "Agencies & production houses",
    desc: "A dependable celebrity management partner to integrate into campaigns and live productions.",
    Icon: Clapperboard,
    accent: "from-violet-400/25 via-white/10 to-transparent",
  },
  {
    title: "IP owners & platforms",
    desc: "Award shows, festivals, digital properties, and recurring formats with ongoing celebrity needs.",
    Icon: Users,
    accent: "from-rose-400/25 via-white/10 to-transparent",
  },
];

export default function CelebrityManagementWhoItsFor() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* premium grid + extra glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:160px_160px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.14),transparent_60%)]" />

      {/* soft blobs + divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <span
              className="
                inline-flex items-center rounded-full
                border border-white/10 bg-white/5
                px-5 py-2
                text-[10px] sm:text-[11px]
                uppercase tracking-[0.28em]
                text-neutral-300/80
                backdrop-blur-xl
              "
            >
              Who this is for
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            Built for brands{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]
              "
            >
              and names that matter.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            If celebrity association affects reputation, visibility, or brand equity — this is where
            structured management makes the difference.
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
                {/* premium glow ring */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.30),rgba(216,184,115,0.28))]
                    blur-[12px]
                  "
                />

                {/* card */}
                <div
                  className="
                    relative rounded-2xl
                    border border-white/10
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                    p-6 md:p-7
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-dts-neon/60
                    hover:bg-[linear-gradient(180deg,rgba(70,243,216,0.06),rgba(255,255,255,0.02))]
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.22),0_20px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* top accent strip (kept your per-card accent) */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px rounded-2xl bg-linear-to-r ${a.accent}`}
                  />

                  {/* global neon/pink/gold micro strip (adds navbar vibe) */}
                  <div
                    className="
                      pointer-events-none absolute inset-x-0 top-0 h-px rounded-2xl
                      bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                      opacity-50
                    "
                  />

                  {/* soft sheen */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-2xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-700
                      bg-[radial-gradient(700px_circle_at_18%_-12%,rgba(255,255,255,0.08),transparent_55%)]
                    "
                  />

                  {/* icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center
                        rounded-xl border border-white/10
                        bg-white/4
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-300
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.16)]
                        group-hover:-translate-y-0.5
                      "
                    >
                      <Icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                      <span>Fit</span>
                      <span className="h-[3px] w-[3px] rounded-full bg-neutral-700" />
                      <span>Strategic</span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-[15px] font-medium text-white">
                    {a.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                    {a.desc}
                  </p>

                  {/* subtle CTA line */}
                  <div className="mt-5 flex items-center gap-2 text-[13px] text-neutral-300/70">
                    <span className="transition-colors duration-300 group-hover:text-neutral-200">
                      View relevance
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* bottom glow */}
                  <div
                    className="
                      pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%]
                      -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl
                      opacity-0 transition-opacity duration-300 group-hover:opacity-100
                    "
                  />
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
          <p className="text-[14px] leading-relaxed text-neutral-200/80">
            Not sure whether you need a one-time appearance or a long-term association?
            <br />
            We’ll guide you to the right structure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
