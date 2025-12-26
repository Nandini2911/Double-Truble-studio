// components/pr-media-digital/PRMediaDigitalHero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Camera,
  Mic2,
  Megaphone,
  Newspaper,
  Video,
  BarChart3,
  Globe,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type FloatIcon = {
  Icon: React.ElementType;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
  rotate: number;
};

const FLOAT_ICONS: FloatIcon[] = [
  { Icon: Smartphone, top: "18%", left: "10%", size: 22, delay: 0, duration: 9, driftX: 18, driftY: -16, rotate: 10 },
  { Icon: Laptop, top: "26%", left: "82%", size: 26, delay: 0.6, duration: 11, driftX: -22, driftY: 18, rotate: -12 },
  { Icon: Camera, top: "58%", left: "12%", size: 24, delay: 1.1, duration: 10, driftX: 16, driftY: 14, rotate: 14 },
  { Icon: Mic2, top: "64%", left: "84%", size: 24, delay: 1.6, duration: 12, driftX: -18, driftY: -14, rotate: -10 },
  { Icon: Megaphone, top: "40%", left: "6%", size: 22, delay: 0.9, duration: 13, driftX: 14, driftY: 10, rotate: 8 },
  { Icon: Newspaper, top: "42%", left: "92%", size: 22, delay: 1.3, duration: 14, driftX: -14, driftY: 12, rotate: -8 },
  { Icon: Video, top: "14%", left: "56%", size: 22, delay: 0.4, duration: 12, driftX: 12, driftY: 18, rotate: 9 },
  { Icon: BarChart3, top: "72%", left: "52%", size: 22, delay: 1.9, duration: 15, driftX: -12, driftY: -16, rotate: -9 },
  { Icon: Globe, top: "30%", left: "52%", size: 20, delay: 2.2, duration: 16, driftX: 10, driftY: -12, rotate: 6 },
];

function FloatingIconLayer() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {FLOAT_ICONS.map(({ Icon, top, left, size, delay, duration, driftX, driftY, rotate }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top, left }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.34, 0.22, 0.34],
            x: [0, driftX, 0, -driftX, 0],
            y: [0, driftY, 0, -driftY, 0],
            rotate: [0, rotate, 0, -rotate, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* DTS glow halo */}
            <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(70,243,216,0.12),transparent_60%)] blur-2xl" />

            {/* icon glass chip */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <Icon
                size={size}
                className="text-white/70 drop-shadow-[0_0_14px_rgba(70,243,216,0.12)]"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function PRMediaDigitalHero() {
  return (
    <section
      className="
        relative overflow-hidden
        px-4 sm:px-6 lg:px-8
        min-h-[100vh] md:min-h-[110vh] 2xl:min-h-[120vh]
        pt-40 pb-32 md:pt-52 md:pb-44
        dts-section
      "
    >
      {/* ===== DTS BASE ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* your global grid helper */}
        <div className="absolute inset-0 dts-grid" />

        {/* controlled vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.62)_100%)]" />

        {/* brand glows (teal + pink + gold) */}
        <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_18%_12%,rgba(255,63,164,0.16),transparent_58%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_82%_78%,rgba(255,200,92,0.12),transparent_60%)]" />

        {/* top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#050507]" />
      </div>

      {/* CINEMATIC MOVING GLOWS (kept, but tuned to palette) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-[38%] left-1/2 h-[860px] w-[1400px] -translate-x-1/2 rounded-full blur-[150px] opacity-75"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(70,243,216,0.20), transparent 60%)",
        }}
        animate={{ rotate: [0, 10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-44%] right-[-22%] h-[760px] w-[760px] rounded-full blur-[150px] opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,63,164,0.10), transparent 65%)",
        }}
        animate={{ y: [0, -44, 0], x: [0, -22, 0] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      />

      {/* MOVING ICONS LAYER */}
      <FloatingIconLayer />

      {/* SWEEP LINES (same, but softer) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-px w-[360px] bg-gradient-to-r from-transparent via-white/16 to-transparent"
          style={{ top: `${16 + i * 12}%`, left: i % 2 === 0 ? "-28%" : "120%" }}
          animate={{
            x: i % 2 === 0 ? ["0%", "175%"] : ["0%", "-175%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 16 + i * 2,
            ease: "linear",
            repeat: Infinity,
            delay: i * 1.05,
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl items-center 2xl:max-w-[1500px]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl text-center"
        >
          {/* Eyebrow chips like your other hero */}
          <motion.div variants={item} className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-neutral-300/85 backdrop-blur-xl">
              PR • Media • Digital Marketing
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-neutral-300/70 backdrop-blur-xl">
              Double Trouble Studio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="
              mt-10 font-heading text-3xl leading-[1.02] text-white
              sm:text-5xl md:text-5xl lg:text-5xl
            "
          >
            Visibility That Commands{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.14)]
              "
            >
              Attention
            </span>
            <br />
            <span className="text-white/85">— And Trust.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-3xl text-[16px] leading-relaxed text-neutral-300 sm:text-[17px] md:text-[18px]"
          >
            Strategic PR, media positioning, and digital storytelling for brands,
            founders, and public figures who need visibility with structure, credibility,
            and control — not short-lived attention.
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-3xl text-[14px] leading-relaxed text-neutral-400 md:text-[15px]"
          >
            Every narrative is intentional. Every placement is earned. Every digital move
            supports long-term brand perception.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-14 flex flex-col justify-center gap-4 sm:flex-row"
          >
            {/* Primary = your DTS animated border */}
            <Link href="/book-a-call" className="dts-animated-border inline-flex">
              <span
                className="
                  inline-flex items-center justify-center gap-2
                  px-12 py-5 sm:px-14
                  text-[12px] sm:text-[13px]
                  uppercase tracking-[0.22em] font-semibold
                  text-dts-fog
                "
              >
                Book a Strategy Call
                <span className="inline-block h-[6px] w-[6px] rounded-full bg-dts-neon/80" />
              </span>
            </Link>

            {/* Secondary = glass + neon underline on hover */}
            <Link
              href="/contact?service=pr-media-digital"
              className="
                group relative inline-flex items-center justify-center
                rounded-2xl px-10 py-5
                text-[12px] sm:text-[13px] font-semibold
                uppercase tracking-[0.22em]
                text-white
                border border-white/12 bg-white/5 backdrop-blur-xl
                transition-all duration-300
                hover:border-dts-neon/60 hover:bg-white/7
              "
            >
              <span className="relative">Discuss Your Requirements</span>
              <span
                className="
                  pointer-events-none absolute left-6 right-6 -bottom-1 h-px
                  bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                  shadow-[0_0_12px_rgba(70,243,216,0.55)]
                  opacity-0 group-hover:opacity-100
                  transition
                "
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
