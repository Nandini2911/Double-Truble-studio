// components/home/LogoStrip.tsx
"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "RNK Rentals",
  "House of Stars",
  "Café Holiday",
  "Luxury Weddings",
  "Beauty & Lifestyle Creators",
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function LogoStrip() {
  return (
    <section className="relative py-10 md:py-12 2xl:py-14 px-4 sm:px-6">
      {/* Ambient line + glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(70,243,216,0.10),transparent_60%)]" />
        <div className="absolute -right-28 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,63,164,0.08),transparent_60%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.75, ease: EASE }}
        className="relative mx-auto w-full max-w-[980px] xl:max-w-[1150px] 2xl:max-w-[1400px]"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400 text-center">
            Trusted by brands that care about taste.
          </p>

          {/* tiny glow divider */}
          <div className="h-px w-16 bg-[linear-gradient(90deg,transparent,rgba(70,243,216,0.8),transparent)]" />
        </div>

        {/* Brand Chips */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 2xl:gap-5">
          {BRANDS.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, ease: EASE, delay: idx * 0.06 }}
              className="group relative"
            >
              {/* outer glow on hover */}
              <div
                className="
                  pointer-events-none absolute -inset-2
                  rounded-2xl
                  bg-[radial-gradient(circle,rgba(70,243,216,0.18),transparent_60%)]
                  opacity-0 blur-xl
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              <div
                className="
                  relative overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-white/4 backdrop-blur-md
                  px-4 py-2.5
                  shadow-[0_14px_45px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                  group-hover:border-dts-neon/50
                  group-hover:shadow-[0_18px_55px_rgba(70,243,216,0.18)]
                "
              >
                {/* shimmer sweep */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.10),transparent)]
                    opacity-0 -translate-x-[160%]
                    group-hover:opacity-60 group-hover:translate-x-[160%]
                    transition-all duration-1400 ease-out
                  "
                />

                {/* mini dot */}
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-dts-neon/80 shadow-[0_0_10px_rgba(70,243,216,0.55)] align-middle" />

                <span className="text-[11px] sm:text-xs 2xl:text-[13px] uppercase tracking-[0.22em] text-neutral-200/95">
                  {name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
