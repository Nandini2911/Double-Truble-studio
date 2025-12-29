"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function TeamCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(255,63,164,0.10),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
        py-16 sm:py-20 md:py-24 lg:py-32 2xl:py-36
      "
    >
      {/* BG System */}
      <div className="pointer-events-none absolute inset-0">
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div
          className="
            absolute inset-0 opacity-[0.055]
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />

        {/* top glow */}
        <div
          className="
            absolute inset-x-0 -top-28 h-56
            sm:-top-36 sm:h-64
            md:-top-44 md:h-72
            lg:-top-52 lg:h-80
            2xl:-top-72 2xl:h-96
            bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.30),transparent_65%)]
            opacity-35
          "
        />

        {/* soft blobs */}
        <div className="absolute -bottom-28 left-1/2 h-64 w-[420px] sm:h-72 sm:w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -top-24 right-[-140px] h-72 w-72 sm:h-80 sm:w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />

        {/* dividers */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute bottom-0 h-px inset-x-6 sm:inset-x-12 bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-dts-neon" />
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] sm:tracking-[0.32em] text-neutral-300/80">
              Join our team or collaborate with us
            </p>
          </span>
        </div>

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
          Whether you're looking to collaborate with our team or be part of it,
          we’re always open to passionate, driven individuals who want to make a
          difference.
        </p>

        {/* Reassurance */}
        <p className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] text-neutral-300/70">
          We value creativity, integrity, and collaboration — with calm,
          premium execution.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact?service=collaboration"
              className="dts-animated-border inline-flex w-full sm:w-auto justify-center"
              aria-label="Collaborate with Double Trouble Studio"
            >
              <span
                className="
                  inline-flex items-center justify-center gap-2
                  w-full sm:w-auto
                  px-10 py-4 sm:px-14 sm:py-5
                  text-[12px] sm:text-[14px]
                  uppercase tracking-[0.22em] font-semibold
                  text-dts-fog
                "
              >
                Collaborate with Us
                <ArrowRight className="h-4 w-4 opacity-90" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            
          </motion.div>
        </div>

        {/* tiny trust line (helps LCP: keeps text consistent & premium) */}
        <p className="mt-6 text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-neutral-400/80">
          Grow • Glow • Get noticed
        </p>
      </div>
    </motion.section>
  );
}
