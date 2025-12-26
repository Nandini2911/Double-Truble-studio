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
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const audiences = [
  {
    title: "Luxury Brands & High-End Products",
    desc: "Visually striking ads and creative storytelling to showcase your premium offerings using advanced AI and VFX.",
    Icon: Sparkles,
  },
  {
    title: "Celebrity Endorsements & Campaigns",
    desc: "AI-driven video edits and VFX for celebrity-driven campaigns that demand premium quality and seamless integration.",
    Icon: Crown,
  },
  {
    title: "Corporate Marketing & Advertising",
    desc: "Delivering professional-grade visuals for corporate content with speed and consistency using AI and VFX technologies.",
    Icon: Briefcase,
  },
  {
    title: "Fashion & Luxury Events",
    desc: "High-end visual storytelling and motion graphics for fashion shows, launches, and exclusive events.",
    Icon: HeartHandshake,
  },
  {
    title: "Founders & Influencers",
    desc: "Creating impactful video content for founders and influencers, leveraging AI to enhance their message with style.",
    Icon: ShieldCheck,
  },
  {
    title: "Agencies & Creative Teams",
    desc: "A trusted partner to integrate into your video production process, using AI and VFX for quick turnarounds and high-quality results.",
    Icon: Clapperboard,
  },
];

export default function AIVideoVFXWhoItsFor() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ================= DTS LUX BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* neon + pink ambience (match navbar) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,63,164,0.12),transparent_55%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

        {/* soft blobs */}
        <div className="absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
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
              Who this is for
            </p>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[46px]">
            Built for brands
            <br />
            looking to elevate with AI & VFX.
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            Whether it's a high-end brand or a celebrity campaign, this is the AI-powered solution to elevate your video
            content.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {audiences.map((a, i) => {
            const Icon = a.Icon;

            return (
              <motion.div
                key={a.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.05}
                className="group relative rounded-2xl p-px"
              >
                {/* Neon gradient border (hover) */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-7 transition-all duration-300 group-hover:border-white/15 group-hover:-translate-y-0.5 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_70px_rgba(0,0,0,0.70)]">
                  {/* Pretty hover wash */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.18),rgba(255,63,164,0.16),rgba(212,175,55,0.12))]" />

                  {/* Dark veil (readability fix) */}
                  <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

                  {/* Top accent hairline */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

                  {/* Bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      {/* Icon */}
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 group-hover:-translate-y-0.5">
                        <Icon className="h-5 w-5 text-white/90" />
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                        <span>Fit</span>
                        <span className="h-[3px] w-[3px] rounded-full bg-neutral-700" />
                        <span>Premium</span>
                      </div>
                    </div>

                    {/* Title: gradient text on hover (text pe hi effect) */}
                    <h3 className="mt-5 text-[15px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                      {a.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                      {a.desc}
                    </p>

                    {/* Subtle CTA line */}
                    <div className="mt-5 flex items-center gap-2 text-[13px] text-neutral-300/70">
                      <span className="transition-colors duration-300 group-hover:text-neutral-200">
                        See the setup
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* micro underline */}
                    <div className="mt-5 h-px w-10 bg-white/10 group-hover:bg-dts-neon/60 transition" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM LINE ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.28}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-300/80">
            Not sure how AI and VFX fit into your next project?
            <br />
            We’ll help you find the perfect solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
