// components/events-weddings/EventsWeddingsFAQs.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const faqs = [
  {
    q: "Do you handle small events as well?",
    a: "Yes. Scale doesn’t matter — structure and execution do. Whether it’s intimate or large-format, we plan with the same clarity and control.",
  },
  {
    q: "Can services be customised?",
    a: "Always. Every event is planned around your requirements — no fixed packages, no templated plans.",
  },
  {
    q: "Do you work with existing vendors?",
    a: "Yes. We can integrate seamlessly with your current vendors or build the entire team from scratch — whichever makes the event smoother.",
  },
  {
    q: "How early should we get in touch?",
    a: "Earlier is better for stronger planning and availability, but we also handle tight timelines efficiently depending on scope and date feasibility.",
  },
  {
    q: "Is pricing fixed or flexible?",
    a: "Pricing is based on scope, scale, and complexity. Everything is transparently discussed — with clear inclusions before we begin.",
  },
];

export default function EventsWeddingsFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-20 md:py-28 xl:py-24 2xl:py-28 dts-section">
      {/* ===== Background (same site language) ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dts-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />

        {/* teal + pink + gold glows */}
        <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.14),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_80%_80%,rgba(255,200,92,0.12),transparent_60%)]" />

        {/* top + bottom dividers */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050507]" />
      </div>

      {/* 4K-safe container */}
      <div
        className="
          relative mx-auto w-full
          px-4 md:px-6 lg:px-10
          max-w-[92%]
          2xl:max-w-[1600px]
          min-[3000px]:max-w-[1800px]
        "
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-neutral-300/80 backdrop-blur-xl">
              FAQs
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            Questions,{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.16)]
              "
            >
              answered.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            Timelines, customisation, vendor coordination, and pricing — clarified
            upfront.
          </p>
        </motion.div>

        {/* FAQ list (glass cards) */}
        <div className="mt-16">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={f.q}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.06}
                className="group relative py-7 sm:py-8"
              >
                {/* soft hover glow behind card */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.12),transparent_60%)]" />

                {/* Card */}
                <div
                  className="
                    relative overflow-hidden rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    px-5 py-5 sm:px-7 sm:py-6
                    transition-all duration-500
                    group-hover:border-dts-neon/55
                    group-hover:bg-white/7
                    group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_24px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* ✅ Always-on color combo (inside every FAQ card) */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[radial-gradient(circle_at_18%_12%,rgba(70,243,216,0.14),transparent_58%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_88%_18%,rgba(255,63,164,0.12),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_70%_92%,rgba(255,200,92,0.12),transparent_64%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.20] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />

                  {/* top accent line (premium) */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70 bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.42),rgba(255,63,164,0.26),rgba(255,200,92,0.20),transparent)]" />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="relative flex w-full items-start justify-between gap-6 text-left"
                  >
                    <div className="flex min-w-0 gap-5 sm:gap-6">
                      {/* Number */}
                      <span className="font-heading text-[18px] text-neutral-500 transition-colors duration-300 group-hover:text-dts-neon">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <h3 className="min-w-0 text-[15px] font-medium text-white transition-colors duration-300 group-hover:text-neutral-200">
                        {f.q}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <span
                      className="
                        mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center
                        rounded-2xl border border-white/10 bg-white/5
                        transition-all duration-300
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_30px_rgba(70,243,216,0.12)]
                      "
                      aria-hidden="true"
                    >
                      <ChevronDown
                        className={[
                          "h-4 w-4 transition-transform duration-300",
                          isOpen
                            ? "rotate-180 text-dts-neon"
                            : "text-neutral-400 group-hover:text-dts-neon",
                        ].join(" ")}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="relative overflow-hidden"
                  >
                    <p className="mt-4 ml-11 max-w-[780px] text-[14px] leading-relaxed text-neutral-300/75">
                      {f.a}
                    </p>
                  </motion.div>

                  {/* divider inside card */}
                  <div className="relative mt-6 h-px w-full bg-white/10" />
                  <div className="relative mt-0.5 h-px w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.35}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-200/80">
            Tell us what you’re planning — we’ll map the structure, flow, and
            execution plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
           <Link
  href="/contact?service=guest-management"
  className="inline-flex scale-y-125 dts-animated-border"
>
  <span>Discuss Your Event</span>
</Link>

            
          </div>

          <p className="mt-10 text-[12px] uppercase tracking-[0.28em] text-neutral-500/80">
            Custom planning • Vendor sync • Clean execution
          </p>
        </motion.div>
      </div>
    </section>
  );
}
