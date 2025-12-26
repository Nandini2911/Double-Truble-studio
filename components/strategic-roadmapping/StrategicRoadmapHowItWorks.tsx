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
    title: "Defining Your Vision",
    desc: "Clarifying the goals, purpose, and direction of your brand strategy to establish a clear roadmap for success.",
  },
  {
    step: "02",
    title: "Market & Competitive Analysis",
    desc: "Analyzing market trends, audience segments, and competitors to identify opportunities and challenges for growth.",
  },
  {
    step: "03",
    title: "Strategic Alignment",
    desc: "Aligning internal teams and stakeholders to ensure all efforts are directed towards common business goals.",
  },
  {
    step: "04",
    title: "Execution & Monitoring",
    desc: "Implementing the plan with actionable steps, while continuously monitoring progress and adjusting strategies as needed.",
  },
  {
    step: "05",
    title: "Review & Optimization",
    desc: "Evaluating the effectiveness of the strategy and making refinements to optimize future outcomes and performance.",
  },
];

export default function StrategicRoadmapHowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ================= BACKGROUND SYSTEM (DTS) ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,63,164,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.08),transparent_60%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-300/80">
              Our Approach
            </p>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] md:text-[44px]">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
    How we create and execute your strategy,
    <br />
    step by step.
  </span>
</h2>


          <div className="mx-auto mt-6 h-px w-28 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            A simple, structured process that transforms your business vision into action and ensures measurable success.
          </p>
        </motion.div>

        {/* ================= MOBILE: horizontal scroll cards ================= */}
        <div className="mt-14 flex gap-5 overflow-x-auto pb-3 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              custom={i * 0.06}
              className="group relative min-w-[84%] sm:min-w-[70%] rounded-2xl p-px"
            >
              {/* gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_55px_rgba(0,0,0,0.65)]">
                {/* hover wash + veil */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.18),rgba(255,63,164,0.14),rgba(212,175,55,0.10))]" />
                <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

                <div className="relative">
                  <p className="text-[12px] font-bold tracking-[0.22em] text-dts-neon/80">
                    {s.step}
                  </p>

                  <h3 className="mt-4 text-[16px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP: timeline ================= */}
        <div className="relative mt-14 hidden md:block">
          {/* rail */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10" />
          {/* neon rail glow */}
          <div className="pointer-events-none absolute left-5 top-0 h-full w-px opacity-0 md:opacity-100 bg-linear-to-b from-dts-neon/40 via-transparent to-dts-neon-pink/30 blur-[0.5px]" />

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
                {/* node */}
                <div className="absolute left-3.5 top-6 h-3 w-3 rounded-full bg-dts-neon/80 shadow-[0_0_22px_rgba(70,243,216,0.35)]" />
                <div className="pointer-events-none absolute left-2.5 top-5 h-5 w-5 rounded-full bg-dts-neon/15 blur-md" />

                <div className="group relative rounded-2xl p-px">
                  {/* gradient border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-7 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_55px_rgba(0,0,0,0.65)]">
                    {/* hover wash + veil */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.18),rgba(255,63,164,0.14),rgba(212,175,55,0.10))]" />
                    <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

                    <div className="relative">
                      <p className="text-[12px] font-bold tracking-[0.22em] text-dts-neon/80">
                        {s.step}
                      </p>

                      <h3 className="mt-3 text-[16px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                        {s.desc}
                      </p>
                    </div>

                    {/* bottom glow */}
                    <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          <p className="text-[13px] leading-relaxed text-neutral-300/75">
            Ready to develop your strategic roadmap with us?
          </p>

          <div className="mt-6">
            <Link
              href="/contact?service=strategic-roadmap"
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
              Discuss your strategy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
