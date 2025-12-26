// components/home/FeaturedWork.tsx
"use client";

import { motion } from "framer-motion";

const WORK = [
  {
    brand: "RNK Rentals",
    tag: "Digital • Web • PR",
    desc: "A complete transformation of India’s premier automotive rental network—brand language, performance-led content, network storytelling and web.",
  },
  {
    brand: "House of Stars",
    tag: "Brand • Web • PR",
    desc: "Positioning, website and narrative for a celebrity engagement platform connecting brands with India’s top talent.",
  },
  {
    brand: "Café Holiday",
    tag: "Social • Events",
    desc: "Three-month brand revamp—digital storytelling, café experiences and community-building for a Mumbai-based coffee chain.",
  },
];

const EASE: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

export default function FeaturedWork() {
  return (
    <section
      className="
        py-8 md:py-12
        px-4 md:px-6 lg:px-8 xl:px-0
      "
    >
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <div
          className="
            grid gap-8 md:gap-10
            lg:grid-cols-[1.05fr_1.4fr]
            items-start
          "
        >
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="space-y-4 max-w-xl"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
              Featured work
            </p>

            <h2 className="font-heading text-xl md:text-2xl text-dts-fog leading-snug">
              Work that glows on the grid and grows in the boardroom.
            </h2>

            <p className="text-sm md:text-[15px] text-neutral-300/90">
              A curated look at brands, creators and businesses we&apos;ve helped
              grow across digital, PR, web and experiential—where aesthetics,
              systems and outcomes work together.
            </p>

            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400/90">
              Select case studies • More coming soon
            </p>
          </motion.div>

          {/* RIGHT CASE STUDIES */}
          <div className="relative">
            {/* Vertical line */}
            <div className="pointer-events-none absolute left-3.5 top-0 bottom-0 hidden w-px bg-linear-to-b from-dts-neon/70 via-dts-neon-pink/40 to-dts-gold/60 lg:block" />

            <div className="space-y-4 md:space-y-5">
              {WORK.map((item, idx) => (
                <motion.article
                  key={item.brand}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.55,
                    ease: EASE,
                    delay: idx * 0.08,
                  }}
                  className="relative flex gap-3 lg:gap-4"
                >
                  {/* number circle */}
                  <div className="mt-1 hidden lg:flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-dts-neon bg-black/70 text-[11px] font-semibold text-dts-neon shadow-neon-soft">
                    0{idx + 1}
                  </div>

                  {/* CARD – uses same border fade as Method (dts-card-2d) */}
                  <div
                    className="
                      group
                      relative w-full
                      dts-card-2d
                      px-5 py-5 md:px-6 md:py-6
                      transition-transform duration-300
                      hover:scale-[1.02]
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-dts-neon">
                        {item.tag}
                      </p>
                      <span className="hidden text-[11px] text-neutral-400 lg:inline">
                        Case 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-2 text-[15px] md:text-[16px] font-semibold text-dts-fog">
                      {item.brand}
                    </h3>

                    <p className="mt-2 text-sm md:text-[15px] text-neutral-200/90 leading-relaxed">
                      {item.desc}
                    </p>

                   
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
