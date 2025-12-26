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
    title: "Executive Leadership",
    desc: "C-suite executives needing clear, actionable strategies to guide the business towards long-term goals.",
    Icon: Crown,
    accent: "from-dts-neon/35 via-white/10 to-transparent",
  },
  {
    title: "Strategic Planners",
    desc: "Teams focused on aligning departmental goals with overall business objectives to drive growth and efficiency.",
    Icon: Sparkles,
    accent: "from-amber-400/25 via-white/10 to-transparent",
  },
  {
    title: "Corporate Teams",
    desc: "Departments and teams requiring structured processes and coordinated efforts for executing company strategies.",
    Icon: Briefcase,
    accent: "from-sky-400/25 via-white/10 to-transparent",
  },
  {
    title: "Founders & Entrepreneurs",
    desc: "Individuals and startups that need expert guidance in building, scaling, and sustaining their business vision.",
    Icon: HeartHandshake,
    accent: "from-rose-400/25 via-white/10 to-transparent",
  },
  {
    title: "Investors & Stakeholders",
    desc: "Investors seeking detailed, data-driven strategies to ensure optimal returns and sustainable growth.",
    Icon: ShieldCheck,
    accent: "from-emerald-400/25 via-white/10 to-transparent",
  },
  {
    title: "Consultants & Advisors",
    desc: "External partners providing specialized expertise in shaping and executing corporate strategies and initiatives.",
    Icon: Clapperboard,
    accent: "from-violet-400/25 via-white/10 to-transparent",
  },
];

export default function StrategicRoadmapWhoItsFor() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ===== BACKGROUND ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,63,56,0.32),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* ===== HEADER ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
            Who this is for
          </p>

          <h2 className="mt-5 font-heading text-[32px] leading-tight tracking-[-0.02em] md:text-[44px]">
  <span className="text-white">
    Built for teams
  </span>
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
    where strategy matters.
  </span>
</h2>


          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            If you need clarity, alignment, and a roadmap that leads to business growth, this is for you.
          </p>
        </motion.div>

        {/* ===== CARDS ===== */}
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
                {/* gradient border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

                {/* card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-7 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_70px_rgba(0,0,0,0.70)]">
                  {/* hover wash */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.18),rgba(255,63,164,0.14),rgba(216,184,115,0.10))]" />
                  {/* readability veil */}
                  <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

                  {/* top accent */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r ${a.accent}`} />

                  {/* content */}
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 transition-transform duration-300 group-hover:-translate-y-0.5">
                        <Icon className="h-5 w-5 text-white/90" />
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                        <span>Fit</span>
                        <span className="h-[3px] w-[3px] rounded-full bg-neutral-700" />
                        <span>Premium</span>
                      </div>
                    </div>

                    {/* title – gradient on hover */}
                    <h3 className="mt-5 text-[15px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                      {a.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                      {a.desc}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[13px] text-neutral-300/70">
                      <span className="transition-colors duration-300 group-hover:text-neutral-200">
                        See the setup
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== BOTTOM LINE ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.28}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-300/80">
            Not sure if you need strategic planning or a focused business roadmap?
            <br />
            We’ll recommend the right solution for your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
