export default function CrisisManagementServices() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-8">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />

      {/* Grid Overlay */}
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-6xl">
        
        {/* 🔹 HEADER */}
        <div className="text-center flex flex-col items-center">
          <span className="dts-pill mb-6 text-xs tracking-widest">
            Services
          </span>

          <h2 className="dts-heading-3d font-heading text-3xl sm:text-4xl md:text-5xl text-dts-fog leading-tight">
            Services We Offer
          </h2>

          <p className="mt-6 max-w-2xl font-body text-sm text-dts-fog/75 sm:text-base md:text-lg leading-8">
            Our crisis management services are designed to respond rapidly,
            communicate effectively, and protect your organization at every stage.
          </p>
        </div>

        {/* 🔹 SERVICES GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Crisis communication strategy",
            "Media handling & PR response",
            "Social media crisis control",
            "Internal communication guidance",
            "Risk assessment & preparedness plans",
            "24/7 crisis support",
          ].map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-500 overflow-hidden hover:border-dts-neon/60 hover:shadow-neon-soft"
            >
              
              {/* 🔥 Hover Gradient Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-dts-neon/20 via-dts-neon-pink/20 to-dts-gold/20 blur-xl" />

              {/* Content */}
              <div className="relative z-10">
                
                {/* Title */}
                <p className="font-heading text-lg text-dts-fog/90 group-hover:text-white transition">
                  {service}
                </p>

                {/* subtle underline */}
                <div className="mt-4 h-px w-20 bg-gradient-to-r from-transparent via-dts-neon/40 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}