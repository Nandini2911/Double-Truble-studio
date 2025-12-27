// components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";
import { SiPinterest } from "react-icons/si";

const SERVICES = [
  { label: "Guest Management", href: "/services/guest-management" },
  { label: "Celebrity Management", href: "/services/celebrity-management" },
  { label: "Events & Weddings", href: "/services/events-weddings" },
  { label: "PR, Media & Digital Marketing", href: "/services/pr-media-digital-marketing" },
  { label: "Web Development & Marketing", href: "/services/web-development-marketing" },
  { label: "AI Video & VFX", href: "/services/ai-video-vfx" },
  { label: "Strategic Road Map", href: "/services/strategic-roadmap" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#050609] border-t border-white/10 text-neutral-300">
      {/* TOP AREA */}
      <div
        className="
          mx-auto 
          max-w-[900px] md:max-w-[1100px] 2xl:max-w-[1400px]
          px-4 py-14 
          grid gap-12 
          md:grid-cols-4
        "
      >
        {/* COLUMN 1 — BRAND + LOGO + TEXT */}
        <div className="space-y-5 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/Circle logo.png"
              alt="Double Trouble Studio"
              width={48}
              height={48}
              className="h-12 w-12 opacity-90"
            />

            <span className="text-[12px] uppercase tracking-[0.28em] text-dts-neon leading-snug">
              Double Trouble Studio
            </span>
          </div>

          <p className="text-[14px] leading-relaxed text-neutral-400 max-w-xs">
            A digital, PR and creative studio building ecosystems across social
            media, web, media, events and celebrity collaborations. We help
            brands grow, glow &amp; get noticed.
          </p>
        </div>

        {/* COLUMN 2 — EXPLORE */}
        <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-[12px] uppercase tracking-[0.24em] text-neutral-500">
            Explore
          </h4>

          <ul className="space-y-2 text-[14px] w-full max-w-[200px]">
            {[
              { href: "/about", label: "About" },
              { href: "/Team", label: "Team" },
              { href: "/Client", label: "Client" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    block px-2 py-1.5 rounded-md
                    hover:bg-white/5 hover:text-dts-neon
                    transition-all duration-200
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 — SERVICES */}
        <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-[12px] uppercase tracking-[0.24em] text-neutral-500">
            Services
          </h4>

          <ul className="space-y-2 text-[14px] w-full max-w-[260px]">
            {SERVICES.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="
                    block px-2 py-1.5 rounded-md
                    hover:bg-white/5 hover:text-dts-neon
                    transition-all duration-200
                  "
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4 — CONNECT + SOCIAL ICONS */}
<div className="space-y-5">
  <h4 className="text-[12px] uppercase tracking-[0.24em] text-neutral-500">
    Connect
  </h4>

  <div className="space-y-2 text-[14px] text-neutral-400 leading-relaxed">
    <p>
      <a
        href="mailto:hello@dtsworld.in"
        className="hover:text-dts-neon transition-colors"
      >
        hello@dtsworld.in
      </a>
    </p>

    <p>
      <a
        href="tel:+918000006021"
        className="hover:text-dts-neon transition-colors"
      >
        +91 80000 06021
      </a>
    </p>

    <p>
      Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol,  
      Andheri East, Mumbai, Maharashtra 400059
    </p>
  </div>


          {/* SOCIAL ICONS — BOXED */}
          <div className="flex items-center gap-4 pt-2">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/doubletrouble_studio/" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/doubletrouble-studio/posts/?feedView=all" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585435434487" },
              { Icon: Twitter, href: "https://x.com/trouble90100" },
              { Icon: SiPinterest, href: "https://pinterest.com" },
              { Icon: Mail, href: "mailto:hello@dtsworld.in" },
            ].map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="
                  h-10 w-10
                  flex items-center justify-center
                  rounded-xl
                  border border-white/15
                  bg-black/30
                  text-neutral-400
                  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                  transition-all duration-300
                  hover:border-dts-neon
                  hover:text-dts-neon
                  hover:bg-white/5
                  hover:shadow-[0_0_18px_rgba(70,243,216,0.35)]
                "
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-[12px] text-neutral-500">
        © {new Date().getFullYear()} Double Trouble Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
