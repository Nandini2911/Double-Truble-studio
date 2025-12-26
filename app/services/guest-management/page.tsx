"use client";

import GuestManagementCTA from "@/components/guest-management/GuestManagementCTA";
import GuestManagementDeliverables from "@/components/guest-management/GuestManagementDeliverables";
import GuestManagementFAQ from "@/components/guest-management/GuestManagementFAQ";
import GuestManagementHowItWorks from "@/components/guest-management/GuestManagementHowItWorks";
import GuestManagementSolves from "@/components/guest-management/GuestManagementSolves";
import GuestManagementWhoItsFor from "@/components/guest-management/GuestManagementWhoItsFor";
import GuestManagementWhyDTS from "@/components/guest-management/GuestManagementWhyDTS";
import Hero from "@/components/guest-management/Hero";
import RelatedServices from "@/components/guest-management/RelatedServices";

import { HeartOff } from "lucide-react";
import { GrOverview } from "react-icons/gr";



export default function GuestManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
    <Hero/>
    <GuestManagementSolves/>
    <GuestManagementHowItWorks/>
    <GuestManagementDeliverables/>
    <GuestManagementWhoItsFor />
    <GuestManagementWhyDTS/>
    <RelatedServices/>
    <GuestManagementFAQ/>
    <GuestManagementCTA/>

  
    
    
    
   
   
    
    



    </main>
  );
}
