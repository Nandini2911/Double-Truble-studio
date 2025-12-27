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
    title: "Objective & requirements",
    desc: "We understand your brand goal, audience, budget range, timelines, and the kind of celebrity presence you’re aiming for.",
  },
  {
    step: "02",
    title: "Shortlisting & fit check",
    desc: "We curate options based on relevance, image alignment, and audience match — not just popularity.",
  },
  {
    step: "03",
    title: "Availability, fees & commercials",
    desc: "We run availability checks, share fee ranges, and lock clear commercials: deliverables, usage, timelines, and approvals.",
  },
  {
    step: "04",
    title: "Contracting & coordination",
    desc: "Paperwork, schedules, logistics, brief sharing, brand requirements, and stakeholder alignment handled end-to-end.",
  },
  {
    step: "05",
    title: "Execution & closure",
    desc: "On-ground coordination for events/shoots and clean closure post-delivery — with professionalism throughout.",
  },
];

export default function CelebrityManagementHowItWorks() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28
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

      {/* subtle blobs + divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-[-160px] h-[520px] w-[520px] rounded-full bg-dts-neon-pink/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 left-[-140px] h-[520px] w-[520px] rounded-full bg-dts-gold/6 blur-3xl" />

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
              Our Approach
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            How it works,{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]
              "
            >
              step by step.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            A structured process that protects timelines, reputation, and brand alignment — while
            keeping execution clean and professional.
          </p>
        </motion.div>

        {/* MOBILE: horizontal scroll cards */}
        <div className="mt-14 flex gap-5 overflow-x-auto pb-3 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              custom={i * 0.06}
              className="group relative min-w-[84%] sm:min-w-[70%]"
            >
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.30),rgba(216,184,115,0.28))]
                  blur-[12px]
                "
              />

              <div
                className="
                  relative rounded-2xl
                  border border-white/10
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                  p-6
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:border-dts-neon/60
                  hover:bg-[linear-gradient(180deg,rgba(70,243,216,0.06),rgba(255,255,255,0.02))]
                  hover:shadow-[0_0_0_1px_rgba(70,243,216,0.22),0_18px_55px_rgba(0,0,0,0.70)]
                "
              >
                <div
                  className="
                    pointer-events-none absolute inset-x-0 top-0 h-px rounded-2xl
                    bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                    opacity-70
                  "
                />

                <p className="text-[12px] font-bold tracking-[0.22em] text-dts-neon/80">
                  {s.step}
                </p>

                <h3 className="mt-4 text-[16px] font-medium text-white">{s.title}</h3>

                <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP: timeline */}
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
                <div className="absolute left-3.5 top-6 h-3 w-3 rounded-full bg-dts-neon/70 shadow-[0_0_22px_rgba(70,243,216,0.35)]" />

                <div className="group relative rounded-2xl">
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-2xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.30),rgba(216,184,115,0.28))]
                      blur-[12px]
                    "
                  />

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
                      hover:shadow-[0_0_0_1px_rgba(70,243,216,0.22),0_18px_55px_rgba(0,0,0,0.70)]
                    "
                  >
                    <div
                      className="
                        pointer-events-none absolute inset-x-0 top-0 h-px rounded-2xl
                        bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                        opacity-70
                      "
                    />

                    <p className="text-[12px] font-bold tracking-[0.22em] text-dts-neon/80">
                      {s.step}
                    </p>

                    <h3 className="mt-3 text-[16px] font-medium text-white">{s.title}</h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Small CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.3}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[13px] leading-relaxed text-neutral-200/75">
            Want us to shortlist celebrity options for your brand or event?
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              href="/contact?service=celebrity-management"
              className="inline-flex scale-y-125 dts-animated-border"
            >
              <span>Discuss your requirements</span>
            </Link>
          </div>

          <p className="mt-10 text-[12px] uppercase tracking-[0.28em] text-neutral-500/80">
            Fit-first shortlist • Clean paperwork • Smooth execution
          </p>
        </motion.div>
      </div>
    </section>
  );
}
