// components/home/HomeHero.tsx

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden 2xl:min-h-[86vh]">
      
      {/* SOFT BG GLOWS (lighter + mobile optimized) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            hidden md:block
            absolute -left-40 top-0 
            h-60 w-60 rounded-full blur-xl
            bg-[radial-gradient(circle,rgba(70,243,216,0.15),transparent_60%)]
          "
        />
        <div
          className="
            hidden md:block
            absolute -right-28 -bottom-10 
            h-64 w-64 rounded-full blur-xl
            bg-[radial-gradient(circle,rgba(255,63,164,0.18),transparent_60%)]
          "
        />
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative mx-auto flex w-full flex-col gap-14 px-6 py-16 md:flex-row md:items-center md:justify-between max-w-7xl 2xl:max-w-none 2xl:px-32 2xl:py-24 2xl:gap-32">
        
        {/* LEFT */}
        <div className="fade-up max-w-xl space-y-7 2xl:max-w-2xl 2xl:space-y-9">
          
          {/* TAG */}
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
            <span className="inline-flex h-px w-10 bg-neutral-500" />
            <span>Double Trouble Studio</span>
          </div>

          {/* HEADING */}
          <h1 className="font-heading leading-tight tracking-tight text-3xl md:text-4xl lg:text-[2.8rem] 2xl:text-[3.8rem]">
            <span className="block text-dts-fog">DOUBLE THE IDEAS.</span>
            <span className="mt-1 inline-block bg-gradient-to-r from-[#46F3D8] via-[#FF3FA4] to-[#C9A96A] bg-clip-text text-transparent">
              DOUBLE THE IMPACT.
            </span>
          </h1>

          {/* TEXT */}
          <p className="text-sm md:text-[15px] text-neutral-300/90 leading-relaxed 2xl:text-base">
            <a
              href="/services/pr-media-digital-marketing"
              className="text-dts-gold hover:text-[#ff9a9e] underline"
            >
              Digital, PR,
            </a>{" "}
            web and experiences for premium brands that want to look sharp,
            speak with personality and stay top-of-mind.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <Link href="/contact" className="dts-animated-border text-sm">
              <span>START A PROJECT</span>
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="fade-up-delay w-full max-w-sm md:max-w-md 2xl:max-w-xl">
          <div className="relative">

            {/* Gradient frame */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-dts-neon/60 via-dts-neon-pink/40 to-dts-gold/60 opacity-80" />

            {/* Card */}
            <div className="relative flex flex-col gap-6 rounded-[1.8rem] border border-white/10 bg-dts-black/95 px-6 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">

              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dts-neon">
                  The DTS stack
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-300">
                  Strategy-first
                </span>
              </div>

              <p className="text-sm text-neutral-200/90">
                One partner for everything your brand needs to be seen, heard
                and remembered.
              </p>

              <div className="space-y-3 text-[12px]">
                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-neon" />
                  <div>
                    <p className="font-semibold text-dts-neon">Digital & Web</p>
                    <p className="text-neutral-300/90">
                      Social, websites, content systems & launches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-gold" />
                  <div>
                    <p className="font-semibold text-dts-gold">PR & Media</p>
                    <p className="text-neutral-300/90">
                      Features, interviews & brand narratives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-neon-pink" />
                  <div>
                    <p className="font-semibold text-dts-neon-pink">
                      Events & Celebs
                    </p>
                    <p className="text-neutral-300/90">
                      Launches, collaborations & AI video.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2 border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                <span className="text-dts-neon">Grow • Glow • Get noticed</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}