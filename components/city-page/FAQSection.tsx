"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      q: "What is PR marketing?",
      a: "PR marketing helps build your brand reputation, increase visibility, and establish trust with your audience through strategic communication.",
    },
    {
      q: "Why is digital marketing important?",
      a: "Digital marketing helps businesses reach the right audience online, generate leads, and grow consistently in today’s competitive market.",
    },
    {
      q: "How can your services help my business grow?",
      a: "We combine strategy, creativity, and performance marketing to drive real business growth, not just vanity metrics.",
    },
    {
      q: "Do you offer services for startups?",
      a: "Yes, we work with startups as well as established brands to help them scale faster and build a strong market presence.",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-16 py-28 bg-dts-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading mb-16 text-center">
          <span className="bg-gradient-to-r from-dts-neon via-dts-neon-pink to-dts-gold bg-clip-text text-transparent">
            FAQs
          </span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className={`
                  border rounded-xl overflow-hidden
                  transition-all duration-500
                  ${isOpen 
                    ? "border-dts-neon/40 bg-gradient-to-br from-dts-neon/10 to-dts-neon-pink/10 shadow-[0_0_30px_rgba(70,243,216,0.2)]"
                    : "border-white/10 bg-white/[0.02]"
                  }
                `}
              >
                
                {/* Question */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center"
                >
                  <span className="text-lg font-medium">
                    <span className="bg-gradient-to-r from-dts-neon to-dts-neon-pink bg-clip-text text-transparent">
                      {item.q}
                    </span>
                  </span>

                  <span className="text-dts-neon text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-300 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  )
  ;
}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is PR marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PR marketing helps build brand reputation and visibility.",
          },
        },
        {
          "@type": "Question",
          "name": "Why is digital marketing important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps reach the right audience and grow your business online.",
          },
        },
      ],
    }),
  }}
/>