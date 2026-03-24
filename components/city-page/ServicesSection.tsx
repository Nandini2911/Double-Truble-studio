"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "PR Campaigns",
      desc: "We craft powerful PR campaigns that position your brand in front of the right audience and build long-term credibility.",
    },
    {
      title: "Media Planning",
      desc: "Our data-driven media planning ensures your brand reaches the right people at the right time for maximum impact.",
    },
    {
      title: "Social Media Marketing",
      desc: "We create engaging social strategies that grow your audience, increase engagement, and build brand authority.",
    },
    {
      title: "Brand Strategy",
      desc: "From positioning to storytelling, we build strong brand identities that stand out in competitive markets.",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-24 bg-dts-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading mb-16 text-center">
          <span className="bg-gradient-to-r from-dts-neon to-dts-neon-pink bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>

        {/* Container */}
        <div className="bg-dts-charcoal border border-white/10 rounded-2xl overflow-hidden">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative px-8 md:px-12 py-10"
            >
              
              {/* Divider */}
              {index !== 0 && (
                <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
              )}

              <div className="grid md:grid-cols-2 gap-10 items-start">
                
                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-heading">
                  <span className="bg-gradient-to-r from-dts-neon to-dts-neon-pink bg-clip-text text-transparent">
                    {item.title}
                  </span>
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 leading-relaxed text-base max-w-md">
                  {item.desc}
                </p>

              </div>

              {/* Accent */}
              <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-dts-neon to-dts-neon-pink opacity-60" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}