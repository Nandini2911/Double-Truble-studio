// components/about/StudioCultureAndFit.tsx
"use client";

import { motion } from "framer-motion";

const CULTURE = [
  "Respect for craft, people & process",
  "Honest conversations & clear expectations",
  "Taste-led decisions, data-informed execution",
  "Creative freedom with strategic intent",
  "Clean systems, sharp work, no chaos",
];

const FIT = [
  "One partner for digital, PR, web & events",
  "Outcome + aesthetic driven",
  "Clarity over chaos",
  "Long-term thinking",
  "Valuing honest feedback",
];

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.05 },
  }),
};

export default function StudioCultureAndFit() {
  return (
    <section
      className="
        relative 
        px-4 sm:px-6 lg:px-8 xl:px-10 
        py-16 md:py-20 
        2xl:py-32 2xl:px-20      /* EXTRA SPACE FOR 4K */
      "
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.07),transparent_65%)]" />

      <div
        className="
          relative mx-auto 
          max-w-5xl sm:max-w-6xl xl:max-w-7xl 2xl:max-w-360 
          space-y-8 md:space-y-10 
          2xl:space-y-16        /* 4K vertical spacing */
        "
      >
        {/* Center heading */}
        <div className="text-center space-y-2">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-neutral-500">
            Inside the studio
          </p>
          <h2 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-[1.8rem] text-dts-fog">
            How we work & who we work best with.
          </h2>
        </div>

        {/* Two-card layout */}
        <div
          className="
            grid 
            gap-6 md:gap-8 
            2xl:gap-14            /* EXTRA GAP ON 4K */
            lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)]
            items-start
          "
        >
          {/* LEFT — Studio Culture */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="
              rounded-2xl border border-white/10
              bg-black/60 backdrop-blur-sm
              shadow-[0_18px_45px_rgba(0,0,0,0.85)]
              px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-7
              2xl:px-10 2xl:py-12       /* 4K CARD PADDING */
            "
          >
            {/* small heading */}
            <div className="mb-4 sm:mb-5">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-neutral-500">
                Studio Culture
              </p>
              <p className="text-[11px] sm:text-[12px] text-neutral-400">
                The non-negotiables.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {CULTURE.map((item, index) => (
                <motion.div
                  key={item}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="
                    flex gap-3 sm:gap-4 rounded-xl
                    border border-white/8
                    bg-white/2
                    px-3.5 py-3 sm:px-4 sm:py-3.5
                    hover:border-dts-neon/40
                    hover:shadow-[0_0_20px_rgba(70,243,216,0.25)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                >
                  {/* Accent dot */}
                  <span
                    className="
                      mt-1 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full 
                      bg-dts-neon/70 
                      shadow-[0_0_8px_rgba(70,243,216,0.8)]
                      shrink-0
                    "
                  />

                  <p className="text-[13px] sm:text-sm text-neutral-200 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Good Fit (minimal text) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="
              rounded-2xl border border-dts-neon/30
              bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%)]
              bg-black/80 backdrop-blur-md
              shadow-[0_20px_50px_rgba(0,0,0,0.9)]
              px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-7
              2xl:px-10 2xl:py-12      /* 4K CARD PADDING */
            "
          >
            <div className="relative mb-4 sm:mb-5">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-neutral-400">
                Fit Check
              </p>
              <h3 className="font-heading text-base sm:text-lg md:text-xl text-dts-fog mt-1">
                We’re a good fit if…
              </h3>
            </div>

            {/* Chips */}
            <div className="relative flex flex-wrap gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              {FIT.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9, y: 6 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  className="
                    rounded-full px-3.5 py-1.5
                    text-[10px] sm:text-[11px]
                    bg-black/70 border border-white/18
                    text-neutral-100
                    hover:border-dts-neon hover:text-dts-neon
                    hover:shadow-[0_0_18px_rgba(70,243,216,0.35)]
                    transition-all duration-250
                    whitespace-nowrap
                  "
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <p className="text-[10px] sm:text-[11px] text-neutral-500">
              …you feel aligned reading this.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
