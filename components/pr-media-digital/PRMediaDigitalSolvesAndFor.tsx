// components/pr-media-digital/PRMediaDigitalSolvesAndFor.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  EyeOff,
  Newspaper,
  BadgeCheck,
  MessageSquareText,
  Crown,
  User,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const solves = [
  { Icon: EyeOff, text: "Brands that feel invisible or inconsistent" },
  { Icon: Newspaper, text: "Press coverage without impact or relevance" },
  { Icon: BadgeCheck, text: "Digital growth lacking authority or direction" },
  { Icon: MessageSquareText, text: "Messaging that doesn’t reflect brand stature" },
];

const forWho = [
  { Icon: Crown, text: "Luxury, lifestyle & premium brands" },
  { Icon: User, text: "Founders, creators & public figures" },
  { Icon: Sparkles, text: "New launches, rebrands & scale-ups" },
  { Icon: TrendingUp, text: "Businesses seeking credibility alongside growth" },
];

type RowItem = { Icon: React.ElementType; text: string };

function Panel({
  kicker,
  title,
  subtitle,
  list,
  accent = "neon",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  list: RowItem[];
  accent?: "neon" | "pink";
}) {
  const accentTop =
    accent === "pink"
      ? "bg-[linear-gradient(to_right,transparent,rgba(255,63,164,0.45),rgba(216,184,115,0.28),transparent)]"
      : "bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.50),rgba(255,63,164,0.28),rgba(216,184,115,0.22),transparent)]";

  const alwaysTint =
    accent === "pink"
      ? "bg-[radial-gradient(900px_circle_at_18%_12%,rgba(255,63,164,0.12),transparent_60%)]"
      : "bg-[radial-gradient(900px_circle_at_18%_12%,rgba(70,243,216,0.14),transparent_60%)]";

  return (
    <motion.div
      variants={item}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/[0.035] backdrop-blur
        p-7 md:p-8
        transition-all duration-500
        hover:border-dts-neon/55
        hover:bg-white/[0.05]
        hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_26px_80px_rgba(0,0,0,0.75)]
      "
    >
      {/* ✅ Always-on color tint */}
      <div className={`pointer-events-none absolute inset-0 opacity-[0.55] ${alwaysTint}`} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />

      {/* top accent hairline */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-px opacity-70 ${accentTop}`} />

      {/* hover ring */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.32),transparent_42%,rgba(255,63,164,0.16),rgba(216,184,115,0.16),rgba(70,243,216,0.22))]" />

      {/* hover glow bloom */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.12),transparent_60%)]" />

      {/* corner editorial cut */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-45 border border-white/10 bg-white/[0.02] opacity-70" />

      {/* content */}
      <div className="relative">
        <p className="text-[11px] uppercase tracking-[0.34em] text-neutral-400">
          {kicker}
        </p>

        <h3 className="mt-3 font-heading text-2xl md:text-3xl text-white">
          {title}
        </h3>

        {subtitle ? (
          <p className="mt-3 max-w-xl text-sm md:text-[15px] leading-relaxed text-neutral-300/85">
            {subtitle}
          </p>
        ) : null}

        <ul className="mt-7 space-y-4">
          {list.map(({ Icon, text }) => (
            <li key={text} className="flex gap-3">
              <span
                className="
                  mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl
                  border border-white/10 bg-white/[0.03]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                  transition-all duration-500
                  group-hover:border-dts-neon/55
                  group-hover:bg-dts-neon/10
                  group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.14),0_14px_40px_rgba(70,243,216,0.10)]
                "
              >
                <Icon size={18} className="text-white/70" />
              </span>

              <p className="text-sm md:text-[15px] leading-relaxed text-neutral-200/85">
                {text}
              </p>
            </li>
          ))}
        </ul>

        {/* divider like your FAQ */}
        <div
          className="
            mt-8 h-px w-full
            bg-white/10
            transition-all duration-500
            group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
          "
        />

        <p className="mt-5 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
          Structured • Premium • Calm execution
        </p>

        {/* bottom glow */}
        <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}

export default function PRMediaDigitalSolvesAndFor() {
  return (
    <section className="relative overflow-hidden bg-dts-black px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      {/* background (same family as your FAQ/CTA) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <Panel
            kicker="Purpose"
            title="What This Solves"
            subtitle="Clear positioning and credible visibility—without noise."
            list={solves}
            accent="neon"
          />

          <Panel
            kicker="Fit"
            title="Who This Is For"
            subtitle="Brands and individuals who need presence that matches their stature."
            list={forWho}
            accent="pink"
          />
        </motion.div>
      </div>
    </section>
  );
}
