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
    q: "How is pricing decided?",
    a: "Pricing depends on event scale, guest count, number of entry points, RSVP scope, and on-ground team requirement. Once we understand your venue flow and objective, we share a clear quote with inclusions.",
  },
  {
    q: "How early should we book you?",
    a: "Ideally 7–14 days prior for structured RSVP and list planning. For high-profile rooms, earlier is recommended. Urgent timelines are possible subject to availability.",
  },
  {
    q: "What exactly is included in scope?",
    a: "Guestlist structuring, segmentation, entry logic, coordination with venue and security, on-ground check-in management, and real-time issue handling.",
  },
  {
    q: "Can the process be customised?",
    a: "Yes. Every event is mapped to your guest mix, privacy needs, venue flow, and access rules.",
  },
  {
    q: "Do you maintain confidentiality?",
    a: "Always. Guest data, VIP lists, and event details remain strictly confidential within the execution team.",
  },
];

export default function GuestManagementFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28 xl:py-24 2xl:py-28
        bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]
      "
    >
      {/* premium grid + extra glows (same family as navbar/hero) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:160px_160px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.14),transparent_60%)]" />

      {/* top + bottom dividers */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />

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
            <span
              className="
                inline-flex items-center rounded-full
                border border-white/10 bg-white/5
                px-5 py-2
                text-[10px] sm:text-[11px]
                uppercase tracking-[0.28em]
                text-neutral-300/80
                backdrop-blur-xl
              "
            >
              FAQs
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            Questions, answered.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            Pricing, timelines, scope, customisation, and confidentiality — clarified upfront.
          </p>
        </motion.div>

        {/* FAQ list */}
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
                {/* subtle hover glow behind row */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.12),transparent_60%)]" />

                {/* Row (glass) */}
                <div
                  className="
                    relative rounded-3xl
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
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 text-left"
                  >
                    <div className="flex min-w-0 gap-5 sm:gap-6">
                      {/* Number */}
                      <span
                        className="
                          font-heading text-[18px]
                          text-neutral-500
                          transition-colors duration-300
                          group-hover:text-dts-neon
                        "
                      >
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
                    className="overflow-hidden"
                  >
                    <p className="mt-4 ml-11 max-w-[780px] text-[14px] leading-relaxed text-neutral-300/75">
                      {f.a}
                    </p>
                  </motion.div>

                  {/* color divider (inside card) */}
                  <div
                    className="
                      mt-6 h-px w-full
                      bg-white/10
                      transition-all duration-500
                      group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                    "
                  />
                </div>

                {/* old full-width divider removed (card already has its own) */}
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
            Still unsure? Let’s walk through your event and map the right setup.
          </p>

          <div className="mt-8">
            <Link
              href="/contact?service=guest-management"
              className="
                inline-flex rounded-2xl
                border border-white/10 bg-white/5
                px-7 py-3.5
                text-[12px] font-bold uppercase tracking-[0.22em]
                text-neutral-200
                backdrop-blur-xl
                transition-all duration-300
                hover:border-dts-neon/70
                hover:shadow-[0_0_0_1px_rgba(70,243,216,0.30)]
              "
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
