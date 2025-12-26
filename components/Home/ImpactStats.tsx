// components/home/ImpactStats.tsx
"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Brands managed", value: "40+" },
  { label: "Industries served", value: "8+" },
  { label: "Campaigns & creatives", value: "2000+" },
  { label: "Cities covered via events & PR", value: "25+" },
];

export default function ImpactStats() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-[900px] md:max-w-[1100px] 2xl:max-w-[1400px] space-y-6 sm:space-y-7">
        {/* TEXT BLOCK */}
        <div className="space-y-2 sm:space-y-3">
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
            Impact snapshot
          </p>

          <h2 className="font-heading text-lg sm:text-xl md:text-2xl text-dts-fog leading-snug">
            Numbers that sit behind the aesthetics.
          </h2>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4
            gap-4 sm:gap-5 md:gap-6
          "
        >
          {STATS.map((item, idx) => (
            <StatsCard
              key={item.label}
              label={item.label}
              value={item.value}
              delay={idx * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   STAT CARD WITH COUNT-UP + 3D HOVER + SHINING BORDER
--------------------------------------------- */
type StatsCardProps = {
  label: string;
  value: string; // e.g. "2000+"
  delay: number;
};

function StatsCard({ label, value, delay }: StatsCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Split number + suffix (e.g. "2000" & "+")
  const numericPart = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const [current, setCurrent] = useState(0);

  // Count-up animation when card enters viewport
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericPart, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(latest) {
        setCurrent(Math.floor(latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [isInView, numericPart]);

  return (
    <motion.div
      ref={ref}
      className="
        relative group
        dts-card-2d
        rounded-2xl
        overflow-hidden
        flex items-center justify-center
        text-center
      "
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        y: -6,
        scale: 1.03,
        rotateX: 4,
        rotateY: -3,
        boxShadow: "0 18px 45px rgba(0,0,0,0.55)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* BASE BORDER */}
      <div className="absolute inset-0 rounded-2xl border border-white/10" />

      {/* ANIMATED NEON BORDER GLOW */}
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-2xl
          bg-[conic-gradient(from_180deg_at_50%_50%,#46F3D8,#FF3FA4,#46F3D8)]
          opacity-0
          group-hover:opacity-60
          mix-blend-screen
          animate-[spin_18s_linear_infinite]
        "
      />

      {/* INNER DARK CARD so content stays readable */}
      <div className="absolute inset-px rounded-[1.1rem] bg-[rgba(5,5,7,0.94)]" />

      {/* SHINE SWEEP ON HOVER */}
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-2xl
          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)]
          opacity-0
          -translate-x-[150%]
          group-hover:opacity-100
          group-hover:translate-x-[150%]
          transition-transform duration-1000 ease-out
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center py-6 sm:py-7 md:py-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dts-neon">
          {current.toLocaleString()}
          {suffix}
        </p>

        <p className="mt-2 text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-neutral-300/90">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
