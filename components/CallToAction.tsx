"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative mx-auto mt-24 max-w-6xl px-4 text-center py-24 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%),linear-gradient(to_bottom,#050507,#050507)]"
    >
      {/* Eyebrow */}
      <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
        Let's Work Together
      </p>

      {/* Heading */}
      <h2 className="mt-6 font-heading text-dts-fog text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight">
        Ready to Take Your Brand to the Next Level?
      </h2>

      {/* Subtext */}
      <p className="mx-auto mt-6 max-w-2xl text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-300/85">
        Whether you're looking for a brand refresh or a complete strategy overhaul, let's connect and start building something amazing.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Button 1: Start Your Project */}
        <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
          <a
            href="/contact"
            className="dts-animated-border inline-block"
          >
            <span
              className="inline-flex items-center justify-center
                px-14 py-5 sm:px-16 sm:py-6
                text-[14px] sm:text-[15px]
                uppercase tracking-[0.22em] font-semibold
                text-dts-fog"
            >
              Start Your Project
            </span>
          </a>
        </motion.div>

        {/* Button 2: Book a Consultation */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-10 py-4 text-[12px] uppercase tracking-[0.26em] font-semibold text-neutral-200 transition-all duration-300 hover:border-dts-neon/70 hover:shadow-[0_0_0_1px_rgba(70,243,216,0.30)]"
        >
          Book a Consultation
        </a>
      </div>
    </motion.section>
  );
}
