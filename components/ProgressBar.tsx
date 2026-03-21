"use client";
import { useEffect, useState } from "react";

function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.body.scrollHeight - window.innerHeight;

      setWidth((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-dts-neon z-50"
      style={{ width: `${width}%` }}
    />
  );
}