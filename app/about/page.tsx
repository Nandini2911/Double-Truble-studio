import AboutCTA from "@/components/About/AboutCTA";
import AboutHero from "@/components/About/AboutHero";
import BrandGrid from "@/components/About/BrandGrid";
import InsideStudio from "@/components/About/InsideStudio";
import Leadership from "@/components/About/Leadership";
import OriginStory from "@/components/About/OriginStory";
import StudioCultureAndFit from "@/components/About/StudioCultureAndFit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Double Trouble Studio",
  description:
    "Learn about Double Trouble Studio — a strategy-first branding, PR, digital, events, and execution agency built on clarity, trust, and senior-led thinking.",

  keywords: [
    "about Double Trouble Studio",
    "branding agency team",
    "PR agency leadership",
    "digital marketing agency India",
    "luxury brand consultants",
    "event marketing experts",
    "celebrity management agency",
  ],

  alternates: {
    canonical: "https://dtsworld.in/about",
  },

  openGraph: {
    title: "About Double Trouble Studio",
    description:
      "Meet the people, principles, and thinking behind Double Trouble Studio.",
    url: "https://dtsworld.in/about",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "https://dtsworld.in/og/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Double Trouble Studio",
    description:
      "Strategy-first branding, PR, digital, and events — led by experience.",
    images: ["https://dtsworld.in/og/about-og.jpg"],
  },
};
export default function AboutPage() {
  return (
    <div className="text-dts-fog min-h-screen bg-dts-black">
      <AboutHero />
      <OriginStory />
      <InsideStudio />
      <Leadership />
      <StudioCultureAndFit />
      <BrandGrid />
      <AboutCTA />
    </div>
  );
}
