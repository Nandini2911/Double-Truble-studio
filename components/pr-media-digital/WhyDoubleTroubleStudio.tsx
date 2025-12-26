// components/pr-media-digital/WhyDoubleTroubleStudio.tsx
"use client";

import { motion } from "framer-motion";
import { Layers, Network, ShieldCheck, Star } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const cardIn = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.06 },
  }),
};

const reasons = [
  {
    Icon: Layers,
    title: "PR + Digital under one strategic roof",
    desc: "No silos. Messaging, media, and momentum move together.",
  },
  {
    Icon: Network,
    title: "Strong media & influencer network",
    desc: "Relationships built on trust, relevance, and long-term value.",
  },
  {
    Icon: ShieldCheck,
    title: "Calm, discreet handling of high-pressure narratives",
    desc: "Especially when stakes are high and visibility is sensitive.",
  },
  {
    Icon: Star,
    title: "Luxury, celebrity & event-led experience",
    desc: "We understand stature, timing, and perception at scale.",
  },
];

export default function WhyDoubleTroubleStudio() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      {/* Background (match FAQ/CTA family) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/35 to-transparent opacity-80" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-neutral-300/80 backdrop-blur-xl">
              Why Double Trouble Studio
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]"
          >
            Strategy, discretion, and presence —
            <span className="block text-white/80">under one roof.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80"
          >
            We don’t chase noise. We build credibility, alignment, and outcomes —
            with calm handling and premium execution.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map(({ Icon, title, desc }, i) => (
            <motion.article
              key={title}
              custom={i}
              variants={cardIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.035] backdrop-blur
                p-7 md:p-8
                shadow-[0_18px_70px_rgba(0,0,0,0.55)]
                transition-all duration-500
                hover:border-dts-neon/55
                hover:bg-white/[0.055]
                hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_28px_90px_rgba(0,0,0,0.75)]
              "
            >
              {/* ✅ Always-on color effect inside card */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.52] bg-[radial-gradient(900px_circle_at_16%_14%,rgba(70,243,216,0.14),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(700px_circle_at_92%_12%,rgba(255,63,164,0.10),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(700px_circle_at_60%_120%,rgba(216,184,115,0.10),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />

              {/* Top hairline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.50),rgba(255,63,164,0.26),rgba(216,184,115,0.22),transparent)]" />

              {/* Hover ring */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.30),transparent_44%,rgba(255,255,255,0.10))]" />

              {/* Corner editorial cut */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rotate-45 border border-white/10 bg-white/[0.02]" />

              {/* Content */}
              <div className="relative flex items-start gap-4">
                <div
                  className="
                    inline-flex h-12 w-12 items-center justify-center
                    rounded-2xl border border-white/12
                    bg-white/[0.03]
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                    transition-all duration-500
                    group-hover:border-dts-neon/60
                    group-hover:bg-dts-neon/10
                    group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.14),0_14px_40px_rgba(70,243,216,0.12)]
                  "
                >
                  <Icon size={20} className="text-white/80" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-neutral-300/85">
                    {desc}
                  </p>

                  {/* Divider */}
                  <div className="mt-6 h-px w-16 bg-white/10 transition-all duration-300 group-hover:w-24 group-hover:bg-[rgba(70,243,216,0.45)]" />

                  {/* Micro label */}
                  <p className="mt-4 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                    Calm • Strategic • Premium
                  </p>
                </div>
              </div>

              {/* Bottom glow */}
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
