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
    title: "Inefficient Editing",
    desc: "Manual editing slows down the process, preventing you from keeping up with trends and losing engagement potential.",
  },
  {
    title: "Inconsistent Visuals",
    desc: "Lack of coherent style or visual quality, resulting in mismatched content that lacks impact and brand alignment.",
  },
  {
    title: "High Production Costs",
    desc: "Traditional video production requires expensive equipment, long timelines, and extensive crew involvement, making it costly and inefficient.",
  },
  {
    title: "Limited Creativity",
    desc: "Conventional tools restrict creative possibilities, making it harder to produce unique, standout content that captivates audiences.",
  },
];

export default function AIVideoVFXSolves() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#050507]">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* base */}
        <div className="absolute inset-0 bg-[#050507]" />

        {/* neon + pink ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,63,164,0.14),transparent_55%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

        {/* floating orbs */}
        <motion.div
          className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-dts-neon/12 blur-3xl"
          animate={{ y: [0, 44, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 top-16 h-96 w-96 rounded-full bg-dts-neon-pink/10 blur-3xl"
          animate={{ y: [0, -34, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-300/80">
              Why AI Video & VFX matters
            </p>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[46px]">
            What usually goes wrong
            <br />
            before we step in.
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {problems.map((item, i) => (
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

              {/* card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-7 transition-all duration-300 group-hover:border-white/15 group-hover:-translate-y-0.5">
                {/* gradient wash */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,rgba(70,243,216,0.22),rgba(255,63,164,0.20),rgba(212,175,55,0.16))]" />

                {/* dark veil for readability */}
                <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-55 transition-opacity duration-300 bg-[#050507]" />

                <span className="absolute left-0 top-6 h-10 w-px bg-dts-neon/55 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative">
                  {/* title – gradient text on hover */}
                  <h3 className="text-[15px] font-medium text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/70 transition-colors duration-300 group-hover:text-neutral-200/85">
                    {item.desc}
                  </p>

                  <div className="mt-5 h-px w-10 bg-white/10 group-hover:bg-dts-neon/60 transition" />
                </div>
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
            AI Video & VFX isn’t just about creating stunning visuals.
            <br />
            It’s about unleashing boundless creativity and transforming the impossible into reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
