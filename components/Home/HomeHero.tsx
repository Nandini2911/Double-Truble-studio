// components/home/HomeHero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden 2xl:min-h-[86vh]">
      {/* SOFT BG GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute -left-40 top-0 
            h-72 w-72 rounded-full blur-2xl
            bg-[radial-gradient(circle,rgba(70,243,216,0.2),transparent_60%)]
            2xl:h-88 2xl:w-88
          "
        />
        <div
          className="
            absolute -right-28 -bottom-10 
            h-80 w-80 rounded-full blur-3xl
            bg-[radial-gradient(circle,rgba(255,63,164,0.25),transparent_60%)]
            2xl:h-100 2xl:w-100
          "
        />
      </div>

      {/* MAIN WRAPPER */}
      <div
        className="
          relative mx-auto flex w-full flex-col
          gap-14 px-6 py-16
          md:flex-row md:items-center md:justify-between
          max-w-7xl

          /* 4K behaviour – go full width, only keep padding */
          2xl:max-w-none
          2xl:px-32       /* left/right padding on 2560px */
          2xl:py-24
          2xl:gap-32
        "
      >
        {/* LEFT :: TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl space-y-7 2xl:max-w-2xl 2xl:space-y-9"
        >
          {/* TAGLINE LINE */}
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-neutral-400 2xl:text-[12px]">
            <span className="inline-flex h-px w-10 bg-neutral-500 2xl:w-12" />
            <span>Double Trouble Studio</span>
          </div>

          {/* HEADING */}
          <h1
            className="
              font-heading leading-tight tracking-tight
              text-3xl md:text-4xl lg:text-[2.8rem]
              2xl:text-[3.8rem] 2xl:leading-[1.05]
            "
          >
            <span className="block text-dts-fog">DOUBLE THE IDEAS.</span>
            <span
              className="
                mt-1 inline-block
                bg-linear-to-r
                from-[#46F3D8]
                via-[#FF3FA4]
                to-[#C9A96A]
                bg-clip-text text-transparent
              "
            >
              DOUBLE THE IMPACT.
            </span>
          </h1>

          {/* SHORT SUBTEXT */}
          <p className="text-sm md:text-[15px] text-neutral-300/90 leading-relaxed 2xl:text-base 2xl:max-w-xl">
            Digital, PR, web and experiences for premium brands that want to
            look sharp, speak with personality and stay top-of-mind.
          </p>

          {/* CTAS */}
          <div className="flex flex-wrap items-center gap-5 pt-1 2xl:gap-7">
            <Link href="/contact" className="dts-animated-border 2xl:text-sm">
              <span>START A PROJECT</span>
            </Link>

            <Link
              href="/work"
              className="
                text-[11px] uppercase tracking-[0.22em] text-neutral-300
                transition-colors hover:text-dts-neon
                2xl:text-[12px]
              "
            >
              View our work
            </Link>
          </div>
        </motion.div>

        {/* RIGHT :: “DTS STACK” CARD */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="w-full max-w-sm md:max-w-md 2xl:max-w-xl"
        >
          <div className="relative">
            {/* Gradient frame */}
            <div
              className="
                absolute -inset-[1.5px] rounded-4xl
                bg-linear-to-br
                from-dts-neon/70 via-dts-neon-pink/50 to-dts-gold/70
                opacity-90
                2xl:-inset-0.5
              "
            />

            {/* Inner card */}
            <div
              className="
                relative flex flex-col gap-6
                rounded-[1.9rem]
                border border-white/10
                bg-dts-black/95
                px-6 py-7
                shadow-[0_18px_45px_rgba(0,0,0,0.7)]
                2xl:gap-8 2xl:rounded-[2.2rem] 2xl:px-9 2xl:py-10
              "
            >
              {/* Top label + pill */}
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dts-neon 2xl:text-[12px]">
                  The DTS stack
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-300 2xl:px-4 2xl:text-[11px]">
                  Strategy-first
                </span>
              </div>

              {/* One clean sentence */}
              <p className="text-sm leading-relaxed text-neutral-200/92 2xl:text-[15px]">
                One partner for everything your brand needs to be seen, heard
                and remembered.
              </p>

              {/* Simple vertical list */}
              <div className="space-y-3 text-[11px] md:text-[12px] 2xl:space-y-5 2xl:text-[13px]">
                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_10px_rgba(70,243,216,0.9)] 2xl:h-3 2xl:w-3" />
                  <div>
                    <p className="font-semibold text-dts-neon">Digital &amp; Web</p>
                    <p className="leading-snug text-neutral-300/90">
                      Social, websites, content systems &amp; launches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-gold 2xl:h-3 2xl:w-3" />
                  <div>
                    <p className="font-semibold text-dts-gold">PR &amp; Media</p>
                    <p className="leading-snug text-neutral-300/90">
                      Features, interviews &amp; strong brand narratives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-neon-pink 2xl:h-3 2xl:w-3" />
                  <div>
                    <p className="font-semibold text-dts-neon-pink">
                      Events &amp; Celebs
                    </p>
                    <p className="leading-snug text-neutral-300/90">
                      Launches, IPs, celebrity collaborations &amp; AI video.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.18em] text-neutral-400 2xl:mt-3 2xl:pt-4 2xl:text-[11px]">
                <span className="text-dts-neon">Grow • Glow • Get noticed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
