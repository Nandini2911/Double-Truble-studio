"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function TeamPhilosophy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14 },
      show: (d = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: EASE, delay: d },
      }),
    }),
    []
  );

  const Section: any = mounted ? motion.section : "section";
  const Div: any = mounted ? motion.div : "div";

  return (
    <Section
      {...(mounted
        ? {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.18 },
            transition: { duration: 0.55, ease: EASE },
          }
        : {})}
      className="relative overflow-hidden w-full bg-[#050507]"
      suppressHydrationWarning
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* base glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,63,164,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.08),transparent_60%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        {/* top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        {/* bottom divider */}
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />

        {/* top glow (kept, premium) */}
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
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40">
        {/* Header (TOP CENTER) */}
        <Div
          {...(mounted
            ? {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
                variants: fadeUp,
              }
            : {})}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300/80">
                Double Trouble Studio • Philosophy
              </p>
            </div>
          </div>

          <h2 className="mt-6 font-heading text-[30px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            <span className="text-white">A collaborative approach</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold drop-shadow-[0_0_18px_rgba(70,243,216,0.35)]">
              to innovative solutions.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            We work like a unit — strategy, creativity, and execution in the same
            room — so every project feels calm, premium, and on-track.
          </p>
        </Div>

        {/* Body copy */}
        <Div
          {...(mounted
            ? {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.18 },
                variants: fadeUp,
                custom: 0.06,
              }
            : {})}
          className="mx-auto mt-10 max-w-4xl text-center"
        >
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-neutral-300/85">
            At Double Trouble Studio, we believe the best results come from
            working together — openly, fast, and with taste. Every challenge is
            approached with fresh eyes, strong systems, and the confidence to
            push boundaries when it matters.
          </p>

          <p className="mt-5 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-neutral-300/85">
            We value communication, creative freedom, and client-first execution.
            Each member brings their expertise — and together we build presence,
            trust, and outcomes that look as premium as they perform.
          </p>
        </Div>

        {/* Optional visual (clean + premium + responsive) */}
        <Div
          {...(mounted
            ? {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.12 },
                variants: fadeUp,
                custom: 0.1,
              }
            : {})}
          className="mx-auto mt-12 max-w-5xl"
        >
          

          <p className="mt-5 text-center text-[13px] text-neutral-400/80">
            A glimpse of our team collaborating to bring client visions to life.
          </p>
        </Div>
      </div>
    </Section>
  );
}
