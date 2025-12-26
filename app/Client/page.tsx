"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ClientPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE }}
      className="relative overflow-hidden w-full py-24 md:py-32 lg:py-40
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]"
    >
      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-72
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)]
        opacity-40"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        {/* Eyebrow */}
        <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
          Our Esteemed Clients
        </p>

        {/* Gradient Heading */}
        <h2
          className="
            mt-6 font-heading
            text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px]
            leading-tight tracking-[-0.02em]
            text-transparent bg-clip-text
            bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
            drop-shadow-[0_0_20px_rgba(70,243,216,0.35)]
          "
        >
          Trusted by the Best
        </h2>

        {/* Accent line */}
        <div className="mx-auto mt-5 h-px w-24
          bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
          shadow-[0_0_18px_rgba(70,243,216,0.55)]"
        />

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px]
          leading-relaxed text-neutral-300/85">
          We’re proud to collaborate with leading brands and visionary companies
          driving innovation across industries.
        </p>

        {/* Logos Grid (NO motion here) */}
        <div
          className="
            mt-14 grid gap-8 items-center justify-center
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4
            lg:grid-cols-6 xl:grid-cols-8
          "
        >
          {Array.from({ length: 32 }).map((_, index) => (
            <div
              key={index}
              className="
                flex items-center justify-center
                rounded-xl bg-white/90 p-4
                transition-transform duration-300
                hover:scale-105
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
              "
            >
              <img
                src={`/logos/${index + 1}.png`}
                alt={`Client ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-20 w-auto max-w-full object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
<div className="mt-20 text-center">
  <p className="text-[14px] leading-relaxed text-neutral-300/80">
    Want to see how we can create impact for your brand?
  </p>

  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
    {/* Primary CTA */}
    <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
      <a href="/contact" className="dts-animated-border inline-block">
        <span
          className="
            inline-flex items-center justify-center
            px-14 py-5 sm:px-16 sm:py-6
            text-[14px] sm:text-[15px]
            uppercase tracking-[0.22em] font-semibold
            text-dts-fog
          "
        >
          Work With Us
        </span>
      </a>
    </motion.div>

    {/* Secondary CTA */}
    <a
      href="/services"
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
      Explore Services
    </a>
  </div>
</div>

    </motion.section>
  );
}
