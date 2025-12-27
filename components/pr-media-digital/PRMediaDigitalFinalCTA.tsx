// components/pr-media-digital/PRMediaDigitalFinalCTA.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PRMediaDigitalFinalCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative overflow-hidden w-full py-24 md:py-32 lg:py-40 dts-section"
    >
      {/* ===== DTS Background (same palette everywhere) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dts-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />

        {/* teal + pink + gold glows (controlled) */}
        <div className="absolute inset-0 opacity-[0.26] bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.14),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_80%_80%,rgba(255,200,92,0.12),transparent_60%)]" />

        {/* subtle top sheen */}
        <div className="absolute inset-x-0 -top-40 h-72 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)] opacity-35" />

        {/* dividers */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050507]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-10 max-w-[92%] 2xl:max-w-[1600px] min-[3000px]:max-w-[1800px]">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Sparkles size={14} className="text-white/70" />
            </span>
            <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-300">
              Final CTA
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-7 font-heading text-white text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight">
            Let’s Shape Your{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.14)]
              "
            >
              Presence.
            </span>
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-300/85">
            Thoughtful. Strategic. Premium. We build visibility that compounds —
            across PR, media, and digital — without chasing noise.
          </p>

          {/* Reassurance */}
          <p className="mt-4 text-[13px] text-neutral-400/80">
            Every engagement is custom-built. No templates. No shortcuts.
          </p>

          {/* Divider (DTS gradient) */}
          <div className="mx-auto mt-10 h-px w-[72%] max-w-[720px] bg-white/10" />
          <div className="mx-auto mt-0.5 h-px w-[72%] max-w-[720px] opacity-70 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.42),rgba(255,63,164,0.28),rgba(255,200,92,0.22),transparent)]" />

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary */}
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
              <Link
                href="/contact"
                className="dts-animated-border inline-block"
              >
                <span
                  className="
                    inline-flex items-center justify-center gap-2
                    px-14 py-5
                    sm:px-16 sm:py-6
                    text-[14px] sm:text-[15px]
                    uppercase tracking-[0.22em] font-semibold
                    text-dts-fog
                  "
                >
                  Book a Strategy Call
                  
                </span>
              </Link>
            </motion.div>

            {/* Secondary */}
           
          </div>

          <p className="mt-7 text-[12px] uppercase tracking-[0.28em] text-neutral-500">
            Double Trouble Studio
          </p>
        </div>
      </div>
    </motion.section>
  );
}
