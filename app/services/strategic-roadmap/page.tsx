// app/services/event-management/page.tsx
"use client";


import RelatedServices from "@/components/strategic-roadmapping/RelatedServices";
import StrategicRoadmapCTA from "@/components/strategic-roadmapping/StrategicRoadmapCTA";
import StrategicRoadmapDeliverables from "@/components/strategic-roadmapping/StrategicRoadmapDeliverables";
import StrategicRoadmapFAQs from "@/components/strategic-roadmapping/StrategicRoadmapFAQs";
import StrategicRoadmapHeader from "@/components/strategic-roadmapping/StrategicRoadmapHeader";
import StrategicRoadmapHowItWorks from "@/components/strategic-roadmapping/StrategicRoadmapHowItWorks";

import StrategicRoadmapSolves from "@/components/strategic-roadmapping/StrategicRoadmapSolves";
import StrategicRoadmapWhoItsFor from "@/components/strategic-roadmapping/StrategicRoadmapWhoItsFor";
import StrategicRoadmapWhyDTS from "@/components/strategic-roadmapping/StrategicRoadmapWhyDTS";


export default function StrategicRoadmap() {
  return (
    <main className="bg-dts-black text-white">
       
        <StrategicRoadmapHeader  />
        <StrategicRoadmapSolves />
        <StrategicRoadmapHowItWorks />
        <StrategicRoadmapDeliverables   />
        <StrategicRoadmapWhoItsFor    />
        <StrategicRoadmapWhyDTS />
        <RelatedServices/>
        <StrategicRoadmapFAQs/>
        <StrategicRoadmapCTA/>
      
    </main>
  );
}
