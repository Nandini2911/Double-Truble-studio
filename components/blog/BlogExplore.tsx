export default function BlogExplore() {
  const items = [
    {
      title: "Real Event & Celebrity Insights",
      desc: "Behind the scenes of guest, celebrity and event management from real projects.",
    },
    {
      title: "PR, Media & Digital Strategies",
      desc: "How brands grow using PR, media coverage and digital marketing systems.",
    },
    {
      title: "Web, AI Video & Marketing Tech",
      desc: "How modern websites, AI videos and marketing tech create brand impact.",
    },
    {
      title: "Strategic Roadmaps for Brands",
      desc: "Step-by-step planning frameworks we use to grow brands and campaigns.",
    },
  ];

  return (
    <section className="dts-section-shell p-14 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Explore What You’ll Discover Here
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <div key={item.title} className="dts-card-3d">
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
