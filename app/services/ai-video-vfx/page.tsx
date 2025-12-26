// app/services/event-management/page.tsx
"use client";


import AIVideoAdsVFXHero from "@/components/ai-video-vfx/AIVideoAdsVFXHero";
import AIVideoVFXCTA from "@/components/ai-video-vfx/AIVideoVFXCTA";
import AIVideoVFXDeliverables from "@/components/ai-video-vfx/AIVideoVFXDeliverables";
import AIVideoVFXFAQs from "@/components/ai-video-vfx/AIVideoVFXFAQs";
import AIVideoVFXHowItWorks from "@/components/ai-video-vfx/AIVideoVFXHowItWorks";
import AIVideoVFXSolves from "@/components/ai-video-vfx/AIVideoVFXSolves";
import AIVideoVFXWhoItsFor from "@/components/ai-video-vfx/AIVideoVFXWhoItsFor";
import AIVideoVFXWhyDTS from "@/components/ai-video-vfx/AIVideoVFXWhyDTS";
import RelatedAIVideoVFXServices from "@/components/ai-video-vfx/RelatedAIVideoVFXServices";
import WebDevelopmentDeliverables from "@/components/web-development-marketing/WebDevelopmentDeliverables";
import WebDevelopmentFAQs from "@/components/web-development-marketing/WebDevelopmentFAQs";
import WebDevelopmentHero from "@/components/web-development-marketing/WebDevelopmentHero";
import WebDevelopmentHowItWorks from "@/components/web-development-marketing/WebDevelopmentHowItWorks";
import WebDevelopmentRelatedServices from "@/components/web-development-marketing/WebDevelopmentRelatedServices";
import WebDevelopmentSolves from "@/components/web-development-marketing/WebDevelopmentSolves";
import WebDevelopmentWhoItsFor from "@/components/web-development-marketing/WebDevelopmentWhoItsFor";
import WebDevelopmentWhyDTS from "@/components/web-development-marketing/WebDevelopmentWhyDTS";




export default function AiVideandVFX() {
  return (
    <main className="bg-dts-black text-white">
       
      <AIVideoAdsVFXHero />
      <AIVideoVFXSolves />
      <AIVideoVFXHowItWorks />
      <AIVideoVFXDeliverables /> 
      <AIVideoVFXWhoItsFor />
      <AIVideoVFXWhyDTS />
      <RelatedAIVideoVFXServices />
      <AIVideoVFXFAQs />
      <AIVideoVFXCTA /> 

    </main>
  );
}
