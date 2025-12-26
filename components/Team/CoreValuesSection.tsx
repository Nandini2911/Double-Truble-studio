"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  Briefcase,
  HeartHandshake,
  ShieldCheck,
  Clapperboard,
  ArrowRight,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: d },
  }),
};

const coreValues = [
  {
    title: "Creativity",
    desc: "We embrace innovative thinking and creative problem-solving to deliver fresh, impactful solutions for our clients.",
    Icon: Crown,
    accent: "from-dts-neon/35 via-white/10 to-transparent",
  },
  {
    title: "Teamwork",
    desc: "We believe collaboration compounds outcomes — we share context, move together, and ship with clarity.",
    Icon: Sparkles,
    accent: "from-amber-400/25 via-white/10 to-transparent",
  },
  {
    title: "Integrity",
    desc: "We operate with high standards — transparent communication, clean commitments, and trust-first execution.",
    Icon: Briefcase,
    accent: "from-sky-400/25 via-white/10 to-transparent",
  },
  {
    title: "Excellence",
    desc: "Details matter. We refine, stress-test, and elevate until the output feels premium — not just finished.",
    Icon: HeartHandshake,
    accent: "from-rose-400/25 via-white/10 to-transparent",
  },
  {
    title: "Growth",
    desc: "We learn fast, adapt faster, and keep raising the bar — for the team, the craft, and the client outcomes.",
    Icon: ShieldCheck,
    accent: "from-emerald-400/25 via-white/10 to-transparent",
  },
  {
    title: "Innovation",
    desc: "We explore tools, systems, and new ideas that keep us ahead — without losing taste, polish, or intent.",
    Icon: Clapperboard,
    accent: "from-violet-400/25 via-white/10 to-transparent",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* DTS ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(255,63,164,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.08),transparent_60%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        {/* soft blobs */}
        <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-28 right-[-120px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />

        {/* dividers */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/35 to-transparent opacity-80" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          {/* pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
              <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-300/80">
                Our Core Values
              </p>
            </div>
          </div>

          {/* gradient heading (this is the “color effect on text”) */}
          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] md:text-[44px] text-white">
            The principles that guide our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold drop-shadow-[0_0_18px_rgba(70,243,216,0.35)]">
              decisions, actions, and approach
            </span>
            .
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            Our values shape how we work, collaborate, and build outcomes that feel
            premium — and perform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {coreValues.map((a, i) => {
            const Icon = a.Icon;
            return (
              <motion.div
                key={a.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i * 0.05}
                className="group relative rounded-2xl p-px"
              >
                {/* gradient border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

                {/* card */}
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-7 transition-all duration-300 group-hover:border-white/15 group-hover:-translate-y-0.5 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_22px_70px_rgba(0,0,0,0.70)]">
                  {/* top accent strip */}
                  <div
                    className={`absolute inset-x-0 top-0 h-px rounded-2xl bg-linear-to-r ${a.accent}`}
                  />

                  {/* hover wash */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.14),rgba(255,63,164,0.12),rgba(216,184,115,0.10))]" />
                  <div className="pointer-events-none absolute inset-0 bg-[#050507]/30" />

                  <div className="relative">
                    {/* icon row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-dts-neon/60 group-hover:bg-dts-neon/10 group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.16)] group-hover:-translate-y-0.5">
                        <Icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                      </div>

                      <span className="mt-1 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                        Value
                      </span>
                    </div>

                    {/* title with gradient on hover */}
                    <h3 className="mt-5 text-[15px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                      {a.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                      {a.desc}
                    </p>

                    {/* subtle CTA line */}
                    <div className="mt-5 inline-flex items-center gap-2 text-[13px] text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200">
                      <span>See how we work</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <div className="mt-5 h-px w-10 bg-white/10 group-hover:bg-dts-neon/60 transition" />
                  </div>

                  {/* bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/12 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom line */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          custom={0.2}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-300/80">
            Want a team that’s process-driven, creative, and calm under pressure?
            <br />
            Let’s build something premium — together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
