"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Linkedin } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

const MEMBERS: Member[] = [
  {
    name: "Ravish Verma",
    role: "SME — SEO",
    image: "/Ravish.PNG",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Nandini Yadav",
    role: "Web Developer",
    image: "/nandini.webp",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Naman Gupta",
    role: "Video Editor",
    image: "/Naman.webp",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Simran Salagre",
    role: "Head — PR & Communication",
    image: "/Simran.JPG",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Abhishek Singh",
    role: "AI Visual Content Creator",
    image: "/Abhishek.JPG",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Raj Umbarkar",
    role: "Video Editor",
    image: "/Raj.jpg",
    linkedin: "https://linkedin.com",
  },
];

export default function TeamMembersAll() {
  // Prevent hydration mismatch + reduce “late load” feel
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 12 },
      show: (d = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: EASE, delay: d },
      }),
    }),
    []
  );

  const Section: any = mounted ? motion.section : "section";
  const Div: any = mounted ? motion.div : "div";

  return (
    <Section
      {...(mounted
        ? {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.18 },
            transition: { duration: 0.45, ease: EASE },
          }
        : {})}
      className="relative overflow-hidden w-full bg-[#050507]"
      suppressHydrationWarning
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />

        {/* glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(255,63,164,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_85%,rgba(216,184,115,0.08),transparent_60%)]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:44px_44px]"
        />

        {/* top divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        {/* bottom divider */}
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-80" />

        {/* soft blobs */}
        <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
        <div className="absolute -bottom-28 right-[-120px] h-80 w-80 rounded-full bg-dts-neon-pink/8 blur-3xl" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36 2xl:py-40">
        {/* Header (TOP CENTER + gradient heading) */}
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
            <span className="text-white">Meet the people</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold drop-shadow-[0_0_18px_rgba(70,243,216,0.35)]">
              who make it happen.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_18px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-neutral-300/80">
            Specialists across SEO, web, video, PR, and AI content — aligned to
            deliver premium outcomes with calm execution.
          </p>
        </Div>

        {/* Grid (no fixed width/height, responsive, centered last row automatically) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {MEMBERS.map((m, i) => (
            <Div
              key={m.name}
              {...(mounted
                ? {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: { once: true, amount: 0.18 },
                    variants: fadeUp,
                    custom: i * 0.04,
                    whileHover: { y: -6 },
                    transition: { duration: 0.25, ease: EASE },
                  }
                : {})}
              className="group relative"
            >
              {/* outer glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_25%_0%,rgba(70,243,216,0.14),transparent_55%)]" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_22px_70px_rgba(0,0,0,0.70)]">
                {/* hover gradient wash */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(120deg,rgba(70,243,216,0.16),rgba(255,63,164,0.12),rgba(216,184,115,0.10))]" />
                <div className="pointer-events-none absolute inset-0 bg-[#050507]/50 group-hover:bg-[#050507]/35 transition" />

                <div className="relative flex flex-col items-center text-center">
                  {/* image */}
                  <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(70,243,216,0.22),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,63,164,0.14),transparent_60%)]" />
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover border border-white/10"
                    />
                  </div>

                  {/* name */}
                  <h3 className="mt-5 text-[18px] font-semibold text-white">
                    {m.name}
                  </h3>

                  {/* role (gradient text on hover) */}
                  <p className="mt-1 text-[13px] font-medium text-dts-neon/90 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-dts-neon group-hover:via-dts-neon-pink group-hover:to-dts-gold">
                    {m.role}
                  </p>

                  <div className="mt-5 h-px w-10 bg-white/10 group-hover:bg-dts-neon/60 transition" />

                  {/* linkedin */}
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-200 transition-all duration-300 hover:border-dts-neon/70 hover:shadow-[0_0_0_1px_rgba(70,243,216,0.28)]"
                    >
                      <Linkedin className="h-4 w-4 text-dts-neon" />
                      LinkedIn
                    </a>
                  )}
                </div>

                {/* bottom glow */}
                <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Div>
          ))}
        </div>

        {/* small closing line */}
        <Div
          {...(mounted
            ? {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.18 },
                variants: fadeUp,
                custom: 0.18,
              }
            : {})}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-300/75">
            One team. Multiple skill-sets. One execution standard.
          </p>
        </Div>
      </div>
    </Section>
  );
}
