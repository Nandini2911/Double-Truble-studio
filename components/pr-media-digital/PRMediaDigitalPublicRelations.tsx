// components/pr-media-digital/PRMediaDigitalPublicRelations.tsx
"use client";

import { motion } from "framer-motion";
import {
  Newspaper,
  Mic2,
  FileText,
  Shield,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const row = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const prItems = [
  {
    Icon: Newspaper,
    title: "Media Relations",
    text: "Print, digital & broadcast outreach with precise positioning.",
  },
  {
    Icon: Mic2,
    title: "Editorial & Interviews",
    text: "Founder profiles, features, brand narratives and spokesperson prep.",
  },
  {
    Icon: FileText,
    title: "Press & Launch Comms",
    text: "Press releases, launch notes, media kits and announcement strategy.",
  },
  {
    Icon: Shield,
    title: "Reputation & Crisis",
    text: "Quiet risk handling, reputation reinforcement, and narrative control.",
  },
];

export default function PRMediaDigitalPublicRelations() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      {/* ===== Background: DTS family (teal + pink + gold) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* premium glows */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_12%_12%,rgba(70,243,216,0.16),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(1000px_circle_at_88%_22%,rgba(255,63,164,0.14),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(1000px_circle_at_60%_120%,rgba(216,184,115,0.12),transparent_62%)]" />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.075] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />

        {/* micro dots */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:24px_24px]" />

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
          {/* ===== Left ===== */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <div className="inline-flex items-center gap-3">
              <span className="h-[10px] w-[10px] rounded-full bg-[rgba(70,243,216,0.95)] shadow-[0_0_28px_rgba(70,243,216,0.35)]" />
              <p className="text-[11px] uppercase tracking-[0.34em] text-neutral-400">
                What we do
              </p>
            </div>

            <h2 className="mt-4 font-heading text-2xl text-white md:text-3xl">
              Public Relations
            </h2>

            <p className="mt-4 text-base leading-relaxed text-neutral-300">
              Strategic storytelling designed to earn credibility—built for
              premium brands that want authority, not noise.
            </p>

            {/* chips */}
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
              {["Narrative-led", "Media-ready", "Discreet handling"].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs text-white/70 backdrop-blur"
                >
                  {x}
                </span>
              ))}
            </motion.div>

            <div className="mt-7 h-px w-28 bg-gradient-to-r from-[rgba(70,243,216,0.75)] via-white/10 to-transparent" />
          </motion.div>

          {/* ===== Right: color-rich card + color-rich rows ===== */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="lg:col-span-8"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              {/* Always-on color bed (matches your FAQ / hero language) */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(900px_circle_at_18%_12%,rgba(70,243,216,0.16),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(900px_circle_at_92%_18%,rgba(255,63,164,0.12),transparent_66%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(900px_circle_at_55%_120%,rgba(216,184,115,0.10),transparent_62%)]" />

              {/* top accent line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.55),rgba(255,63,164,0.36),rgba(216,184,115,0.28),transparent)] opacity-70" />

              {/* corner sheen */}
              <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_62%)]" />

              {/* hover glow boost */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.18),transparent_55%)]" />

              {/* small top label */}
              <div className="relative mb-5 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 text-xs text-white/60">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                    <Sparkles size={16} className="text-white/70" />
                  </span>
                  <span className="uppercase tracking-[0.26em]">
                    Core PR Deliverables
                  </span>
                </div>
                <div className="hidden sm:block text-xs text-white/45">
                  Built to compound trust.
                </div>
              </div>

              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="relative space-y-3"
              >
                {prItems.map(({ Icon, title, text }, i) => (
                  <motion.li
                    key={title}
                    variants={row}
                    className="
                      group/row relative overflow-hidden rounded-2xl
                      border border-white/10 bg-white/[0.04] backdrop-blur
                      p-4 md:p-5
                      transition-all duration-500
                      hover:border-dts-neon/55
                      hover:bg-white/[0.06]
                      hover:shadow-[0_0_0_1px_rgba(70,243,216,0.14),0_18px_60px_rgba(0,0,0,0.55)]
                    "
                  >
                    {/* ✅ Always-on row color (subtle) */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.24] bg-[radial-gradient(520px_circle_at_18%_12%,rgba(70,243,216,0.14),transparent_60%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(520px_circle_at_92%_18%,rgba(255,63,164,0.10),transparent_66%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[radial-gradient(520px_circle_at_55%_120%,rgba(216,184,115,0.09),transparent_62%)]" />

                    {/* hover ring */}
                    <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.34),transparent_42%,rgba(255,63,164,0.16),transparent_70%,rgba(216,184,115,0.14))]" />

                    {/* left accent */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[rgba(70,243,216,0.65)] via-transparent to-transparent opacity-55 transition-opacity duration-300 group-hover/row:opacity-100" />

                    <div className="relative flex gap-4">
                      <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover/row:border-dts-neon/55 group-hover/row:bg-dts-neon/10 group-hover/row:shadow-[0_0_0_1px_rgba(70,243,216,0.12),0_10px_26px_rgba(70,243,216,0.10)]">
                        <Icon size={18} className="text-white/75" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-medium text-white md:text-[15px]">
                            {title}
                          </p>

                          <span className="inline-flex items-center gap-1 text-[11px] text-white/45 opacity-0 transition-all duration-300 group-hover/row:opacity-100 translate-x-1 group-hover/row:translate-x-0">
                            <span>Detail</span>
                            <ArrowUpRight size={14} />
                          </span>
                        </div>

                        <p className="mt-1 text-sm leading-relaxed text-neutral-200/80 md:text-[15px]">
                          {text}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              {/* divider like FAQ */}
              <div className="relative mt-7 h-px w-full bg-white/10 transition-all duration-500 hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
