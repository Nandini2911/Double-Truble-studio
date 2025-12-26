// components/home/IndustriesStrip.tsx
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

const INDUSTRIES = [
  "Luxury & Lifestyle",
  "Beauty & Personal Care",
  "Interiors & Architecture",
  "Hospitality & F&B",
  "Automotive",
  "Weddings & Events",
  "Media & Celebrities",
  "Startups & New Brands",
];

export default function IndustriesStrip() {
  return (
    <section className="py-8 sm:py-9 md:py-12 px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="
          dts-section-shell
          mx-auto w-full
          max-w-[880px]
          md:max-w-[980px]
          xl:max-w-[1150px]
          2xl:max-w-[1400px]
          px-4 sm:px-5 md:px-7
          py-6 sm:py-7 md:py-8
        "
      >
        {/* TEXT BLOCK */}
        <div className="space-y-3 2xl:space-y-4 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
            Who we build for
          </p>

          <h2 className="font-heading text-lg sm:text-xl md:text-2xl 2xl:text-[1.6rem] text-dts-fog leading-snug">
            Brands that play in the premium lane.
          </h2>

          <p className="text-sm sm:text-[15px] 2xl:text-base text-neutral-300/90 leading-relaxed">
            We partner with teams that value refinement, trust the process and
            aim to lead—not simply compete.
          </p>
        </div>

        {/* 3D / Premium Pills */}
        <div
          className="
            mt-5 sm:mt-6
            flex flex-wrap
            gap-2.5 sm:gap-3 md:gap-4
            justify-center md:justify-start
          "
        >
          {INDUSTRIES.map((label, index) => (
            <Pill key={label} label={label} delay={index * 0.05} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------------------------------------
   3D NEON PILL COMPONENT
--------------------------------------------- */
function Pill({ label, delay }: { label: string; delay: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [8, -8]);
  const rotateY = useTransform(x, [-30, 30], [-8, 8]);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="
          relative cursor-default
          rounded-full border border-white/12 
          bg-white/5 backdrop-blur-md
          px-3.5 sm:px-4 md:px-5
          py-2 sm:py-2.5
          text-[11px] sm:text-[11px] md:text-xs 2xl:text-[13px]
          text-neutral-100/90
          shadow-[0_4px_10px_rgba(0,0,0,0.25)]
          transition-all duration-300
          hover:shadow-[0_8px_22px_rgba(70,243,216,0.35)]
          hover:border-dts-neon
          hover:scale-[1.03]
          will-change-transform
          whitespace-nowrap
        "
      >
        {/* Neon shimmer overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-full
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-[linear-gradient(90deg,#46F3D8,transparent,#FF3FA4)]
            mix-blend-screen
          "
        />

        {label}
      </motion.div>
    </motion.div>
  );
}
