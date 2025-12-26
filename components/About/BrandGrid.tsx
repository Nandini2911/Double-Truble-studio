// components/about/BrandGrid.tsx
"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "RNK Rentals",
  "Café Holiday",
  "House of Stars",
  "All People",
  "The Bridal Story",
  "Spice Magazine",
  "Domicil / Corium",
  "Vow Story",
];

export default function BrandGrid() {
  return (
    <section
      className="
        relative 
        px-4 sm:px-6 lg:px-8 
        py-12 md:py-16 2xl:py-24
      "
    >
      {/* soft background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-5xl md:max-w-6xl space-y-6 md:space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            Our Clients
          </p>
          <h2 className="font-heading text-lg sm:text-xl md:text-2xl text-dts-fog">
            Brands That Trust Us
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto">
            A few of the names we&apos;ve been proud to build with—online, on-ground,
            and everywhere in between.
          </p>
        </div>

        {/* Simple clean grid */}
        <div
          className="
            grid
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4
            gap-3.5 sm:gap-4 md:gap-5
            max-w-5xl mx-auto
          "
        >
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="
                group flex items-center justify-center
                min-h-12 sm:h-16
                rounded-xl
                border border-white/12
                bg-white/3
                text-neutral-300 text-[11px] sm:text-xs md:text-sm
                tracking-[0.08em] uppercase
                text-center
                transition-all duration-300
                hover:border-dts-neon
                hover:text-dts-neon
                hover:shadow-[0_0_20px_rgba(70,243,216,0.25)]
              "
            >
              {/* Tiny neon dot accent */}
              <span
                className="
                  mr-1.5 h-1.5 w-1.5 rounded-full 
                  bg-dts-neon 
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  shrink-0
                "
              />
              <span className="line-clamp-2">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
