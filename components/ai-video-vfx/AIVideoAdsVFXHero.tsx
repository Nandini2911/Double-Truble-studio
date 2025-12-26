"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function AIVideoAdsVFXHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="
        relative overflow-hidden w-full min-h-screen
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* Subtle grid + noise (premium texture) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:160px_160px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_18%_12%,rgba(255,63,164,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_82%_82%,rgba(216,184,115,0.12),transparent_60%)]" />

      {/* Top glow */}
      <div
        className="
          pointer-events-none absolute inset-x-0 -top-40 h-60
          sm:-top-48 sm:h-72
          md:-top-60 md:h-80
          lg:-top-72 lg:h-96
          xl:-top-88 xl:h-112
          2xl:-top-104 2xl:h-128
          bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)]
          opacity-45
        "
      />

      {/* Bottom divider */}
      <div
        className="
          pointer-events-none absolute inset-x-10 bottom-0 h-px
          bg-linear-to-r from-transparent via-dts-neon/35 to-transparent
          opacity-80
        "
      />

      {/* Center content */}
      <div className="relative grid min-h-screen place-items-center px-4">
        <div
          className="
            relative z-10 mx-auto text-center
            max-w-[92%]
            sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl
            space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10
          "
        >
          {/* Eyebrow (chip style like Guest Management hero) */}
          <div className="flex items-center justify-center gap-2">
            <span
              className="
                inline-flex items-center rounded-full
                border border-white/10 bg-white/5
                px-4 py-2
                text-[10px] sm:text-[11px] md:text-[12px]
                uppercase tracking-[0.24em]
                text-neutral-300/80
                backdrop-blur-xl
              "
            >
              Services • AI Video Ads & VFX
            </span>
            <span
              className="
                hidden sm:inline-flex items-center rounded-full
                border border-white/10 bg-white/5
                px-4 py-2
                text-[10px] sm:text-[11px] md:text-[12px]
                uppercase tracking-[0.24em]
                text-neutral-300/70
                backdrop-blur-xl
              "
            >
              Double Trouble Studio
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              font-heading
              text-[2.05rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[4rem] 2xl:text-[4.6rem]
              leading-[1.06]
              max-w-5xl mx-auto
              text-white
            "
          >
            Innovation in Motion:
            <span className="relative inline-block">
              <span
                className="
                  bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
                "
              >
                {" "}
                AI Video Ads & VFX
              </span>
            </span>
          </h1>

          {/* Subcopy */}
          <p
            className="
              mx-auto max-w-2xl
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]
              text-neutral-200/85 leading-relaxed
            "
          >
            We blend artificial intelligence with cinematic craft to produce video ads and VFX
            that feel premium, move fast, and hold attention—without losing brand control.
          </p>

          {/* CTA (kept your dts-animated-border button style) */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="pt-10">
            <Link
              href="/contact?service=ai-video-ads-vfx"
              className="dts-animated-border inline-flex rounded-2xl"
            >
              <span
                className="
                  inline-flex items-center justify-center
                  px-14 py-6 sm:px-16 sm:py-7 md:px-20 md:py-8 lg:px-24 lg:py-9
                  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]
                  uppercase tracking-[0.22em] font-semibold
                  text-white
                "
              >
                Start Project
              </span>
            </Link>

            {/* tiny reassurance line */}
            <p className="mt-4 text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-neutral-400/80">
              Faster builds. Cleaner story. Premium finish.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
