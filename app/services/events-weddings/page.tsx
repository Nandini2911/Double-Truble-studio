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
        url: "https://dtsworld.in/og/events-weddings-og.jpg",
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
    images: ["https://dtsworld.in/og/events-weddings-og.jpg"],
  },
};
const eventweddings=
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      "name": "Double Trouble Studio",
      "alternateName": "DTS",
      "url": "https://www.dtsworld.in/",
      "description": "A digital, PR and creative studio building ecosystems across social media, web, media, events and celebrity collaborations. We help brands grow, glow & get noticed.",
      "email": "hello@dtsworld.in",
      "telephone": "+91 80000 06021",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol, Andheri East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400059",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+91 80000 06021",
          "email": "hello@dtsworld.in",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },

    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",
      "url": "https://www.dtsworld.in/",
      "name": "Double Trouble Studio",
      "publisher": { "@id": "https://www.dtsworld.in/#organization" }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/services/events-weddings/#webpage",
      "url": "https://www.dtsworld.in/services/events-weddings",
      "name": "Events & Weddings | Double Trouble Studio",
      "description": "Design-led planning and seamless on-ground execution for luxury weddings and high-impact brand events — thoughtfully designed, impeccably executed.",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/events-weddings/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/events-weddings/#service" }
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
      "serviceType": [
        "Luxury Wedding Planning & Execution",
        "Brand Events & Experiential Activations",
        "Private Celebrations",
        "On-Ground Event Management",
        "Creative Direction & Brand Alignment"
      ],
      "description": "From luxury weddings to high-impact brand events, we plan and execute experiences that feel effortless, immersive, and intentional — with design-led planning, discreet coordination, and seamless on-ground control.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": { "@type": "Country", "name": "India" },
      "mainEntityOfPage": { "@id": "https://www.dtsworld.in/services/events-weddings/#webpage" },

      "audience": [
        { "@type": "Audience", "name": "Luxury Wedding Clients" },
        { "@type": "Audience", "name": "Brands & Marketers" },
        { "@type": "Audience", "name": "Corporate Teams & Leadership" },
        { "@type": "Audience", "name": "Founders & HNIs" },
        { "@type": "Audience", "name": "Agencies & Production Partners" }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Events & Weddings — End-to-End Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Planning & Strategy",
            "itemOffered": {
              "@type": "Service",
              "name": "Planning & Strategy",
              "description": "Event concept and experience mapping, timelines, budgets, execution plans, and guest journey & flow design."
            }
          },
          {
            "@type": "Offer",
            "name": "Vendors & Production",
            "itemOffered": {
              "@type": "Service",
              "name": "Vendors & Production",
              "description": "Venue coordination, decor, lighting and production teams, technical planning, and on-ground execution."
            }
          },
          {
            "@type": "Offer",
            "name": "Guest & On-Ground Management",
            "itemOffered": {
              "@type": "Service",
              "name": "Guest & On-Ground Management",
              "description": "Guest coordination and hospitality, on-site team supervision, and seamless flow from setup to wrap-up."
            }
          },
          {
            "@type": "Offer",
            "name": "Creative & Brand Alignment",
            "itemOffered": {
              "@type": "Service",
              "name": "Creative & Brand Alignment",
              "description": "Visual direction and experience design, brand consistency across touchpoints, and media-ready execution."
            }
          },
          {
            "@type": "Offer",
            "name": "Event Flow & Timing Control",
            "itemOffered": {
              "@type": "Service",
              "name": "Event Flow & Timing Control",
              "description": "Run-of-show pacing and moment-by-moment timing so the experience feels natural, seamless, and intentional."
            }
          },
          {
            "@type": "Offer",
            "name": "Discreet, Controlled Execution",
            "itemOffered": {
              "@type": "Service",
              "name": "Discreet, Controlled Execution",
              "description": "Quiet handling of complexity, controlled stakeholder coordination, and calm delivery under pressure."
            }
          }
        ]
      }
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "PR, Media & Digital Marketing",
          "url": "https://www.dtsworld.in/services/pr-media-digital-marketing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Web Development & Marketing",
          "url": "https://www.dtsworld.in/services/web-development-marketing"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "AI Video & VFX",
          "url": "https://www.dtsworld.in/services/ai-video-vfx"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Strategic Road Map",
          "url": "https://www.dtsworld.in/services/strategic-road-map"
        }
      ]
    }
  ]
}


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
