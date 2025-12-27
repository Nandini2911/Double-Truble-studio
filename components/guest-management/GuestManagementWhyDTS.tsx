"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Sparkles,
  Gauge,
  Users,
  DoorOpen,
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

const pillars = [
  {
    title: "Strategy + execution under one roof",
    desc: "We don’t just advise. We design the system and run it on-ground—so the plan survives real pressure.",
    Icon: Layers,
  },
  {
    title: "Calm handling in high-pressure rooms",
    desc: "VIPs arrive together, lists change, timelines move—we stay quiet, fast, and in control.",
    Icon: Gauge,
  },
  {
    title: "Discretion, structure, and clarity",
    desc: "Clear access rules, defined roles, zero loose talk. Privacy and professionalism come first.",
    Icon: ShieldCheck,
  },
  {
    title: "Experience across luxury + celebrity + scale",
    desc: "From intimate rooms to high-visibility launches—we understand premium expectations.",
    Icon: Sparkles,
  },
  {
    title: "Process-driven, not person-dependent",
    desc: "Segmentation, entry logic, desk flow, confirmations, escalation—everything documented.",
    Icon: Users,
  },
  {
    title: "We protect the first impression",
    desc: "Entry is where perception forms. We make sure it looks effortless—even when it isn’t.",
    Icon: DoorOpen,
  },
];

export default function GuestManagementWhyDTS() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28 xl:py-24 2xl:py-28
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* premium grid + extra glows (same family as navbar/hero) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:160px_160px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.14),transparent_60%)]" />

      {/* dividers */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />

      {/* subtle cinematic blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-[-120px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 left-[-140px] h-[520px] w-[520px] rounded-full bg-dts-gold/6 blur-3xl" />

      {/* 4K-safe container */}
      <div
        className="
          relative mx-auto w-full
          px-4 md:px-6 lg:px-10
          max-w-[92%]
          2xl:max-w-[1600px]
          min-[3000px]:max-w-[1800px]
        "
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center">
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
              Why Double Trouble Studio
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            We don’t run a guestlist.
            <br />
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
              "
            >
              We run the room.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            Structure, discretion, and execution—so the experience looks calm even under pressure.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="group relative">
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.32),rgba(216,184,115,0.30))]
                  blur-[14px]
                "
              />
              <div
                className="
                  relative rounded-3xl
                  border border-white/10
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                  p-7 md:p-8
                  backdrop-blur-xl
                  transition-all duration-500
                  group-hover:border-dts-neon/60
                  group-hover:bg-[linear-gradient(180deg,rgba(70,243,216,0.06),rgba(255,255,255,0.02))]
                  group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.20),0_22px_70px_rgba(0,0,0,0.72)]
                "
              >
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-700
                    bg-[radial-gradient(700px_circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]
                  "
                />
                <div
                  className="
                    absolute inset-x-0 top-0 h-px rounded-3xl
                    bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                    opacity-70
                  "
                />

                <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-400">
                  Our edge
                </p>

                <h3 className="mt-4 font-heading text-[26px] leading-tight text-white md:text-[30px]">
                  Calm systems.
                  <br />
                  Clean entry.
                  <br />
                  Zero noise.
                </h3>

                <p className="mt-4 text-[14px] leading-relaxed text-neutral-200/80">
                  High-pressure rooms don’t need more people—they need a stronger operating system.
                  We build the rules, the flow, and the escalation logic so the room stays controlled.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/80 transition-colors duration-300 group-hover:text-dts-neon">
                  <span>Built for premium rooms</span>
                  <ArrowRight className="h-4 w-4" />
                </div>

                <div
                  className="
                    mt-6 h-px w-full bg-white/10
                    transition-all duration-500
                    group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid gap-x-12 gap-y-10 lg:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  custom={i * 0.05}
                  className="group flex gap-5"
                >
                  <div
                    className="
                      mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-2xl border border-white/10 bg-white/5
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                      transition-all duration-300
                      group-hover:border-dts-neon/55
                      group-hover:bg-dts-neon/10
                      group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.16)]
                      group-hover:-translate-y-0.5
                    "
                  >
                    <p.Icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <div className="min-w-0 text-left">
                    <h4 className="text-[15px] font-medium text-white transition-colors duration-300 group-hover:text-neutral-200">
                      {p.title}
                    </h4>
                    <p className="mt-2 max-w-[560px] xl:max-w-[640px] text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                      {p.desc}
                    </p>

                    <div
                      className="
                        mt-4 h-px w-24 bg-white/10
                        transition-all duration-500
                        group-hover:w-32
                        group-hover:bg-[linear-gradient(to_right,#46F3D8,#FF3FA4,#D8B873)]
                      "
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.3}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-200/80">
            If your event needs calm execution and premium entry flow, let’s map the system before
            the room fills up.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/contact?service=guest-management"
              className="inline-flex scale-y-125 dts-animated-border"
            >
              <span>Start a Project</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
