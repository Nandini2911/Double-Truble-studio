"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ClipboardList,
  Sparkles,
  Star,
  CalendarHeart,
  Megaphone,
  Route,
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
    title: "PR, Media & Digital Marketing",
    desc: "Visibility, narratives, and digital momentum that protect brand reputation.",
    href: "/services/pr-media-digital-marketing",
    Icon: Megaphone,
  },
  {
    title: "Web Development & Marketing",
    desc: "High-end websites and digital ecosystems built to convert, scale, and perform.",
    href: "/services/web-development-marketing",
    Icon: Globe,
  },
  
  {
    title: "Strategic Road Map",
    desc: "Long-term brand, talent, and growth planning before scaling visibility.",
    href: "/services/strategic-roadmap",
    Icon: Route,
  },
];
export default function RelatedAIVideoVFXServices() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ================= DTS BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* neon ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,63,164,0.10),transparent_55%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

        {/* glows */}
        <div className="absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
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
              Related services
            </p>
          </div>

          <h2 className="mt-6 font-heading text-[30px] leading-tight tracking-[-0.02em] text-white md:text-[42px]">
            You may also need
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            AI Video Editing and VFX services work best when aligned with these specialized services.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
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
                className="group relative rounded-2xl p-px"
              >
                {/* gradient border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

                <Link
                  href={s.href}
                  className="relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-7 transition-all duration-300 group-hover:border-white/15 group-hover:-translate-y-0.5 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_22px_70px_rgba(0,0,0,0.70)]"
                >
                  {/* hover gradient wash */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.18),rgba(255,63,164,0.16),rgba(212,175,55,0.12))]" />

                  {/* dark veil for readability */}
                  <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

                  {/* bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-dts-neon/60 group-hover:bg-dts-neon/10 group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.16)] group-hover:-translate-y-0.5">
                        <Icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                      </div>

                      <span className="mt-1 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                        Service
                      </span>
                    </div>

                    {/* Title – gradient text on hover */}
                    <h3 className="mt-5 text-[15px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                      {s.desc}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/80 group-hover:text-dts-neon transition">
                      <span>View service</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <div className="mt-5 h-px w-10 bg-white/10 group-hover:bg-dts-neon/60 transition" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
