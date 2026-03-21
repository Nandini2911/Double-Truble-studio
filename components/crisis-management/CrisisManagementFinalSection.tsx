"use client";
import { useState } from "react";

export default function CrisisManagementFinalSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    "What qualifies as a crisis?",
    "How fast do you respond?",
    "Do you offer 24/7 support?",
    "Can you handle social media crises?",
  ];

  return (
    <section className="relative px-4 py-24 md:px-6 md:py-8">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dts-neon/10 via-transparent to-dts-neon-pink/10 blur-2xl" />
      <div className="dts-grid-overlay" />

      <div className="mx-auto max-w-5xl space-y-24">

        {/* ================= FAQs ================= */}
        <div>
          <div className="text-center">
            <span className="dts-pill mb-4 text-xs tracking-widest">
              FAQs
            </span>
            <br></br>

            <h2 className="dts-heading-3d font-heading text-3xl md:text-5xl text-dts-fog">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((q, i) => (
              <div
                key={i}
                className="group border border-white/10 rounded-xl overflow-hidden transition duration-300"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-heading text-dts-fog group-hover:text-dts-neon transition">
                    {q}
                  </span>

                  <span className="text-dts-neon text-lg">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 text-sm text-dts-fog/70 transition-all duration-300 ${
                    openIndex === i ? "pb-4 max-h-40" : "max-h-0 overflow-hidden"
                  }`}
                >
                  Crisis situations include reputational damage, PR issues,
                  operational disruptions, or any event that threatens your
                  organization’s stability and trust.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          
          <h2 className="font-heading text-3xl md:text-5xl text-dts-fog leading-tight">
            Don’t wait for a crisis to escalate—act now.
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            
            <button className="dts-animated-border">
              <span>Request Emergency Support</span>
            </button>

            <button className="rounded-full border border-dts-neon/30 bg-white/5 px-6 py-3 text-dts-fog hover:bg-dts-neon/10 hover:text-dts-neon transition">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          
          {/* LEFT: CONTACT INFO */}
          <div>
            <h3 className="font-heading text-xl text-dts-fog">
              Emergency Support
            </h3>

            <p className="mt-4 text-sm text-dts-fog/70">
              Our team is available around the clock to assist you in critical situations.
            </p>

            <div className="mt-6 space-y-4">
              
              <p className="text-dts-neon font-heading text-lg">
                📞 +1 (800) 123-4567
              </p>

              <p className="text-dts-fog/80">
                ✉️ support@yourcompany.com
              </p>

              <p className="text-xs text-dts-neon">
                ● Available 24/7
              </p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-dts-fog focus:border-dts-neon outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-dts-fog focus:border-dts-neon outline-none"
            />

            <textarea
              placeholder="Describe your situation"
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-dts-fog focus:border-dts-neon outline-none"
            />

            <button className="w-full rounded-full bg-dts-neon text-black font-medium py-3 hover:shadow-neon-soft transition">
              Submit Request
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}