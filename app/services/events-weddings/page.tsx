// app/services/event-management/page.tsx
"use client";

import EventsWeddingsCTA from "@/components/event-management/EventsWeddingsCTA";
import EventsWeddingsEndToEnd from "@/components/event-management/EventsWeddingsEndToEnd";
import EventsWeddingsFAQ from "@/components/event-management/EventsWeddingsFAQ";
import EventManagementHero from "@/components/event-management/EventsWeddingsHero";
import EventsWeddingsIntro from "@/components/event-management/EventsWeddingsIntro";
import EventsWeddingsProcess from "@/components/event-management/EventsWeddingsProcess";
import EventsWeddingsTypes from "@/components/event-management/EventsWeddingsTypes";
import EventsWeddingsWhoFor from "@/components/event-management/EventsWeddingsWhoFor";
import EventsWeddingsWhyDTS from "@/components/event-management/EventsWeddingsWhyDTS";
import RelatedServices from "@/components/event-management/RelatedServices";


export default function EventManagementPage() {
  return (
    <main className="bg-dts-black text-white">
      <EventManagementHero />
      <EventsWeddingsIntro />
      <EventsWeddingsTypes />  
      <EventsWeddingsEndToEnd />
      <EventsWeddingsProcess />
      <EventsWeddingsWhoFor />
      <EventsWeddingsWhyDTS />
      <RelatedServices />
      <EventsWeddingsFAQ />
      <EventsWeddingsCTA />
       
    </main>
  );
}
