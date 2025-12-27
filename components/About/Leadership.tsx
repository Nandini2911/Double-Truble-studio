// components/about/Leadership.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CardSwap, { Card } from "./CardSwap";

const LEADERS = [
  {
    name: "Arryan Arora",
    role: "Director, Strategy & Growth",
    image: "/aryan.jpg",
  },
  {
    name: "Sanjeev Seth",
    role: "Chair Person & Finance",
    image: "/sanjeev1.heic",
  },
  {
    name: "Hitesh Kukreja",
    role: "CEO, Finance",
    image: "/kukreja.heic",
  },
];

export default function Leadership() {
  return (
    <section
      className="
        relative w-full
        px-4 sm:px-6 lg:px-8
        py-16 sm:py-20 lg:py-24
        overflow-hidden
      "
    >
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.10),transparent_60%)] opacity-60" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,63,164,0.18),transparent_65%)] blur-3xl" />

      <div
        className="
          relative z-10 mx-auto
          max-w-4xl md:max-w-5xl lg:max-w-6xl
          2xl:max-w-384
        "
      >
        {/* ===================== MOBILE + TABLET ===================== */}
        <div className="lg:hidden space-y-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center space-y-3 max-w-md mx-auto"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
              The People Steering the Studio
            </p>
            <h2 className="font-heading text-dts-fog text-2xl sm:text-[1.7rem] leading-snug">
              Strategy, Finance & Direction
            </h2>
            <p className="text-neutral-400 text-[13px] leading-relaxed">
              Three minds balancing vision, clarity and discipline behind every
              DTS decision.
            </p>
          </motion.div>

          {/* Stacked cards */}
          <div className="space-y-5">
            {LEADERS.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="
                  relative flex items-center gap-5
                  rounded-3xl border border-white/10
                  bg-linear-to-br from-white/6 via-black/80 to-black
                  p-4 sm:p-5
                  shadow-[0_16px_50px_rgba(0,0,0,0.85)]
                  backdrop-blur-xl
                "
              >
                {/* neon edge */}
                <div
                  className="
                    pointer-events-none absolute inset-px rounded-3xl
                    border border-transparent
                    [background:linear-gradient(135deg,rgba(70,243,216,0.6),rgba(0,0,0,0)_40%,rgba(255,63,164,0.4)_80%)_border-box]
                    opacity-25
                  "
                />

                <div className="relative z-10 flex items-center gap-5">
                  <div className="
  shrink-0
  h-32 w-32
  rounded-full
  overflow-hidden
  border border-white/20
  shadow-[0_0_40px_rgba(0,0,0,0.9)]
">
  <Image
    src={leader.image}
    alt={leader.name}
    width={180}
    height={180}
    className="h-full w-full object-cover object-center"
  />
</div>


                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 mb-1">
                      DTS • Leadership
                    </p>
                    <h3 className="font-heading text-[15px] sm:text-[16px] text-dts-fog leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] text-neutral-300 mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================== DESKTOP / 4K ===================== */}
        <div
          className="
            hidden lg:grid
            items-center
            gap-12 lg:gap-16 2xl:gap-24
            lg:grid-cols-2
          "
        >
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="space-y-5 max-w-lg 2xl:max-w-xl"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
              The People Steering the Studio
            </p>

            <h2 className="font-heading text-dts-fog text-3xl 2xl:text-[3rem] leading-snug">
              Strategy, Finance & Direction —
              <br />
              The Team Behind Every Decision.
            </h2>

            <p className="text-neutral-300 text-[15px] 2xl:text-[17px] leading-relaxed">
              Every project, campaign and client journey is backed by these
              three minds — a balance of vision, discipline and precision.
              From high-level moves to last-mile execution, this leadership
              team keeps DTS sharp, relevant and unmistakably itself.
            </p>

            <p className="text-neutral-400 text-[14px] leading-relaxed">
              The studio moves fast, but the principles come from here.
            </p>
          </motion.div>

          {/* RIGHT — CardSwap */}
          <div
            className="
              mt-10 lg:mt-0
              flex justify-center lg:justify-end
              lg:pl-4 xl:pl-10 2xl:pl-14
              scale-[0.95] xl:scale-[1.05] 2xl:scale-[1.25]
            "
          >
            <CardSwap
              width={360}
              height={300}
              cardDistance={65}
              verticalDistance={60}
              delay={4800}
              pauseOnHover={true}
              skewAmount={6}
              easing="elastic"
            >
              {LEADERS.map((leader) => (
                <Card key={leader.name}>
                  <div className="h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="space-y-2">
                        <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-400">
                          DTS • Leadership
                        </p>
                        <h3 className="font-heading text-[1.3rem] text-dts-fog leading-snug">
                          {leader.name}
                        </h3>
                        <p className="text-neutral-300 text-[13px] leading-relaxed">
                          {leader.role}
                        </p>
                      </div>

                      {/* BIGGER IMAGE */}
                      <div className="shrink-0 h-24 w-24 rounded-full overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.85)]">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={130}
                          height={130}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>

                    <p className="text-neutral-400 text-[12px] leading-relaxed">
                      A key pillar in shaping the strategy, clarity and long-term
                      direction of Double Trouble Studio.
                    </p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
