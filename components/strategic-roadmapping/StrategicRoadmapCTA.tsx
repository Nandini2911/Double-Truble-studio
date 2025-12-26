"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function StrategicRoadmapCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative overflow-hidden w-full py-24 md:py-32 lg:py-40 bg-[#050507]"
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* neon + pink ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,63,164,0.12),transparent_55%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        {/* floating glow */}
        <div className="absolute -top-40 inset-x-0 h-80 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)] opacity-40" />

        {/* bottom divider */}
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-300/80">
            Ready to scale your strategy
          </p>
        </div>

        {/* Heading */}
        <h2 className="mt-8 font-heading text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
    Let’s map out your success.
  </span>
</h2>

        {/* Gradient underline (navbar language) */}
        <div className="mx-auto mt-6 h-px w-28 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

        {/* Subtext */}
        <p className="mx-auto mt-8 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-300/85">
          A strategic roadmap is more than just a plan; it’s the blueprint for your
          brand’s future. Let’s build a strategy aligned with your vision, values,
          and growth objectives.
        </p>

        {/* Reassurance */}
        <p className="mt-4 text-[13px] text-neutral-400/80">
          Every roadmap is custom-tailored. No generic solutions. No shortcuts.
        </p>

        {/* ================= CTA BUTTONS ================= */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
            <Link
              href="/contact?service=strategic-roadmap"
              className="dts-animated-border inline-flex"
            >
              <span
                className="
                  inline-flex items-center justify-center
                  px-14 py-5 sm:px-16 sm:py-6
                  text-[14px] sm:text-[15px]
                  uppercase tracking-[0.22em] font-semibold
                  text-white
                "
              >
                Discuss Your Strategy
              </span>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <Link
            href="/contact?service=strategic-roadmap"
            className="
              inline-flex items-center justify-center
              rounded-full border border-white/12 bg-white/5
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
