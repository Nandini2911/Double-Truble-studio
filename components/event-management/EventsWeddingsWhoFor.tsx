// components/celebrity-management/CelebrityManagementWhoFor.tsx
"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const points = [
  "You want the right face — not the biggest name",
  "You care about brand-fit, audience-fit, and timing",
  "You want clean commercials (usage, tenure, deliverables) — upfront",
  "You prefer discreet coordination over public chaos",
  "You want one accountable team managing all stakeholders",
  "You want execution that protects reputation, not risks it",
];

export default function CelebrityManagementWhoFor() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-28 dts-section">
      {/* ===== SITE-CONSISTENT BACKGROUND ===== */}
      <div className="pointer-events-none absolute inset-0 dts-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />

      {/* Soft glows (teal + pink like navbar) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-56 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full blur-3xl opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(70,243,216,0.12), transparent 70%)",
        }}
        animate={{ x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute -bottom-64 -right-48 h-[720px] w-[720px] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,63,164,0.10),transparent_62%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#050507]" />

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-12 items-start">
          {/* LEFT — EDITORIAL STATEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: EASE }}
            className="lg:col-span-5"
          >
            {/* chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300">
                Fit &amp; Discretion
              </p>
            </div>

            <h2 className="mt-6 font-heading text-3xl md:text-5xl text-white leading-[1.05]">
              This works best for{" "}
              <span
                className="
                  bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                  bg-clip-text text-transparent
                  drop-shadow-[0_0_18px_rgba(70,243,216,0.16)]
                "
              >
                brands that value control.
              </span>
            </h2>

            <p className="mt-6 text-sm md:text-[15px] text-neutral-400 leading-relaxed max-w-md">
              If a celebrity association impacts reputation, visibility, or brand
              equity — you need structure, clarity, and discreet execution.
            </p>

            {/* Signature strip (with DTS color combo) */}
            <div className="mt-10 relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              {/* always-on color wash */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.42] bg-[radial-gradient(circle_at_14%_18%,rgba(70,243,216,0.14),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_92%_20%,rgba(255,63,164,0.12),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_70%_92%,rgba(255,200,92,0.12),transparent_62%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.22] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />

              {/* top gradient line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.45),rgba(255,63,164,0.35),rgba(255,200,92,0.28),transparent)] opacity-70" />

              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                  Our approach
                </p>
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  We shortlist with intent, lock commercials cleanly, and manage
                  talent + brand teams without noise.
                </p>

                <div className="mt-5 h-px w-full bg-white/10 transition-all duration-500 hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#FFC85C,transparent)]" />

                <p className="mt-4 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                  Fit • Discreet • Clean execution
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FLOATING STATEMENT CARDS */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="
                    group relative overflow-hidden
                    rounded-3xl border border-white/10
                    bg-[#06060A]/60
                    p-7
                    shadow-[0_20px_60px_rgba(0,0,0,0.60)]
                  "
                >
                  {/* ✅ Always-on DTS color combination */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.46] bg-[radial-gradient(circle_at_18%_18%,rgba(70,243,216,0.14),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_88%_20%,rgba(255,63,164,0.12),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_70%_92%,rgba(255,200,92,0.12),transparent_62%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.22] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />

                  {/* Corner editorial cut */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-45 border border-white/10 bg-white/[0.02]" />

                  <p className="relative text-sm md:text-[15px] text-neutral-200 leading-relaxed">
                    {p}
                  </p>

                  {/* Underline (fix: group-hover works now) */}
                  <div className="relative mt-6 h-px w-14 bg-white/10 transition-all duration-300 group-hover:w-24 group-hover:bg-[rgba(70,243,216,0.40)]" />

                  {/* Hover ring (teal + pink + gold) */}
                  <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.32),rgba(255,63,164,0.22),rgba(255,200,92,0.18),rgba(255,255,255,0.08))]" />

                  {/* bottom gradient line */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-60 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.32),rgba(255,63,164,0.22),transparent)]" />
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="mt-10 text-sm md:text-[15px] text-neutral-400"
            >
              If you want the association to feel intentional — and the execution
              to feel invisible — this is where we align.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
