"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Services is a DROPDOWN only (no page)
  { href: "#", label: "SERVICES", dropdown: true },
  { href: "/Team", label: "Team" },
  { href: "/Client", label: "Client" },
  { href: "/contact", label: "Contact" },
];

const serviceItems = [
  {
    label: "Guest Management",
    href: "/services/guest-management",
  },
  {
    label: "Celebrity Management",
    href: "/services/celebrity-management",
  },
  {
    label: "Events & Weddings",
    href: "/services/events-weddings",
  },
  {
    label: "PR, Media & Digital Marketing",
    href: "/services/pr-media-digital-marketing",
  },
  {
    label: "Web Development & Marketing",
    href: "/services/web-development-marketing",
  },
  {
    label: "AI Video & VFX",
    href: "/services/ai-video-vfx",
  },
  {
    label: "Strategic Road Map",
    href: "/services/strategic-roadmap",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile dropdown

  return (
    <header className="sticky top-0 z-50 dts-nav-green-luxury">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center" onClick={() => { setOpen(false); setServicesOpen(false); }}>
          <Image
            src="/Circle logo.png"
            alt="Double Trouble Studio"
            width={200}
            height={50}
            className="h-12 w-auto transition-all duration-300 hover:opacity-80"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden scale-y-125 items-center gap-5 text-[12px] font-bold uppercase tracking-[0.22em] md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href !== "#" && pathname.startsWith(item.href);

            // SERVICES DROPDOWN (NO LINK)
            if (item.dropdown) {
              return (
                <div key="services" className="group relative">
                  {/* Trigger (no navigation) */}
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="group relative cursor-default"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="text-neutral-300 transition-all group-hover:text-dts-neon-pink">
                      Services
                    </span>

                    <span
                      className={`
                        pointer-events-none absolute left-0 -bottom-1 h-px
                        bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                        shadow-[0_0_12px_rgba(70,243,216,0.8)]
                        transition-all duration-300
                        w-0 group-hover:w-full
                      `}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className="
                      invisible opacity-0 translate-y-2
                      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                      absolute left-0 top-full mt-6 w-[460px]
                      rounded-2xl bg-black/95 backdrop-blur-xl
                      border border-white/10
                      shadow-[0_30px_80px_rgba(0,0,0,0.85)]
                      transition-all duration-300 ease-out
                      z-50
                    "
                  >
                    <ul className="p-3">
                      {serviceItems.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="
                              block rounded-xl px-4 py-3
                              text-[11px] font-bold uppercase tracking-[0.18em]
                              text-neutral-300
                              hover:bg-white/5 hover:text-dts-neon
                              transition-all
                            "
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                   
                  </div>
                </div>
              );
            }

            // Normal links
            return (
              <Link key={item.href} href={item.href} className="group relative">
                <span
                  className={`transition-all ${
                    isActive
                      ? "text-dts-neon"
                      : "text-neutral-300 group-hover:text-dts-neon-pink"
                  }`}
                >
                  {item.label}
                </span>

                <span
                  className={`
                    pointer-events-none absolute left-0 -bottom-1 h-px
                    bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold
                    shadow-[0_0_12px_rgba(70,243,216,0.8)]
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="scale-y-125 dts-animated-border">
            <span>START PROJECT</span>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-white/20 p-2 md:hidden"
          onClick={() => {
            setOpen(!open);
            if (open) setServicesOpen(false);
          }}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE NAV */}
      <nav
        className={`
          md:hidden px-4 pb-4 pt-2
          text-[12px] uppercase tracking-[0.15em] font-bold
          dts-navbar-green
          border-t border-white/10 space-y-3
          overflow-hidden transition-all duration-300 ease-out
          ${open ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : item.href !== "#" && pathname.startsWith(item.href);

          // Mobile services dropdown toggle (no navigation)
          if (item.dropdown) {
            return (
              <div key="services-mobile" className="space-y-2">
                <button
                  type="button"
                  className={`flex w-full items-center justify-between ${
                    servicesOpen ? "text-dts-neon" : "text-neutral-300 hover:text-dts-neon-pink"
                  }`}
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  <span>SERVICS</span>
                  <span className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
                </button>

                <div
                  className={`
                    ml-3 overflow-hidden border-l border-white/10 pl-3 transition-all duration-300 ease-out
                    ${servicesOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="space-y-2 py-2">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => {
                          setOpen(false);
                          setServicesOpen(false);
                        }}
                        className="block text-[11px] uppercase tracking-[0.14em] text-neutral-400 hover:text-dts-neon transition-all"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setOpen(false);
                setServicesOpen(false);
              }}
              className={`block ${
                isActive ? "text-dts-neon" : "text-neutral-300 hover:text-dts-neon-pink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <Link
          href="/contact"
          className="mt-2 inline-flex dts-animated-border"
          onClick={() => {
            setOpen(false);
            setServicesOpen(false);
          }}
        >
          <span>START PROJECT</span>
        </Link>
      </nav>
    </header>
  );
}
