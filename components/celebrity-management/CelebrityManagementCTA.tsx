"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CelebrityManagementCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="
        relative overflow-hidden w-full
        py-24 md:py-32 lg:py-40
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

      {/* Top Glow */}
      <div
        className="
          pointer-events-none absolute inset-x-0 -top-40 h-72
          bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)]
          opacity-40
        "
      />

      {/* subtle blobs */}
      <div className="pointer-events-none absolute -bottom-56 left-[-140px] h-[520px] w-[520px] rounded-full bg-dts-gold/6 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-[-160px] h-[520px] w-[520px] rounded-full bg-dts-neon-pink/7 blur-3xl" />

      {/* Bottom Divider */}
      <div
        className="
          pointer-events-none absolute inset-x-12 bottom-0
          h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent
          opacity-80
        "
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Eyebrow */}
        <div className="flex justify-center">
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
            Ready when you are
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-6 font-heading
            text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px]
            leading-tight
            text-white
          "
        >
          Let’s make the right{" "}
          <span
            className="
              bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
              bg-clip-text text-transparent
              drop-shadow-[0_0_18px_rgba(70,243,216,0.20)]
            "
          >
            association.
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-200/80">
          Celebrity management isn’t about chasing names. It’s about fit, clarity, and clean
          execution — from shortlisting and commercials to delivery and closure.
        </p>

        {/* Reassurance */}
        <p className="mt-4 text-[13px] text-neutral-400/80">
          Every association is curated. No random picks. No rushed decisions.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
            <Link href="/contact?service=celebrity-management" className="dts-animated-border inline-block">
              <span
                className="
                  inline-flex items-center justify-center
                  px-14 py-5
                  sm:px-16 sm:py-6
                  text-[14px] sm:text-[15px]
                  uppercase tracking-[0.22em] font-semibold
                  text-dts-fog
                "
              >
                Discuss Your Requirements
              </span>
            </Link>
          </motion.div>

         
        </div>

        {/* micro line */}
        <p className="mt-10 text-[12px] uppercase tracking-[0.28em] text-neutral-500/80">
          Curated shortlists • Clean commercials • Smooth on-ground
        </p>
      </div>
    </motion.section>
  );
}
