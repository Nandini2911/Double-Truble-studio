"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CelebrityManagementHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative overflow-hidden w-full
        min-h-[110vh] md:min-h-[120vh] 2xl:min-h-[130vh]
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
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

      {/* ===== TOP GLOW ===== */}
      <div
        className="
          pointer-events-none absolute inset-x-0 -top-40 h-60
          sm:-top-48 sm:h-72
          md:-top-60 md:h-80
          lg:-top-72 lg:h-96
          xl:-top-88 xl:h-112
          2xl:-top-104 2xl:h-128
          bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.28),transparent_65%)]
          opacity-40
        "
      />

      {/* extra cinematic blobs */}
      <div className="pointer-events-none absolute -bottom-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-dts-gold/6 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 right-[-140px] h-[520px] w-[520px] rounded-full bg-dts-neon-pink/7 blur-3xl" />

      {/* ===== BOTTOM DIVIDER ===== */}
      <div
        className="
          pointer-events-none absolute inset-x-12 bottom-0
          h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent
          opacity-70 xl:opacity-80 2xl:opacity-90
        "
      />

      {/* ===== CENTERED CONTENT ===== */}
      <div className="relative grid min-h-[110vh] md:min-h-[120vh] 2xl:min-h-[130vh] place-items-center px-4">
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
            <span
              className="
                inline-flex items-center rounded-full
                border border-white/10 bg-white/5
                px-5 py-2
                text-[10px] sm:text-[11px] md:text-[12px]
                uppercase tracking-[0.26em]
                text-neutral-300/80
                backdrop-blur-xl
              "
            >
              Services • Celebrity Management
            </span>
          </div>

          <p className="text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.26em] text-neutral-500/90">
            Double Trouble Studio
          </p>

          {/* Main Heading */}
          <h1
            className="
              font-heading text-dts-fog
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
            Stars on stage.
            <br />
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
              "
            >
              We handle the rest.
            </span>
          </h1>

          {/* Subcopy */}
          <p
            className="
              mx-auto max-w-xl
              text-[14px] sm:text-[15px] md:text-[16px]
              lg:text-[17px] xl:text-[18px] 2xl:text-[19px]
              text-neutral-200/80 leading-relaxed
            "
          >
            We manage celebrity associations end-to-end — shortlisting, fees, availability,
            contracts, and on-ground coordination — so every appearance feels premium, aligned, and
            effortless.
          </p>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} className="pt-10">
            <Link href="/contact?service=celebrity-management" className="dts-animated-border inline-block">
              <span
                className="
                  inline-flex items-center justify-center
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
                  text-dts-fog leading-none
                "
              >
                Start Project
              </span>
            </Link>
          </motion.div>

          {/* micro reassurance */}
          <p className="pt-2 text-[12px] uppercase tracking-[0.28em] text-neutral-500/80">
            Discreet • Structured • On-ground Ready
          </p>
        </div>
      </div>
    </motion.section>
  );
}
