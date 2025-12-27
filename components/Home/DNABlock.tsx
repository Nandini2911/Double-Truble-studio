// components/home/DNABlock.tsx
"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DNABlock() {
  return (
    <section className="relative py-12 md:py-16 px-4 sm:px-6">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(70,243,216,0.12),transparent_60%)]" />
        <div className="absolute -right-28 -bottom-10 h-96 w-96 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,63,164,0.10),transparent_60%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.75, ease: EASE }}
        className="
          group relative mx-auto w-full
          max-w-[900px] md:max-w-[1100px] 2xl:max-w-[1400px]
          overflow-hidden
          rounded-4xl
          border border-white/10
          bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(255,63,164,0.08),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]
          backdrop-blur-xl
          shadow-[0_34px_100px_rgba(0,0,0,0.62)]
          transition-all duration-500
          hover:border-white/18
          hover:shadow-[0_40px_120px_rgba(0,0,0,0.72)]
        "
      >
        {/* Luxe sheen sweep */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.10),transparent)]
            opacity-0 -translate-x-[160%]
            group-hover:opacity-60 group-hover:translate-x-[160%]
            transition-all duration-1400 ease-out
          "
        />

        {/* Subtle grid texture */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-[0.10]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
            bg-size-[26px_26px]
          "
        />

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-9 md:px-12 py-10 md:py-14">
          {/* Top row */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4 max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-300">
                The Double Trouble Studio DNA
              </p>

              <h2 className="font-heading text-[1.35rem] sm:text-[1.55rem] md:text-[1.9rem] text-dts-fog leading-[1.15]">
                Clarity over chaos.{" "}
                <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]">
                  Systems over guesswork.
                </span>
              </h2>

              <p className="text-sm sm:text-[15px] md:text-base text-neutral-300/90 leading-relaxed">
                We build brands with intention—where creativity comes with structure.
                Research, cultural context, sharp aesthetics, and performance thinking
                come together to create work that looks premium and holds up in the market.
              </p>
            </div>

            {/* Right mini-card */}
            <div
              className="
                shrink-0
                rounded-2xl border border-white/10
                bg-black/35
                px-5 py-4
                shadow-[0_16px_46px_rgba(0,0,0,0.45)]
              "
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                What we protect
              </p>
              <p className="mt-2 text-sm text-neutral-200/90 leading-snug">
                Your{" "}
                <span className="text-dts-neon/90">reputation</span>, your{" "}
                <span className="text-dts-neon/90">consistency</span>, and your{" "}
                <span className="text-dts-neon/90">results</span>.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-white/10" />

          {/* Bullets -> upgraded into “principles” cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Category Intelligence",
                desc: "Strong research, market mapping, and audience behavior—before we create.",
              },
              {
                title: "Signature Identity",
                desc: "Sharper visuals + sharper copy, so your brand feels instantly recognizable.",
              },
              {
                title: "Long-Term Value",
                desc: "We build systems that scale—no quick hacks, no temporary noise.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="
                  relative overflow-hidden
                  rounded-2xl border border-white/10
                  bg-white/4 backdrop-blur-md
                  p-5
                  shadow-[0_14px_40px_rgba(0,0,0,0.40)]
                  transition-all duration-300
                  hover:border-dts-neon/50
                  hover:shadow-[0_18px_55px_rgba(70,243,216,0.18)]
                "
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-dts-neon/80 shadow-[0_0_10px_rgba(70,243,216,0.6)]" />
                  <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-200/90">
                    Principle
                  </p>
                </div>

                <p className="text-[15px] font-semibold text-dts-fog">{c.title}</p>
                <p className="mt-2 text-sm text-neutral-300/90 leading-relaxed">
                  {c.desc}
                </p>

                {/* corner glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(70,243,216,0.16),transparent_60%)] opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <p className="mt-8 text-[12px] text-neutral-400 leading-relaxed max-w-3xl">
            This isn’t “just marketing”. It’s brand architecture—built to look expensive and perform
            under pressure.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
