// components/pr-media-digital/PRMediaDigitalRelatedServices.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
   CalendarHeart,
   Globe,
  Star,
  ClipboardList,
  Route,
  Sparkles,
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

export const services = [
  {
    title: "Guest Management",
    desc: "RSVPs, segmentation, access logic, and calm, controlled entry for high-profile rooms.",
    href: "/services/guest-management",
    Icon: ClipboardList,
  },
  {
    title: "Celebrity Management",
    desc: "End-to-end talent sourcing, commercials, coordination, and clean execution.",
    href: "/services/celebrity-management",
    Icon: Star,
  },
  {
    title: "Events & Weddings",
    desc: "Luxury events and weddings with structured planning and seamless execution.",
    href: "/services/events-weddings",
    Icon: CalendarHeart,
  },
  {
    title: "Web Development & Marketing",
    desc: "High-end websites and digital ecosystems built to convert, scale, and perform.",
    href: "/services/web-development-marketing",
    Icon: Globe,
  },
  {
    title: "AI Video & VFX",
    desc: "AI-powered video ads, cinematic visuals, and fast-turnaround creative tech.",
    href: "/services/ai-video-vfx",
    Icon: Sparkles,
  },
  {
    title: "Strategic Road Map",
    desc: "Long-term brand, talent, and growth planning before scaling visibility.",
    href: "/services/strategic-roadmap",
    Icon: Route,
  },
];

export default function PRMediaDigitalRelatedServices() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(70,243,216,0.14)_0%,rgba(5,5,7,0.92)_60%,#050507_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        {/* premium extra glows (pink + gold like FAQ/CTA) */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.14),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.12),transparent_60%)]" />

        {/* soft blobs */}
        <div className="absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-90px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />

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
            Related services
          </p>

          <h2 className="mt-5 font-heading text-[30px] leading-tight tracking-[-0.02em] text-white md:text-[40px]">
            Pair it with the right support
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            PR and digital work best when your launches, guest flow, and
            high-profile moments are aligned under one direction.
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
                {/* outer hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.16),transparent_55%)]" />

                <Link
                  href={s.href}
                  className="
                    relative block h-full rounded-2xl
                    border border-white/10
                    bg-white/[0.03] backdrop-blur
                    p-6 md:p-7
                    transition-all duration-500
                    hover:border-dts-neon/55
                    hover:bg-white/[0.05]
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.20),0_22px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* ✅ Always-on card color (subtle) */}
                  <div
                    className={[
                      "pointer-events-none absolute inset-0 opacity-[0.42] transition-opacity duration-500",
                    
                    ].join(" ")}
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />

                  {/* top accent line */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r `}
                  />

                  {/* hover ring */}
                  <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.32),transparent_40%,rgba(255,63,164,0.14),rgba(216,184,115,0.14),rgba(70,243,216,0.22))]" />

                  {/* icon + label */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center
                        rounded-xl border border-white/10
                        bg-white/[0.04]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-500
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.16),0_10px_30px_rgba(70,243,216,0.14)]
                        group-hover:-translate-y-0.5
                      "
                    >
                      <Icon className="h-5 w-5 text-white/90 transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    <span className="mt-1 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                      Service
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-[15px] font-medium text-white">
                    {s.title}
                  </h3>

                  <p className="relative mt-3 text-[14px] leading-relaxed text-neutral-400 transition-colors duration-500 group-hover:text-neutral-300">
                    {s.desc}
                  </p>

                  <div className="relative mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/80 transition-colors duration-500 group-hover:text-dts-neon">
                    <span>View service</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </div>

                  {/* bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* bottom hairline */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-60 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.24),transparent)]" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
