// components/celebrity-management/CelebrityManagementTypes.tsx
"use client";

import { motion } from "framer-motion";
import type React from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Item = {
  title: string;
  icon: React.ReactNode;
};

const Icon = {
  Endorsement: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 3l2.2 5.4 5.8.5-4.4 3.7 1.4 5.6L12 15.8 7 18.2l1.4-5.6L4 8.9l5.8-.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Appearance: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M6 20a6 6 0 0112 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  Campaign: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 11v2a2 2 0 002 2h2l6 3V6L8 9H6a2 2 0 00-2 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M18 8a4 4 0 010 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  Shoot: (
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
        d="M12 12.5a2 2 0 110-4 2 2 0 010 4z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  Launch: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M14 4l6 6-7 7-6-6 7-7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 11l-3 3v6h6l3-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Media: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 7h16v10H4V7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 17v2m6-2v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M10 10l4 2-4 2v-4z" fill="currentColor" opacity="0.85" />
    </svg>
  ),
  LongTerm: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7 17l4-4 3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18V6m16 12V6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const items: Item[] = [
  { title: "Brand Endorsements & Partnerships", icon: Icon.Endorsement },
  { title: "Event Appearances & Meet-and-Greets", icon: Icon.Appearance },
  { title: "Digital Campaigns & Social Deliverables", icon: Icon.Campaign },
  { title: "Shoot Coordination (Ads / Editorial / Brand)", icon: Icon.Shoot },
  { title: "Launches, Pop-Ups & Brand Moments", icon: Icon.Launch },
  { title: "Influencer, Media & Press Moments", icon: Icon.Media },
  { title: "Long-Term Ambassador / Retainer Associations", icon: Icon.LongTerm },
];

const cardIn = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay: i * 0.05 },
  }),
};

export default function CelebrityManagementTypes() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-24 dts-section">
      {/* BG (match site language) */}
      <div className="pointer-events-none absolute inset-0 dts-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#050507]" />

      {/* soft glows */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(70,243,216,0.16),transparent_62%)]" />
      <div className="pointer-events-none absolute -bottom-36 -right-24 h-96 w-96 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,63,164,0.12),transparent_62%)]" />

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        {/* Heading */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300">
                Scope
              </p>
            </div>

            <h2 className="mt-5 font-heading text-2xl md:text-4xl text-white leading-[1.1]">
              Associations{" "}
              <span
                className="
                  bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_18px_rgba(70,243,216,0.16)]
                "
              >
                We Manage
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.06 }}
            className="max-w-xl text-sm text-neutral-400 leading-relaxed"
          >
            From a single appearance to a long-term brand association — we keep
            fit, commercials, and execution clean.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              custom={i}
              variants={cardIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.05]
                p-6 md:p-7
                shadow-[0_18px_70px_rgba(0,0,0,0.55)]
              "
              style={{ willChange: "transform" }}
            >
              {/* ✅ ALWAYS-ON DTS COLOR COMBINATION (teal + pink + gold) */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[radial-gradient(circle_at_18%_12%,rgba(70,243,216,0.18),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_88%_18%,rgba(255,63,164,0.16),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_70%_92%,rgba(255,200,92,0.14),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.28] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />

              {/* Corner cut overlay */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rotate-45 border border-white/10 bg-white/[0.02]" />

              {/* Left accent bar (gradient) */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-px opacity-70 bg-[linear-gradient(to_bottom,transparent,rgba(70,243,216,0.55),rgba(255,63,164,0.40),transparent)]" />

              {/* Premium ring (only on hover) */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.32),rgba(255,63,164,0.22),rgba(255,200,92,0.18))]" />

              <div className="relative flex items-start justify-between gap-4">
                {/* Icon badge */}
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-white/90">
                    {it.icon}
                  </div>
                  <div className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold opacity-80" />
                </div>

                <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                  DTS / Talent
                </p>
              </div>

              <div className="relative mt-5">
                <p className="text-sm md:text-[15px] text-white/90 leading-relaxed">
                  {it.title}
                </p>

                <div className="mt-5 h-px w-16 bg-white/12 transition-all duration-300 group-hover:w-24 group-hover:bg-[rgba(70,243,216,0.45)]" />
              </div>

              <div className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
                  Fit-first • Discreet • Clean
                </p>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-60 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.32),rgba(255,63,164,0.22),transparent)]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
