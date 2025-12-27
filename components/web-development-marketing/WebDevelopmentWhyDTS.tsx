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
    desc: "We don’t just advise. We build and run the system—ensuring seamless integration between design, development, and deployment.",
    Icon: Layers,
    accent: "from-dts-neon/45 via-white/10 to-transparent",
    glow: "rgba(70,243,216,0.20)",
  },
  {
    title: "Performance-focused design",
    desc: "We prioritize fast-loading, responsive designs that engage users while optimizing for SEO and performance.",
    Icon: Gauge,
    accent: "from-sky-400/35 via-white/10 to-transparent",
    glow: "rgba(56,189,248,0.16)",
  },
  {
    title: "Scalable solutions for growth",
    desc: "We design websites that grow with your business—flexible architecture that supports future expansion.",
    Icon: ShieldCheck,
    accent: "from-emerald-400/35 via-white/10 to-transparent",
    glow: "rgba(52,211,153,0.16)",
  },
  {
    title: "Creativity and innovation",
    desc: "From high-end visuals to cutting-edge technology, we craft unique, visually appealing websites tailored to your brand.",
    Icon: Sparkles,
    accent: "from-violet-400/35 via-white/10 to-transparent",
    glow: "rgba(167,139,250,0.16)",
  },
  {
    title: "Seamless integration and collaboration",
    desc: "Our process is documented and organized, with clear workflows that ensure timely delivery and effective collaboration.",
    Icon: Users,
    accent: "from-amber-400/30 via-white/10 to-transparent",
    glow: "rgba(245,158,11,0.14)",
  },
  {
    title: "We protect your digital presence",
    desc: "From website security to data privacy, we implement industry-standard practices to safeguard your online assets.",
    Icon: DoorOpen,
    accent: "from-rose-400/30 via-white/10 to-transparent",
    glow: "rgba(251,113,133,0.14)",
  },
];

export default function WebDevelopmentWhyDTS() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 xl:py-24 2xl:py-28 bg-[#050507]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.12),transparent_55%),radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.10),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        {/* Cinematic blobs */}
        <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* 4K-safe container */}
      <div
        className="relative mx-auto w-full
          px-4 md:px-6 lg:px-10
          max-w-[92%]
          2xl:max-w-[1600px]
          3xl:max-w-[1800px]"
      >
        {/* Header */}
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

          <h2 className="mt-5 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            We don’t build websites.
            <br />
            <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]">
              We build digital experiences.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/70">
            Our process ensures that your website is not only visually stunning but also
            high-performing, scalable, and secure.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* LEFT: Anchor statement (now with color + card effects) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="group relative">
              {/* Outer bloom */}
              <div className="pointer-events-none absolute -inset-2 rounded-3xl blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-75 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(70,243,216,0.18),transparent_58%)]" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-8 transition-all duration-500 group-hover:border-dts-neon/55 group-hover:bg-white/7 group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_24px_70px_rgba(0,0,0,0.70)]">
                {/* Top accent */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-dts-neon/50 via-white/10 to-transparent" />
                {/* Corner shine */}
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_62%)]" />
                {/* Sheen sweep */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-20%", "220%"] }}
                  transition={{
                    duration: 1.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2.1,
                  }}
                />

                <p className="relative text-[11px] uppercase tracking-[0.30em] text-neutral-400">
                  Our edge
                </p>

                <h3 className="relative mt-4 font-heading text-[26px] leading-tight text-white md:text-[30px]">
                  Quality craftsmanship.
                  <br />
                  <span className="text-white/75">Performance guaranteed.</span>
                </h3>

                <p className="relative mt-4 text-[14px] leading-relaxed text-neutral-200/70">
                  We don’t just build websites—we build digital experiences designed to engage,
                  convert, and scale.
                </p>

                <div className="relative mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/85">
                  <span>Built for your business growth</span>
                  <ArrowRight className="h-4 w-4" />
                </div>

                {/* Bottom gradient divider */}
                <div className="relative mt-6 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />

                {/* Bottom glow */}
                <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/12 blur-2xl opacity-35 transition-opacity duration-500 group-hover:opacity-85" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Pillars (now as glow-cards in 2 cols) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  custom={i * 0.05}
                  className="group relative"
                >
                  {/* Per-card color bloom */}
                  <div
                    className="pointer-events-none absolute -inset-2 rounded-3xl blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-70"
                    style={{
                      background: `radial-gradient(900px circle at 18% 0%, ${p.glow}, transparent 58%)`,
                    }}
                  />

                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7 transition-all duration-500 group-hover:border-dts-neon/55 group-hover:bg-white/7 group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_22px_60px_rgba(0,0,0,0.70)]">
                    {/* Top accent */}
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r ${p.accent}`} />

                    {/* Corner shine */}
                    <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_62%)]" />

                    {/* Sheen sweep */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)] opacity-0 group-hover:opacity-100"
                      animate={{ x: ["-20%", "220%"] }}
                      transition={{
                        duration: 1.7,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2.2,
                      }}
                    />

                    <div className="relative flex items-start gap-5">
                      {/* Icon chip */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 group-hover:border-dts-neon/60 group-hover:bg-dts-neon/10 group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.14)] group-hover:-translate-y-0.5">
                        <p.Icon className="h-5 w-5 text-white/90" />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <h4 className="text-[15px] font-medium text-white">
                          {p.title}
                        </h4>
                        <p className="mt-2 text-[14px] leading-relaxed text-neutral-200/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                          {p.desc}
                        </p>

                        <div className="mt-4 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,transparent)]" />
                      </div>
                    </div>

                    {/* Left accent rail */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-dts-neon/55 via-transparent to-transparent opacity-25 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Bottom glow */}
                    <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-75" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA (UNCHANGED BUTTON STYLE) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.3}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-200/70">
            Ready to elevate your digital presence? Let’s build something extraordinary.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Link
  href="/contact?service=web-development"
  className="inline-flex scale-y-125 dts-animated-border"
>
  <span>Get in touch</span>
</Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
