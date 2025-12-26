// components/home/FAQBlock.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    q: "What services does Double Trouble Studio offer?",
    a: "We build full-stack brand ecosystems across digital marketing, PR, social media, websites, events, and celebrity collaborations—designed for both performance and premium positioning.",
  },
  {
    q: "What industries do you work with?",
    a: "Luxury, lifestyle, beauty, interiors, hospitality, automotive, weddings, events, media and early-stage brands. If you value design, discipline and growth—we can work together.",
  },
  {
    q: "How does your project onboarding work?",
    a: "We begin with an alignment call, audit your brand, understand your goals and create a structured roadmap. No copy-paste decks—only tailored strategy.",
  },
  {
    q: "Do you take one-time projects?",
    a: "Yes. We work on both long-term retainers and high-impact one-time projects like launches, events, PR pushes and website builds.",
  },
  {
    q: "What makes DTS different?",
    a: "Clarity, structure and taste. We combine creative direction, aesthetic discipline and business logic to build brands that lead—not chase.",
  },
];

export default function FAQBlock() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6">
      <div
        className="
          mx-auto w-full
          max-w-[900px] md:max-w-[1100px] 2xl:max-w-[1400px]
          space-y-6 md:space-y-8
        "
      >
        {/* LABEL */}
        <p className="text-[11px] uppercase tracking-[0.24em] text-dts-neon">
          FAQ
        </p>

        {/* HEADING */}
        <h2 className="font-heading text-xl md:text-2xl text-dts-fog">
          Questions we get—answered with clarity.
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4 md:space-y-5">
          {FAQS.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
   SINGLE FAQ ITEM
------------------------------------------- */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="
        rounded-2xl border border-white/10
        bg-black/40 backdrop-blur-xl
        p-5 md:p-6
        cursor-pointer group
        transition-all duration-300
        hover:border-dts-neon/40
        hover:shadow-[0_0_35px_rgba(70,243,216,0.15)]
      "
      onClick={() => setOpen(!open)}
      layout
    >
      {/* QUESTION */}
      <motion.div
        layout="position"
        className="flex items-center justify-between"
      >
        <h3 className="text-[15px] md:text-[16px] text-neutral-200">
          {q}
        </h3>

        {/* ICON */}
        <motion.span
          className="text-dts-neon text-[18px] ml-4"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
      </motion.div>

      {/* ANSWER */}
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-sm md:text-[15px] text-neutral-400 leading-relaxed"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
