// components/about/AboutCTA.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative overflow-hidden w-full
        px-4 py-16
        sm:py-20
        md:py-24
        lg:py-32
        xl:py-36
        2xl:py-40
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
        text-center
      "
    >
      {/* Top Glow — Scales Up for 4K */}
      <div
        className="
          pointer-events-none absolute inset-x-0 -top-40 h-60
          sm:-top-48 sm:h-72
          md:-top-60 md:h-80
          lg:-top-72 lg:h-96
          xl:-top-88 xl:h-112
          2xl:-top-104 2xl:h-128
          bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.28),transparent_65%)]
          opacity-40
        "
      />

      {/* Bottom Divider */}
      <div
        className="
          pointer-events-none absolute inset-x-12 bottom-0
          h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent
          opacity-70
          xl:opacity-80
          2xl:opacity-90
        "
      />

      <div
        className="
          relative z-10 mx-auto
          max-w-[90%]
          sm:max-w-2xl
          md:max-w-3xl
          lg:max-w-4xl
          xl:max-w-5xl
          2xl:max-w-6xl
          space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10
        "
      >
        {/* Eyebrow */}
        <p
          className="
            text-[10px] sm:text-[11px] md:text-[12px]
            uppercase tracking-[0.26em]
            text-neutral-400/80
            2xl:text-[13px]
          "
        >
          Double Trouble Studio • About
        </p>

        {/* Main Heading */}
        <h1
          className="
            font-heading text-dts-fog
            text-[1.8rem]
            sm:text-[2.1rem]
            md:text-[2.5rem]
            lg:text-[3rem]
            xl:text-[3.4rem]
            2xl:text-[4rem]
            leading-tight
            max-w-4xl mx-auto
          "
        >
          Let’s Build Something Worth Talking About
        </h1>

        {/* Subcopy */}
        <p
          className="
            mx-auto max-w-xl
            text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]
            xl:text-[18px] 2xl:text-[19px]
            text-neutral-300/90 leading-relaxed
          "
        >
          We help brands grow sharper, louder and more intentional—across
          digital, PR, web, events and celebrity collaborations. If it carries
          your name, it should carry a story people remember.
        </p>

        {/* CTA – using dts-animated-border style */}
       <motion.div
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.94 }}
  className="pt-10"
>
  <Link
    href="/contact"
    className="
      dts-animated-border
      inline-block
    "
  >
    <span
      className="
        inline-flex items-center justify-center

        /* MASSIVE BUTTON SIZE */
        px-20 py-7
        sm:px-24 sm:py-8
        md:px-28 md:py-9
        lg:px-32 lg:py-10
        xl:px-40 xl:py-11
        2xl:px-48 2xl:py-12

        /* HUGE TEXT */
        text-[18px]
        sm:text-[20px]
        md:text-[22px]
        lg:text-[24px]
        xl:text-[26px]
        2xl:text-[30px]

        uppercase tracking-[0.22em] font-semibold
        text-dts-fog leading-none
      "
    >
      Start Project
    </span>
  </Link>
</motion.div>
</div>
</motion.section>
);
}
