// components/home/AboutStrip.tsx
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export default function AboutStrip() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;

    x.set(posX);
    y.set(posY);
  }

  return (
    // 🔴 changed here: added px on small/tablet so corners are visible
   <section className="px-4 md:px-6 lg:px-8 xl:px-0 py-6 md:py-8">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="
      dts-section-shell
      relative overflow-hidden
      mx-auto w-full max-w-6xl
      px-5 py-7
      md:px-8 md:py-9
      2xl:max-w-[1700px] 2xl:px-12
    "
  >
        {/* subtle grid */}
        <div className="dts-grid-overlay" />

        <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between 2xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-dts-neon">
              About Double Trouble Studio
            </p>

            <h2 className="font-heading text-[1.35rem] md:text-[1.5rem] leading-snug text-dts-fog">
              We sit at the intersection of strategy,
              design and culture.
            </h2>

            <p className="text-sm md:text-[15px] text-neutral-200/95">
              A new-age creative and digital studio for lifestyle, luxury,
              design, beauty, hospitality and automotive brands. We help you
              build reputation, scale communities and drive measurable growth
              across digital, PR, web, events and celebrity collaborations.
            </p>
            <div className="pt-4">
  <a
    href="/about"
    className="
      inline-flex items-center justify-center
      rounded-full
      px-5 py-2.5
      text-[11px] font-semibold uppercase tracking-[0.22em]
      text-neutral-200
      border border-white/15
      bg-white/5 backdrop-blur-md
      transition-all duration-300

      hover:border-dts-neon
      hover:text-dts-neon
      hover:shadow-[0_0_22px_rgba(70,243,216,0.35)]
    "
  >
    Explore
  </a>
</div>

          </div>

          {/* RIGHT :: 3D TILT CARD */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            className="
              relative w-full max-w-xs md:max-w-sm
              rounded-2xl border border-white/10 bg-white/5 
              backdrop-blur-xl px-6 py-6 
              shadow-[0_18px_45px_rgba(0,0,0,0.4)]
              transition-all duration-300
              hover:shadow-[0_25px_60px_rgba(70,243,216,0.25)]
            "
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-dts-neon/20" />

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_10px_rgba(70,243,216,0.8)]" />
                <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-300">
                  Not just an agency
                </p>
              </div>

              <p className="text-sm text-neutral-300/95">
                We think in ecosystems—not isolated posts, press clips or events.
              </p>

              <div>
                <p className="text-sm leading-relaxed text-neutral-300/90">
                  From decks and content calendars to launch nights and media
                  stories—
                </p>
                <p className="mt-1 text-sm font-semibold text-dts-gold">
                  we stay until the brand story feels complete.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
