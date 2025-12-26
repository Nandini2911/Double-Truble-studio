"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, CalendarHeart, Megaphone, Route, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const services = [
  {
    title: "Custom Web Development",
    desc: "End-to-end custom development for websites, web apps, and complex systems.",
    href: "/services/web-development",
    Icon: Star,
    accent: "from-amber-400/22 via-white/10 to-transparent",
    bloom: "rgba(245,158,11,0.20)", // amber
    orb: "rgba(245,158,11,0.18)",
  },
  {
    title: "E-commerce Solutions",
    desc: "Build scalable e-commerce platforms with secure payment systems and a seamless shopping experience.",
    href: "/services/e-commerce",
    Icon: CalendarHeart,
    accent: "from-rose-400/22 via-white/10 to-transparent",
    bloom: "rgba(251,113,133,0.18)", // rose
    orb: "rgba(251,113,133,0.16)",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "SEO, content strategy, and digital campaigns to boost your site’s visibility and user engagement.",
    href: "/services/seo-digital-marketing",
    Icon: Megaphone,
    accent: "from-sky-400/22 via-white/10 to-transparent",
    bloom: "rgba(56,189,248,0.18)", // sky
    orb: "rgba(56,189,248,0.16)",
  },
  {
    title: "Brand Strategy & Consulting",
    desc: "Strategic planning for brands looking to grow, with clarity and precision before scaling.",
    href: "/services/brand-strategy",
    Icon: Route,
    accent: "from-dts-neon/22 via-white/10 to-transparent",
    bloom: "rgba(70,243,216,0.20)", // dts neon
    orb: "rgba(70,243,216,0.18)",
  },
];

export default function WebDevelopmentRelatedServices() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,63,56,0.28)_0%,rgba(0,0,0,0.92)_60%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        {/* Soft blobs */}
        <div className="absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-90px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
            Related services
          </p>

          <h2 className="mt-5 font-heading text-[30px] leading-tight tracking-[-0.02em] text-white md:text-[40px]">
            You may also need
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            Web development works best when complemented with these services to
            ensure complete success.
          </p>
        </motion.div>

        {/* Tiles */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((s, i) => {
            const Icon = s.Icon;

            return (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.06}
                className="group relative"
              >
                {/* OUTER BLOOM (neon + service accent) */}
                <div className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.18),transparent_55%)]" />
                <div
                  className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(900px circle at 88% 30%, ${s.bloom}, transparent 58%)`,
                  }}
                />

                {/* TOP ACCENT LINE (rich on hover) */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px rounded-2xl bg-linear-to-r ${s.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <Link
                  href={s.href}
                  className="
                    relative block h-full rounded-2xl
                    border border-white/10
                    bg-white/3
                    p-6 md:p-7
                    transition-all duration-500
                    hover:border-dts-neon/55
                    hover:bg-white/5
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.22),0_22px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* INNER COLOR ORB (slight even on idle) */}
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-45"
                    style={{ background: s.orb }}
                  />
                  {/* Corner sheen */}
                  <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_62%)]" />

                  {/* Animated sheen (hover) */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 group-hover:opacity-100"
                    animate={{ x: ["-20%", "220%"] }}
                    transition={{
                      duration: 1.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                  />

                  {/* Icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center
                        rounded-xl border border-white/10
                        bg-white/4
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-300
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_10px_30px_rgba(70,243,216,0.16)]
                        group-hover:-translate-y-0.5
                      "
                    >
                      <Icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <span className="mt-1 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                      Service
                    </span>
                  </div>

                  <h3 className="mt-5 text-[15px] font-medium text-white">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                    {s.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-dts-neon/80 transition-colors duration-300 group-hover:text-dts-neon">
                    <span>View service</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* Bottom color line */}
                  <div className="mt-7 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
