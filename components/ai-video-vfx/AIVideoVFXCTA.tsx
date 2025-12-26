"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function AIVideoVFXCTA() {
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
      {/* ===== TEXTURE + CINEMATIC COLOR LAYERS ===== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:180px_180px]"
      />

      {/* Neon / Pink / Gold ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,63,164,0.14),transparent_55%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_80%,rgba(216,184,115,0.12),transparent_60%)] opacity-60" />

      {/* ===== TOP GLOW ===== */}
      <div
        className="
          pointer-events-none absolute inset-x-0 -top-40 h-72
          bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.32),transparent_65%)]
          opacity-45
        "
      />

      {/* ===== BOTTOM DIVIDER ===== */}
      <div
        className="
          pointer-events-none absolute inset-x-12 bottom-0
          h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent
          opacity-85
        "
      />

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Eyebrow */}
        <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
          Ready to transform your visuals?
        </p>

        {/* Heading */}
        <h2
          className="
            mt-6 font-heading text-dts-fog
            text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px]
            leading-tight
          "
        >
          Let’s create
          <span
            className="
              bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
              bg-clip-text text-transparent
              drop-shadow-[0_0_20px_rgba(70,243,216,0.22)]
            "
          >
            {" "}
            cinematic magic.
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-300/85">
          Whether it’s AI-powered video editing, breathtaking VFX, or high-impact motion
          graphics — we translate ideas into visuals that command attention.
        </p>

        {/* Reassurance */}
        <p className="mt-4 text-[13px] text-neutral-400/80">
          Precision-led execution. No templates. No shortcuts.
        </p>

        {/* ===== CTAs (UNCHANGED) ===== */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
            <Link
              href="/contact?service=ai-video-vfx"
              className="dts-animated-border inline-block"
            >
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
                Discuss Your Vision
              </span>
            </Link>
          </motion.div>

          <Link
            href="/contact?service=ai-video-vfx"
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-white/12
              bg-white/5
              px-10 py-4
              text-[12px] uppercase tracking-[0.26em] font-semibold
              text-neutral-200
              transition-all duration-300
              hover:border-dts-neon/70
              hover:shadow-[0_0_0_1px_rgba(70,243,216,0.30)]
            "
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
