"use client";
import React, { useEffect, useState } from "react";

const works = [
  {
    title: "Luxury Wedding Guest Flow",
    category: "Guest Management",
    images: ["/work/wedding1.jpg", "/work/wedding2.jpg", "/work/wedding3.jpg"],
    desc: "Structured entry system with family, VIP and guest segmentation ensuring zero chaos at arrival.",
  },
  {
    title: "Celebrity Event Entry Control",
    category: "Guest Management",
    images: ["/work/celebrity.jpg"],
    desc: "Handled VIP arrivals, media coordination and access control under high-pressure conditions.",
  },
  {
    title: "Brand Launch Guest System",
    category: "Guest Management",
    images: ["/work/brand.jpg", "/work/brand2.jpg"],
    desc: "Built a complete RSVP + entry flow system with tiered access and smooth check-ins.",
  },
];

function WorkCard({ item }: any) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.images.length);
    }, 2500); // speed

    return () => clearInterval(interval);
  }, [item.images.length]);

  return (
    <div className="dts-card-3d group overflow-hidden">

      {/* IMAGE SLIDER */}
      <div className="relative h-[260px] overflow-hidden rounded-xl">
        {item.images.map((img: string, i: number) => (
          <img
            key={i}
            src={img}
            alt={item.title}
            className={`absolute inset-0 w-full h-[90h] object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      {/* CONTENT */}
      <div className="mt-4">
        <p className="text-xs tracking-widest text-dts-neon mb-2">
          {item.category}
        </p>

        <h3 className="text-lg font-semibold mb-2">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {item.desc}
        </p>
      </div>

    </div>
  );
}

export default function HomeWork() {
  return (
    <section className="w-full px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-16">
          <span className="dts-pill mb-4">Guest Management Work</span>
          <br>
          </br>

          <h2 className="text-3xl md:text-5xl font-heading dts-heading-3d">
            Controlled Entry. Premium Experience.
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl">
            Real guest management systems executed across weddings, celebrity events,
            and brand launches — where entry flow, access control, and first impressions matter.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((item, i) => (
            <WorkCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}