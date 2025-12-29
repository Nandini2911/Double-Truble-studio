"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ✅ Put ALL logos here (32 items). Use correct file + label.
// (You can keep this as 1..32 if your filenames match.)
const LOGOS = Array.from({ length: 32 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/logos/${n}.webp`,
    alt: `Client ${n}`,
  };
});

export default function ClientPage() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(255,63,164,0.10),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
        py-16 sm:py-20 md:py-24 lg:py-32 2xl:py-36
      "
    >
      {/* BG system */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />
        <div
          className="
            absolute inset-0 opacity-[0.055]
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-6 sm:inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />
        <div className="absolute -top-28 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 sm:px-6 lg:px-8 2xl:px-32 text-center">
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-neutral-400">
          Our Esteemed Clients
        </p>

        {/* Heading */}
        <h2
          className="
            mt-5 sm:mt-6 font-heading leading-tight tracking-[-0.02em]
            text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] 2xl:text-[60px]
            text-transparent bg-clip-text
            bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
            drop-shadow-[0_0_20px_rgba(70,243,216,0.35)]
          "
        >
          Trusted by the Best
        </h2>

        <div className="mx-auto mt-4 sm:mt-5 h-px w-20 sm:w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

        {/* Subtext (helps LCP by being consistent + readable) */}
        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-neutral-300/85">
          We’re proud to collaborate with leading brands and visionary companies
          driving innovation across industries.
        </p>

        {/* ✅ Logos grid (Responsive + Performance) */}
        <div
          className="
            mt-10 sm:mt-12 lg:mt-14
            grid items-stretch justify-center
            gap-3 sm:gap-4 md:gap-5 lg:gap-6
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8
          "
        >
          {LOGOS.map((logo, index) => (
            <div
  key={logo.src}
  className="
    group relative
    rounded-2xl
    border border-black/10
    bg-white
    px-4 py-4 sm:px-5 sm:py-5
    transition
    hover:border-black/15
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
  "
>

              {/* subtle hover wash */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(70,243,216,0.10),rgba(255,63,164,0.08),rgba(216,184,115,0.06))]" />

              {/* consistent box height for no CLS */}
              <div className="relative flex h-14 sm:h-16 md:h-18 items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={160}
                  // ✅ responsive image selection
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 120px, 140px"
                  // ✅ prevents layout shift + keeps sizing stable
                  className="
                    h-12 sm:h-14 md:h-16 w-auto max-w-[140px]
                    object-contain
                    opacity-85 transition
                    group-hover:opacity-100
                  "
                  // ✅ only the first few should be eager (above the fold)
                  priority={index < 8}
                  loading={index < 8 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14 lg:mt-16 text-center">
          <p className="text-[13px] sm:text-[14px] leading-relaxed text-neutral-300/80">
            Want to see how we can create impact for your brand?
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="dts-animated-border inline-flex w-full sm:w-auto justify-center"
                aria-label="Work with Double Trouble Studio"
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
                  Work With Us
                </span>
              </Link>
            </motion.div>

            {/* optional secondary CTA */}
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact?service=collaboration"
                className="
                  inline-flex w-full sm:w-auto justify-center
                  rounded-full border border-white/12 bg-white/5
                  px-10 py-4 sm:px-14 sm:py-5
                  text-[12px] sm:text-[14px]
                  uppercase tracking-[0.22em] font-semibold
                  text-neutral-200
                  transition hover:bg-white/10 hover:border-white/18
                "
                aria-label="Start a collaboration"
              >
                Collaborate
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
