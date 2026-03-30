"use client";

import { useEffect, useState } from "react";

type Props = {
  headings: { text: string; id: string }[];
};

export default function BlogTOC({ headings }: Props) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // 🔥 target scroll container (important for inner scroll)
    const container = document.querySelector(
      ".blog-content"
    )?.parentElement;

    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: container, // ✅ FIX: use inner scroll container
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    const elements: HTMLElement[] = [];

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [headings]);

  return (
    <ul className="space-y-2 text-sm">
      {headings.map((h) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            className={`block transition-all duration-200 ${
              activeId === h.id
                ? "text-dts-neon font-semibold translate-x-1"
                : "text-gray-400 hover:text-white hover:translate-x-1"
            }`}
          >
            → {h.text}
          </a>
        </li>
      ))}
    </ul>
  );
}