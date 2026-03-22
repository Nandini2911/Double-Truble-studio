export default function CrisisManagementCaseStudies() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-16">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-5xl">
        
        {/* 🔹 HEADER */}
<div className="text-center flex flex-col items-center">
  
  {/* Case Studies (TOP) */}
  <span className="dts-pill mb-4 text-xs tracking-widest">
    Case Studies
  </span>

  {/* Success Stories (MAIN HEADING) */}
  <h2 className="dts-heading-3d font-heading text-3xl sm:text-4xl md:text-5xl text-dts-fog leading-tight">
    Success Stories
  </h2>

  {/* Description */}
  <p className="mt-6 max-w-2xl font-body text-sm text-dts-fog/75 sm:text-base md:text-lg leading-8">
    Real-world crisis situations handled with speed, precision, and strategic clarity.
  </p>

</div>
        {/* 🔹 TIMELINE */}
        <div className="relative mt-20">
          
          {/* vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

          <div className="space-y-16">
            {[
              {
                metric: "48h",
                title: "PR Crisis Containment",
                description:
                  "Handled a viral PR crisis within 48 hours, preventing long-term brand damage.",
              },
              {
                metric: "80%",
                title: "Reputation Recovery",
                description:
                  "Helped a brand recover 80% of its reputation within just two weeks.",
              },
              {
                metric: "3 Days",
                title: "Social Media Crisis Control",
                description:
                  "Stabilized negative sentiment and restored engagement within days.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                
                {/* LEFT / RIGHT CONTENT */}
                <div className="w-[45%]">
                  <p className="font-heading text-2xl text-dts-neon">
                    {item.metric}
                  </p>

                  <p className="mt-2 font-heading text-lg text-dts-fog">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm text-dts-fog/70">
                    {item.description}
                  </p>
                </div>

                {/* CENTER DOT */}
                <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-dts-neon shadow-neon-soft" />

                {/* EMPTY SIDE (balances layout) */}
                <div className="w-[45%]" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}