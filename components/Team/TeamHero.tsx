// components/team/TeamHero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TeamHero() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        pt-24 pb-16
        sm:pt-28 sm:pb-20
        lg:pt-32 lg:pb-24
        2xl:pt-40 2xl:pb-28
      "
    >
      {/* SOFT BG GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute -left-28 -top-24
            h-64 w-64 sm:h-72 sm:w-72
            lg:-left-40 lg:-top-32 lg:h-80 lg:w-80
            2xl:h-96 2xl:w-96
            rounded-full blur-2xl
            bg-[radial-gradient(circle,rgba(70,243,216,0.20),transparent_60%)]
          "
        />
        <div
          className="
            absolute -right-24 -bottom-20
            h-72 w-72 sm:h-80 sm:w-80
            lg:-right-28 lg:-bottom-24 lg:h-96 lg:w-96
            2xl:h-[28rem] 2xl:w-[28rem]
            rounded-full blur-3xl
            bg-[radial-gradient(circle,rgba(255,63,164,0.25),transparent_60%)]
          "
        />
      </div>

      {/* MAIN WRAPPER */}
      <div
        className="
          relative mx-auto w-full max-w-7xl
          px-4 sm:px-6 lg:px-8
          2xl:max-w-none 2xl:px-32
        "
      >
        <div
          className="
            grid items-center gap-12
            lg:grid-cols-[1.05fr_0.95fr] lg:gap-14
            2xl:gap-24
          "
        >
          {/* LEFT :: TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl space-y-6 sm:space-y-7 lg:space-y-8 2xl:max-w-2xl"
          >
            {/* TAGLINE LINE */}
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] 2xl:text-[12px] uppercase tracking-[0.22em] text-neutral-400">
              <span className="inline-flex h-px w-10 sm:w-12 bg-neutral-500" />
              <span>Meet the Team</span>
            </div>

            {/* HEADING */}
            <h1 className="font-heading leading-tight tracking-tight">
              <span className="block text-dts-fog text-3xl sm:text-4xl lg:text-[2.6rem] 2xl:text-[3.8rem] 2xl:leading-[1.05]">
                THE MINDS BEHIND THE MAGIC
              </span>
              <span
                className="
                  mt-2 inline-block
                  text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-[3.2rem]
                  bg-linear-to-r from-[#46F3D8] via-[#FF3FA4] to-[#C9A96A]
                  bg-clip-text text-transparent
                "
              >
                MEET THE INNOVATORS.
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="text-[13px] sm:text-sm lg:text-[15px] 2xl:text-base text-neutral-300/90 leading-relaxed max-w-prose">
              Get to know the passionate individuals who are shaping our vision, from strategy to execution.
            </p>

            {/* CTAS */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 pt-1">
              <Link
                href="/contact"
                className="
                  dts-animated-border
                  w-full sm:w-auto
                  text-center
                  text-[12px] sm:text-[13px] 2xl:text-sm
                "
              >
                <span>JOIN OUR TEAM</span>
              </Link>

              {/* Optional secondary CTA (uncomment if you want)
              <Link
                href="/work"
                className="
                  w-full sm:w-auto text-center
                  rounded-full border border-white/10
                  bg-white/5 px-5 py-3
                  text-[12px] sm:text-[13px]
                  text-neutral-200 hover:bg-white/10
                  transition
                "
              >
                View our culture
              </Link>
              */}
            </div>
          </motion.div>

          {/* RIGHT :: CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="w-full max-w-md justify-self-center lg:justify-self-end 2xl:max-w-xl"
          >
            <div className="relative">
              {/* Gradient frame */}
              <div
                className="
                  absolute -inset-[1.5px]
                  rounded-[1.75rem] sm:rounded-[1.9rem] 2xl:rounded-[2.2rem]
                  bg-linear-to-br
                  from-dts-neon/70 via-dts-neon-pink/50 to-dts-gold/70
                  opacity-90
                "
              />

              {/* Inner card */}
              <div
                className="
                  relative flex flex-col gap-5 sm:gap-6 2xl:gap-8
                  rounded-[1.75rem] sm:rounded-[1.9rem] 2xl:rounded-[2.2rem]
                  border border-white/10
                  bg-dts-black/95
                  px-5 py-6 sm:px-6 sm:py-7
                  2xl:px-9 2xl:py-10
                  shadow-[0_18px_45px_rgba(0,0,0,0.7)]
                "
              >
                {/* Top label + pill */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[10px] sm:text-[11px] 2xl:text-[12px] font-semibold uppercase tracking-[0.2em] text-dts-neon">
                    The Team Behind DTS
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] sm:text-[10px] 2xl:text-[11px] uppercase tracking-[0.18em] text-neutral-300">
                    Together We Create
                  </span>
                </div>

                {/* Description */}
                <p className="text-[13px] sm:text-sm 2xl:text-[15px] leading-relaxed text-neutral-200/92">
                  A dedicated group of visionaries who are constantly innovating and driving your brand forward.
                </p>

                {/* Specialties */}
                <div className="space-y-3 sm:space-y-4 2xl:space-y-5 text-[11px] sm:text-[12px] 2xl:text-[13px]">
                  <div className="flex items-start gap-3">
                    <span className="mt-[4px] h-2 w-2 sm:h-2.5 sm:w-2.5 2xl:h-3 2xl:w-3 rounded-full bg-dts-neon shadow-[0_0_10px_rgba(70,243,216,0.9)]" />
                    <div>
                      <p className="font-semibold text-dts-neon">Strategy &amp; Vision</p>
                      <p className="leading-snug text-neutral-300/90">
                        Crafting innovative strategies for brand growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-[4px] h-2 w-2 sm:h-2.5 sm:w-2.5 2xl:h-3 2xl:w-3 rounded-full bg-dts-gold" />
                    <div>
                      <p className="font-semibold text-dts-gold">Creative Direction</p>
                      <p className="leading-snug text-neutral-300/90">
                        Bringing bold creative visions to life.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-[4px] h-2 w-2 sm:h-2.5 sm:w-2.5 2xl:h-3 2xl:w-3 rounded-full bg-dts-neon-pink" />
                    <div>
                      <p className="font-semibold text-dts-neon-pink">Execution &amp; Innovation</p>
                      <p className="leading-snug text-neutral-300/90">
                        Delivering seamless experiences that redefine industry standards.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-[9px] sm:text-[10px] 2xl:text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  <span className="text-dts-neon">Grow • Glow • Get noticed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
