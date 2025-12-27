"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function WebDevelopmentCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative overflow-hidden w-full py-24 md:py-32 lg:py-40 bg-[#050507]"
    >
      {/* ===== COLOR ATMOSPHERE (NO BUTTON TOUCH) ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* teal base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.22),transparent_55%)]" />
        {/* pink accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,63,164,0.16),transparent_55%)]" />
        {/* gold warmth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.14),transparent_60%)]" />
      </div>

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:160px_160px]"
      />

      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.35),transparent_65%)] opacity-45" />

      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      {/* Bottom color divider */}
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)] opacity-90" />

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-neutral-300 backdrop-blur">
            Ready when you are
          </span>
        </div>

        {/* Heading with controlled color */}
        <h2 className="mt-6 font-heading text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight text-white">
          Let’s build your{" "}
          <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent">
            digital presence.
          </span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-300/90">
          A website isn’t just a digital address. It’s where perception, performance,
          and credibility meet — designed clean, fast, and conversion-ready.
        </p>

        {/* Reassurance */}
        <p className="mt-4 text-[13px] text-neutral-400">
          Custom-built. Structured. No templates.
        </p>

        {/* CTAs — UNCHANGED */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
            <Link
              href="/contact?service=web-development"
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
                Discuss Your Requirements
              </span>
            </Link>
          </motion.div>

         
        </div>

        {/* Bottom ambient glow */}
        <div className="pointer-events-none mx-auto mt-12 h-20 w-[70%] rounded-full bg-[radial-gradient(circle,rgba(70,243,216,0.18),transparent_70%)] blur-2xl" />
      </div>
    </motion.section>
  );
}
