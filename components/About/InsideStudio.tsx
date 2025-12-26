// components/about/InsideStudio.tsx
"use client";

import { motion } from "framer-motion";

const STUDIO_CARDS = [
  {
    eyebrow: "Digital Pod",
    title: "Content, Social & Funnels",
    body: "Reels, grids and funnels live in one pod so campaigns don’t feel like five different agencies posting at once.",
  },
  {
    eyebrow: "PR & Reputation",
    title: "Media, Messaging, Crisis",
    body: "Media calls, stories and crisis thinking handled like long-term reputation work—not just press for the week.",
  },
  {
    eyebrow: "Web, Events & Collabs",
    title: "Builds & On-ground",
    body: "Websites, launches, shoots and talent plays are planned together, so digital and on-ground tell the same story.",
  },
  {
    eyebrow: "Studio Rhythm",
    title: "Systems, Not Chaos",
    body: "Strategy Mondays, builds mid-week, lock-ins by Friday. Fast moving, but always with a clear calendar and centre of gravity.",
  },
];

// desktop curve layout
const LAYOUT = [
  { translateY: 28, rotateZ: -11, scale: 0.9 },
  { translateY: 10, rotateZ: -4, scale: 0.98 },
  { translateY: 10, rotateZ: 4, scale: 0.98 },
  { translateY: 28, rotateZ: 11, scale: 0.9 },
];

export default function InsideStudio() {
  return (
    <section
      className="
        relative w-full
        px-4 sm:px-6 lg:px-8
        py-16 sm:py-20 lg:py-24
        overflow-hidden
      "
    >
      {/* soft bg aura */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.12),transparent_55%)]
          opacity-80
        "
      />
      <div
        className="
          pointer-events-none absolute -bottom-24 -right-16
          h-72 w-72 rounded-full
          bg-[radial-gradient(circle,rgba(255,63,164,0.22),transparent_60%)]
          blur-3xl
        "
      />

      <div
        className="
          relative z-10 mx-auto
          max-w-4xl md:max-w-5xl lg:max-w-6xl 2xl:max-w-7xl
          space-y-10
        "
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-neutral-400">
            Day-to-day at DTS
          </p>
          <h2
            className="
              font-heading text-dts-fog
              text-2xl sm:text-[1.8rem] md:text-[2rem]
              leading-snug
            "
          >
            Inside the Studio
          </h2>
          <p className="text-[13px] sm:text-[14px] text-neutral-300/90 leading-relaxed">
            Think of it as a control room—each pod has its role, but everything
            feeds one brand story.
          </p>
        </motion.div>

        {/* === MOBILE / TABLET VIEW (STACKED CARDS) === */}
        <div className="block lg:hidden">
          <div
            className="
              relative mx-auto
              max-w-3xl
              rounded-3xl
              bg-black/70
              px-4 py-6 sm:px-5 sm:py-7
              shadow-[0_22px_70px_rgba(0,0,0,0.9)]
              backdrop-blur-xl
            "
          >
            <div className="space-y-4 sm:space-y-5">
              {STUDIO_CARDS.map((card, i) => (
                <motion.div
                  key={card.eyebrow}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="
                    rounded-2xl border border-white/14
                    bg-linear-to-b from-white/10 via-[#050509] to-black
                    px-4 py-4 sm:px-4.5 sm:py-5
                    shadow-[0_18px_50px_rgba(0,0,0,0.95)]
                  "
                >
                  <p className="text-[10px] uppercase tracking-[0.26em] text-neutral-400 mb-2">
                    {card.eyebrow}
                  </p>
                  <h3 className="text-[14px] sm:text-[15px] text-dts-fog font-medium mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-neutral-200/95 leading-relaxed">
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* === DESKTOP VIEW (CURVED LAYOUT) === */}
        <div
          className="
            hidden lg:block
          "
        >
          <div
            className="
              relative mx-auto
              max-w-6xl
              rounded-4xl
              bg-black/60
              px-3 sm:px-5 md:px-8
              py-7 sm:py-8 md:py-10
              shadow-[0_26px_80px_rgba(0,0,0,0.85)]
              backdrop-blur-xl
              overflow-hidden
            "
          >
            {/* inner outline */}
            <div
              className="
                pointer-events-none absolute inset-px
                rounded-[30px]
                border border-white/5
                opacity-60
              "
            />

            {/* curved cards */}
            <div
              className="
                relative w-full
                flex flex-row
                justify-center items-stretch
                gap-4 md:gap-6
                scale-100
                transform-gpu
              "
            >
              {STUDIO_CARDS.map((card, i) => {
                const layout = LAYOUT[i];

                return (
                  <motion.div
                    key={card.eyebrow}
                    initial={{
                      opacity: 0,
                      y: 12,
                      rotateZ: 0,
                      scale: 1,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: layout.translateY,
                      rotateZ: layout.rotateZ,
                      scale: layout.scale,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.07 }}
                    whileHover={{
                      y: layout.translateY - 14,
                      rotateZ: 0,
                      scale: 1.05,
                    }}
                    className="
                      transform-gpu
                      w-full lg:w-[22%]
                    "
                    style={{ transformOrigin: "center bottom" }}
                  >
                    <div
                      className="
                        h-[230px] md:h-60 lg:h-[250px]
                        rounded-3xl
                        border border-white/14
                        bg-linear-to-b from-white/12 via-black/85 to-black
                        px-4 py-4 sm:py-5
                        shadow-[0_22px_70px_rgba(0,0,0,0.95)]
                        backdrop-blur-2xl
                        flex flex-col
                      "
                    >
                      <p className="text-[10px] uppercase tracking-[0.26em] text-neutral-400 mb-3">
                        {card.eyebrow}
                      </p>
                      <h3 className="text-[15px] text-dts-fog font-medium mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-[13px] text-neutral-200/95 leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
