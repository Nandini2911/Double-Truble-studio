"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function TeamMembers() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14 },
      show: (d = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: EASE, delay: d },
      }),
    }),
    []
  );

  // If not mounted (SSR output), render plain divs (no motion props)
  const Section: any = mounted ? motion.section : "section";
  const Div: any = mounted ? motion.div : "div";

  return (
    <Section
      {...(mounted
        ? {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.18 },
            transition: { duration: 0.55, ease: EASE },
          }
        : {})}
      className="relative overflow-hidden w-full bg-[#050507]"
      suppressHydrationWarning
    >
      {/* ================= BACKGROUND (DTS) ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,63,164,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.08),transparent_60%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40">
        {/* ================= HEADER (TOP CENTER) ================= */}
        <Div
          {...(mounted
            ? {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
                variants: fadeUp,
              }
            : {})}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
              <p className="text-[11px] uppercase tracking-[0.30em] text-neutral-300/80">
                Our Team
              </p>
            </div>
          </div>

          <h2 className="mt-6 font-heading text-[30px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            <span className="text-white">Meet the Experts</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold drop-shadow-[0_0_18px_rgba(70,243,216,0.35)]">
              who drive our success.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            A tight leadership team guiding vision, growth, and execution — with
            clear ownership across strategy, sales, marketing, and finance.
          </p>
        </Div>

        {/* ================= TEAM CARDS ================= */}
        <div className="mt-14 space-y-8">
          {/* Card helper */}
          {[
            {
              name: "Sanjeev Seth",
              role: "Chairman",
              img: "/sanjeev1.heic",
              desc: "With over 35 years of experience, Sanjeev guides the strategic vision and long-term business direction — strengthening trust, stability, and growth.",
              cta: "Reach out to Sanjeev",
            },
            {
              name: "Arryan Arora",
              role: "Director, Sales & Marketing",
              img: "/aryan.jpg",
              desc: "Arryan leads Sales & Marketing with a sharp branding lens — building visibility, partnerships, and growth pipelines with strategic precision.",
              cta: "Reach out to Arryan",
            },
            {
              name: "Hitesh Kukreja",
              role: "Director, Finance",
              img: "/hitesh.jpg",
              desc: "Hitesh oversees financial strategy and operations — strengthening sustainability, forecasting, and disciplined growth for the studio.",
              cta: "Reach out to Hitesh",
            },
          ].map((m, i) => (
            <Div
              key={m.name}
              {...(mounted
                ? {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: { once: true, amount: 0.2 },
                    variants: fadeUp,
                    custom: i * 0.05,
                  }
                : {})}
              className="group relative rounded-[28px] p-px"
            >
              {/* gradient border */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_22px_70px_rgba(0,0,0,0.70)]">
                {/* hover wash + readability veil */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(70,243,216,0.14),rgba(255,63,164,0.10),rgba(216,184,115,0.08))]" />
                <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-55 bg-[#050507]" />

                <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-6">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border border-white/10 bg-white/5"
                    />

                    <div className="min-w-0">
                      <h3 className="text-[22px] md:text-[24px] font-semibold text-white">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-[13px] uppercase tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
                        {m.role}
                      </p>
                    </div>
                  </div>

                  <div className="max-w-3xl md:pl-4">
                    <p className="text-[14px] leading-relaxed text-neutral-300/85">
                      {m.desc}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/85 transition-colors duration-300 group-hover:text-dts-neon"
                    >
                      {m.cta}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Div>
          ))}
        </div>
      </div>
    </Section>
  );
}
