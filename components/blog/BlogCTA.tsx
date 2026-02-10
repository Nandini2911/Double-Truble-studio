import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="dts-section-shell p-20 max-w-6xl mx-auto text-center relative overflow-hidden">
      <div className="dts-grid-overlay" />

      <h2
        className="text-4xl md:text-5xl font-bold mb-6 dts-heading-3d"
        data-shadow="Start Your Project"
      >
        Ready to Create Impact Like This for Your Brand?
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        From guest and celebrity management to events, PR campaigns, websites,
        digital marketing systems and AI video production — DTS builds complete
        brand ecosystems that make businesses grow, glow and get noticed.
      </p>

      <Link href="/contact" className="dts-animated-border">
        <span>Start Your Project</span>
      </Link>
    </section>
  );
}
