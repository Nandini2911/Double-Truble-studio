// components/celebrity-management/RelatedServices.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Star,
  Megaphone,
  Globe,
  Sparkles,
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

const services = [
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

export default function RelatedServices() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 dts-section">
      {/* ===== BACKGROUND (site-consistent) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dts-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        {/* DTS glows */}
        <div className="absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(70,243,216,0.18),transparent_65%)] blur-3xl opacity-70" />
        <div className="absolute -bottom-36 right-[-120px] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,63,164,0.12),transparent_65%)] blur-3xl opacity-65" />
        <div className="absolute -bottom-44 left-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,200,92,0.10),transparent_68%)] blur-3xl opacity-55" />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050507]" />
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
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-300">
              Related services
            </p>
          </div>

          <h2 className="mt-5 font-heading text-[30px] leading-tight tracking-[-0.02em] text-white md:text-[40px]">
            You may also{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.14)]
              "
            >
              need
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            Celebrity associations work best when event execution, guest flow,
            visibility, and long-term positioning are aligned.
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
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.16),transparent_55%)]" />

                <Link
                  href={s.href}
                  className="
                    relative block h-full rounded-2xl
                    border border-white/10
                    bg-white/3
                    p-6 md:p-7
                    transition-all duration-300
                    hover:border-dts-neon/55
                    hover:bg-white/5
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.22),0_22px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* ✅ Always-on DTS color combo inside each tile */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.52] bg-[radial-gradient(circle_at_18%_12%,rgba(70,243,216,0.14),transparent_58%)]" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.18] bg-[radial-gradient(circle_at_88%_18%,rgba(255,63,164,0.12),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.10] bg-[radial-gradient(circle_at_70%_92%,rgba(255,200,92,0.11),transparent_64%)]" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.22] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />

                  {/* top accent gradient line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-2xl opacity-70 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.45),rgba(255,63,164,0.35),rgba(255,200,92,0.28),transparent)]" />

                  {/* icon + label */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center
                        rounded-xl border border-white/10
                        bg-white/4
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

                  <h3 className="relative mt-5 text-[15px] font-medium text-white">
                    {s.title}
                  </h3>

                  <p className="relative mt-3 text-[14px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                    {s.desc}
                  </p>

                  <div className="relative mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/80 transition-colors duration-300 group-hover:text-dts-neon">
                    <span>View service</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
