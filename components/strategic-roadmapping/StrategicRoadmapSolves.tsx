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

const issues = [
  {
    title: "Lack of Clear Vision",
    desc: "Without a strategic roadmap, teams lack direction and focus, leading to fragmented efforts and missed opportunities.",
  },
  {
    title: "Misaligned Objectives",
    desc: "When the goals of different teams and departments don’t align, projects suffer from inefficiencies and conflicting priorities.",
  },
  {
    title: "Slow Decision Making",
    desc: "A lack of strategic foresight often leads to reactive decisions, creating delays and reducing the ability to adapt to new trends quickly.",
  },
  {
    title: "Missed Growth Opportunities",
    desc: "Without a strategic plan, companies fail to capitalize on key opportunities that could accelerate their growth or market presence.",
  },
];

export default function StrategicRoadmapSolves() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ================= AMBIENT BACKGROUND (DTS) ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,63,164,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.08),transparent_60%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* floating blobs (kept from your version) */}
        <motion.div
          className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-dts-neon/10 blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-white/5 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-300/80">
              Why Strategic Roadmap Matters
            </p>
          </div>
<h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] md:text-[44px]">
  <span className="text-white">
    What usually goes wrong
  </span>
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
    before we step in.
  </span>
</h2>


          <div className="mx-auto mt-6 h-px w-28 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />
        </motion.div>

        {/* ================= ISSUES GRID ================= */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {issues.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i * 0.08}
              className="group relative rounded-2xl p-px"
            >
              {/* gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-7 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_55px_rgba(0,0,0,0.65)]">
                {/* hover wash */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.18),rgba(255,63,164,0.14),rgba(216,184,115,0.10))]" />
                {/* readability veil */}
                <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

                {/* Left accent line */}
                <span className="absolute left-0 top-6 h-10 w-px bg-dts-neon/50 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative">
                  {/* Title – gradient on hover (text only) */}
                  <h3 className="text-[15px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                    {item.desc}
                  </p>
                </div>

                {/* bottom glow */}
                <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          <p className="text-[14px] leading-relaxed text-neutral-300/80">
            Strategic planning isn’t just about goals.
            <br />
            It’s about defining your path forward — intelligently and efficiently.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
