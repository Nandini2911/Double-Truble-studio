// app/services/event-management/page.tsx


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
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Luxury Events & Wedding Planning | Premium Event Management – Double Trouble Studio",

  description:
    "Design-led luxury event and wedding planning with seamless on-ground execution. Double Trouble Studio creates immersive, intentional experiences—handling timelines, vendors, production, guest flow, and brand alignment with calm, controlled, premium delivery.",

  keywords: [
    "luxury event management",
    "wedding planner Mumbai",
    "luxury wedding planner India",
    "premium event management agency",
    "corporate event planning",
    "brand launch event management",
    "high-end wedding planning",
    "event production and execution",
    "vendor coordination for events",
    "guest experience design",
    "Double Trouble Studio events",
  ],

  alternates: {
    canonical: "https://dtsworld.in/services/events-weddings",
  },

  openGraph: {
    title: "Events & Weddings by Double Trouble Studio",
    description:
      "Experiences, thoughtfully designed. Moments, impeccably executed. Luxury weddings and high-impact brand events—planned with structure, aesthetics, and invisible execution.",
    url: "https://dtsworld.in/services/events-weddings",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-event-weddding-page.webp",
        width: 1200,
        height: 630,
        alt: "Events & Weddings – Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Events & Weddings | Double Trouble Studio",
    description:
      "Luxury weddings and premium brand events with design-led planning, vendor sync, and seamless on-ground execution.",
    images: ["/twitter-event-wedding-page.webp"],
  },
};
const eventweddings = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      "name": "Double Trouble Studio",
      "alternateName": "DTS",
      "url": "https://www.dtsworld.in/",
      "logo": "https://www.dtsworld.in/logo.png",
      "description": "A digital, PR and creative studio building ecosystems across social media, web, media, events and celebrity collaborations. We help brands grow, glow & get noticed.",
      "email": "hello@dtsworld.in",
      "telephone": "+91 80000 06021",
      "sameAs": [
        "https://www.instagram.com/doubletroublestudio",
        "https://www.linkedin.com/company/double-trouble-studio"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 42, Apurva Industrial Estate, Makwana Rd, Marol, Andheri East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400059",
        "addressCountry": "IN"
      }
    },

    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",
      "url": "https://www.dtsworld.in/",
      "name": "Double Trouble Studio",
      "inLanguage": "en",
      "publisher": { "@id": "https://www.dtsworld.in/#organization" }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/services/events-weddings/#webpage",
      "url": "https://www.dtsworld.in/services/events-weddings",
      "name": "Events & Weddings | Double Trouble Studio",
      "description": "Design-led planning and seamless on-ground execution for luxury weddings and high-impact brand events.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/events-weddings/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/events-weddings/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.dtsworld.in/og-event-weddding-page.webp"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/events-weddings/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dtsworld.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dtsworld.in/#services" },
        { "@type": "ListItem", "position": 3, "name": "Events & Weddings", "item": "https://www.dtsworld.in/services/events-weddings" }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/events-weddings/#service",
      "name": "Events & Weddings",
      "image": "https://www.dtsworld.in/og-event-weddding-page.webp",
      "serviceType": [
        "Luxury Wedding Planning",
        "Brand Events",
        "Event Production",
        "Wedding Planning India"
      ],
      "description": "Luxury wedding planning and premium event management with seamless execution.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": { "@type": "Country", "name": "India" },
      "mainEntityOfPage": { "@id": "https://www.dtsworld.in/services/events-weddings/#webpage" }
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/events-weddings/#related-services",
      "name": "Related services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Guest Management",
          "url": "https://www.dtsworld.in/services/guest-management"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Celebrity Management",
          "url": "https://www.dtsworld.in/services/celebrity-management"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/events-weddings/#faq",
      "name": "Events & Weddings FAQs",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you handle small events as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we handle both intimate and large-scale events."
          }
        },
        {
          "@type": "Question",
          "name": "Can services be customised?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every event is fully customised."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with existing vendors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we collaborate with your existing vendors."
          }
        },
        {
          "@type": "Question",
          "name": "How early should we get in touch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ideally 4–12 weeks before the event."
          }
        },
        {
          "@type": "Question",
          "name": "Is pricing fixed or flexible?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing is flexible and customised."
          }
        }
      ]
    }

  ]
};


export default function EventManagementPage() {
  return (

     <>
      {/* ✅ CRITICAL: Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventweddings),
        }}
      />

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
    </>
  );
}
