// components/Footer.tsx

import Link from "next/link";

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
          md:grid-cols-3
        "
      >
        {/* COLUMN 1 — BRAND COPY */}
        <div className="space-y-4">
          <h3 className="text-[12px] uppercase tracking-[0.28em] text-dts-neon">
            Double Trouble Studio
          </h3>

          <p className="text-[14px] leading-relaxed text-neutral-400 max-w-xs">
            A digital, PR and creative studio building ecosystems across social
            media, web, media, events and celebrity collaborations. We help
            brands grow, glow & get noticed.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-neutral-400">
            {[
              "Digital Marketing",
              "PR & Media",
              "Web & Experiences",
              "Events & Weddings",
            ].map((service) => (
              <Link
                key={service}
                href="/services"
                className="
                  px-3 py-1.5 border border-white/12 rounded-full
                  hover:border-dts-neon hover:bg-white/5 hover:text-dts-neon
                  transition-all duration-200
                "
              >
                {service}
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMN 2 — NAV LINKS */}
        <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-[12px] uppercase tracking-[0.24em] text-neutral-500">
            Explore
          </h4>

          <ul className="space-y-2 text-[14px] w-full max-w-[180px]">
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/work", label: "Work" },
              { href: "/team", label: "Team" },
              { href: "/clients", label: "Clients" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    group flex items-center justify-between 
                    border border-transparent
                    px-2 py-1.5 rounded-md
                    hover:border-white/15 hover:bg-white/5 
                    hover:text-dts-neon
                    transition-all duration-200
                  "
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 — CONTACT + SOCIAL */}
        <div className="space-y-4">
          <h4 className="text-[12px] uppercase tracking-[0.24em] text-neutral-500">
            Connect
          </h4>

          <div className="space-y-1.5 text-[14px] text-neutral-400">
            <p>
              Email:{" "}
              <a
                href="mailto:hello@doubletroublestudio.com"
                className="hover:text-dts-neon transition-colors"
              >
                hello@doubletroublestudio.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+91XXXXXXXXXX"
                className="hover:text-dts-neon transition-colors"
              >
                +91 XXXXX XXXXX
              </a>
            </p>
            <p>Mumbai • India</p>
          </div>

          <div className="pt-3">
            <p className="text-[12px] uppercase tracking-[0.24em] text-neutral-500 mb-2">
              Social
            </p>

            <div className="flex flex-wrap gap-3 text-[13px]">
              {[
                { label: "Instagram", link: "https://instagram.com" },
                { label: "LinkedIn", link: "https://linkedin.com" },
                {
                  label: "Email",
                  link: "mailto:hello@doubletroublestudio.com",
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  className="
                    border border-white/12 px-3 py-1.5 rounded-full
                    hover:border-dts-neon hover:bg-white/5 hover:text-dts-neon
                    transition-all duration-200
                  "
                >
                  {s.label}
                </Link>
              ))}
            </div>
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
