export default function CrisisManagementTestimonials() {
  return (
    <section className="relative px-4 py-24 md:px-6 md:py-28">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-6xl">
        
        {/* 🔹 HEADER */}
        <div className="text-center">
          <span className="dts-pill mb-4 text-xs tracking-widest">
            Testimonials
          </span>
<br></br>
          <h2 className="dts-heading-3d font-heading text-3xl sm:text-4xl md:text-5xl text-dts-fog">
            What Our Clients Say
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-lg text-dts-fog/75">
            Trusted by organizations to handle critical moments with precision and confidence.
          </p>
        </div>

        {/* 🔹 FLOATING STACK */}
        <div className="relative mt-20 grid gap-6 md:grid-cols-3">
          
          {[
            {
              quote:
                "Their rapid response helped us control a major PR crisis before it escalated. Highly professional team.",
              name: "Marketing Director",
              company: "Global Retail Brand",
            },
            {
              quote:
                "We regained public trust within weeks thanks to their strategic communication and clear execution.",
              name: "CEO",
              company: "FinTech Company",
            },
            {
              quote:
                "Their crisis management expertise was critical in stabilizing our operations during a challenging time.",
              name: "Operations Head",
              company: "Healthcare Organization",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-500 hover:shadow-neon-soft hover:border-dts-neon/50 overflow-hidden ${
                index === 1 ? "md:-mt-6 md:scale-105" : ""
              }`}
            >
              
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-dts-neon/20 via-dts-neon-pink/20 to-dts-gold/20 blur-xl" />

              <div className="relative z-10 flex flex-col gap-4">
                
                {/* Quote */}
                <p className="text-sm md:text-base text-dts-fog/80 leading-7">
                  “{item.quote}”
                </p>

                {/* Divider */}
                <div className="h-px w-16 bg-gradient-to-r from-dts-neon/40 to-transparent" />

                {/* Name */}
                <p className="font-heading text-sm text-dts-fog">
                  {item.name}
                </p>

                {/* Company */}
                <p className="text-xs text-dts-fog/50">
                  {item.company}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}