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

export default function LogoStrip() {
  return (
    <section
      className="
        py-8 border-y border-white/10 
        2xl:py-12      /* more breathing room on 4K */
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="
          flex flex-col items-center gap-6
          2xl:gap-10     /* larger gap for 4K */
        "
      >
        {/* TITLE */}
        <p
          className="
            uppercase tracking-[0.22em] 
            text-[11px] text-neutral-500 text-center
            2xl:text-[12px]  /* slightly larger on 4K */
          "
        >
          Trusted By Leading Brands
        </p>

        {/* MOBILE VERSION */}
        <div className="flex flex-col gap-4 md:hidden">
          {BRANDS.map((name) => (
            <div
              key={name}
              className="
                flex items-center justify-center text-neutral-300
                text-[12px] uppercase tracking-[0.2em]
                2xl:text-sm
              "
            >
              {name}
            </div>
          ))}
        </div>

        {/* DESKTOP VERSION */}
        <div
          className="
            hidden md:flex flex-wrap items-center justify-center
            gap-6 md:gap-8 
            2xl:gap-12   /* bigger spacing on 4K */
          "
        >
          {BRANDS.map((name, index) => (
            <div key={name} className="flex items-center gap-3 2xl:gap-5">
              {index !== 0 && (
                <span
                  className="
                    h-1.5 w-1.5 rounded-full 
                    bg-dts-neon/70 shadow-[0_0_6px_rgba(70,243,216,0.7)]
                    2xl:h-2 2xl:w-2   /* bigger dots */
                    2xl:shadow-[0_0_10px_rgba(70,243,216,0.9)]
                  "
                />
              )}
              <span
                className="
                  text-neutral-300 text-[11px] md:text-xs uppercase tracking-[0.2em]
                  2xl:text-sm      /* bigger on 4K */
                "
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
