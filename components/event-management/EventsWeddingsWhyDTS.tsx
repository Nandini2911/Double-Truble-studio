// components/celebrity-management/CelebrityManagementWhyDTS.tsx
"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Layers,
  Lock,
  Users,
  BadgeCheck,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reasons = [
  { t: "Brand-fit shortlisting — not popularity-led lists", Icon: Sparkles },
  { t: "Clean commercials: usage, tenure, deliverables — defined upfront", Icon: Layers },
  { t: "Discretion, confidentiality, and controlled information flow", Icon: Lock },
  { t: "Calm handling of high-pressure timelines and last-minute changes", Icon: ShieldCheck },
  { t: "Experience across luxury, celebrity, campaigns, and live productions", Icon: Users },
  { t: "One accountable point of contact from brief to closure", Icon: BadgeCheck },
];

export default function CelebrityManagementWhyDTS() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-24 dts-section">
      {/* ===== SITE-CONSISTENT BACKGROUND ===== */}
      <div className="pointer-events-none absolute inset-0 dts-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />

      {/* Moving glow orbs (teal + pink) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-44 -left-44 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(70,243,216,0.14), transparent 68%)",
        }}
        animate={{ x: [0, 34, -18, 0], y: [0, 16, -12, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -right-48 h-[640px] w-[640px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,63,164,0.12), transparent 70%)",
        }}
        animate={{ x: [0, -26, 18, 0], y: [0, -16, 22, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#050507]" />

      {/* ===== Content ===== */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid gap-12 lg:grid-cols-12 items-start"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: EASE }}
            className="lg:col-span-5"
          >
            {/* Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300">
                Differentiation
              </p>
            </div>

            <h2 className="mt-5 font-heading text-2xl md:text-4xl text-white leading-[1.12]">
              Why Brands{" "}
              <span
                className="
                  bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_18px_rgba(70,243,216,0.16)]
                "
              >
                Trust Us
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-16 bg-white/12" />
              <div className="h-px w-10 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold opacity-60" />
            </div>

            <p className="mt-6 text-sm text-neutral-400 leading-relaxed max-w-sm">
              Celebrity management isn’t about access. It’s about judgment,
              structure, and clean execution that protects brand value.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-8">
              {/* ✅ Always-on DTS color combination (inside container) */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[radial-gradient(circle_at_18%_12%,rgba(70,243,216,0.16),transparent_58%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_88%_18%,rgba(255,63,164,0.13),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_70%_92%,rgba(255,200,92,0.12),transparent_62%)]" />
              <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-[0.22] bg-[linear-gradient(135deg,rgba(70,243,216,0.26),rgba(255,63,164,0.14),rgba(255,200,92,0.12),transparent_58%)]" />

              {/* Top sheen */}
              <div className="pointer-events-none absolute inset-x-0 -top-12 h-28 opacity-35 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />

              <div className="relative grid gap-4">
                {reasons.map((r, i) => {
                  const IconComp = r.Icon;
                  return (
                    <motion.div
                      key={r.t}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                      whileHover={{ x: 6 }}
                      className="
                        group/item relative overflow-hidden
                        rounded-2xl border border-white/10
                        bg-white/[0.03]
                        px-6 py-5
                        transition
                        hover:border-white/20
                        hover:bg-white/[0.045]
                      "
                    >
                      {/* ✅ Always-on tint per row (teal + pink + gold) */}
                      <div className="pointer-events-none absolute inset-0 opacity-[0.38] bg-[radial-gradient(circle_at_18%_18%,rgba(70,243,216,0.12),transparent_62%)]" />
                      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_88%_18%,rgba(255,63,164,0.10),transparent_62%)]" />
                      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_70%_92%,rgba(255,200,92,0.10),transparent_66%)]" />

                      {/* Hover glow (controlled) */}
                      <div className="pointer-events-none absolute -inset-24 opacity-0 transition duration-500 group-hover/item:opacity-100 bg-[radial-gradient(closest-side,rgba(70,243,216,0.16),transparent_65%)]" />

                      {/* Left gradient bar */}
                      <div className="pointer-events-none absolute left-0 top-0 h-full w-px opacity-60 bg-[linear-gradient(to_bottom,transparent,rgba(70,243,216,0.55),rgba(255,63,164,0.38),transparent)]" />

                      <div className="relative flex items-start gap-4">
                        {/* Icon chip */}
                        <div className="mt-[2px] flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] text-white/85">
                          <IconComp className="h-5 w-5" />
                        </div>

                        <p className="text-sm md:text-[15px] text-neutral-300 leading-relaxed">
                          {r.t}
                        </p>
                      </div>

                      {/* bottom gradient line */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-50 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.30),rgba(255,63,164,0.20),transparent)]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Closing line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              className="mt-10 text-base md:text-lg text-white"
            >
              We don’t just manage talent.
              <span className="block text-white/80">
                We manage{" "}
                <span
                  className="
                    bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                    bg-clip-text text-transparent
                    drop-shadow-[0_0_18px_rgba(70,243,216,0.14)]
                  "
                >
                  reputation, timelines, and outcomes.
                </span>
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
