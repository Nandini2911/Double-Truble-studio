// components/home/FinalCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(70,243,216,0.14),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative mx-auto max-w-[780px] md:max-w-[900px] text-center"
      >
        <p className="text-[11px] uppercase tracking-[0.28em] text-dts-neon/90">
          Let’s begin
        </p>

        <h2 className="mt-4 font-heading text-[1.45rem] sm:text-[1.7rem] md:text-[2.1rem] text-dts-fog leading-[1.15]">
          Ready to make your brand{" "}
          <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]">
            impossible to ignore?
          </span>
        </h2>

        <p className="mt-5 text-sm sm:text-[15px] md:text-base text-neutral-300/90 leading-relaxed max-w-2xl mx-auto">
          Tell us where you are, what you’re building, and what’s slowing you down.
          We’ll come back with clarity, structure, and a plan — not a recycled pitch.
        </p>

        {/* HERO / NAVBAR STYLE CTA */}
        <div className="mt-9 flex justify-center">
          <Link href="/contact" className="scale-y-125 dts-animated-border">
            <span>START PROJECT</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
