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
    title: "Discovery & Planning",
    desc: "We begin by understanding your goals, audience, and business requirements to create a tailored web strategy.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    desc: "Our design team creates intuitive, engaging designs, followed by prototypes to align with your brand identity.",
  },
  {
    step: "03",
    title: "Development & Testing",
    desc: "We develop your site with the latest technologies, ensuring high functionality and testing for seamless performance.",
  },
  {
    step: "04",
    title: "Launch & Optimization",
    desc: "Upon launch, we optimize for speed, SEO, and scalability to ensure your website performs at its best.",
  },
  {
    step: "05",
    title: "Post-launch Support",
    desc: "We provide ongoing support, maintenance, and updates to keep your website aligned with the latest trends and technologies.",
  },
];

function StepCard({
  s,
  i,
  className = "",
}: {
  s: (typeof steps)[number];
  i: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      custom={i * 0.06}
      className={`group relative ${className}`}
    >
      {/* Color bloom behind card (shows on hover) */}
      <div className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_18%_0%,rgba(70,243,216,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_88%_30%,rgba(255,63,164,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_50%_120%,rgba(216,184,115,0.14),transparent_60%)]" />

      {/* Card */}
      <div
        className="
          relative overflow-hidden rounded-3xl
          border border-white/10 bg-white/3
          p-6 md:p-7
          transition-all duration-500
          group-hover:border-dts-neon/60
          group-hover:bg-white/5
          group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_22px_70px_rgba(0,0,0,0.70)]
        "
      >
        {/* Top accent line (always visible, stronger on hover) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.55),rgba(255,63,164,0.38),rgba(216,184,115,0.34),transparent)] opacity-50 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Corner sheen */}
        <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_62%)]" />

        {/* Soft moving sheen */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 group-hover:opacity-100"
          animate={{ x: ["-20%", "220%"] }}
          transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.4 }}
        />

        {/* Colored orb per card */}
        <div
          className={[
            "pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full blur-3xl opacity-25 transition-opacity duration-500 group-hover:opacity-45",
            i % 3 === 0
              ? "bg-[rgba(70,243,216,0.35)]"
              : i % 3 === 1
              ? "bg-[rgba(255,63,164,0.30)]"
              : "bg-[rgba(216,184,115,0.28)]",
          ].join(" ")}
        />

        {/* Step chip */}
        <div className="inline-flex items-center gap-2">
          <span
            className="
              inline-flex items-center rounded-full
              border border-white/10 bg-white/5
              px-3 py-1.5
              text-[11px] font-bold uppercase tracking-[0.22em]
              text-dts-neon/85
              transition-all duration-300
              group-hover:border-dts-neon/60
              group-hover:bg-dts-neon/10
            "
          >
            {s.step}
          </span>

          <span className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            Step
          </span>
        </div>

        <h3 className="mt-4 text-[16px] font-medium text-white">
          {s.title}
        </h3>

        <p className="mt-3 text-[14px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
          {s.desc}
        </p>

        {/* Bottom divider */}
        <div className="mt-7 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />
      </div>
    </motion.div>
  );
}

export default function WebDevelopmentHowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,63,56,0.42)_0%,rgba(0,0,0,0.90)_60%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
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
            Our Process
          </p>

          <h2 className="mt-5 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            How We Build Your Perfect Website{" "}
            <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(70,243,216,0.16)]">
              step by step.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            A structured process built for clarity, speed, and premium execution — from first call to post-launch.
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll */}
        <div className="mt-14 flex gap-5 overflow-x-auto pb-3 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((s, i) => (
            <StepCard key={s.step} s={s} i={i} className="min-w-[84%] sm:min-w-[70%]" />
          ))}
        </div>

        {/* Desktop: Timeline */}
        <div className="relative mt-14 hidden md:block">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10" />
          {/* subtle color wash on line */}
          <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-[linear-gradient(to_bottom,rgba(70,243,216,0.25),transparent,rgba(255,63,164,0.16))] opacity-60" />

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
                {/* Dot */}
                <div className="absolute left-3.5 top-7 h-3 w-3 rounded-full bg-dts-neon/70 shadow-[0_0_22px_rgba(70,243,216,0.35)]" />
                {/* Dot glow ring */}
                <div className="pointer-events-none absolute left-2.5 top-6 h-5 w-5 rounded-full bg-dts-neon/15 blur-md" />

                <StepCard s={s} i={i} />
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
          <p className="text-[13px] leading-relaxed text-neutral-300/75">
            Ready to take your website to the next level?
          </p>

          <div className="mt-6">
            <Link
              href="/contact?service=web-development"
              className="
                inline-flex rounded-full
                border border-white/12 bg-white/5
                px-6 py-3
                text-[12px] font-bold uppercase tracking-[0.22em]
                text-neutral-200
                transition-all duration-300
                hover:border-dts-neon/70
                hover:shadow-[0_0_0_1px_rgba(70,243,216,0.30)]
              "
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
