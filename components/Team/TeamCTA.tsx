"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function TeamCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
        py-16 sm:py-20 md:py-24 lg:py-32 2xl:py-36
      "
    >
      {/* Top Glow */}
      <div
        className="
          pointer-events-none absolute inset-x-0
          -top-28 h-56
          sm:-top-36 sm:h-64
          md:-top-44 md:h-72
          lg:-top-52 lg:h-80
          2xl:-top-72 2xl:h-96
          bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)]
          opacity-40
        "
      />

      {/* Bottom Divider */}
      <div
        className="
          pointer-events-none absolute bottom-0 h-px
          inset-x-6 sm:inset-x-12
          bg-linear-to-r from-transparent via-dts-neon/40 to-transparent
          opacity-80
        "
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-neutral-400">
          Join our team or collaborate with us
        </p>

        {/* Heading */}
        <h2
          className="
            mt-5 sm:mt-6 font-heading leading-tight tracking-[-0.02em]
            text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] 2xl:text-[60px]
            text-transparent bg-clip-text
            bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
            drop-shadow-[0_0_22px_rgba(70,243,216,0.35)]
          "
        >
          Let’s build amazing things together.
        </h2>

        {/* Accent underline */}
        <div className="mx-auto mt-4 sm:mt-5 h-px w-20 sm:w-28 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

        {/* Subtext */}
        <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-neutral-300/85">
          Whether you're looking to collaborate with our team or be part of it, we’re always open to
          passionate, driven individuals who want to make a difference.
        </p>

        {/* Reassurance */}
        <p className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] text-neutral-400/80">
          We value creativity, integrity, and collaboration. Let’s take your ideas to new heights.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
            <Link
              href="/contact?service=collaboration"
              className="dts-animated-border inline-flex w-full sm:w-auto justify-center"
            >
              <span
                className="
                  inline-flex items-center justify-center
                  w-full sm:w-auto
                  px-10 py-4 sm:px-14 sm:py-5
                  text-[12px] sm:text-[14px]
                  uppercase tracking-[0.22em] font-semibold
                  text-dts-fog
                "
              >
                Collaborate with Us
              </span>
            </Link>
          </motion.div>

          {/* Secondary CTA (optional but nice) */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
            <Link
              href="/contact?service=careers"
              className="
                inline-flex w-full sm:w-auto justify-center
                rounded-full border border-white/10 bg-white/5
                px-10 py-4 sm:px-14 sm:py-5
                text-[12px] sm:text-[14px]
                uppercase tracking-[0.22em] font-semibold
                text-neutral-200
                transition hover:bg-white/10 hover:border-white/15
              "
            >
              Careers
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
