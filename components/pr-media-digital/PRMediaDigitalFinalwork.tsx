"use client";
import React from "react";

const accounts = [
  {
    name: "Vow Story",
    category: "Event Presence",
    handle: "@vowstory",
    image: "/work/pr.png",
    
  },
  {
    name: "Shritu Chadha",
    category: "Interior Brand",
    handle: "@shrituchadha",
    image: "/work/pr1.png",
  },
  {
    name: "RNK Car Rental",
    category: "Automotive Brand",
    handle: "@rnkcarrental",
    image: "/work/pr3.png",
  },
];

export default function InstagramWork() {
  return (
    <section className="w-full px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-16 max-w-xl">
          <span className="dts-pill mb-4">Digital Presence</span>

          <h2 className="text-3xl md:text-5xl font-heading dts-heading-3d">
            Presence. Consistency. Control.
          </h2>

          <p className="text-gray-400 mt-4">
            Instagram accounts managed with structured content,
            positioning and visual consistency — not random posting.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {accounts.map((acc, i) => (
            <div key={i} className="dts-card-3d overflow-hidden group">

              {/* IMAGE */}
              <div className="relative h-[340px] overflow-hidden rounded-xl">
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                {/* TEXT ON IMAGE */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] tracking-widest text-dts-neon uppercase">
                    {acc.category}
                  </p>
                  <h3 className="text-sm font-semibold text-white">
                    {acc.name}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {acc.handle}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}