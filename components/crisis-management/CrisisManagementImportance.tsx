export default function CrisisManagementImportance() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-16">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />

      {/* Grid Overlay */}
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-6xl">
        
        {/* 🔹 CENTERED HEADING */}
        <div className="text-center flex flex-col items-center">
          <span className="dts-pill mb-6 text-xs tracking-widest">
            Why It Matters
          </span>

          <h2 className="dts-heading-3d font-heading text-3xl sm:text-4xl md:text-5xl text-dts-fog leading-tight">
            Why Crisis Management is Critical
          </h2>

          <p className="mt-6 max-w-2xl font-body text-sm text-dts-fog/75 sm:text-base md:text-lg leading-8">
            In moments of uncertainty, the speed and clarity of your response
            define the outcome. Effective crisis management protects your
            organization from long-term damage and ensures stability when it
            matters most.
          </p>

          {/* ✅ INLINE STAT */}
          <p className="mt-8 font-heading text-lg md:text-xl text-dts-fog">
            A delayed response can increase reputational damage by{" "}
            <span className="ml-2 inline-block rounded-full border border-dts-neon/40 bg-dts-neon/10 px-4 py-1 text-dts-neon shadow-neon-soft">
              70%
            </span>
          </p>
        </div>

        {/* 🔹 FEATURE CARDS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[
            "Protect brand reputation",
            "Minimize financial loss",
            "Ensure business continuity",
            "Maintain stakeholder trust",
          ].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-500 overflow-hidden hover:border-dts-neon/60 hover:shadow-neon-soft"
            >
              
              {/* 🔥 Gradient Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-dts-neon/20 via-dts-neon-pink/20 to-dts-gold/20 blur-xl" />

              {/* Content */}
              <div className="relative z-10">
                <p className="font-heading text-lg text-dts-fog/90 group-hover:text-white transition">
                  {item}
                </p>

                <p className="mt-3 text-sm text-dts-fog/60 group-hover:text-dts-fog/90 transition">
                  Strategic response ensures stability and minimizes long-term impact.
                </p>

                {/* underline */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-dts-neon/50 transition duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}