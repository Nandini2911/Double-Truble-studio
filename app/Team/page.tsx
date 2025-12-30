import CoreValuesSection from "@/components/Team/CoreValuesSection";
import TeamBehindTheScenes from "@/components/Team/TeamBehindTheScenes";
import TeamCTA from "@/components/Team/TeamCTA";
import TeamHero from "@/components/Team/TeamHero"; 
import TeamMembers from "@/components/Team/TeamMembers";
import TeamMembersAll from "@/components/Team/TeamMembersAll";
import TeamPhilosophy from "@/components/Team/TeamPhilosophy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Double Trouble Studio",
  description:
    "Meet the people behind Double Trouble Studio — strategists, creators, and execution leaders driving clarity, trust, and impact for brands.",

  keywords: [
    "Double Trouble Studio team",
    "branding agency team",
    "PR agency leadership",
    "digital marketing experts",
    "event marketing professionals",
    "creative agency team India",
  ],

  alternates: {
    canonical: "https://dtsworld.in/team",
  },

  openGraph: {
    title: "Meet the Team | Double Trouble Studio",
    description:
      "The minds behind strategy-led branding, PR, digital, and experiential execution.",
    url: "https://dtsworld.in/team",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "https://dtsworld.in/og/team-og.jpg",
        width: 1200,
        height: 630,
        alt: "Team at Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Team | Double Trouble Studio",
    description:
      "Built by experience. Driven by clarity. Executed with precision.",
    images: ["https://dtsworld.in/og/team-og.jpg"],
  },
};

export default function TeamPage() {
  return (
    <main className="bg-dts-black text-white">
      {/* Hero Section for the Team Page */}
      <TeamHero />
      <TeamPhilosophy/>
      <TeamMembers/>
      <TeamMembersAll/>
       <TeamBehindTheScenes/>
      <CoreValuesSection/>
      <TeamCTA/>
  
      
      {/* You can add more sections below */}
      {/* For example: Team Members Showcase, Core Values, Team Behind the Scenes, etc. */}
    </main>
  );
}
