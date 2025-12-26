// components/events-weddings/EventsWeddingsCTA.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function EventsWeddingsCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative overflow-hidden w-full py-24 md:py-32 lg:py-40 dts-section"
    >
      {/* ===== Background (same palette everywhere) ===== */}
      <div className="pointer-events-none absolute inset-0 dts-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />

      {/* Brand glow layers (teal + pink + gold) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.30] bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_80%_80%,rgba(255,200,92,0.12),transparent_60%)]" />

      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-72 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)] opacity-40" />

      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />

      {/* ===== Content ===== */}
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Eyebrow (pill) */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-neutral-300/80 backdrop-blur-xl">
            Ready when you are
          </span>
        </div>

        {/* Heading (with gradient keyword) */}
        <h2 className="mt-6 font-heading text-white text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight">
          Let’s plan this{" "}
          <span
            className="
              bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
              bg-clip-text text-transparent
              drop-shadow-[0_0_18px_rgba(70,243,216,0.16)]
            "
          >
            the right way.
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-300/85">
          Tell us what you’re planning — we’ll handle the details, the pressure,
          and the execution. From planning and partner alignment to on-ground
          control, we make the complexity invisible.
        </p>

        {/* Reassurance */}
        <p className="mt-4 text-[13px] text-neutral-400/80">
          Every event is custom-planned. No templates. No guesswork.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
            <Link
              href="/contact?service=events-weddings"
              className="dts-animated-border inline-flex rounded-2xl"
            >
              <span className="inline-flex items-center justify-center px-14 py-5 sm:px-16 sm:py-6 text-[14px] sm:text-[15px] uppercase tracking-[0.22em] font-semibold text-white">
                Discuss Your Event
              </span>
            </Link>
          </motion.div>

          {/* Secondary (teal + pink + gold ring on hover) */}
          <Link
            href="/book-a-call"
            className="
              inline-flex items-center justify-center
              rounded-2xl
              border border-white/12 bg-white/5
              px-10 py-4
              text-[12px] uppercase tracking-[0.26em] font-semibold
              text-neutral-200
              backdrop-blur-xl
              transition-all duration-300
              hover:border-white/18
              hover:bg-white/6
              hover:shadow-[0_0_0_1px_rgba(70,243,216,0.22),0_0_0_2px_rgba(255,63,164,0.12)]
            "
          >
            Book a Strategy Call
          </Link>
        </div>

        {/* Gradient divider line (always-on subtle, stronger on hover) */}
        <div className="mx-auto mt-10 h-px w-full max-w-2xl bg-white/10" />
        <div className="mx-auto mt-0.5 h-px w-full max-w-2xl opacity-55 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.28),rgba(255,63,164,0.18),rgba(255,200,92,0.16),transparent)]" />
      </div>
    </motion.section>
  );
}
