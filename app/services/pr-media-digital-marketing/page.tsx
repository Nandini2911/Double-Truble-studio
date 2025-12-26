// app/services/event-management/page.tsx
"use client";

import PRMediaDigitalFAQs from "@/components/pr-media-digital/PRMediaDigitalFAQs";
import PRMediaDigitalFinalCTA from "@/components/pr-media-digital/PRMediaDigitalFinalCTA";
import PRMediaDigitalHero from "@/components/pr-media-digital/PRMediaDigitalHero";
import PRMediaDigitalHowItWorks from "@/components/pr-media-digital/PRMediaDigitalHowItWorks";
import PRMediaDigitalIntro from "@/components/pr-media-digital/PRMediaDigitalIntro";
import PRMediaDigitalMarketing from "@/components/pr-media-digital/PRMediaDigitalMarketing";
import PRMediaDigitalMediaAndDigital from "@/components/pr-media-digital/PRMediaDigitalMediaAndDigital";
import PRMediaDigitalPublicRelations from "@/components/pr-media-digital/PRMediaDigitalPublicRelations";
import PRMediaDigitalRelatedServices from "@/components/pr-media-digital/PRMediaDigitalRelatedServices";
import PRMediaDigitalSolvesAndFor from "@/components/pr-media-digital/PRMediaDigitalSolvesAndFor";
import PRMediaDigitalWhoThisIsFor from "@/components/pr-media-digital/PRMediaDigitalWhoThisIsFor";



export default function PRMediaDigital() {
  return (
    <main className="bg-dts-black text-white">
        <PRMediaDigitalHero />
        <PRMediaDigitalIntro  />
        <PRMediaDigitalPublicRelations /> 
        <PRMediaDigitalMediaAndDigital />
       
        <PRMediaDigitalHowItWorks />
        <PRMediaDigitalSolvesAndFor />
        <PRMediaDigitalRelatedServices />
        <PRMediaDigitalFAQs />
        <PRMediaDigitalFinalCTA />

    </main>
  );
}
