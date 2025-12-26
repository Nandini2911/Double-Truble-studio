// components/pr-media-digital/PRMediaDigitalWhoThisIsFor.tsx
"use client";

import { motion } from "framer-motion";
import { Crown, User, Sparkles, TrendingUp } from "lucide-react";

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

const audience = [
  { Icon: Crown, text: "Luxury & lifestyle brands" },
  { Icon: User, text: "Founders, creators & public figures" },
  { Icon: Sparkles, text: "New launches & rebrands" },
  { Icon: TrendingUp, text: "Businesses scaling visibility and trust" },
];

export default function PRMediaDigitalWhoThisIsFor() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 sm:px-6 lg:px-8 py-16 md:py-22">
      {/* Background (same family as FAQ/CTA) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-12 lg:grid-cols-12 items-start"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            {/* pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(70,243,216,0.9)]" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300/90">
                Who this is for
              </p>
            </div>

            <h2 className="mt-6 font-heading text-3xl md:text-5xl text-white leading-[1.05]">
              Built for brands
              <span className="block text-white/80">that value stature.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm md:text-[15px] leading-relaxed text-neutral-400">
              Designed for teams who care how they’re perceived — not just how often
              they’re seen. Premium presence, with structure and control.
            </p>

            {/* signature strip */}
            <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              {/* always-on tint */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[radial-gradient(800px_circle_at_18%_12%,rgba(70,243,216,0.14),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />

              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                  The expectation
                </p>
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  Visibility should feel intentional — and execution should feel
                  invisible.
                </p>

                <div className="mt-5 h-px w-full bg-white/10" />

                <p className="mt-4 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                  Credibility • Control • Consistency
                </p>
              </div>

              {/* bottom glow */}
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-60" />
            </div>
          </motion.div>

          {/* RIGHT — CARDS */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {audience.map(({ Icon, text }, i) => (
                <motion.div
                  key={text}
                  custom={i}
                  variants={cardIn}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="
                    group relative overflow-hidden rounded-3xl
                    border border-white/10
                    bg-white/[0.035] backdrop-blur
                    p-6 md:p-7
                    shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                    transition-all duration-500
                    hover:border-dts-neon/55
                    hover:bg-white/[0.05]
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_26px_80px_rgba(0,0,0,0.72)]
                  "
                >
                  {/* ✅ Always-on color effect */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.52] bg-[radial-gradient(900px_circle_at_16%_14%,rgba(70,243,216,0.14),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(700px_circle_at_90%_10%,rgba(255,63,164,0.10),transparent_55%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />

                  {/* top hairline (brand mix) */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.50),rgba(255,63,164,0.26),rgba(216,184,115,0.22),transparent)]" />

                  {/* hover ring */}
                  <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.30),transparent_44%,rgba(255,255,255,0.10))]" />

                  {/* corner editorial cut */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-45 border border-white/10 bg-white/[0.02]" />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center
                        rounded-2xl border border-white/12
                        bg-white/[0.03]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-500
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.14),0_14px_40px_rgba(70,243,216,0.12)]
                      "
                    >
                      <Icon size={18} className="text-white/75" />
                    </div>

                    <p className="text-sm md:text-[15px] text-neutral-200/85 leading-relaxed">
                      {text}
                    </p>
                  </div>

                  {/* underline */}
                  <div className="relative mt-6 h-px w-14 bg-white/10 transition-all duration-300 group-hover:w-24 group-hover:bg-[rgba(70,243,216,0.45)]" />

                  {/* bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-10 text-sm md:text-[15px] text-neutral-400"
            >
              If you want visibility to feel premium — and the process to feel calm —
              you’re in the right place.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
