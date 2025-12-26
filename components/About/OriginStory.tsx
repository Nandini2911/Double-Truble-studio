// components/about/OriginStory.tsx
"use client";

import { motion } from "framer-motion";

export default function OriginStory() {
  return (
    <section
      className="
        relative w-full
        px-4 sm:px-6 lg:px-8
        py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28
        overflow-hidden
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.10),transparent_60%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* Soft grid + glow background */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.10]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-size-[80px_80px]
        "
      />
      <div
        className="
          pointer-events-none absolute -right-40 top-10
          h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80
          rounded-full
          bg-[radial-gradient(circle,rgba(70,243,216,0.23),transparent_60%)]
          blur-3xl
        "
      />
      <div
        className="
          pointer-events-none absolute -left-32 bottom-0
          h-56 w-56 sm:h-64 sm:w-64
          rounded-full
          border border-dts-neon/20
          bg-black/50
          blur-[1px] opacity-60
        "
      />

      <div
        className="
          relative z-10 mx-auto
          max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl
          2xl:max-w-312
          space-y-8 md:space-y-10 lg:space-y-12
        "
      >
        {/* Top row: eyebrow + Origin label + subtle line */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between gap-3 sm:gap-4
          "
        >
          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/10
              bg-white/5
              px-3 py-1
              text-[10px] sm:text-[11px]
              uppercase tracking-[0.24em]
              text-neutral-300/80
              backdrop-blur-md
            "
          >
            <span className="h-1 w-1 rounded-full bg-dts-neon shadow-[0_0_12px_rgba(70,243,216,0.8)]" />
            About Double Trouble Studio
          </span>

          <div
            className="
              flex items-center gap-2
              text-[10px] sm:text-[11px]
              uppercase tracking-[0.26em]
              text-neutral-500
            "
          >
            <span className="h-px w-12 sm:w-16 bg-linear-to-r from-transparent via-dts-neon/70 to-transparent" />
            Origin Story
          </div>
        </motion.div>

        {/* MAIN GRID – story + tiles */}
        <div
          className="
            grid gap-8 md:gap-10 xl:gap-12
            md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.3fr)]
            md:items-start
          "
        >
          {/* LEFT: Heading + short story in a 2.5D card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 210, damping: 18 }}
              className="
                relative overflow-hidden
                rounded-2xl sm:rounded-3xl
                border border-white/10
                bg-linear-to-br from-white/5 via-white/0 to-white/0
                px-4 sm:px-5 lg:px-6
                py-5 sm:py-6 lg:py-7
                shadow-[0_16px_50px_rgba(0,0,0,0.75)]
                backdrop-blur-xl
              "
            >
              {/* subtle neon edge accent */}
              <div
                className="
                  pointer-events-none absolute -inset-px
                  rounded-2xl sm:rounded-3xl
                  border border-transparent
                  [background:linear-gradient(135deg,rgba(70,243,216,0.65),rgba(255,255,255,0)_35%,rgba(255,63,164,0.4)_70%)_border-box]
                  opacity-25
                "
              />
              {/* inner content wrapper so border effect stays outside */}
              <div className="relative space-y-3.5 sm:space-y-4">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-dts-neon/80">
                  How it started
                </p>

                <h2
                  className="
                    font-heading text-dts-fog
                    text-[1.7rem] sm:text-[1.9rem] md:text-2xl lg:text-[2.15rem]
                    leading-snug
                  "
                >
                  How the “Trouble” Began
                </h2>

                <p className="max-w-xl text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-neutral-300/95">
                  Double Trouble started as two people who refused to pick a
                  lane. Instead of choosing between digital, PR, web, events or
                  celebrity work, we built a studio where everything moves
                  together—with one taste level and one story.
                </p>
              </div>

              {/* floating chips for 2D/3D feel */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="mt-4 sm:mt-5 flex flex-wrap gap-2"
              >
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] sm:text-[11px] text-neutral-300">
                  Digital &amp; Social
                </span>
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] sm:text-[11px] text-neutral-300">
                  PR &amp; Reputation
                </span>
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] sm:text-[11px] text-neutral-300">
                  Web &amp; Product
                </span>
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] sm:text-[11px] text-neutral-300">
                  Events &amp; Talent
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: stacked “origin tiles” with stronger 2.5D hover */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            {/* soft aurora behind tiles */}
            <div
              className="
                pointer-events-none absolute -inset-4 sm:-inset-6
                bg-[radial-gradient(circle_at_top_right,rgba(70,243,216,0.18),transparent_65%),radial-gradient(circle_at_bottom,rgba(255,63,164,0.18),transparent_60%)]
                opacity-70 sm:opacity-80 blur-2xl
              "
            />

            <div className="relative space-y-3.5 sm:space-y-4">
              {/* Tile 1 */}
              <motion.div
                whileHover={{ y: -6, rotateX: 6, rotateY: -4, scale: 1.01 }}
                whileTap={{ y: -2, rotateX: 0, rotateY: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  rounded-2xl border border-white/12
                  bg-linear-to-r from-white/8 via-white/0 to-white/0
                  px-4 py-3.5 sm:py-4
                  flex items-start gap-3 sm:gap-3.5
                  backdrop-blur-lg
                  shadow-[0_16px_45px_rgba(0,0,0,0.75)]
                  transform-gpu will-change-transform
                  hover:border-dts-neon/60
                "
              >
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-xl bg-dts-neon/15 border border-dts-neon/40 shadow-[0_0_20px_rgba(70,243,216,0.8)]">
                  <span className="h-2 w-2 rounded-full bg-dts-neon" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400/90">
                    Studio Shape
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-neutral-100/95">
                    One studio, multiple disciplines—digital, PR, web, events
                    and talent under one roof.
                  </p>
                </div>
              </motion.div>

              {/* Tile 2 */}
              <motion.div
                whileHover={{ y: -6, rotateX: 6, rotateY: 3, scale: 1.01 }}
                whileTap={{ y: -2, rotateX: 0, rotateY: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  rounded-2xl border border-white/12
                  bg-linear-to-r from-white/8 via-white/0 to-white/0
                  px-4 py-3.5 sm:py-4
                  flex items-start gap-3 sm:gap-3.5
                  backdrop-blur-lg
                  shadow-[0_16px_45px_rgba(0,0,0,0.75)]
                  transform-gpu will-change-transform
                  hover:border-dts-neon/60
                "
              >
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-xl bg-dts-neon-pink/15 border border-dts-neon-pink/40 shadow-[0_0_20px_rgba(255,63,164,0.8)]">
                  <span className="h-2 w-2 rounded-full bg-dts-neon-pink" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400/90">
                    Core Belief
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-neutral-100/95">
                    Brand-building shouldn’t be fragmented. Everything should
                    feel like one clear, deliberate voice.
                  </p>
                </div>
              </motion.div>

              {/* Tile 3 */}
              <motion.div
                whileHover={{ y: -6, rotateX: 6, rotateY: -1, scale: 1.01 }}
                whileTap={{ y: -2, rotateX: 0, rotateY: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  rounded-2xl border border-white/12
                  bg-linear-to-r from-white/8 via-white/0 to-white/0
                  px-4 py-3.5 sm:py-4
                  flex items-start gap-3 sm:gap-3.5
                  backdrop-blur-lg
                  shadow-[0_16px_45px_rgba(0,0,0,0.75)]
                  transform-gpu will-change-transform
                  hover:border-dts-neon/60
                "
              >
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-xl bg-white/5 border border-white/15">
                  <span className="h-2 w-2 rounded-full bg-white/80" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400/90">
                    How It Feels
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-neutral-100/95">
                    Taste, clarity and discipline over chaos, noise and
                    trend-chasing—so every move looks like it belongs to you.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
