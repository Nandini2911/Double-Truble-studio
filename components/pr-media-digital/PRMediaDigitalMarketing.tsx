// components/pr-media-digital/PRMediaDigitalMarketing.tsx
"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Megaphone, TrendingUp, Users } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const digitalItems = [
  { Icon: LayoutGrid, text: "Social media strategy & content direction" },
  { Icon: Megaphone, text: "Paid campaigns (Meta, Google, YouTube)" },
  { Icon: TrendingUp, text: "Influencer & creator activations" },
  { Icon: Users, text: "Community building & audience engagement" },
];

export default function PRMediaDigitalMarketing() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      {/* ===== Background (match your new intro + FAQs) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 dts-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_10%_12%,rgba(70,243,216,0.14),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(900px_circle_at_90%_20%,rgba(255,63,164,0.12),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(900px_circle_at_60%_120%,rgba(216,184,115,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-10 lg:grid-cols-12 lg:items-start"
        >
          {/* ===== Left heading ===== */}
          <motion.div variants={item} className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(70,243,216,0.9)]" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300">
                What we do
              </p>
            </div>

            <h2 className="mt-6 font-heading text-2xl md:text-4xl text-white leading-[1.1]">
              Digital Marketing
              <span className="block text-white/80">with brand discipline.</span>
            </h2>

            <p className="mt-5 max-w-sm text-[14px] md:text-[15px] leading-relaxed text-neutral-300/80">
              Performance-led growth—without diluting premium perception. Strategy,
              content direction, paid, and creators—mapped as one system.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-16 bg-white/12" />
              <div className="h-px w-10 bg-[rgba(70,243,216,0.35)]" />
            </div>

            <p className="mt-6 text-[12px] uppercase tracking-[0.28em] text-neutral-500">
              Measure • refine • scale
            </p>
          </motion.div>

          {/* ===== Right: Cards (show color effect ALWAYS) ===== */}
          <motion.div variants={item} className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {digitalItems.map(({ Icon, text }, idx) => (
                <motion.article
                  key={text}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.05 + idx * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="
                    group relative overflow-hidden rounded-3xl
                    border border-white/10 bg-white/5 backdrop-blur-xl
                    p-6 md:p-7
                    transition-all duration-500
                    hover:border-dts-neon/55
                    hover:bg-white/7
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_22px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* ✅ ALWAYS-ON color wash (teal + pink + gold) */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.38] bg-[radial-gradient(650px_circle_at_16%_12%,rgba(70,243,216,0.16),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(650px_circle_at_92%_18%,rgba(255,63,164,0.12),transparent_66%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(650px_circle_at_55%_120%,rgba(216,184,115,0.10),transparent_62%)]" />

                  {/* ✅ ALWAYS-ON inner edge */}
                  <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-[0.26] bg-[linear-gradient(135deg,rgba(70,243,216,0.22),transparent_44%,rgba(255,63,164,0.12),transparent_70%,rgba(216,184,115,0.10))]" />

                  {/* top accent line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.55),rgba(255,63,164,0.36),rgba(216,184,115,0.28),transparent)] opacity-70" />

                  {/* extra hover pop */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(650px_circle_at_18%_0%,rgba(70,243,216,0.18),transparent_60%)]" />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center rounded-2xl
                        border border-white/12 bg-white/5
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-300
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.16),0_12px_34px_rgba(70,243,216,0.12)]
                      "
                    >
                      <Icon className="h-5 w-5 text-white/80" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                        Capability
                      </p>
                      <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-neutral-200/90">
                        {text}
                      </p>

                      <div className="mt-5 h-px w-12 bg-white/10 transition-all duration-300 group-hover:w-20 group-hover:bg-dts-neon/45" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* bottom divider */}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
