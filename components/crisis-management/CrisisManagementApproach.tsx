export default function CrisisManagementApproach() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-16">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />

      {/* Grid Overlay */}
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-6xl">
        
        {/* 🔹 HEADER */}
        <div className="text-center flex flex-col items-center">
          <span className="dts-pill mb-6 text-xs tracking-widest">
            Our Approach
          </span>

          <h2 className="dts-heading-3d font-heading text-3xl sm:text-4xl md:text-5xl text-dts-fog leading-tight">
            Our Crisis Management Approach
          </h2>

          <p className="mt-6 max-w-2xl font-body text-sm text-dts-fog/75 sm:text-base md:text-lg leading-8">
            We follow a structured process to handle crises with speed, clarity,
            and control—minimizing damage and restoring stability.
          </p>
        </div>

        {/* 🔹 HORIZONTAL STEPS */}
        <div className="mt-20 relative">
          
          {/* line */}
          <div className="absolute top-3 left-0 w-full h-px bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {[
              "Assessment & Rapid Response",
              "Strategy Development",
              "Communication Planning",
              "Execution & Monitoring",
              "Recovery & Reputation Rebuilding",
            ].map((step, index) => (
              <div key={index} className="relative text-center group">
                
                {/* 🔥 Hover Gradient Glow (NO BOX) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-dts-neon/20 via-dts-neon-pink/20 to-dts-gold/20 blur-2xl" />

                <div className="relative z-10">
                  
                  {/* dot */}
                  <div className="mx-auto mb-6 h-3 w-3 rounded-full bg-dts-neon shadow-neon-soft" />

                  {/* step number */}
                  <p className="text-xs text-dts-fog/40 mb-1">
                    Step {index + 1}
                  </p>

                  {/* title */}
                  <p className="font-heading text-base md:text-lg text-dts-fog/90 group-hover:text-dts-neon transition">
                    {step}
                  </p>

                  {/* description */}
                  <p className="mt-2 text-sm text-dts-fog/60 group-hover:text-dts-fog/90 transition">
                    Strategic execution ensures clarity and control.
                  </p>

                  {/* underline */}
                  <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-dts-neon/40 to-transparent" />
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}