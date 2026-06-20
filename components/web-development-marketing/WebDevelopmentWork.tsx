"use client";
import React from "react";

const sites = [
  {
    name: "AP World",
    url: "https://apworld.in",
    image: "/work/web1.png",
  },
  {
    name: "RNK Car Rental",
    url: "https://rnk.com",
    image: "/work/web2.png",
  },
  {
    name: "Shruti Chadha",
    url: "https://shrituchadha.com",
    image: "/work/web3.png",
  },
];

export default function WebsiteWork() {
  return (
    <section className="w-full px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-16 max-w-xl">
          <span className="dts-pill mb-4">Web Development</span>

          <h2 className="text-3xl md:text-5xl font-heading dts-heading-3d">
            Built to Perform. Designed to Convert.
          </h2>

          <p className="text-gray-400 mt-4">
            High-performance websites designed with clarity, speed and premium execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {sites.map((site, i) => (
            <a
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-2xl border border-white/10"
            >

              {/* IMAGE */}
              <div className="relative h-[340px] overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition"></div>

                {/* TEXT */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-sm tracking-widest text-white">
                    {site.name}
                  </h3>
                </div>

                {/* HOVER CTA */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-[10px] px-3 py-1 border border-white/20 rounded-full backdrop-blur text-white">
                    Visit Site →
                  </span>
                </div>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}