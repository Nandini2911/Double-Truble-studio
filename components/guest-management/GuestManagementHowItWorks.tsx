"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const steps = [
  {
    step: "01",
    title: "Understanding your objective",
    desc: "Event type, audience mix, VIP/media priority, venue flow, and what “premium entry” means for your room.",
  },
  {
    step: "02",
    title: "Planning & system setup",
    desc: "Guestlist structure, categories, access rules, entry logic, RSVP tracking, and escalation rules.",
  },
  {
    step: "03",
    title: "Execution & coordination",
    desc: "Invites, confirmations, reminders, and coordination with host team, venue, and security.",
  },
  {
    step: "04",
    title: "On-ground management",
    desc: "Smooth check-ins, tiered access, desk routing, wristbands/passes, and real-time issue handling.",
  },
  {
    step: "05",
    title: "Post-event wrap-up",
    desc: "Final counts, learnings, and clean closure—so your next event runs faster and calmer.",
  },
];

export default function GuestManagementHowItWorks() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* premium grid + glows */}
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

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
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
                text-[10px] uppercase tracking-[0.28em]
                text-neutral-300/80
                backdrop-blur-xl
              "
            >
              Our Approach
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] md:text-[44px] text-white">
            How it works,{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
              "
            >
              step by step.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] text-neutral-200/80">
            A simple, structured process that keeps entry calm and the room controlled — even when pressure is high.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="relative mt-14 hidden md:block">
          <div className="absolute left-5 top-0 h-full w-px bg-white/10" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                custom={i * 0.06}
                className="relative pl-14"
              >
                <div className="absolute left-3.5 top-7 h-3 w-3 rounded-full bg-dts-neon/70 shadow-[0_0_22px_rgba(70,243,216,0.35)]" />

                <div className="group relative">
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-2xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.32),rgba(216,184,115,0.30))]
                      blur-[14px]
                    "
                  />
                  <div
                    className="
                      relative rounded-2xl border border-white/10
                      bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                      p-7 backdrop-blur-xl
                      transition-all duration-500
                      group-hover:border-dts-neon/60
                      group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.25),0_22px_70px_rgba(0,0,0,0.75)]
                    "
                  >
                    <p className="text-[12px] font-bold tracking-[0.22em] text-dts-neon/80">
                      {s.step}
                    </p>

                    <h3 className="mt-3 text-[16px] text-white">{s.title}</h3>

                    <p className="mt-3 text-[14px] text-neutral-300/75">
                      {s.desc}
                    </p>

                    <div className="mt-6 h-px w-full bg-white/10 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)] transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA — NAVBAR STYLE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.3}
          className="mx-auto mt-16 text-center"
        >
          <p className="text-[13px] text-neutral-200/75">
            Want us to map your entry flow and categories?
          </p>

          <div className="mt-6">
            <Link
              href="/contact?service=guest-management"
              className="inline-flex scale-y-125 dts-animated-border"
            >
              <span>Discuss your event</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
