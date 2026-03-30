
type Props = {
  service: string;
  city: string;
};


export default function HeroSection({ service, city }: Props) {
  return (
    <section className="relative px-6 md:px-16 py-24 overflow-hidden">
      
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 dts-bg-neon-move" />

      {/* 📐 Grid Overlay */}
      <div className="dts-grid-overlay" />

      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* 🏷️ Pill */}
        <div className="dts-pill mb-6">
          Premium Agency • {city}
        </div>
<br></br>
        {/* 🔥 Main Heading */}
        <h1
          className="text-4xl md:text-6xl font-heading leading-tight dts-heading-3d"
          data-shadow={`${service} in ${city}`}
        >
          {service} in {city}
        </h1>

        {/* ✨ Subtext */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We help brands in <span className="text-dts-neon">{city}</span> grow,
          scale, and dominate with high-performance{" "}
          <span className="text-dts-neon-pink">{service}</span> strategies.
        </p>

        {/* 🚀 CTA Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          
          {/* Primary CTA */}
          <button className="dts-animated-border">
            <span>Start Project</span>
          </button>

          {/* Secondary CTA */}
         
        </div>

        {/* 🔥 Extra Trust Line */}
        <p className="mt-8 text-sm text-gray-400">
          Trusted by premium brands across {city}
        </p>
      </div>
    </section>
  );
}
