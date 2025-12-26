// app/services/event-management/page.tsx
"use client";


import WebDevelopmentCTA from "@/components/web-development-marketing/WebDevelopmentCTA";
import WebDevelopmentDeliverables from "@/components/web-development-marketing/WebDevelopmentDeliverables";
import WebDevelopmentFAQs from "@/components/web-development-marketing/WebDevelopmentFAQs";
import WebDevelopmentHero from "@/components/web-development-marketing/WebDevelopmentHero";
import WebDevelopmentHowItWorks from "@/components/web-development-marketing/WebDevelopmentHowItWorks";
import WebDevelopmentRelatedServices from "@/components/web-development-marketing/WebDevelopmentRelatedServices";
import WebDevelopmentSolves from "@/components/web-development-marketing/WebDevelopmentSolves";
import WebDevelopmentWhoItsFor from "@/components/web-development-marketing/WebDevelopmentWhoItsFor";
import WebDevelopmentWhyDTS from "@/components/web-development-marketing/WebDevelopmentWhyDTS";




export default function WebDevelopmentandMarketing() {
  return (
    <main className="bg-dts-black text-white">
       
      <WebDevelopmentHero />
      <WebDevelopmentSolves />
      <WebDevelopmentHowItWorks />
      <WebDevelopmentDeliverables />
      <WebDevelopmentWhoItsFor />
      <WebDevelopmentWhyDTS />
      <WebDevelopmentRelatedServices />
      <WebDevelopmentFAQs /> 
      <WebDevelopmentCTA/>   
      
    </main>
  );
}
