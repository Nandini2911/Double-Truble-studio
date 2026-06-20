"use client";
import React, { useEffect, useState } from "react";

const works = [
  {
    title: "Brand Endorsement",
    images: ["/work/cele1.jpg", "/work/cele22.jpg"],
  },
  {
    title: "Event Appearance",
    images:  ["/work/cele3.jpg", "/work/cele4.png"],
  },
  {
    title: "Campaign Shoot",
    images: ["/work/cele5.png", "/work/cele6.png"],
  },
];

function WorkCard({ item }: any) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.images.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [item.images.length]);

  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/10">

      {/* IMAGE */}
      <div className="relative h-[320px] overflow-hidden">
        {item.images.map((img: string, i: number) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-[90h] object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition" />

        {/* MINIMAL TITLE */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-sm tracking-widest text-white/90">
            {item.title}
          </h3>
        </div>
      </div>

    </div>
  );
}

export default function CelebrityWork() {
  return (
    <section className="w-full px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto">

        {/* PERFECT HEADING */}
        <div className="mb-16 max-w-xl">
          <span className="dts-pill mb-4">Celebrity Management</span>

          <h2 className="text-3xl md:text-5xl font-heading dts-heading-3d">
            Right Faces. Clean Execution.
          </h2>

          <p className="text-gray-400 mt-4">
            From endorsements to appearances — managed end-to-end with clarity,
            control, and premium execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((item, i) => (
            <WorkCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}