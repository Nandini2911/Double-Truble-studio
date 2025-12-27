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
    title: "Dedicated team & point of contact",
    desc: "One clear lead managing coordination so decisions don’t bounce across multiple people.",
    Icon: Headset,
    badge: "Popular",
    features: ["Single execution lead", "Clear escalation chain", "Fast decisions on-ground"],
  },
  {
    title: "Guestlist system & segmentation",
    desc: "A structured master list with categories, access tiers, and status tracking.",
    Icon: ListChecks,
    features: ["Categories + tiers", "Live status tracking", "Clean entry logic"],
  },
  {
    title: "Planning documents / run sheets",
    desc: "Entry flow plan, desk routing, pass/wristband logic, and escalation rules.",
    Icon: FileText,
    features: ["Run-sheet & routing", "Pass / band rules", "Desk flow mapping"],
  },
  {
    title: "RSVP handling & confirmations",
    desc: "Invites, follow-ups, confirmations, and last-minute updates handled end-to-end.",
    Icon: MailCheck,
    badge: "Most requested",
    features: ["Invites + follow-ups", "Confirmations", "Last-minute updates"],
  },
  {
    title: "On-ground coordination",
    desc: "Team coordination with venue + security for smooth arrivals and controlled access.",
    Icon: Users2,
    features: ["Venue + security sync", "Arrival handling", "Access control"],
  },
  {
    title: "Real-time problem handling",
    desc: "Immediate fixes for list issues, VIP changes, and on-the-spot flow adjustments.",
    Icon: ShieldAlert,
    features: ["VIP changes handled", "List mismatch fixes", "Flow adjustments"],
  },
  {
    title: "Post-event wrap-up",
    desc: "Final counts, learnings, and quick insights for tighter execution next time.",
    Icon: ClipboardCheck,
    features: ["Final counts", "Key learnings", "Next-time improvements"],
  },
];

export default function GuestManagementDeliverables() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28 xl:py-24 2xl:py-28
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* premium grid + extra glows (same as hero/navbar family) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:160px_160px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.14),transparent_60%)]" />

      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)] opacity-45" />

      {/* top & bottom dividers */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />

      {/* Container */}
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
                drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
              "
            >
              No ambiguity.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            Tangible outputs, systems, and on-ground support — built to keep your event calm from the
            first arrival to the last exit.
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
                {/* COLOR RING + GLOW */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-[28px]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.32),rgba(216,184,115,0.30))]
                    blur-[14px]
                  "
                />

                {/* Card body */}
                <div
                  className="
                    relative h-full
                    rounded-[28px]
                    border border-white/10
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                    p-7
                    backdrop-blur-xl
                    transition-all duration-500
                    group-hover:border-dts-neon/60
                    group-hover:bg-[linear-gradient(180deg,rgba(70,243,216,0.06),rgba(255,255,255,0.02))]
                    group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.25),0_28px_80px_rgba(0,0,0,0.75)]
                  "
                >
                  {/* subtle moving sheen */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-[28px]
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-700
                      bg-[radial-gradient(600px_circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]
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

                  <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-300/75 transition-colors duration-300 group-hover:text-neutral-200/90">
                    {d.desc}
                  </p>

                  {/* COLOR DIVIDER */}
                  <div
                    className="
                      mt-6 h-px w-full
                      bg-white/10
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
            You don’t just get “support.”
            <br />
            You get a system that protects the room and your reputation.
          </p>
        </motion.div>

        {/* CTA — NAVBAR STYLE */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact?service=guest-management"
            className="inline-flex items-center gap-2 scale-y-125 dts-animated-border"
          >
            <span className="inline-flex items-center gap-2">
              Start a Project <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
