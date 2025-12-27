"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Headset,
  ListChecks,
  FileText,
  MailCheck,
  Users2,
  ShieldAlert,
  ClipboardCheck,
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

const deliverables = [
  {
    title: "Dedicated point of contact",
    desc: "One clear lead managing the entire coordination flow — so updates don’t bounce across multiple people.",
    Icon: Headset,
    badge: "Popular",
    features: ["Single execution lead", "Clear escalation chain", "Fast turnaround"],
  },
  {
    title: "Celebrity shortlisting & fit",
    desc: "Curated options based on brand alignment, audience relevance, and campaign objectives.",
    Icon: ListChecks,
    features: ["Brand-fit curation", "Audience relevance", "Clear options list"],
  },
  {
    title: "Commercials & documentation",
    desc: "Clear deliverables, usage rights, timelines, approvals, and exclusions — documented upfront.",
    Icon: FileText,
    features: ["Usage + tenure clarity", "Deliverables defined", "Approval checkpoints"],
  },
  {
    title: "Availability & confirmations",
    desc: "Availability checks, fee ranges, confirmations, and schedule lock — handled end-to-end.",
    Icon: MailCheck,
    badge: "Most requested",
    features: ["Availability checks", "Fee ranges shared", "Dates locked"],
  },
  {
    title: "Shoot / event coordination",
    desc: "Coordination with brand team, venue/production, and talent team for a smooth execution day.",
    Icon: Users2,
    features: ["Brand + talent sync", "Production coordination", "Timeline management"],
  },
  {
    title: "Real-time issue handling",
    desc: "Quick fixes for last-minute changes, delays, brief updates, and on-ground adjustments.",
    Icon: ShieldAlert,
    features: ["Last-minute changes", "Delay handling", "On-ground adjustments"],
  },
  {
    title: "Post-delivery closure",
    desc: "Final delivery tracking and clean closure — ensuring agreed outputs are completed professionally.",
    Icon: ClipboardCheck,
    features: ["Deliverable tracking", "Final confirmations", "Clean closure"],
  },
];

export default function CelebrityManagementDeliverables() {
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

      {/* subtle blobs */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-[-90px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 left-[-140px] h-[520px] w-[520px] rounded-full bg-dts-gold/6 blur-3xl" />

      {/* ✅ container */}
      <div
        className="
          relative mx-auto w-full
          px-6 md:px-8 lg:px-10
          max-w-[95%]
          2xl:max-w-[2000px]
          min-[3000px]:max-w-[2400px]
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
              What you get
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            Clear deliverables.
            <br />
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]
              "
            >
              Clean execution.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            Tangible outputs, clear commercials, and end-to-end coordination — designed to protect
            timelines, image, and brand alignment.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="
            mt-14 grid gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            2xl:grid-cols-5
            min-[3000px]:grid-cols-6
          "
        >
          {deliverables.map((d, i) => {
            const Icon = d.Icon;

            return (
              <motion.div
                key={d.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.05}
                className={`group relative ${
                  i >= 5 ? "2xl:hidden min-[3000px]:block" : ""
                } ${i >= 6 ? "min-[3000px]:hidden" : ""}`}
              >
                {/* premium gradient glow ring */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-[28px]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.32),rgba(216,184,115,0.30))]
                    blur-[14px]
                  "
                />

                {/* Card */}
                <div
                  className="
                    relative h-full rounded-[28px]
                    border border-white/10
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                    p-7
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-dts-neon/60
                    hover:bg-[linear-gradient(180deg,rgba(70,243,216,0.06),rgba(255,255,255,0.02))]
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.20),0_22px_70px_rgba(0,0,0,0.72)]
                  "
                >
                  {/* sheen */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-[28px]
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-700
                      bg-[radial-gradient(700px_circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]
                    "
                  />

                  {/* top accent strip */}
                  <div
                    className="
                      pointer-events-none absolute inset-x-0 top-0 h-px rounded-[28px]
                      bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                      opacity-70
                    "
                  />

                  {d.badge ? (
                    <div className="absolute right-5 top-5">
                      <span className="rounded-full border border-dts-neon/35 bg-dts-neon/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-dts-neon/90">
                        {d.badge}
                      </span>
                    </div>
                  ) : null}

                  {/* Icon */}
                  <div
                    className="
                      inline-flex h-14 w-14 items-center justify-center
                      rounded-2xl border border-white/10 bg-white/5
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                      transition-all duration-300
                      group-hover:border-dts-neon/60
                      group-hover:bg-dts-neon/10
                      group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_34px_rgba(70,243,216,0.14)]
                      group-hover:-translate-y-0.5
                    "
                  >
                    <Icon className="h-6 w-6 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <h3 className="mt-6 text-[17px] font-semibold leading-snug text-white">
                    {d.title}
                  </h3>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                    {d.desc}
                  </p>

                  <div
                    className="
                      mt-6 h-px w-full bg-white/10
                      transition-all duration-500
                      group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                    "
                  />

                  <ul className="mt-5 space-y-2.5">
                    {d.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-neutral-300/80"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dts-neon/70 shadow-[0_0_14px_rgba(70,243,216,0.25)]" />
                        <span className="transition-colors duration-300 group-hover:text-neutral-200">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.25}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-200/80">
            You don’t just get “connections.”
            <br />
            You get a system that protects brand value and reputation.
          </p>
        </motion.div>

        {/* CTA — NAVBAR STYLE */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact?service=celebrity-management"
            className="inline-flex scale-y-125 dts-animated-border"
          >
            <span className="inline-flex items-center gap-2">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
