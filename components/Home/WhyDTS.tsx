"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Strategy-first",
    highlight: "text-dts-neon",
    text: "We build brands with clarity — not guesswork. Every move ties back to business intent.",
  },
  {
    title: "Story-led",
    highlight: "text-dts-gold",
    text: "Your brand feels the same everywhere — Instagram, press, events, websites, celebrity collabs.",
  },
  {
    title: "Performance-aware",
    highlight: "text-dts-neon-pink",
    text: "Aesthetic + analytics. We optimise, refine and engineer outcomes that compound over time.",
  },
];

const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

export default function WhyDTS() {
  return (
    <section className="py-14 md:py-20 2xl:py-24">

      {/* ✅ ONLY ONE MOTION WRAPPER (KEEP THIS) */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        className="
          mx-auto grid
          max-w-6xl px-6
          md:grid-cols-[1fr_auto_1fr] md:gap-16
          gap-10
          2xl:max-w-[1700px]
          2xl:px-16
          2xl:gap-24
        "
      >

        {/* LEFT SIDE */}
        <div className="space-y-5 2xl:space-y-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400 2xl:text-[12px]">
            Why Double Trouble Studio
          </p>

          <h2 className="font-heading text-2xl md:text-[1.6rem] leading-snug text-dts-fog 2xl:text-[2rem]">
            We fix the two biggest brand problems —
            <br />
            <span className="bg-linear-to-r from-dts-neon to-dts-gold bg-clip-text text-transparent">
              visibility
            </span>{" "}
            &amp;
            <span className="text-dts-gold"> trust</span>.
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-neutral-300/90 md:text-[15px] 2xl:text-base 2xl:max-w-lg">
            Growth isn’t about volume. It’s about meaning. We merge digital,
            PR, events, celebrity integrations and{" "}
            <a
              href="https://www.dtsworld.in/services/web-development-marketing"
              className="text-dts-gold hover:text-[#ff9a9e] underline"
            >
              web experience
            </a>{" "}
            into one clear brand language.
          </p>
        </div>

        {/* CENTER DIVIDER (NO MOTION — LIGHTER) */}
        <div className="relative hidden items-stretch md:flex">
          <div className="w-0.5 rounded-full bg-linear-to-b from-dts-neon via-transparent to-dts-neon-pink opacity-40" />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 2xl:space-y-7">
          {PILLARS.map((item) => (
            <div
              key={item.title}
              className="
                group relative
                pl-6 transition-all duration-300
                hover:pl-7
              "
            >
              {/* DOT */}
              <span
                className={`
                  absolute left-0 top-2
                  h-2.5 w-2.5 rounded-full
                  ${item.highlight}
                  shadow-[0_0_10px_rgba(255,255,255,0.2)]
                  2xl:h-3 2xl:w-3
                `}
              />

              {/* TITLE */}
              <h3
                className={`
                  text-[13px] uppercase tracking-[0.2em]
                  font-medium
                  ${item.highlight}
                  2xl:text-[14px]
                `}
              >
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-300/90 2xl:text-[15px]">
                {item.text}
              </p>

              {/* UNDERLINE */}
              <div
                className="
                  mt-3 h-px w-10 bg-white/10
                  transition-all duration-300
                  group-hover:w-20 group-hover:bg-dts-neon/50
                "
              />
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}