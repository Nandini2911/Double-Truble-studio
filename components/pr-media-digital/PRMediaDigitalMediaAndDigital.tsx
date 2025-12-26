// components/pr-media-digital/PRMediaDigitalMediaAndDigital.tsx
"use client";

import { motion } from "framer-motion";
import {
  Target,
  Handshake,
  Sparkles,
  Star,
  LayoutGrid,
  Megaphone,
  Users,
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

const cards = [
  {
    label: "Media Strategy & Visibility",
    headline: "Your presence, carefully placed.",
    bullets: [
      { Icon: Target, text: "Targeted editorial placements" },
      { Icon: Handshake, text: "Media partnerships & collaborations" },
      { Icon: Sparkles, text: "Event PR & launch amplification" },
      { Icon: Star, text: "Influencer & celebrity integrations" },
    ],
  },
  {
    label: "Digital Marketing",
    headline: "Performance-led, without diluting brand value.",
    bullets: [
      { Icon: LayoutGrid, text: "Social media strategy & content direction" },
      { Icon: Megaphone, text: "Paid campaigns (Meta, Google, YouTube)" },
      { Icon: TrendingUp, text: "Influencer & creator activations" },
      { Icon: Users, text: "Community building & audience engagement" },
    ],
  },
];

export default function PRMediaDigitalMediaAndDigital() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      {/* ===== Background (same family as your FAQs / CTA) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 dts-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_12%_12%,rgba(70,243,216,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(900px_circle_at_88%_20%,rgba(255,63,164,0.12),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(900px_circle_at_60%_120%,rgba(216,184,115,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {cards.map((c, idx) => (
            <motion.article
              key={c.label}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10 bg-white/5 backdrop-blur-xl
                p-7 md:p-8
                transition-all duration-500
                hover:border-dts-neon/55
                hover:bg-white/7
                hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_26px_80px_rgba(0,0,0,0.72)]
              "
            >
              {/* ✅ ALWAYS-ON color effect (teal + pink + gold) */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.38] bg-[radial-gradient(700px_circle_at_16%_12%,rgba(70,243,216,0.16),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(700px_circle_at_92%_18%,rgba(255,63,164,0.12),transparent_66%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(700px_circle_at_55%_120%,rgba(216,184,115,0.10),transparent_62%)]" />

              {/* ✅ ALWAYS-ON inner edge */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-[0.24] bg-[linear-gradient(135deg,rgba(70,243,216,0.22),transparent_44%,rgba(255,63,164,0.12),transparent_72%,rgba(216,184,115,0.10))]" />

              {/* top accent line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.55),rgba(255,63,164,0.36),rgba(216,184,115,0.28),transparent)] opacity-70" />

              {/* extra hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(700px_circle_at_18%_0%,rgba(70,243,216,0.18),transparent_60%)]" />

              {/* corner cut */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rotate-45 border border-white/10 bg-white/[0.02]" />

              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.34em] text-neutral-400">
                  {c.label}
                </p>

                <h3 className="mt-3 text-lg md:text-xl font-semibold text-white">
                  {c.headline}
                </h3>

                <ul className="mt-6 space-y-4">
                  {c.bullets.map(({ Icon, text }, i) => (
                    <li key={text} className="flex gap-3">
                      <span
                        className="
                          mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl
                          border border-white/10 bg-white/4
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                          transition-all duration-300
                          group-hover:border-dts-neon/55
                          group-hover:bg-dts-neon/10
                          group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.14),0_10px_26px_rgba(70,243,216,0.10)]
                        "
                      >
                        <Icon
                          size={18}
                          className="text-white/80"
                          aria-hidden="true"
                        />
                      </span>

                      <p className="text-sm md:text-[15px] leading-relaxed text-neutral-200/85">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* divider like your FAQ */}
                <div className="mt-8 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />

                {/* small footer */}
                <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                  Structured • premium • measurable
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
