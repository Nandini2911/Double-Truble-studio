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
      className="relative overflow-hidden w-full py-24 md:py-32 lg:py-40 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]"
    >
      {/* Top Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-72
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)]
        opacity-40"
      />

      {/* Bottom Divider */}
      <div
        className="pointer-events-none absolute inset-x-12 bottom-0 h-px
        bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Eyebrow */}
        <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
          Join our team or collaborate with us
        </p>

        {/* ===== GRADIENT HEADING ===== */}
        <h2
          className="
            mt-6 font-heading
            text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px]
            leading-tight tracking-[-0.02em]
            text-transparent bg-clip-text
            bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
            drop-shadow-[0_0_22px_rgba(70,243,216,0.35)]
          "
        >
          Let’s build amazing things together.
        </h2>

        {/* Accent underline */}
        <div className="mx-auto mt-5 h-px w-28 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-300/85">
          Whether you're looking to collaborate with our team or be part of it,
          we’re always open to passionate, driven individuals who want to make a difference.
        </p>

        {/* Reassurance */}
        <p className="mt-4 text-[13px] text-neutral-400/80">
          We value creativity, integrity, and collaboration. Let’s take your ideas to new heights.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
            <Link
              href="/contact?service=collaboration"
              className="dts-animated-border inline-block"
            >
              <span
                className="
                  inline-flex items-center justify-center
                  px-14 py-5 sm:px-16 sm:py-6
                  text-[14px] sm:text-[15px]
                  uppercase tracking-[0.22em] font-semibold
                  text-dts-fog
                "
              >
                Collaborate with Us
              </span>
            </Link>
          </motion.div>

          
        </div>
      </div>
    </motion.section>
  );
}
