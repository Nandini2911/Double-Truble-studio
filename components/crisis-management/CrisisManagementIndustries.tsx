export default function CrisisManagementIndustries() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-16">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />

      {/* Grid Overlay */}
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-5xl">
        
        {/* 🔹 HEADER */}
        <div className="text-center flex flex-col items-center">
          <span className="dts-pill mb-6 text-xs tracking-widest">
            Industries
          </span>

          <h2 className="dts-heading-3d font-heading text-3xl sm:text-4xl md:text-5xl text-dts-fog leading-tight">
            Industries We Serve
          </h2>

          <p className="mt-6 max-w-2xl font-body text-sm text-dts-fog/75 sm:text-base md:text-lg leading-8">
            We support organizations across multiple sectors with tailored crisis
            management strategies and rapid response solutions.
          </p>
        </div>

        {/* 🔹 PILLS LAYOUT */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            "Corporate & Enterprises",
            "Startups",
            "Healthcare",
            "Government / Public Sector",
            "Finance",
            "E-commerce",
          ].map((industry, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:border-dts-neon/50 hover:shadow-neon-soft overflow-hidden"
            >
              
              {/* 🔥 Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-dts-neon/20 via-dts-neon-pink/20 to-dts-gold/20 blur-xl" />

              <span className="relative z-10 font-body text-sm md:text-base text-dts-fog/90 group-hover:text-white transition">
                {industry}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}