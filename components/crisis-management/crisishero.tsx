export default function CrisisManagementHero() {
  return (
    <section className="relative px-4 py-20 md:px-6 md:py-28">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />

      {/* Grid Overlay */}
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <span className="dts-pill mb-6 text-xs tracking-widest">
              Rapid Response • Strategic Recovery
            </span>

            <h1
              className="font-heading text-4xl leading-tight text-dts-fog sm:text-5xl md:text-6xl lg:text-6xl"
            >
              Expert Crisis Management
              <br />
              <span className="bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent">
                When It Matters Most
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-sm leading-7 text-dts-fog/70 sm:text-base md:text-lg md:leading-8">
              We help organizations respond, recover, and rebuild during
              critical situations with calm strategy, clear communication, and
              decisive execution.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="dts-animated-border w-fit">
                <span>Get Immediate Support</span>
              </button>

              <button className="w-fit rounded-full border border-dts-neon/30 bg-white/5 px-6 py-3 font-body text-sm font-medium text-dts-fog backdrop-blur-md transition duration-300 hover:border-dts-neon/60 hover:bg-dts-neon/10 hover:text-dts-neon hover:shadow-neon-soft">
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT (NO CARDS, JUST TEXT FLOW) */}
          <div className="max-w-md ml-auto space-y-10">
            
            {/* Header */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-dts-neon/80">
                Crisis Desk
              </p>
              <h3 className="mt-3 font-heading text-2xl text-dts-fog">
                Immediate Strategic Control
              </h3>
            </div>

            {/* Items */}
            <div className="space-y-8">
              {[
                {
                  title: "Response",
                  desc: "Fast assessment and immediate action to contain damage.",
                },
                {
                  title: "Recovery",
                  desc: "Clear communication plans to stabilize operations and trust.",
                },
                {
                  title: "Rebuilding",
                  desc: "Long-term reputation recovery with strategic guidance.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-[0.18em] text-dts-gold">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-dts-fog/75">
                    {item.desc}
                  </p>

                  <div className="mt-4 h-px w-full bg-white/10" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}