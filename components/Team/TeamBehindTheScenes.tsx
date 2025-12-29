"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: d },
  }),
};

export default function TeamBehindTheScenes() {
  return (
    <section className="relative w-full overflow-hidden bg-dts-black">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-dts-black" />

        {/* ambience glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(255,63,164,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.08),transparent_60%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid (fixed syntax) */}
        <div
          className="
            absolute inset-0 opacity-[0.06]
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />

        {/* dividers */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-6 sm:inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />

        {/* soft blobs */}
        <div className="absolute -top-24 left-1/2 h-72 w-[520px] sm:w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-28 right-[-120px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative mx-auto w-full
          max-w-6xl 2xl:max-w-[1500px]
          px-4 sm:px-6 lg:px-8 2xl:px-32
          py-14 sm:py-18 md:py-22 lg:py-28 xl:py-32 2xl:py-36
        "
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] sm:tracking-[0.30em] text-neutral-300/80">
                Behind the Scenes
              </p>
            </div>
          </div>

          <h2
            className="
              mt-5 sm:mt-6 font-heading leading-tight tracking-[-0.02em] text-white
              text-[26px] sm:text-[30px]
              md:text-[40px] lg:text-[44px]
              2xl:text-[54px]
            "
          >
            Our team works together to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold drop-shadow-[0_0_18px_rgba(70,243,216,0.35)]">
              make ideas come to life.
            </span>
          </h2>

          <div className="mx-auto mt-4 sm:mt-5 h-px w-20 sm:w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-neutral-300/80">
            Collaboration, creativity, and innovation — captured in the moments
            you don’t always see.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={fadeUp}
          custom={0.08}
          className="mt-10 sm:mt-12 lg:mt-14"
        >
          <div className="group relative rounded-[24px] sm:rounded-[28px] p-px">
            {/* subtle frame + hover frame */}
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] opacity-60 blur-[0.6px] bg-linear-to-r from-white/12 via-white/6 to-transparent" />
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/3 backdrop-blur-xl">
              {/* hover wash + veil */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(70,243,216,0.12),rgba(255,63,164,0.10),rgba(216,184,115,0.08))]" />
              <div className="pointer-events-none absolute inset-0 bg-dts-black/25" />

              <img
                src="/group.jfif"
                alt="Team collaboration"
                loading="lazy"
                className="
                  relative w-full object-cover
                  [height:clamp(16rem,45vw,34rem)]
                "
              />

              {/* bottom glow */}
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/12 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>

          <p className="mt-5 sm:mt-6 text-center text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-neutral-400">
            A glimpse of how we build — together, with focus and finesse.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
