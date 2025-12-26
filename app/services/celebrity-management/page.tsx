"use client";

import CelebrityManagementCTA from "@/components/celebrity-management/CelebrityManagementCTA";
import CelebrityManagementDeliverables from "@/components/celebrity-management/CelebrityManagementDeliverables";
import CelebrityManagementFAQs from "@/components/celebrity-management/CelebrityManagementFAQs";
import CelebrityManagementHero from "@/components/celebrity-management/CelebrityManagementHero";
import CelebrityManagementHowItWorks from "@/components/celebrity-management/CelebrityManagementHowItWorks";
import CelebrityManagementSolves from "@/components/celebrity-management/CelebrityManagementSolves";
import CelebrityManagementWhoItsFor from "@/components/celebrity-management/CelebrityManagementWhoItsFor";
import RelatedServices from "@/components/celebrity-management/RelatedServices";


export default function CelebrityManagementPage() {
  return (
    <main className="min-h-screen">
      <CelebrityManagementHero/>
      <CelebrityManagementSolves/>
      <CelebrityManagementHowItWorks/>  
      <CelebrityManagementDeliverables/>
      <CelebrityManagementWhoItsFor/>
      <RelatedServices/>
      <CelebrityManagementFAQs/>
      <CelebrityManagementCTA/>
      </main>
  );
}
