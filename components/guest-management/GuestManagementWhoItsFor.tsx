"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  Briefcase,
  HeartHandshake,
  ShieldCheck,
  Clapperboard,
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

const audiences = [
  {
    title: "High-profile brands",
    desc: "Launches, showcases, and premium gatherings where first impressions matter.",
    Icon: Sparkles,
  },
  {
    title: "Celebrity-led events",
    desc: "Controlled access, VIP protocol, and smooth entry even under pressure.",
    Icon: Crown,
  },
  {
    title: "Corporate events",
    desc: "Clear roles, clean lists, and a system that prevents last-minute confusion.",
    Icon: Briefcase,
  },
  {
    title: "Luxury weddings",
    desc: "Family, VIPs, and guests flowing in without chaos at the entry point.",
    Icon: HeartHandshake,
  },
  {
    title: "Founders & HNIs",
    desc: "When privacy, discretion, and control are non-negotiable.",
    Icon: ShieldCheck,
  },
  {
    title: "Agencies & production teams",
    desc: "A dependable guest management partner to plug into your execution stack.",
    Icon: Clapperboard,
  },
];

export default function GuestManagementWhoItsFor() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28
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

      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-dts-neon/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-dts-neon-pink/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-[-120px] h-80 w-80 rounded-full bg-dts-gold/6 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl 2xl:max-w-[1500px] px-4 md:px-6 lg:px-8 xl:px-0">
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
              Who this is for
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            Built for rooms
            <br />
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.22)]
              "
            >
              where pressure is real.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            If the event needs discretion, control, and a premium first impression, this is the
            system that supports it.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {audiences.map((a, i) => {
            const Icon = a.Icon;

            return (
              <motion.div
                key={a.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={i * 0.05}
                className="group relative"
              >
                {/* premium gradient glow ring */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-[linear-gradient(135deg,rgba(70,243,216,0.45),rgba(255,63,164,0.32),rgba(216,184,115,0.30))]
                    blur-[14px]
                  "
                />

                {/* card */}
                <div
                  className="
                    relative rounded-2xl
                    border border-white/10
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]
                    p-6 md:p-7
                    backdrop-blur-xl
                    transition-all duration-500
                    group-hover:border-dts-neon/60
                    group-hover:bg-[linear-gradient(180deg,rgba(70,243,216,0.06),rgba(255,255,255,0.02))]
                    group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.20),0_22px_70px_rgba(0,0,0,0.72)]
                  "
                >
                  {/* subtle sheen */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 rounded-2xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-700
                      bg-[radial-gradient(600px_circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]
                    "
                  />

                  {/* top accent strip (brand gradient) */}
                  <div
                    className="
                      absolute inset-x-0 top-0 h-px rounded-2xl
                      bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                      opacity-70
                    "
                  />

                  {/* icon + meta */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="
                        inline-flex h-11 w-11 items-center justify-center
                        rounded-xl border border-white/10 bg-white/5
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-300
                        group-hover:border-dts-neon/60
                        group-hover:bg-dts-neon/10
                        group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_30px_rgba(70,243,216,0.12)]
                        group-hover:-translate-y-0.5
                      "
                    >
                      <Icon className="h-5 w-5 text-white/90" />
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                      <span>Fit</span>
                      <span className="h-[3px] w-[3px] rounded-full bg-neutral-700" />
                      <span className="text-neutral-400/90 group-hover:text-neutral-300 transition-colors">
                        Premium
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-[15px] font-medium text-white">{a.title}</h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-300/75">{a.desc}</p>

                  {/* subtle CTA line */}
                  <div className="mt-5 flex items-center gap-2 text-[13px] text-neutral-300/70">
                    <span className="transition-colors duration-300 group-hover:text-neutral-200">
                      See the setup
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* divider */}
                  <div
                    className="
                      mt-6 h-px w-full bg-white/10
                      transition-all duration-500
                      group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom line */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.28}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-[14px] leading-relaxed text-neutral-200/80">
            Not sure if you need guest management or a lighter RSVP support layer?
            <br />
            We’ll recommend the right setup for your scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
