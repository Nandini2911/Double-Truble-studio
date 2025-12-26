"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function StrategicRoadmapHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative overflow-hidden w-full min-h-screen bg-[#050507]"
    >
      {/* ================= BACKGROUND SYSTEM (DTS) ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* base glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(255,63,164,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.10),transparent_60%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        {/* TOP GLOW (kept) */}
        <div
          className="
            absolute inset-x-0 -top-40 h-60
            sm:-top-48 sm:h-72
            md:-top-60 md:h-80
            lg:-top-72 lg:h-96
            xl:-top-88 xl:h-112
            2xl:-top-104 2xl:h-128
            bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.28),transparent_65%)]
            opacity-40
          "
        />

        {/* top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        {/* bottom divider (kept) */}
        <div
          className="
            absolute inset-x-12 bottom-0
            h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent
            opacity-70 xl:opacity-80 2xl:opacity-90
          "
        />
      </div>

      {/* ================= CENTERED CONTENT ================= */}
      <div className="relative grid min-h-screen place-items-center px-4">
        <div
          className="
            relative z-10 mx-auto text-center
            max-w-[90%]
            sm:max-w-2xl
            md:max-w-3xl
            lg:max-w-4xl
            xl:max-w-5xl
            2xl:max-w-6xl
            space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10
          "
        >
          {/* Eyebrow */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
              <p className="text-[10px] sm:text-[11px] md:text-[12px] 2xl:text-[13px] uppercase tracking-[0.26em] text-neutral-300/80">
                Services • Strategic Roadmap
              </p>
            </div>
          </div>

          <p className="text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.26em] text-neutral-400/80">
            Double Trouble Studio
          </p>

          {/* Main Heading */}
         <h1
  className="
    font-heading
    text-transparent bg-clip-text
    bg-linear-to-r
    from-dts-neon
    via-dts-neon-pink
    to-dts-gold

    text-[1.9rem]
    sm:text-[2.3rem]
    md:text-[2.7rem]
    lg:text-[3.2rem]
    xl:text-[3.6rem]
    2xl:text-[4.2rem]
    leading-tight
    max-w-4xl mx-auto
  "
>
  Strategy, mapped to success.
</h1>


          {/* Gradient underline (DTS signature) */}
          <div className="mx-auto h-px w-28 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          {/* Subcopy */}
          <p
            className="
              mx-auto max-w-xl
              text-[14px] sm:text-[15px] md:text-[16px]
              lg:text-[17px] xl:text-[18px] 2xl:text-[19px]
              text-neutral-300/90 leading-relaxed
            "
          >
            We define, align, and execute strategic roadmaps that guide your brand’s growth — turning insights into action, delivering results that matter.
          </p>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} className="pt-10">
            <Link
              href="/contact?service=strategic-roadmap"
              className="relative inline-block dts-animated-border"
            >
              {/* CTA readability veil */}
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black/35 opacity-0 transition-opacity duration-300 hover:opacity-100" />

              <span
                className="
                  relative inline-flex items-center justify-center
                  px-20 py-7
                  sm:px-24 sm:py-8
                  md:px-28 md:py-9
                  lg:px-32 lg:py-10
                  xl:px-40 xl:py-11
                  2xl:px-48 2xl:py-12
                  text-[18px]
                  sm:text-[20px]
                  md:text-[22px]
                  lg:text-[24px]
                  xl:text-[26px]
                  2xl:text-[30px]
                  uppercase tracking-[0.22em] font-semibold
                  text-white leading-none
                "
              >
                Start Your Strategy
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
