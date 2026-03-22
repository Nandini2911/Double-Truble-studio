export default function CrisisManagementWhyChooseUs() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-16">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />

      {/* Grid Overlay */}
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-5xl">
        
        {/* 🔹 HEADER */}
        <div className="text-center flex flex-col items-center">
          <span className="dts-pill mb-4 text-xs tracking-widest">
            Why Choose Us
          </span>

          <h2 className="dts-heading-3d font-heading text-3xl sm:text-4xl md:text-5xl text-dts-fog leading-tight">
            Trusted Crisis Management Experts
          </h2>

          <p className="mt-6 max-w-2xl font-body text-sm text-dts-fog/75 sm:text-base md:text-lg leading-8">
            We combine speed, strategy, and expertise to manage critical situations
            with precision and confidence.
          </p>
        </div>
{/* 🔹 FEATURES (UNIQUE PANEL STYLE) */}
<div className="mt-20 flex flex-col divide-y divide-white/10">
  {[
    "Experienced crisis experts",
    "Fast response time",
    "Proven track record",
    "Confidential & strategic handling",
    "Data-driven decisions",
  ].map((item, index) => (
    <div
      key={index}
      className="group relative flex items-center justify-between py-8 px-2 cursor-pointer overflow-hidden"
    >
      
      {/* 🔥 Hover Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-dts-neon/10 via-dts-neon-pink/10 to-transparent blur-xl" />

      {/* LEFT TEXT */}
      <p className="relative z-10 font-heading text-lg md:text-xl text-dts-fog/90 group-hover:text-dts-neon transition duration-300">
        {item}
      </p>

      {/* RIGHT VISUAL ACCENT */}
      <div className="relative z-10 flex items-center gap-3 opacity-40 group-hover:opacity-100 transition duration-300">
        
        {/* animated line */}
        <div className="h-px w-12 bg-dts-neon group-hover:w-20 transition-all duration-300" />

        {/* arrow */}
        <span className="text-dts-neon text-sm group-hover:translate-x-1 transition">
          →
        </span>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}