"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function TeamPhilosophy() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE, delay: d },
    }),
  };

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative w-full overflow-hidden bg-[#050507]"
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
          className="
            absolute inset-0 opacity-[0.06]
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />

        {/* dividers */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-6 sm:inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />

        {/* top glow */}
        <div
          className="
            absolute inset-x-0 -top-32 h-52
            sm:-top-40 sm:h-64
            md:-top-52 md:h-72
            lg:-top-64 lg:h-80
            xl:-top-72 xl:h-96
            2xl:-top-96 2xl:h-[26rem]
            bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.28),transparent_65%)]
            opacity-40
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative mx-auto w-full
          max-w-6xl 2xl:max-w-[1500px]
          px-4 sm:px-6 lg:px-8 2xl:px-32
          py-14 sm:py-18 md:py-22 lg:py-28 xl:py-32 2xl:py-36
        "
      >
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] sm:tracking-[0.30em] text-neutral-300/80">
                Double Trouble Studio • Philosophy
              </p>
            </div>
          </div>

          <h2
            className="
              mt-5 sm:mt-6
              font-heading leading-tight tracking-[-0.02em] text-white
              text-[26px] sm:text-[30px]
              md:text-[40px] lg:text-[44px]
              2xl:text-[54px]
            "
          >
            <span className="text-white">A collaborative approach</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold drop-shadow-[0_0_18px_rgba(70,243,216,0.35)]">
              to innovative solutions.
            </span>
          </h2>

          <div className="mx-auto mt-4 sm:mt-5 h-px w-20 sm:w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-neutral-300/80">
            We work like a unit — strategy, creativity, and execution in the same
            room — so every project feels calm, premium, and on-track.
          </p>
        </motion.div>

        {/* Body copy */}
        <motion.div
          variants={fadeUp}
          custom={0.06}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.18 }}
          className="mx-auto mt-8 sm:mt-10 max-w-4xl text-center"
        >
          <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-neutral-300/85">
            At Double Trouble Studio, we believe the best results come from
            working together — openly, fast, and with taste. Every challenge is
            approached with fresh eyes, strong systems, and the confidence to
            push boundaries when it matters.
          </p>

          <p className="mt-4 sm:mt-5 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-neutral-300/85">
            We value communication, creative freedom, and client-first execution.
            Each member brings their expertise — and together we build presence,
            trust, and outcomes that look as premium as they perform.
          </p>
        </motion.div>

        {/* Optional visual block */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.12 }}
          className="mx-auto mt-10 sm:mt-12 max-w-5xl"
        >
          
           
            
       
        </motion.div>
      </div>
    </motion.section>
  );
}
