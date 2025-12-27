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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function IndustriesStrip() {
  return (
    <section className="relative px-3 sm:px-4 py-12 sm:py-14 md:py-16">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-6 h-80 w-80 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(70,243,216,0.14),transparent_60%)]" />
        <div className="absolute -right-28 -bottom-10 h-96 w-96 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,63,164,0.12),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.65),transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.75, ease: EASE }}
        className="relative mx-auto w-full max-w-[980px] xl:max-w-[1150px] 2xl:max-w-[1400px]"
      >
        <div
          className="
            relative overflow-hidden
            rounded-4xl
            border border-white/10
            bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(255,63,164,0.08),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]
            backdrop-blur-xl
            shadow-[0_30px_90px_rgba(0,0,0,0.60)]
          "
        >
          {/* Hairline shine */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-40" />

          <div className="grid gap-10 md:grid-cols-[1.05fr_1.55fr]">
            {/* LEFT */}
            <div className="relative p-7 sm:p-9 md:p-11">
              {/* tiny top label */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-dts-neon/50" />
                <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-400">
                  Who we build for
                </p>
              </div>

              <h2 className="mt-4 font-heading text-[1.55rem] sm:text-[1.75rem] md:text-[1.95rem] 2xl:text-[2.15rem] text-dts-fog leading-[1.15]">
                Brands that play in the{" "}
                <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]">
                  premium lane.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] 2xl:text-base text-neutral-300/90 leading-relaxed max-w-md">
                We partner with teams that value refinement, trust the process,
                and build presence with consistency—not noise.
              </p>

              {/* Micro stats */}
              <div className="mt-7 grid grid-cols-3 gap-3 max-w-sm">
                <MiniStat k="8+" v="Industries" />
                <MiniStat k="360°" v="Execution" />
                <MiniStat k="Premium" v="Positioning" />
              </div>

              {/* subtle divider */}
              <div className="mt-8 h-px w-full bg-white/10" />

              <p className="mt-5 text-[12px] text-neutral-400 leading-relaxed max-w-md">
                If your audience expects taste, trust and timelines—this is the lane we build in.
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative p-7 sm:p-9 md:p-11 border-t md:border-t-0 md:border-l border-white/10">
              {/* header row */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                  Industries
                </p>
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[11px] text-neutral-400">Curated lanes</span>
              </div>

              {/* pills in a luxe grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {INDUSTRIES.map((label, i) => (
                  <PillCard key={label} label={label} delay={i * 0.05} />
                ))}
              </div>

              {/* bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent)]" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* -----------------------------
   Mini Stat (left side)
----------------------------- */
function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-black/30
        px-3 py-3
        shadow-[0_10px_28px_rgba(0,0,0,0.35)]
      "
    >
      <p className="text-[13px] font-semibold text-dts-fog">{k}</p>
      <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-neutral-400">
        {v}
      </p>
    </div>
  );
}

/* -----------------------------
   Premium Pill Card (right side)
----------------------------- */
function PillCard({ label, delay }: { label: string; delay: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [7, -7]);
  const rotateY = useTransform(x, [-30, 30], [-7, 7]);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className="group"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="
          relative h-full
          rounded-2xl
          border border-white/10
          bg-white/4 backdrop-blur-md
          px-4 py-3.5
          text-[11px] sm:text-xs 2xl:text-[13px]
          text-neutral-100/90
          shadow-[0_14px_45px_rgba(0,0,0,0.42)]
          transition-all duration-300
          hover:border-dts-neon/60
          hover:shadow-[0_18px_55px_rgba(70,243,216,0.22)]
          hover:scale-[1.02]
          will-change-transform
          overflow-hidden
        "
      >
        {/* Luxe corner glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(70,243,216,0.18),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* shimmer sweep */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.10),transparent)]
            mix-blend-screen
          "
        />

        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-dts-neon/80 shadow-[0_0_10px_rgba(70,243,216,0.55)]" />
          <span className="leading-snug">{label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
