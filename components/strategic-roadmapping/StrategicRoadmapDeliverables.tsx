"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Headset,
  ListChecks,
  FileText,
  MailCheck,
  Users2,
  ShieldAlert,
  ClipboardCheck,
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

const deliverables = [
  {
    title: "Dedicated Strategy Lead",
    desc: "One clear lead managing coordination so every decision aligns with the long-term vision of your brand’s strategy.",
    Icon: Headset,
    badge: "Popular",
    features: ["Single strategy lead", "Clear escalation chain", "Fast decision-making"],
  },
  {
    title: "Market Research & Insights",
    desc: "Comprehensive research into market trends, customer behavior, and competitor positioning to fuel your strategic decisions.",
    Icon: ListChecks,
    features: ["Comprehensive analysis", "Target audience segmentation", "Market insights for growth"],
  },
  {
    title: "Strategic Planning & Roadmap",
    desc: "A structured, actionable plan that outlines milestones, KPIs, and timelines to guide your team towards success.",
    Icon: FileText,
    features: ["Actionable roadmap", "Clear timelines & milestones", "Aligned with business goals"],
  },
  {
    title: "Stakeholder Coordination",
    desc: "Managing relationships and ensuring alignment between internal teams and external partners to drive strategic execution.",
    Icon: MailCheck,
    badge: "Most Requested",
    features: ["Internal team alignment", "Clear external communication", "Efficient project execution"],
  },
  {
    title: "Execution & Monitoring",
    desc: "Implementing the strategy with continuous monitoring and course correction to stay aligned with evolving market conditions.",
    Icon: Users2,
    features: ["Real-time progress tracking", "Adaptive strategy execution", "Continuous feedback loops"],
  },
  {
    title: "Risk Management & Mitigation",
    desc: "Identifying potential risks and implementing strategies to mitigate them, ensuring smooth execution of the roadmap.",
    Icon: ShieldAlert,
    features: ["Proactive risk assessment", "Contingency planning", "Market adaptation"],
  },
  {
    title: "Post-Execution Review & Optimization",
    desc: "Evaluating the success of your strategy through KPIs, performance metrics, and optimization plans for future strategies.",
    Icon: ClipboardCheck,
    features: ["KPI tracking", "Performance analysis", "Strategy optimization"],
  },
];

export default function StrategicRoadmapDeliverables() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* neon ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,63,164,0.10),transparent_55%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        {/* glows */}
        <div className="absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto w-full px-6 md:px-8 lg:px-10 max-w-[95%] 2xl:max-w-[2000px]">
        {/* Header */}
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
              What you get
            </p>
          </div>

          <h2 className="mt-6 font-heading text-[32px] md:text-[44px] leading-tight tracking-[-0.02em]">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
    Clear deliverables.
  </span>
  <br />
  <span className="text-white/90">
    No ambiguity.
  </span>
</h2>


          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            Tangible outputs, systems, and on-ground support — built to ensure your strategic roadmap is executed flawlessly.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 min-[3000px]:grid-cols-6">
          {deliverables.map((d, i) => {
            const Icon = d.Icon;

            return (
              <motion.div
                key={d.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.05}
                className={`group relative ${
                  i >= 5 ? "2xl:hidden min-[3000px]:block" : ""
                } ${i >= 6 ? "min-[3000px]:hidden" : ""}`}
              >
                {/* gradient border */}
                <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 transition-all duration-300 group-hover:border-white/15 group-hover:-translate-y-0.5 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_22px_70px_rgba(0,0,0,0.70)]">
                  {/* hover wash */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.18),rgba(255,63,164,0.14),rgba(212,175,55,0.10))]" />

                  {/* dark veil */}
                  <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

                  {d.badge && (
                    <span className="absolute right-5 top-5 rounded-full border border-dts-neon/35 bg-dts-neon/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-dts-neon/90">
                      {d.badge}
                    </span>
                  )}

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-dts-neon/60 group-hover:bg-dts-neon/10 group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_34px_rgba(70,243,216,0.14)]">
                      <Icon className="h-6 w-6 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    {/* Title – gradient text on hover */}
                    <h3 className="mt-6 text-[17px] font-semibold leading-snug text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                      {d.title}
                    </h3>

                    <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                      {d.desc}
                    </p>

                    <div className="mt-6 h-px w-full bg-white/10 group-hover:bg-dts-neon/35 transition" />

                    <ul className="mt-5 space-y-2.5">
                      {d.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-neutral-300/80"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dts-neon/70 shadow-[0_0_14px_rgba(70,243,216,0.25)]" />
                          <span className="transition-colors duration-300 group-hover:text-neutral-200">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                        Included
                      </span>

                      <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-dts-neon/80 group-hover:text-dts-neon transition">
                        Details <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                  {/* bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.25}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-300/80">
            You don’t just get “support.”
            <br />
            You get a system that protects direction, delivery, and reputation.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact?service=strategic-roadmap"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.22em] text-neutral-200 transition-all duration-300 hover:border-dts-neon/70 hover:shadow-[0_0_0_1px_rgba(70,243,216,0.30)]"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
