"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const problems = [
  {
    title: "Confusion at entry",
    desc: "Multiple lists, unclear confirmations, last-minute calls, and guests waiting without answers.",
  },
  {
    title: "No clear system",
    desc: "VIPs, media, family, and partners arriving together with no defined access flow.",
  },
  {
    title: "Last-minute chaos",
    desc: "Teams reacting instead of managing, decisions being made on the spot.",
  },
  {
    title: "Reputation risk",
    desc: "A poor first impression that reflects badly on the host, brand, or event.",
  },
];

export default function GuestManagementSolves() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* premium grid + extra glows (same family as navbar/hero) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:160px_160px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.14),transparent_60%)]" />

      {/* floating ambience (kept, tuned to palette) */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-dts-neon/10 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-dts-neon-pink/10 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-dts-gold/6 blur-3xl"
        animate={{ y: [0, 26, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* dividers */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center">
            <span
              className="
                inline-flex items-center rounded-full
                border border-white/10 bg-white/5
                px-5 py-2
                text-[10px] sm:text-[11px]
                uppercase tracking-[0.28em]
                text-neutral-300/80
                backdrop-blur-xl
              "
            >
              Why guest management matters
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            What usually goes wrong
            <br />
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
              "
            >
              before we step in.
            </span>
          </h2>
        </motion.div>

        {/* ===== PROBLEMS GRID (premium color ring cards) ===== */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i * 0.08}
              className="group relative"
            >
              {/* gradient glow ring */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.32),rgba(216,184,115,0.30))]
                  blur-[14px]
                "
              />

              {/* Card body */}
              <div
                className="
                  relative rounded-2xl
                  border border-white/10
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                  p-6 md:p-7
                  backdrop-blur-xl
                  transition-all duration-500
                  group-hover:border-dts-neon/60
                  group-hover:bg-[linear-gradient(180deg,rgba(70,243,216,0.06),rgba(255,255,255,0.02))]
                  group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.20),0_22px_70px_rgba(0,0,0,0.72)]
                "
              >
                {/* subtle sheen */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-700
                    bg-[radial-gradient(600px_circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]
                  "
                />

                {/* left accent line */}
                <span
                  className="
                    absolute left-0 top-6 h-10 w-px
                    bg-[linear-gradient(to_bottom,#46F3D8,#FF3FA4,#D8B873)]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                <h3 className="text-[15px] font-medium text-white">{item.title}</h3>

                <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/75">
                  {item.desc}
                </p>

                {/* tiny divider */}
                <div
                  className="
                    mt-6 h-px w-full bg-white/10
                    transition-all duration-500
                    group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.35}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-200/80">
            Guest management isn’t about managing people.
            <br />
            It’s about managing pressure — calmly and professionally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
