"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function GuestManagementCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: EASE }}
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
          opacity-45
        "
      />

      {/* Bottom Divider */}
      <div
        className="
          pointer-events-none absolute inset-x-12 bottom-0
          h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent
          opacity-85
        "
      />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        {/* Eyebrow chip */}
        <div className="flex items-center justify-center">
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
            mt-7 font-heading
            text-[32px] sm:text-[38px] md:text-[46px] lg:text-[54px]
            leading-[1.08]
            text-white
          "
        >
          Let’s plan this{" "}
          <span
            className="
              bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
              bg-clip-text text-transparent
              drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
            "
          >
            right.
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-200/85">
          Guest entry is not something you improvise on the day of the event. We help you plan,
          structure, and execute it calmly — before the room fills up.
        </p>

        {/* Reassurance (card) */}
        <div className="mx-auto mt-8 max-w-3xl">
          <div
            className="
              rounded-2xl border border-white/10 bg-white/5
              px-6 py-5
              backdrop-blur-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.55)]
            "
          >
            <p className="text-[13px] sm:text-[14px] text-neutral-300/85">
              Every project is custom-planned. No templates. No guesswork.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Link href="/contact?service=guest-management" className="dts-animated-border inline-flex rounded-2xl">
              <span
                className="
                  inline-flex items-center justify-center
                  px-14 py-5 sm:px-16 sm:py-6
                  text-[13px] sm:text-[14px]
                  uppercase tracking-[0.22em] font-semibold
                  text-white
                "
              >
                Discuss Your Requirements
              </span>
            </Link>
          </motion.div>

          
        </div>

        {/* micro-line */}
        <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-neutral-400/80">
          Calm entry. Clear access. Premium first impression.
        </p>
      </div>
    </motion.section>
  );
}
