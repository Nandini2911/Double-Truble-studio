
export default function CTASection() {
  return (
    <section className="px-6 md:px-16 py-28 bg-dts-black relative overflow-hidden text-center">
      
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-dts-neon/20 via-transparent to-dts-neon-pink/20 blur-3xl opacity-40" />

      <div className="relative max-w-3xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-6">
          Ready to{" "}
          <span className="bg-gradient-to-r from-dts-neon to-dts-neon-pink bg-clip-text text-transparent">
            Grow Your Brand?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg mb-10">
          Let’s build something powerful together. We help brands scale,
          stand out, and dominate their market.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="dts-animated-border">
            <span>Start Your Project</span>
          </button>
        </div>

        {/* Optional trust line */}
        <p className="mt-6 text-sm text-gray-500">
          Trusted by premium brands across India
        </p>

      </div>
    </section>
  );
}

