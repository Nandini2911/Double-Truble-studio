// components/home/ServicesGrid.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Megaphone,
  Newspaper,
  Globe,
  Sparkles,
  Users,
  Clapperboard,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    title: "Digital Marketing & Social Media",
    desc: "Strategy-led content + performance that makes your brand hard to ignore.",
    badge: "Popular",
    icon: Megaphone,
    features: ["Content Strategy", "Reels & Creatives", "Performance Ads", "Funnels & Reporting"],
    href: "/contact?service=digital-marketing",
  },
  {
    title: "PR & Brand Communications",
    desc: "Narratives that travel—press, features and thought-leadership that build credibility.",
    badge: "Popular",
    icon: Newspaper,
    features: ["Media Outreach", "Features & Interviews", "Brand Narrative", "Founder Positioning"],
    href: "/contact?service=pr-brand",
  },
  {
    title: "Web Development & Experience",
    desc: "High-performing websites that look premium and convert with clarity.",
    icon: Globe,
    features: ["Next.js Websites", "UI/UX Design", "SEO Foundations", "Performance Optimisation"],
    href: "/contact?service=web-experience",
  },
  {
    title: "Events & Experiences",
    desc: "From launches to luxury weddings—concept, design and execution under one lens.",
    icon: Sparkles,
    features: ["Concept & Theme", "Production & Vendors", "Guest Journey", "On-Ground Execution"],
    href: "/contact?service=events",
  },
  {
    title: "Celebrity & Influencer Collaborations",
    desc: "Strategic alignments with personalities who extend your voice and values.",
    badge: "Popular",
    icon: Users,
    features: ["Talent Curation", "Campaign Collabs", "Negotiation Support", "Deliverable Tracking"],
    href: "/contact?service=celebrity-influencer",
  },
  {
    title: "AI Video Ads & VFX",
    desc: "Next-gen visual storytelling for scroll-stopping, campaign-ready content.",
    icon: Clapperboard,
    features: ["AI Ads", "Product Films", "VFX Enhancements", "Fast Turnarounds"],
    href: "/contact?service=ai-video",
  },
  {
    title: "Crisis Management",
    desc: "Reputation-first strategy for high-stakes moments—rapid response + narrative control.",
    icon: ShieldAlert,
    features: ["Rapid Response", "Narrative Control", "Stakeholder Messaging", "Recovery Playbook"],
    href: "/contact?service=crisis",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ServicesGrid() {
  return (
    <section className="px-4 pb-14 pt-10 md:px-6 lg:px-8 xl:px-0 md:pt-14">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-[1500px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-2xl space-y-3"
        >
          <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-400">
            Our Services
          </p>

          <h2 className="font-heading text-2xl md:text-3xl text-dts-fog leading-snug">
            A premium stack for brands that want attention—and respect.
          </h2>

          <p className="text-sm md:text-[15px] text-neutral-300/90 leading-relaxed">
            Pick a service or build the whole system. Everything is designed to connect—so your brand
            looks consistent and performs better.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: EASE, delay: idx * 0.06 }}
                className="
                  group relative overflow-hidden
                  rounded-3xl border border-white/10
                  bg-white/3 backdrop-blur-xl
                  shadow-[0_24px_70px_rgba(0,0,0,0.65)]
                "
              >
                {/* Badge */}
                {s.badge && (
                  <div className="absolute right-5 top-5 z-10">
                    <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-200">
                      {s.badge}
                    </span>
                  </div>
                )}

                <div className="relative z-10 p-7">
                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-center">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_18px_rgba(70,243,216,0.15)]">
                      <Icon className="h-6 w-6 text-dts-neon" />
                    </div>
                  </div>

                  <h3 className="text-center text-[16px] md:text-[17px] font-semibold text-dts-fog">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-center text-sm md:text-[14px] text-neutral-300/90 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-6">
                    <p className="text-center text-[12px] font-semibold text-neutral-200/90">
                      Key Features:
                    </p>

                    <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] text-neutral-300/90">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-dts-neon/80 shadow-[0_0_8px_rgba(70,243,216,0.6)]" />
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SINGLE COLOR NEON BUTTON */}
                  <div className="mt-7 flex justify-center">
                   <Link
  href={s.href}
  className="
    inline-flex items-center justify-center gap-2
    w-full max-w-[230px]
    rounded-xl
    px-6 py-3
    text-[12px] font-bold uppercase tracking-[0.18em]
    text-white

    bg-[radial-gradient(ellipse_at_center,#123f38_0%,#0b1f1c_45%,#000000_100%)]

    shadow-[0_10px_30px_rgba(0,0,0,0.8)]
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(18,63,56,0.6)]
    hover:scale-[1.02]
  "
>
  Learn More <ArrowRight className="h-4 w-4" />
</Link>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
