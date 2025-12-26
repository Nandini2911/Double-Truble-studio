// components/events-weddings/EventsWeddingsEndToEnd.tsx
"use client";

import { motion } from "framer-motion";
import type React from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Block = {
  title: string;
  icon: React.ReactNode;
  items: string[];
};

const Icon = {
  Strategy: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 18V6m16 12V6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 15l4-4 3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Production: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 8h16v10H4V8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 13h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Guest: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M16 11a4 4 0 10-8 0 4 4 0 008 0z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 20a8 8 0 0116 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Creative: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 3a7 7 0 017 7c0 2.2-1 3.8-2.3 5.1-.8.8-1.3 1.8-1.4 3H8.7c-.1-1.2-.6-2.2-1.4-3C6 13.8 5 12.2 5 10a7 7 0 017-7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 21h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const blocks: Block[] = [
  {
    title: "Planning & Strategy",
    icon: Icon.Strategy,
    items: [
      "Event concept & experience mapping",
      "Timelines, budgets & execution plans",
      "Guest journey & flow design",
    ],
  },
  {
    title: "Vendors & Production",
    icon: Icon.Production,
    items: [
      "Venue coordination",
      "Decor, lighting & production teams",
      "Technical & on-ground execution",
    ],
  },
  {
    title: "Guest & On-Ground Management",
    icon: Icon.Guest,
    items: [
      "Guest coordination & hospitality",
      "On-site team supervision",
      "Seamless flow from setup to wrap-up",
    ],
  },
  {
    title: "Creative & Brand Alignment",
    icon: Icon.Creative,
    items: [
      "Visual direction & experience design",
      "Brand consistency across touchpoints",
      "Media-ready execution",
    ],
  },
];

export default function EventsWeddingsEndToEnd() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-24 dts-section">
      {/* ===== Background Layering (site-consistent) ===== */}
      <div className="pointer-events-none absolute inset-0 dts-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />

      {/* Soft moving glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(70,243,216,0.14), transparent 65%)",
        }}
        animate={{ x: [0, -30, 18, 0], y: [0, 18, -14, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* second glow (pink) */}
      <div className="pointer-events-none absolute -bottom-52 -left-40 h-[640px] w-[640px] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,63,164,0.12),transparent_62%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050507]" />

      {/* ===== Content ===== */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        {/* Heading */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            {/* chip (match other sections) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300">
                Deliverables
              </p>
            </div>

            <h2 className="mt-5 font-heading text-2xl md:text-4xl text-white">
              What We Manage,{" "}
              <span
                className="
                  bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_18px_rgba(70,243,216,0.16)]
                "
              >
                End-to-End
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.06 }}
            className="max-w-xl text-sm text-neutral-400"
          >
            Clear planning. Coordinated partners. Seamless on-ground execution —
            under one accountable team.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.035]
                p-7 md:p-8
                transition
                hover:border-dts-neon/45
                hover:bg-white/[0.06]
                hover:shadow-[0_0_0_1px_rgba(70,243,216,0.20),0_28px_90px_rgba(0,0,0,0.75)]
              "
            >
              {/* ✅ ALWAYS-ON COLOR COMBINATION (teal + pink + gold) */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.50] bg-[radial-gradient(circle_at_18%_12%,rgba(70,243,216,0.16),transparent_58%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_88%_18%,rgba(255,63,164,0.14),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_70%_92%,rgba(255,200,92,0.14),transparent_62%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.28] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />

              {/* top accent line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.45),rgba(255,63,164,0.35),rgba(255,200,92,0.28),transparent)] opacity-65" />

              {/* left gradient bar */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-px opacity-70 bg-[linear-gradient(to_bottom,transparent,rgba(70,243,216,0.55),rgba(255,63,164,0.40),transparent)]" />

              {/* hover radial glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.14),transparent_60%)]" />

              {/* hover gradient border glow */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,rgba(70,243,216,0.44),rgba(255,63,164,0.22),rgba(255,200,92,0.18),rgba(70,243,216,0.34))] blur-[1.5px]" />

              {/* Light sweep */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-[60%] opacity-0 group-hover:opacity-100 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.14),transparent)]"
                animate={{ x: ["-20%", "220%"] }}
                transition={{ duration: 1.15, ease: "easeInOut" }}
              />

              {/* Card content */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] text-white/85 transition-all duration-300 group-hover:border-dts-neon/55 group-hover:bg-dts-neon/10 group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.16),0_14px_40px_rgba(70,243,216,0.12)]">
                    {b.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/60 group-hover:bg-dts-neon/70 transition-colors duration-300" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                {/* inner divider */}
                <div className="mt-6 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#FFC85C,transparent)]" />

                <p className="mt-5 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                  Planned • Managed • Delivered
                </p>

                {/* bottom glow */}
                <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
