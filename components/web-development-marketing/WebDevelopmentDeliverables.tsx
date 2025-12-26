"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Headset,
  ListChecks,
  FileText,
  MailCheck,
  Users2,
  ShieldAlert,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const deliverables = [
  {
    title: "Custom Web Development",
    desc: "We build responsive, scalable, and high-performance websites tailored to your business needs.",
    Icon: Headset,
    badge: "Popular",
    features: ["Custom-built solutions", "Scalable architecture", "Mobile-first design"],
  },
  {
    title: "User Experience (UX) Design",
    desc: "We prioritize user-centric design to create intuitive and visually appealing experiences.",
    Icon: ListChecks,
    features: ["Intuitive navigation", "Clean, modern UI", "Optimized user flow"],
  },
  {
    title: "Content Management System (CMS)",
    desc: "We implement easy-to-manage content systems to allow you to update and maintain your site effortlessly.",
    Icon: FileText,
    features: ["Easy-to-use CMS", "Content control", "Flexible layouts"],
  },
  {
    title: "E-commerce Solutions",
    desc: "Seamless, secure, and scalable e-commerce platforms that grow with your business.",
    Icon: MailCheck,
    badge: "Most requested",
    features: ["Secure payment gateways", "Product catalog management", "Order tracking"],
  },
  {
    title: "SEO & Performance Optimization",
    desc: "We ensure your website is optimized for search engines and fast loading times.",
    Icon: Users2,
    features: ["On-page SEO", "Fast page load speed", "SEO-friendly content"],
  },
  {
    title: "Web Security & Maintenance",
    desc: "Regular maintenance and robust security protocols to keep your website safe and up-to-date.",
    Icon: ShieldAlert,
    features: ["Security patches", "Regular updates", "Backup & recovery"],
  },
  {
    title: "Analytics & Reporting",
    desc: "Track your website’s performance with detailed analytics and actionable insights.",
    Icon: ClipboardCheck,
    features: ["Google Analytics setup", "User behavior tracking", "Custom reporting"],
  },
];

export default function WebDevelopmentDeliverables() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 xl:py-24 2xl:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(18,63,56,0.38)_0%,rgba(0,0,0,0.92)_60%,#000_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute -top-28 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-90px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
      </div>

      {/* Updated Container (more width for 4K) */}
      <div
        className="relative mx-auto w-full
          px-6 md:px-8 lg:px-10
          max-w-[95%]
          2xl:max-w-[2000px]
          3xl:max-w-[2400px]"
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
            What you get
          </p>

          <h2 className="mt-5 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            Clear deliverables.
            <br />
            <span className="bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent">
              No ambiguity.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            Tangible outputs, systems, and support — built to ensure your website is robust,
            secure, and user-friendly.
          </p>
        </motion.div>

        {/* Grid Display of Deliverables */}
        <div
          className="mt-14 grid gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            2xl:grid-cols-5
            min-[3000px]:grid-cols-6"
        >
          {deliverables.map((d, i) => {
            const Icon = d.Icon;

            return (
              <motion.div
                key={d.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.05}
                className={`group relative ${
                  i >= 5 ? "2xl:hidden min-[3000px]:block" : ""
                } ${i >= 6 ? "min-[3000px]:hidden" : ""}`}
              >
                {/* Outer Glow (stronger + premium) */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_25%_0%,rgba(70,243,216,0.18),transparent_55%)]" />

                {/* Card */}
                <div
                  className="
                    relative h-full overflow-hidden
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.03]
                    p-7
                    transition-all duration-300
                    hover:border-dts-neon/55
                    hover:bg-white/[0.055]
                    hover:shadow-[0_0_0_1px_rgba(70,243,216,0.20),0_22px_70px_rgba(0,0,0,0.70)]
                  "
                >
                  {/* ===== COLOR EFFECT LAYERS (like your FAQ/cards) ===== */}

                  {/* top accent line (always-on) */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(70,243,216,0.50),rgba(255,63,164,0.35),rgba(216,184,115,0.30),transparent)] opacity-70" />

                  {/* hover radial glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.16),transparent_60%)]" />

                  {/* hover gradient border glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(70,243,216,0.55),rgba(255,63,164,0.18),rgba(216,184,115,0.22),rgba(70,243,216,0.35))] blur-[1.4px]" />

                  {/* light sweep */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-[60%] opacity-0 group-hover:opacity-100 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.12),transparent)]"
                    animate={{ x: ["-20%", "220%"] }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                  />

                  {d.badge ? (
                    <div className="absolute right-5 top-5">
                      <span className="rounded-full border border-dts-neon/35 bg-dts-neon/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-dts-neon/90">
                        {d.badge}
                      </span>
                    </div>
                  ) : null}

                  {/* Icon */}
                  <div
                    className="
                      relative
                      inline-flex h-14 w-14 items-center justify-center
                      rounded-2xl border border-white/10 bg-white/[0.04]
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                      transition-all duration-300
                      group-hover:border-dts-neon/60
                      group-hover:bg-dts-neon/10
                      group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_34px_rgba(70,243,216,0.16)]
                      group-hover:-translate-y-0.5
                    "
                  >
                    <Icon className="h-6 w-6 text-white/90 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-[17px] font-semibold leading-snug text-white">
                    {d.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                    {d.desc}
                  </p>

                  {/* Divider (rainbow on hover) */}
                  <div className="mt-6 h-px w-full bg-white/10 transition-all duration-500 group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]" />

                  {/* Features */}
                  <ul className="mt-5 space-y-2.5">
                    {d.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-neutral-300/80"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/55 transition-colors duration-300 group-hover:bg-dts-neon/80 shadow-[0_0_14px_rgba(70,243,216,0.25)]" />
                        <span className="transition-colors duration-300 group-hover:text-neutral-200">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Included Tag */}
                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                      Included
                    </span>

                    <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-dts-neon/80 transition-all duration-300 group-hover:text-dts-neon">
                      Details{" "}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* bottom glow */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.25}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-300/80">
            You don’t just get “support.”
            <br />
            You get a system that keeps your site fast, stable, and future-ready.
          </p>
        </motion.div>

        {/* Optional link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact?service=web-development"
            className="inline-flex items-center gap-2 rounded-full
              border border-white/12 bg-white/5
              px-7 py-3.5
              text-[12px] font-bold uppercase tracking-[0.22em]
              text-neutral-200
              transition-all duration-300
              hover:border-dts-neon/70
              hover:shadow-[0_0_0_1px_rgba(70,243,216,0.30)]"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
