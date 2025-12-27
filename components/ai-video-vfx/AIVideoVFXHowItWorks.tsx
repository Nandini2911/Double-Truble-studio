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
    title: "Understanding your vision",
    desc: "Identify brand goals, target audience, and the kind of story you want to tell with AI-powered video content.",
  },
  {
    step: "02",
    title: "Scripting & Planning",
    desc: "Develop a creative script that aligns with your brand’s narrative while leveraging AI's capabilities for seamless integration.",
  },
  {
    step: "03",
    title: "AI-Assisted Editing",
    desc: "Use advanced AI tools for editing at unprecedented speeds, ensuring every visual element is polished and on-brand.",
  },
  {
    step: "04",
    title: "VFX Creation",
    desc: "Incorporate cutting-edge visual effects that push the boundaries of creativity, from hyper-realistic compositing to surreal motion graphics.",
  },
  {
    step: "05",
    title: "Final Review & Enhancement",
    desc: "Fine-tune every detail, adjusting AI enhancements and VFX for maximum impact, ensuring a flawless final product.",
  },
];

export default function AIVideoVFXHowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background (same system language, more color depth) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,63,56,0.42)_0%,rgba(0,0,0,0.9)_60%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        {/* cinematic color washes */}
        <div className="absolute inset-0 opacity-[0.60] bg-[radial-gradient(circle_at_18%_22%,rgba(255,63,164,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.55] bg-[radial-gradient(circle_at_82%_78%,rgba(216,184,115,0.10),transparent_60%)]" />
        <div className="absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
            Our Approach
          </p>

          <h2 className="mt-5 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            How AI Video & VFX works,
            <br />
            step by step.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            A structured, innovative approach that seamlessly integrates AI and VFX to deliver stunning, high-quality videos.
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
              className="group relative min-w-[84%] sm:min-w-[70%] rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:border-dts-neon/70 hover:shadow-[0_0_0_1px_rgba(70,243,216,0.35),0_18px_55px_rgba(0,0,0,0.65)]"
            >
              {/* color wash on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(900px_circle_at_18%_0%,rgba(70,243,216,0.14),transparent_60%)]" />
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(700px_circle_at_88%_28%,rgba(255,63,164,0.10),transparent_62%)]" />
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(700px_circle_at_80%_110%,rgba(216,184,115,0.08),transparent_60%)]" />
              </div>

              <p className="relative text-[12px] font-bold tracking-[0.22em] text-dts-neon/80">
                {s.step}
              </p>

              <h3 className="relative mt-4 text-[16px] font-medium text-white">
                {s.title}
              </h3>

              <p className="relative mt-3 text-[14px] leading-relaxed text-neutral-400">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP: timeline */}
        <div className="relative mt-14 hidden md:block">
          {/* base line */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10" />
          {/* gradient line overlay (subtle) */}
          <div className="pointer-events-none absolute left-5 top-0 h-full w-px opacity-70 bg-linear-to-b from-dts-neon/40 via-white/10 to-transparent" />

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

                <div
                  className="
                    group relative rounded-2xl
                    border border-white/10
                    bg-white/3
                    p-6 md:p-7
                    transition-all duration-300
                    hover:border-dts-neon/70
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.35),0_18px_55px_rgba(0,0,0,0.65)]
                  "
                >
                  {/* color wash on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(1000px_circle_at_15%_0%,rgba(70,243,216,0.14),transparent_60%)]" />
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(820px_circle_at_88%_25%,rgba(255,63,164,0.10),transparent_62%)]" />
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(820px_circle_at_78%_120%,rgba(216,184,115,0.08),transparent_60%)]" />
                  </div>

                  <p className="relative text-[12px] font-bold tracking-[0.22em] text-dts-neon/80">
                    {s.step}
                  </p>

                  <h3 className="relative mt-3 text-[16px] font-medium text-white">
                    {s.title}
                  </h3>

                  <p className="relative mt-3 text-[14px] leading-relaxed text-neutral-400">
                    {s.desc}
                  </p>

                  {/* subtle bottom gradient divider on hover */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-transparent via-dts-neon/55 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Small CTA (optional, stays minimal) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.3}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[13px] leading-relaxed text-neutral-300/75">
            Ready to bring your vision to life with AI-powered videos and VFX?
          </p>

          <div className="mt-6">
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
