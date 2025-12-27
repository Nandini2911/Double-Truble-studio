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
    title: "AI-driven video editing + automation",
    desc: "Automated editing, real-time adjustments, and creative AI tools to streamline video production.",
    Icon: Layers,
  },
  {
    title: "High-quality VFX creation",
    desc: "Custom visual effects that add depth and emotion to your storytelling, pushing the boundaries of creativity.",
    Icon: Sparkles,
  },
  {
    title: "Seamless integration into campaigns",
    desc: "Quickly adapt your video content for multiple platforms, ensuring consistency and impact across all media.",
    Icon: Gauge,
  },
  {
    title: "Real-time feedback and revisions",
    desc: "Immediate video changes and AI-driven enhancements based on your feedback, making adjustments faster.",
    Icon: ShieldCheck,
  },
  {
    title: "Scalable video production",
    desc: "Produce large volumes of high-quality video content at scale, reducing costs without sacrificing quality.",
    Icon: Users,
  },
  {
    title: "Optimized for performance",
    desc: "Final video delivery includes AI-assisted performance analysis and optimization for maximum reach and engagement.",
    Icon: DoorOpen,
  },
];

export default function AIVideoVFXWhyDTS() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 xl:py-24 2xl:py-28 bg-[#050507]">
      {/* ================= DTS LUX BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* neon + pink ambience (navbar match) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,63,164,0.12),transparent_55%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

        {/* soft glows */}
        <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-140px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      {/* ================= CONTAINER ================= */}
      <div className="relative mx-auto w-full px-4 md:px-6 lg:px-10 max-w-[92%] 2xl:max-w-[1600px] 3xl:max-w-[1800px]">
        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-300/80">
              Why Double Trouble Studio
            </p>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[46px]">
            We don’t just edit videos.
            <br />
            We craft cinematic experiences.
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            With AI-driven tools and cutting-edge VFX, we create videos that
            captivate, engage, and deliver results.
          </p>
        </motion.div>

        {/* ================= LAYOUT ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* LEFT: Anchor statement */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-8">
              {/* hover wash */}
              <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.16),rgba(255,63,164,0.14),rgba(212,175,55,0.10))]" />
              {/* readability veil */}
              <div className="pointer-events-none absolute inset-0 opacity-70 hover:opacity-60 transition-opacity duration-300 bg-[#050507]" />

              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300/70">
                  Our edge
                </p>

                <h3 className="mt-4 font-heading text-[26px] leading-tight text-white md:text-[30px]">
                  Seamless systems.
                  <br />
                  Stunning visuals.
                  <br />
                  Real-time impact.
                </h3>

                <p className="mt-4 text-[14px] leading-relaxed text-neutral-300/80">
                  With AI-driven workflows and creative VFX, we deliver stunning
                  videos faster and more efficiently, without sacrificing
                  quality.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/80">
                  <span>Built for next-gen video content</span>
                  <ArrowRight className="h-4 w-4" />
                </div>

                <div className="mt-6 h-px w-14 bg-white/10" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Pillars */}
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
                  {/* Icon chip */}
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.65)] group-hover:-translate-y-0.5">
                    <p.Icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 text-left">
                    {/* title with gradient on hover (text effect) */}
                    <h4 className="text-[15px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                      {p.title}
                    </h4>

                    <p className="mt-2 max-w-[560px] xl:max-w-[640px] text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                      {p.desc}
                    </p>

                    <div className="mt-4 h-px w-10 bg-white/10 group-hover:bg-dts-neon/60 transition" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.3}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-300/80">
            If you need fast, creative video production with real-time AI editing
            and stunning VFX, let’s talk.
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
