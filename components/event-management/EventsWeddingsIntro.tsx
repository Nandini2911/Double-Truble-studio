// components/events-weddings/EventsWeddingsIntro.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, Timer, Users, ScanEye } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const philosophyPoints = [
  {
    title: "Flow & Timing",
    desc: "Every moment is paced to feel natural, seamless, and intentional.",
    Icon: Timer,
  },
  {
    title: "Guest Experience",
    desc: "How people move, feel, and remember the event matters most.",
    Icon: Users,
  },
  {
    title: "Aesthetic Discipline",
    desc: "Visuals support the experience — never overpower it.",
    Icon: Sparkles,
  },
  {
    title: "Invisible Execution",
    desc: "Complexity handled quietly, so the moment stays uninterrupted.",
    Icon: ScanEye,
  },
];

export default function EventsWeddingsIntro() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-24 dts-section">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 dts-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />

      {/* Soft glows (same navbar/guest hero family) */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(70,243,216,0.16),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,63,164,0.10),transparent_65%)] blur-2xl" />

      {/* Bottom fade (safe) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-[#050507]" />

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-5"
          >
            {/* Label chip (match guest hero gradient language) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300">
                Philosophy
              </p>
            </div>

            <h2 className="mt-5 font-heading text-2xl md:text-4xl text-white leading-[1.15]">
              Event Management,{" "}
              <span
                className="
                  bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_18px_rgba(70,243,216,0.16)]
                "
              >
                Beyond Logistics
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-16 bg-white/12" />
              <div className="h-px w-10 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold opacity-70" />
            </div>

            <p className="mt-6 text-sm text-neutral-400 leading-relaxed max-w-sm">
              A design-led approach where structure, emotion, and execution work
              quietly together.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-7 md:p-10">
              {/* Premium subtle gradients */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-55 bg-[linear-gradient(135deg,rgba(70,243,216,0.22),transparent_42%,rgba(255,63,164,0.14))]" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.30] bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_60%)]" />

              {/* Corner accents */}
              <div className="pointer-events-none absolute top-6 right-6 h-16 w-16 rounded-2xl border border-white/10 bg-white/2 rotate-12 opacity-60" />
              <div className="pointer-events-none absolute bottom-6 left-6 h-14 w-14 rounded-2xl border border-white/10 bg-white/2 -rotate-12 opacity-50" />

              <div className="relative space-y-6 text-neutral-300 leading-relaxed">
                <p className="text-base md:text-lg">
                  We don’t believe events are about excess.
                  <br />
                  They are about{" "}
                  <span className="text-white">flow</span>,{" "}
                  <span className="text-white">timing</span>,{" "}
                  <span className="text-white">emotion</span>, and{" "}
                  <span className="text-white">experience</span>.
                </p>

                <p className="text-sm md:text-[15px]">
                  At Double Trouble Studio, event management means understanding{" "}
                  <span className="text-white">why the event exists</span>,{" "}
                  <span className="text-white">who it is for</span>, and{" "}
                  <span className="text-white">how it should be remembered</span>.
                  We focus on structure, guest experience, aesthetics, and seamless
                  coordination — ensuring everything feels intentional, not
                  overwhelming.
                </p>

                <p className="text-sm md:text-[15px]">
                  Whether it’s a wedding, a private celebration, or a high-visibility
                  brand event, our role is to{" "}
                  <span
                    className="
                      bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                      bg-clip-text text-transparent
                      drop-shadow-[0_0_18px_rgba(70,243,216,0.14)]
                    "
                  >
                    make the complexity invisible
                  </span>
                  .
                </p>

                {/* PHILOSOPHY POINTS – AUTO LIFT + AUTO GLOW (NO HOVER) */}
                <div className="pt-4 grid gap-4 sm:grid-cols-2">
                  {philosophyPoints.map((p, i) => {
                    const PIcon = p.Icon;

                    return (
                      <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 4.6,
                          ease: "easeInOut",
                          repeat: Infinity,
                          delay: i * 0.6,
                        }}
                        className="relative rounded-2xl border border-white/12 bg-white/3 p-4 overflow-hidden"
                      >
                        {/* subtle neon wash */}
                        <motion.div
                          aria-hidden
                          animate={{ opacity: [0.12, 0.30, 0.12] }}
                          transition={{
                            duration: 4.6,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: i * 0.6,
                          }}
                          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(70,243,216,0.20),transparent_60%)]"
                        />

                        <div className="relative flex gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/90">
                            <PIcon className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-sm text-white">{p.title}</p>
                            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                              {p.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
