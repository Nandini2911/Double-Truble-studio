"use client";

import { motion } from "framer-motion";

type Props = {
  city: string;
};

export default function WhyChooseUs({ city }: Props) {
  const points = [
    {
      title: "Local Expertise",
      desc: `Deep understanding of ${city}'s market, audience, and trends.`,
    },
    {
      title: "Proven Growth",
      desc: "We deliver measurable results that actually grow your business.",
    },
    {
      title: "Creative Edge",
      desc: "Bold ideas combined with strategy to make your brand stand out.",
    },
    {
      title: "Premium Execution",
      desc: "Every detail is crafted to position your brand at the top.",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-28 bg-dts-black relative overflow-hidden">
      
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-3xl opacity-40" />

      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading mb-6">
          Why Brands Choose Us
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          We help businesses in{" "}
          <span className="text-dts-neon">{city}</span> grow with strategy,
          creativity, and performance-driven execution.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                p-6 
                border border-white/10 
                rounded-xl 
                bg-white/[0.02] 

                transition-all duration-500

                hover:bg-gradient-to-br 
                hover:from-dts-neon/10 
                hover:to-dts-neon-pink/10 

                hover:border-dts-neon/30 
                hover:shadow-[0_0_25px_rgba(70,243,216,0.15)] 

                hover:-translate-y-1
              "
            >
              
              {/* Accent line */}
              <div className="w-10 h-[2px] mb-4 bg-gradient-to-r from-dts-neon to-dts-neon-pink" />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-dts-neon">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
