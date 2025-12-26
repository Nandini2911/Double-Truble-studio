// components/home/MethodSteps.tsx
"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    label: "Discover",
    desc: "Brand truth, goals, audience behaviour, category gaps and cultural context.",
  },
  {
    label: "Design",
    desc: "Narrative, positioning and strategic roadmap across digital, PR, web and events.",
  },
  {
    label: "Develop",
    desc: "Content, campaigns, websites, experiences and collaborations aligned to strategy.",
  },
  {
    label: "Deploy",
    desc: "Media, performance, amplification, reporting and ongoing optimisation.",
  },
];

export default function MethodSteps() {
  return (
    <section
      className="
        py-8 md:py-10
        px-4 md:px-6 lg:px-8 xl:px-0
      "
    >
      {/* centered container, slightly wider on big screens */}
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-[1500px] space-y-6 md:space-y-8">
        {/* Heading */}
        <div className="space-y-2 md:space-y-3 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
            The Double Trouble Studio Method
          </p>
          <h2 className="font-heading text-xl md:text-2xl text-dts-fog leading-snug">
            A method built for brands that value clarity, consistency and
            growth.
          </h2>
        </div>

        {/* Steps timeline */}
        <div className="relative">
          {/* vertical line on md+ */}
          <div className="absolute left-3 top-0 bottom-0 hidden w-px bg-linear-to-b from-dts-neon/80 via-dts-neon-pink/60 to-dts-gold/70 md:block" />

          <div className="space-y-4 md:space-y-5">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative pl-0 md:pl-10"
              >
                <div className="flex items-start gap-3">
                  {/* numbered circle only on md+ */}
                  <div className="hidden md:flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-dts-neon bg-black/60 text-[11px] font-semibold text-dts-neon shadow-neon-soft">
                    {index + 1}
                  </div>

                  {/* card body */}
                  <div className="dts-card-2d w-full">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-dts-neon">
                      {step.label}
                    </p>
                    <p className="mt-2 text-sm text-neutral-200/95">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
