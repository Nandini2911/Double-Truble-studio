"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Member = {
  name: string;
  role: string;
  bio: string;
  tags: string[];
};

const members: Member[] = [
  {
    name: "Sanjeev Seth",
    role: "Chairman",
    bio: "Over 35 years in finance and business leadership. Guides the studio’s strategic vision with calm, disciplined decision-making.",
    tags: ["Strategy", "Governance", "Leadership"],
  },
  {
    name: "Arryan Arora",
    role: "Director, Sales & Marketing",
    bio: "Leads growth, partnerships, and brand direction — turning creative thinking into clear positioning and measurable momentum.",
    tags: ["Sales", "Brand", "Growth"],
  },
  {
    name: "Hitesh Kukreja",
    role: "Director, Finance",
    bio: "Oversees financial strategy and operations, ensuring sustainable growth, clean systems, and strong control across execution.",
    tags: ["Finance", "Operations", "Controls"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay: d },
  }),
};

export default function TeamMembers() {
  return (
    <section className="relative overflow-hidden w-full py-20 md:py-28 xl:py-24 2xl:py-28">
      {/* Background (same family as Guest FAQ glass system) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050507]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.14),transparent_60%)]" />

        {/* premium grid */}
        <div
          className="
            absolute inset-0 opacity-[0.08]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
            bg-[size:160px_160px]
          "
        />

        {/* subtle extra glows */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_10%,rgba(255,63,164,0.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_80%_80%,rgba(216,184,115,0.12),transparent_60%)]" />

        {/* dividers */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-12 bottom-0 h-px bg-linear-to-r from-transparent via-dts-neon/40 to-transparent opacity-85" />
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
              Our Team
            </span>
          </div>

          <h2 className="mt-6 font-heading text-[32px] leading-tight tracking-[-0.02em] text-white md:text-[44px]">
            The people behind the{" "}
            <span
              className="
                bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(70,243,216,0.18)]
              "
            >
              calm execution.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-neutral-200/80">
            Three accountable leads. Clear roles. Strong systems — so strategy,
            growth, and finances stay aligned as we scale.
          </p>
        </motion.div>

        {/* List */}
        <div className="mt-16">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              custom={i * 0.08}
              className="group relative py-7 sm:py-8"
            >
              {/* subtle hover glow behind row */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(70,243,216,0.12),transparent_60%)]" />

              {/* Row (glass card) */}
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
                <div className="flex items-start justify-between gap-6">
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

                    {/* Name + role + bio */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="min-w-0 text-[15px] sm:text-[16px] font-medium text-white">
                          {m.name}
                        </h3>
                        <span className="h-[3px] w-[3px] rounded-full bg-neutral-700" />
                        <p className="text-[12px] uppercase tracking-[0.26em] text-neutral-400">
                          {m.role}
                        </p>
                      </div>

                      <p className="mt-3 max-w-[780px] text-[14px] leading-relaxed text-neutral-300/75">
                        {m.bio}
                      </p>

                      {/* tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {m.tags.map((t) => (
                          <span
                            key={t}
                            className="
                              inline-flex items-center rounded-full
                              border border-white/10 bg-white/5
                              px-3 py-1
                              text-[11px] uppercase tracking-[0.22em]
                              text-neutral-300/75
                              transition-all duration-300
                              group-hover:border-dts-neon/40
                              group-hover:bg-dts-neon/10
                            "
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* right chip */}
                  <span
                    className="
                      mt-0.5 shrink-0
                      inline-flex items-center rounded-2xl
                      border border-white/10 bg-white/5
                      px-3 py-2
                      text-[10px] uppercase tracking-[0.28em]
                      text-neutral-400
                      transition-all duration-300
                      group-hover:border-dts-neon/60
                      group-hover:bg-dts-neon/10
                      group-hover:text-neutral-200
                      group-hover:shadow-[0_0_0_1px_rgba(70,243,216,0.18),0_12px_30px_rgba(70,243,216,0.12)]
                    "
                    aria-hidden="true"
                  >
                    Leadership
                  </span>
                </div>

                {/* divider (inside card) */}
                <div
                  className="
                    mt-6 h-px w-full
                    bg-white/10
                    transition-all duration-500
                    group-hover:bg-[linear-gradient(to_right,transparent,#46F3D8,#FF3FA4,#D8B873,transparent)]
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.25}
          className="mx-auto mt-10 max-w-2xl text-center text-[14px] leading-relaxed text-neutral-200/80"
        >
          Clear structure • Single accountability • Premium delivery
        </motion.p>
      </div>
    </section>
  );
}
