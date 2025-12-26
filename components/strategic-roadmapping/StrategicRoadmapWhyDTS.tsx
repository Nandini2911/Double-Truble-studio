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
    title: "Comprehensive strategy & execution",
    desc: "We don’t just create plans, we implement them — turning strategy into action and ensuring the roadmap stays on track.",
    Icon: Layers,
  },
  {
    title: "Seamless coordination in execution",
    desc: "Clear communication across teams, ensuring smooth collaboration and adaptation to market changes in real time.",
    Icon: Gauge,
  },
  {
    title: "Defined roles & accountability",
    desc: "Strategic alignment across teams with clear roles, responsibilities, and escalation pathways for efficient execution.",
    Icon: ShieldCheck,
  },
  {
    title: "Innovation across sectors",
    desc: "Experience in various industries, from tech startups to established enterprises, ensuring scalable and flexible strategies.",
    Icon: Sparkles,
  },
  {
    title: "Process-driven frameworks",
    desc: "We implement systems and processes that are repeatable, scalable, and adaptable to evolving business needs.",
    Icon: Users,
  },
  {
    title: "Optimization for measurable results",
    desc: "Constant review and optimization of strategies to ensure they deliver the best possible outcomes for the business.",
    Icon: DoorOpen,
  },
];

export default function StrategicRoadmapWhyDTS() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ===== BACKGROUND ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,63,56,0.34),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* ===== CONTAINER ===== */}
      <div className="relative mx-auto w-full px-4 md:px-6 lg:px-10 max-w-[92%] 2xl:max-w-[1600px] 3xl:max-w-[1800px]">
        {/* ===== HEADER ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
            Why Double Trouble Studio
          </p>

        <h2 className="mt-5 font-heading text-[32px] leading-tight tracking-[-0.02em] md:text-[44px]">
  <span className="text-white">
    We don’t just create strategies.
  </span>
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
    We execute them.
  </span>
</h2>


          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            From planning to execution — we ensure your roadmap is fully realized, driving growth and success.
          </p>
        </motion.div>

        {/* ===== LAYOUT ===== */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* LEFT CARD */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="group lg:col-span-5 xl:col-span-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8">
              {/* hover wash */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.18),rgba(255,63,164,0.14),rgba(216,184,115,0.10))]" />
              {/* readability veil */}
              <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-400">
                  Our edge
                </p>

                <h3 className="mt-4 font-heading text-[26px] leading-tight text-white md:text-[30px] transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                  Systems that execute.
                  <br />
                  Clarity in action.
                </h3>

                <p className="mt-4 text-[14px] leading-relaxed text-neutral-300/80 transition-colors duration-300 group-hover:text-neutral-200/85">
                  Strong strategies need even stronger systems to execute. We build these systems to ensure your strategy delivers.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/80">
                  <span>Built for execution</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PILLARS */}
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
                  {/* icon */}
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-dts-neon/55 group-hover:bg-dts-neon/10 group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.16)] group-hover:-translate-y-0.5">
                    <p.Icon className="h-5 w-5 text-white/90" />
                  </div>

                  {/* text */}
                  <div className="min-w-0">
                    <h4 className="text-[15px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                      {p.title}
                    </h4>

                    <p className="mt-2 max-w-[560px] xl:max-w-[640px] text-[14px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.3}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-300/80">
            If you need more than just strategy — if you need a system that works — let’s build it together.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact?service=strategic-roadmap"
              className="inline-flex rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.22em] text-neutral-200 transition-all duration-300 hover:border-dts-neon/70 hover:shadow-[0_0_0_1px_rgba(70,243,216,0.30)]"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
