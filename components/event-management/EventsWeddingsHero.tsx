// components/events-weddings/EventsWeddingsHero.tsx
"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function EventsWeddingsHero() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Super subtle tilt (premium, not gimmicky)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rx = useSpring(useTransform(my, [-0.5, 0.5], [3.5, -3.5]), {
    stiffness: 140,
    damping: 22,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
    stiffness: 140,
    damping: 22,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      mx.set(px - 0.5);
      my.set(py - 0.5);
    };

    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <section className="relative overflow-hidden">
      {/* Background (expensive + minimal) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.14),transparent_60%),linear-gradient(to_bottom,#050507,#050507)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[110px_110px]" />

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
          {/* Hero card */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="
              relative overflow-hidden rounded-[34px]
              border border-white/10
              bg-white/[0.035]
              shadow-[0_40px_120px_-70px_rgba(0,0,0,0.95)]
            "
          >
            {/* Premium border glow on hover (not neon) */}
            <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-[radial-gradient(900px_circle_at_25%_0%,rgba(70,243,216,0.18),transparent_60%)]" />

            {/* Top sheen */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(255,255,255,0.08),transparent_55%)]" />

            <div
              className="relative px-6 py-14 sm:px-10 md:px-12 md:py-16"
              style={{ transform: "translateZ(14px)" }}
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
                className="text-[11px] uppercase tracking-[0.34em] text-neutral-400"
              >
                Events &amp; Weddings
              </motion.p>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.04 }}
                className="mt-4 font-heading text-4xl md:text-6xl leading-[1.05] text-white"
              >
                Experiences,{" "}
                <span
                  className="
                    bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                    bg-clip-text text-transparent
                    drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
                  "
                >
                  Thoughtfully Designed.
                </span>
                <span className="block text-white/85">
                  Moments,{" "}
                  <span
                    className="
                      bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                      bg-clip-text text-transparent
                      drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]
                    "
                  >
                    Impeccably Executed.
                  </span>
                </span>
              </motion.h1>

              {/* Supporting copy */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
                className="mt-6 max-w-2xl text-base md:text-lg text-neutral-300 leading-relaxed"
              >
                From luxury weddings to high-impact brand events, we plan and
                execute experiences that feel effortless, immersive, and
                intentional.
              </motion.p>

              {/* Mini trust line */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
                className="mt-8 flex flex-wrap items-center gap-3 text-xs text-neutral-400"
              >
                <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1">
                  Design-led planning
                </span>
                <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1">
                  Seamless on-ground execution
                </span>
                <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1">
                  Discreet, controlled, premium
                </span>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.14 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {/* Primary — NAVBAR CTA STYLE */}
                <Link href="/contact" className="inline-flex scale-y-125 dts-animated-border">
                  <span>Plan My Event</span>
                </Link>

                {/* Secondary — soft glass button */}
                <Link
                  href="/book-a-call"
                  className="
                    group relative inline-flex items-center justify-center
                    rounded-full px-6 py-3 text-sm font-medium
                    border border-white/14 bg-white/2 text-white
                    transition
                    hover:bg-white/6
                    hover:-translate-y-0.5
                    active:translate-y-0
                  "
                >
                  <span className="relative">Book a Strategy Call</span>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
                className="mt-6 text-sm text-neutral-400"
              >
                Every event is custom-built. No templates. No chaos.
              </motion.p>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-[#050507]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
