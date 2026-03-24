
type Props = {
  service: string;
  city: string;
};

export default function AboutSection({ service, city }: Props) {
  return (
    <section className="px-6 md:px-16 py-20">
      
      <div className="dts-section-shell p-8 md:p-12 max-w-6xl mx-auto relative">
        
        {/* Grid overlay */}
        <div className="dts-grid-overlay" />

        <div className="relative z-10">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-heading mb-6 dts-heading-3d">
            About {service} in {city}
          </h2>

          {/* Main Paragraph */}
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
            In today’s fast-moving digital world, businesses in{" "}
            <span className="text-dts-neon">{city}</span> need more than just
            basic marketing — they need powerful, result-driven{" "}
            <span className="text-dts-neon-pink">{service}</span> strategies
            that actually create impact.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
            We specialize in helping brands across {city} build strong
            positioning, attract the right audience, and scale with confidence.
            Our approach combines creativity, data, and deep understanding of
            the {city} market to deliver measurable growth.
          </p>

          {/* Feature Grid */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            
            <div className="dts-card-3d">
              <h4 className="text-dts-neon font-semibold mb-2">
                Local Market Expertise
              </h4>
              <p className="text-gray-400 text-sm">
                We understand the {city} audience, trends, and behavior — giving
                your brand a competitive edge.
              </p>
            </div>

            <div className="dts-card-3d">
              <h4 className="text-dts-neon-pink font-semibold mb-2">
                Performance-Driven Strategy
              </h4>
              <p className="text-gray-400 text-sm">
                Every campaign is focused on ROI, conversions, and real business
                growth.
              </p>
            </div>

            <div className="dts-card-3d">
              <h4 className="text-dts-gold font-semibold mb-2">
                Creative Excellence
              </h4>
              <p className="text-gray-400 text-sm">
                We blend storytelling with design to create impactful brand
                experiences.
              </p>
            </div>

          </div>

          {/* Bottom Highlight */}
          <div className="mt-10 border-t border-white/10 pt-6 text-gray-400 max-w-3xl">
            Whether you’re a startup or an established brand in {city}, our{" "}
            <span className="text-dts-neon">{service}</span> solutions are
            designed to help you stand out, grow faster, and dominate your
            industry.
          </div>

        </div>
      </div>
    </section>
  );
}
