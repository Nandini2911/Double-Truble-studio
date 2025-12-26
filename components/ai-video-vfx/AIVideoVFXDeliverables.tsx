"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    title: "Creative Strategy & Concept Development",
    desc: "Collaborating with you to define the brand’s vision and craft a story that resonates with your audience.",
    Icon: Headset,
    badge: "Popular",
    features: ["Brand alignment", "AI-driven concepts", "Creative innovation"],
    accent: "from-dts-neon/55 via-dts-neon-pink/25 to-dts-gold/35",
    glow: "rgba(70,243,216,0.20)",
  },
  {
    title: "AI Video Editing & Automation",
    desc: "Leveraging advanced AI tools to edit videos faster, with consistent quality, adapting to the latest trends.",
    Icon: ListChecks,
    features: ["Automated editing", "Real-time adjustments", "AI-powered enhancements"],
    accent: "from-sky-400/35 via-dts-neon/20 to-transparent",
    glow: "rgba(56,189,248,0.16)",
  },
  {
    title: "VFX Design & Motion Graphics",
    desc: "Creating captivating visual effects that push the boundaries of storytelling, from photorealistic to surreal.",
    Icon: FileText,
    features: ["Motion design", "Visual storytelling", "Custom effects"],
    accent: "from-dts-neon-pink/40 via-white/10 to-transparent",
    glow: "rgba(255,63,164,0.16)",
  },
  {
    title: "Multilingual Support & Voiceovers",
    desc: "Offering automated translations and multilingual voiceovers to ensure your message reaches a global audience.",
    Icon: MailCheck,
    badge: "Most requested",
    features: ["Voiceover integration", "Automated translations", "Multilingual outreach"],
    accent: "from-dts-gold/45 via-white/10 to-transparent",
    glow: "rgba(216,184,115,0.16)",
  },
  {
    title: "On-demand Adjustments & Revisions",
    desc: "Making real-time changes to meet the creative needs and ensure the project aligns perfectly with your vision.",
    Icon: Users2,
    features: ["Instant feedback", "Revision handling", "Seamless adjustments"],
    accent: "from-emerald-400/30 via-dts-neon/18 to-transparent",
    glow: "rgba(52,211,153,0.14)",
  },
  {
    title: "Post-Production Optimization",
    desc: "Enhancing final videos using AI for upscaling, color correction, and the addition of immersive sound design.",
    Icon: ShieldAlert,
    features: ["AI upscaling", "Color grading", "Immersive sound design"],
    accent: "from-violet-400/30 via-dts-neon-pink/18 to-transparent",
    glow: "rgba(167,139,250,0.14)",
  },
  {
    title: "Final Delivery & Performance Analysis",
    desc: "Delivering optimized content and providing insights into video performance to drive future success.",
    Icon: ClipboardCheck,
    features: ["Video analytics", "Performance insights", "Final revisions"],
    accent: "from-white/18 via-dts-neon/18 to-transparent",
    glow: "rgba(255,255,255,0.10)",
  },
];

export default function AIVideoVFXDeliverables() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 xl:py-24 2xl:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,63,56,0.38)_0%,rgba(0,0,0,0.92)_60%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-90px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        {/* extra cinematic color wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,63,164,0.12),transparent_55%)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(216,184,115,0.10),transparent_60%)] opacity-70" />
      </div>

      {/* Updated container */}
      <div className="relative mx-auto w-full px-6 md:px-8 lg:px-10 max-w-[95%] 2xl:max-w-[2000px] 3xl:max-w-[2400px]">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
            What you get
          </p>

          <h2 className="mt-5 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            Clear deliverables.
            <br />
            No ambiguity.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            Tangible outputs, systems, and on-ground support — built to bring your AI-driven video projects to life.
          </p>
        </motion.div>

        {/* Grid */}
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
                {/* Gradient border + glow (more visible) */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(900px circle at 25% 0%, ${d.glow}, transparent 55%)`,
                  }}
                />
                <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-px rounded-[28px] bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.16),rgba(216,184,115,0.16))] blur-[0.7px]" />
                  <div className="absolute inset-[1px] rounded-[27px] bg-black/40" />
                </div>

                {/* Card */}
                <div
                  className="
                    relative h-full rounded-[28px]
                    border border-white/10 bg-white/3 p-7
                    transition-all duration-300
                    hover:border-dts-neon/55 hover:bg-white/4.5
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.22),0_22px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* top accent line (per-card color) */}
                  <div className={`absolute inset-x-0 top-0 h-px rounded-[28px] bg-linear-to-r ${d.accent}`} />

                  {d.badge ? (
                    <div className="absolute right-5 top-5">
                      <span className="rounded-full border border-dts-neon/35 bg-dts-neon/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-dts-neon/90">
                        {d.badge}
                      </span>
                    </div>
                  ) : null}

                  {/* Icon */}
                  <div
                    className="
                      inline-flex h-14 w-14 items-center justify-center
                      rounded-2xl border border-white/10 bg-white/4
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                      transition-all duration-300
                      group-hover:border-dts-neon/60 group-hover:bg-dts-neon/10
                      group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_34px_rgba(70,243,216,0.18)]
                      group-hover:-translate-y-0.5
                    "
                  >
                    <Icon className="h-6 w-6 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <h3 className="mt-6 text-[17px] font-semibold leading-snug text-white">
                    {d.title}
                  </h3>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                    {d.desc}
                  </p>

                  <div className="mt-6 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-dts-neon/35" />

                  <ul className="mt-5 space-y-2.5">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-neutral-300/80">
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

                    <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-dts-neon/80 transition-all duration-300 group-hover:text-dts-neon">
                      Details{" "}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* bottom glow (stronger) */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/14 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
            You get a system that pushes the boundaries of video creativity.
          </p>
        </motion.div>

        {/* Optional link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact?service=ai-video-vfx"
            className="
              inline-flex items-center gap-2 rounded-full
              border border-white/12 bg-white/5
              px-7 py-3.5
              text-[12px] font-bold uppercase tracking-[0.22em]
              text-neutral-200
              transition-all duration-300
              hover:border-dts-neon/70
              hover:shadow-[0_0_0_1px_rgba(70,243,216,0.30)]
            "
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
