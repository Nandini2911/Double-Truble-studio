export default function BlogAbout() {
  return (
    <section className="dts-section-shell p-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Why You Can Trust This Blog</h2>

      <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
        This is not a generic marketing blog. Every article here is written from
        real-world experience by the DTS team working on guest management,
        celebrity coordination, events, PR campaigns, digital marketing systems,
        websites and AI video production for actual brands and clients.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="dts-card-2d">
          <h3 className="font-semibold mb-3">Real Projects</h3>
          <p className="text-gray-400 text-sm">
            Insights taken directly from live events, campaigns and executions.
          </p>
        </div>

        <div className="dts-card-2d">
          <h3 className="font-semibold mb-3">Proven Strategies</h3>
          <p className="text-gray-400 text-sm">
            Methods and frameworks that we actually use to grow brands.
          </p>
        </div>

        <div className="dts-card-2d">
          <h3 className="font-semibold mb-3">Expert Team</h3>
          <p className="text-gray-400 text-sm">
            Written by professionals from events, PR, media, tech and marketing.
          </p>
        </div>
      </div>
    </section>
  );
}
