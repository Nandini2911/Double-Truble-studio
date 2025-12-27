"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {Star,Sparkles, Globe, CalendarHeart, Megaphone, Route, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const services = [
  {
    title: "Celebrity Management",
    desc: "End-to-end talent sourcing, commercials, coordination, and clean execution.",
    href: "/services/celebrity-management",
    Icon: Star,
  },
  {
    title: "Events & Weddings",
    desc: "Luxury events and weddings with structured planning and seamless on-ground execution.",
    href: "/services/events-weddings",
    Icon: CalendarHeart,
    accent: "from-rose-400/22 via-white/10 to-transparent",
  },
  {
    title: "PR, Media & Digital Marketing",
    desc: "Visibility, narratives, and digital momentum that protect brand reputation.",
    href: "/services/pr-media-digital-marketing",
    Icon: Megaphone,
    accent: "from-sky-400/22 via-white/10 to-transparent",
  },
  {
    title: "Web Development & Marketing",
    desc: "High-end websites and digital ecosystems built to convert, scale, and perform.",
    href: "/services/web-development-marketing",
    Icon: Globe,
    accent: "from-emerald-400/22 via-white/10 to-transparent",
  },
  {
    title: "AI Video & VFX",
    desc: "AI-powered video ads, cinematic visuals, and fast-turnaround creative technology.",
    href: "/services/ai-video-vfx",
    Icon: Sparkles,
    accent: "from-fuchsia-400/22 via-white/10 to-transparent",
  },
  {
    title: "Strategic Road Map",
    desc: "Long-term brand and growth planning before scaling visibility and associations.",
    href: "/services/strategic-roadmap",
    Icon: Route,
    accent: "from-dts-neon/22 via-white/10 to-transparent",
  },
];

export default function RelatedServices() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* premium grid + extra glows (same family as navbar/hero) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:160px_160px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.14),transparent_60%)]" />

      {/* dividers */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />

      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-[-90px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 left-[-140px] h-[520px] w-[520px] rounded-full bg-dts-gold/6 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center">
            <span
              className="
                inline-flex items-center rounded-full
                border border-white/10 bg-white/5
                px-5 py-2
                text-[10px] sm:text-[11px]
                uppercase tracking-[0.28em]
                text-neutral-300/80
                backdrop-blur-xl
              "
            >
              Related services
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[30px] leading-tight tracking-[-0.02em] text-white md:text-[40px]">
            You may also need{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]
              "
            >
              these.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            Guest management often works best when aligned with these services.
          </p>
        </motion.div>

        {/* Tiles */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {services.map((s, i) => {
            const Icon = s.Icon;

            return (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.06}
                className="group relative"
              >
                {/* premium gradient glow ring */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.32),rgba(216,184,115,0.30))]
                    blur-[14px]
                  "
                />

                <Link
                  href={s.href}
                  className="
                    relative block h-full rounded-2xl
                    border border-white/10
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                    p-6 md:p-7
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-dts-neon/60
                    hover:bg-[linear-gradient(180deg,rgba(70,243,216,0.06),rgba(255,255,255,0.02))]
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.20),0_22px_70px_rgba(0,0,0,0.72)]
                  "
                >
                  {/* subtle sheen */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-2xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-700
                      bg-[radial-gradient(600px_circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]
                    "
                  />

                  {/* top accent strip (brand gradient) */}
                  <div
                    className="
                      pointer-events-none absolute inset-x-0 top-0 h-px rounded-2xl
                      bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                      opacity-70
                    "
                  />

                  {/* icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center
                        rounded-xl border border-white/10
                        bg-white/5
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-300
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.16)]
                        group-hover:-translate-y-0.5
                      "
                    >
                      <Icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <span className="mt-1 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                      Service
                    </span>
                  </div>

                  <h3 className="mt-5 text-[15px] font-medium text-white">{s.title}</h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/75 transition-colors duration-300 group-hover:text-neutral-200/90">
                    {s.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/80 transition-colors duration-300 group-hover:text-dts-neon">
                    <span>View service</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* divider */}
                  <div
                    className="
                      mt-6 h-px w-full bg-white/10
                      transition-all duration-500
                      group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                    "
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
