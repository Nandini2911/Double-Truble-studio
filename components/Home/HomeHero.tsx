"use client";
import React, { useState } from "react";

export default function HomeHero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      type: "hero",
      name,
      email,
      company: brand,
      service: "Hero Inquiry",
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        alert("🚀 Sent successfully");
        setName("");
        setEmail("");
        setBrand("");
        setMessage("");
      } else {
        alert("❌ Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }

    setLoading(false);
  };

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-black text-white overflow-hidden px-6 md:px-16">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-transparent blur-xl"></div>

      <div className="relative grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">

        {/* ================= LEFT SIDE (UNCHANGED) ================= */}
        <div>
          

         

          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-neutral-100">
            <span className="inline-flex h-px w-10 bg-neutral-100" />
            <span>Branding, PR & Digital Marketing Agency in Mumbai</span>
          </div>



          <p className="mt-6 text-gray-100 max-w-lg">
          Double Trouble Studio is a Mumbai-based creative agency helping brands across India build visibility, trust and premium positioning through PR, digital marketing, web and events.

          </p>

          <button className="mt-10 text-xs tracking-[0.3em] border-b border-[#46f3d8] pb-1 hover:text-[#46f3d8] transition">
            START A PROJECT
          </button>
        </div>

        {/* ================= RIGHT SIDE (COMPACT FORM) ================= */}
        <div className="dts-card-3d p-6 md:p-7 max-w-md ml-auto backdrop-blur-xl bg-white/5">

          {/* HEADER SAME */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm tracking-[0.3em] text-[#46f3d8]">
            Start Your Project with Double Trouble Studio
            </h3>

            <span className="text-[10px] border px-3 py-1 rounded-full border-white/20">
              STRATEGY-FIRST
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 focus:border-[#46f3d8] outline-none text-sm"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 focus:border-[#46f3d8] outline-none text-sm"
            />

            <input
              type="text"
              placeholder="Brand / Business Name"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 focus:border-[#46f3d8] outline-none text-sm"
            />

            <textarea
              placeholder="Tell us about your project"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 focus:border-[#46f3d8] outline-none resize-none text-sm"
            />

            <button
              type="submit"
              className="dts-btn-primary w-full py-2.5 text-xs tracking-[0.25em]"
              disabled={loading}
            >
              {/* Top label + pill */}
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dts-neon 2xl:text-[12px]">
                  The DTS stack
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-300 2xl:px-4 2xl:text-[11px]">
                  Strategy-first
                </span>
              </div>

              {/* One clean sentence */}
              <p className="text-sm leading-relaxed text-neutral-200/92 2xl:text-[15px]">
                One partner for everything your brand needs to be seen, heard
                and remembered.
              </p>

              {/* Simple vertical list */}
              <div className="space-y-3 text-[11px] md:text-[12px] 2xl:space-y-5 2xl:text-[13px]">
                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-neon shadow-[0_0_10px_rgba(70,243,216,0.9)] 2xl:h-3 2xl:w-3" />
                  <div>
                    <p className="font-semibold text-dts-neon">Digital &amp; Web</p>
                    <p className="leading-snug text-neutral-300/90">
                      Social, websites, content systems &amp; launches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-gold 2xl:h-3 2xl:w-3" />
                  <div>
                    <p className="font-semibold text-dts-gold">PR &amp; Media</p>
                    <p className="leading-snug text-neutral-300/90">
                      <a href="https://www.dtsworld.in/services/pr-media-digital-marketing" 
                      className="text-dts-gold hover:text-[#ff9a9e] underline">Features</a>, interviews &amp; strong brand narratives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-dts-neon-pink 2xl:h-3 2xl:w-3" />
                  <div>
                    <p className="font-semibold text-dts-neon-pink">
                      Events &amp; Celebs
                    </p>
                    <p className="leading-snug text-neutral-300/90">
                      Launches, IPs, celebrity collaborations &amp; AI video.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.18em] text-neutral-400 2xl:mt-3 2xl:pt-4 2xl:text-[11px]">
                <span className="text-dts-neon">Grow • Glow • Get noticed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}