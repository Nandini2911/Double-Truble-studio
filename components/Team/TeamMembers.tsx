"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Member = {
  name: string;
  role: string;
  img: string;
  desc: string;
  cta: string;
};

const MEMBERS: Member[] = [
  {
    name: "Sanjeev Seth",
    role: "Chairman",
    img: "/sanjeev.webp", // ✅ change from .heic to .jpg/.webp
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
];

export default function TeamMembers() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE, delay: d },
    }),
  };

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative w-full overflow-hidden bg-[#050507]"
    >
      {/* ================= BACKGROUND (DTS) ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,63,164,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.08),transparent_60%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        <div
          className="
            absolute inset-0 opacity-[0.06]
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />

        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-6 sm:inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative mx-auto w-full
          max-w-6xl 2xl:max-w-[1500px]
          px-4 sm:px-6 lg:px-8 2xl:px-32
          py-14 sm:py-18 md:py-22 lg:py-28 xl:py-32 2xl:py-36
        "
      >
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_14px_rgba(70,243,216,0.8)]" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] sm:tracking-[0.30em] text-neutral-300/80">
                Our Team
              </p>
            </div>
          </div>

          <h2
            className="
              mt-5 sm:mt-6 font-heading leading-tight tracking-[-0.02em] text-white
              text-[26px] sm:text-[30px]
              md:text-[40px] lg:text-[44px]
              2xl:text-[54px]
            "
          >
            <span className="text-white">Meet the Experts</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold drop-shadow-[0_0_18px_rgba(70,243,216,0.35)]">
              who drive our success.
            </span>
          </h2>

          <div className="mx-auto mt-4 sm:mt-5 h-px w-20 sm:w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-neutral-300/80">
            A tight leadership team guiding vision, growth, and execution — with clear ownership across
            strategy, sales, marketing, and finance.
          </p>
        </motion.div>

        {/* ================= TEAM CARDS ================= */}
        <div className="mt-10 sm:mt-12 lg:mt-14 space-y-5 sm:space-y-6 lg:space-y-8">
          {MEMBERS.map((m, i) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              custom={i * 0.06}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.18 }}
              className="group relative rounded-[24px] sm:rounded-[28px] p-px"
            >
              {/* gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold blur-[1px]" />

              <div
                className="
                  relative overflow-hidden
                  rounded-[24px] sm:rounded-[28px]
                  border border-white/10
                  bg-white/[0.04] backdrop-blur-xl
                  p-5 sm:p-6 md:p-8
                  transition-all duration-300
                  group-hover:border-white/15 group-hover:bg-white/[0.06]
                  group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_22px_70px_rgba(0,0,0,0.70)]
                "
              >
                {/* hover wash + readability veil */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(70,243,216,0.14),rgba(255,63,164,0.10),rgba(216,184,115,0.08))]" />
                <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-55 bg-[#050507]" />

                {/* CONTENT GRID */}
                <div className="relative grid gap-5 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
                  {/* Left: avatar + name */}
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                    <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <Image
                        src={m.img}
                        alt={m.name}
                        width={112}
                        height={112}
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                        className="h-full w-full object-cover"
                        quality={80}
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-white truncate">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
                        {m.role}
                      </p>
                    </div>
                  </div>

                  {/* Right: description + CTA */}
                  <div className="min-w-0">
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-neutral-300/85">
                      {m.desc}
                    </p>

                    <Link
                      href="/contact"
                      className="
                        mt-4 sm:mt-5 inline-flex items-center gap-2
                        text-[11px] sm:text-[12px]
                        font-bold uppercase tracking-[0.22em]
                        text-dts-neon/85 transition-colors duration-300
                        group-hover:text-dts-neon
                      "
                      aria-label={m.cta}
                      title={m.cta}
                    >
                      {m.cta}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
