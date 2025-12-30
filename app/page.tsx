// app/page.tsx


import AboutStrip from "@/components/Home/AboutStrip";
import DNABlock from "@/components/Home/DNABlock";
import FeaturedWork from "@/components/Home/FeaturedWork";
import FinalCTA from "@/components/Home/FinalCTA";
import HomeHero from "@/components/Home/HomeHero";
import ImpactStats from "@/components/Home/ImpactStats";
import IndustriesStrip from "@/components/Home/IndustriesStrip";
import LogoStrip from "@/components/Home/LogoStrip";
import MethodSteps from "@/components/Home/MethodStep";
import PromiseBlock from "@/components/Home/PromiseBlock";
import ServicesGrid from "@/components/Home/ServicesGrid";
import WhyDTS from "@/components/Home/WhyDTS";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double Trouble Studio | Branding, PR & Digital Agency",
  description:
    "Double Trouble Studio is a 360° branding, PR, digital marketing, events, and web execution agency helping brands grow, glow, and get noticed.",

  keywords: [
    "Double Trouble Studio",
    "branding agency",
    "PR agency Mumbai",
    "digital marketing agency",
    "event marketing",
    "celebrity management",
    "AI video production",
    "web design agency",
  ],

  alternates: {
    canonical: "https://dtsworld.in",
  },

  openGraph: {
    title: "Double Trouble Studio",
    description:
      "A 360° agency for branding, PR, digital, events, and web — built for visibility, trust, and momentum.",
    url: "https://dtsworld.in",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "https://dtsworld.in/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio – Branding, PR & Digital Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Double Trouble Studio",
    description: "Where ideas go to grow, glow, and get noticed.",
    images: ["https://dtsworld.in/og/home-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
   

      {/* Full-bleed hero */}
      <main className="min-h-screen bg-dts-black text-dts-fog">
        <HomeHero />
       
         <AboutStrip />
          <WhyDTS />
          <ServicesGrid />
          <MethodSteps />
          <FeaturedWork />
          <IndustriesStrip />
          <ImpactStats />
          <DNABlock />
          <PromiseBlock />
       <LogoStrip />
          <FinalCTA />
          
          

        {/* Rest of the page in a centered container */}
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-12 md:space-y-16">
         
        </div>
      </main>
    </>
  );
}
