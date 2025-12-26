"use client";

import CoreValuesSection from "@/components/Team/CoreValuesSection";
import TeamBehindTheScenes from "@/components/Team/TeamBehindTheScenes";
import TeamCTA from "@/components/Team/TeamCTA";
import TeamHero from "@/components/Team/TeamHero"; // Import the TeamHero component
import TeamMembers from "@/components/Team/TeamMembers";
import TeamMembersAll from "@/components/Team/TeamMembersAll";
import TeamPhilosophy from "@/components/Team/TeamPhilosophy";


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
