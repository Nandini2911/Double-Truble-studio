

import CelebrityManagementCTA from "@/components/celebrity-management/CelebrityManagementCTA";
import CelebrityManagementDeliverables from "@/components/celebrity-management/CelebrityManagementDeliverables";
import CelebrityManagementFAQs from "@/components/celebrity-management/CelebrityManagementFAQs";
import CelebrityManagementHero from "@/components/celebrity-management/CelebrityManagementHero";
import CelebrityManagementHowItWorks from "@/components/celebrity-management/CelebrityManagementHowItWorks";
import CelebrityManagementSolves from "@/components/celebrity-management/CelebrityManagementSolves";
import CelebrityManagementWhoItsFor from "@/components/celebrity-management/CelebrityManagementWhoItsFor";
import RelatedServices from "@/components/celebrity-management/RelatedServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Celebrity Management Services | Endorsements & Appearances – Double Trouble Studio",

  description:
    "End-to-end celebrity management for brands, campaigns, and events. Double Trouble Studio handles shortlisting, availability, fees, commercials, contracts, and on-ground coordination—so every celebrity association feels premium, aligned, and effortless.",

  keywords: [
    "celebrity management agency",
    "celebrity endorsements",
    "brand celebrity association",
    "celebrity appearance booking",
    "celebrity coordination for events",
    "influencer and celebrity management",
    "celebrity contract and commercials",
    "talent management agency India",
    "celebrity booking agency Mumbai",
    "corporate event celebrity appearance",
    "Double Trouble Studio celebrity management",
  ],

  alternates: {
    canonical: "https://dtsworld.in/services/celebrity-management",
  },

  openGraph: {
    title: "Celebrity Management by Double Trouble Studio",
    description:
      "Curated celebrity associations with clear commercials, clean paperwork, and calm on-ground execution. Fit-first shortlisting that protects brand value and reputation.",
    url: "https://dtsworld.in/services/celebrity-management",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-celebrity-page.webp",
        width: 1200,
        height: 630,
        alt: "Celebrity Management Services – Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Celebrity Management Services | Double Trouble Studio",
    description:
      "Celebrity endorsements, appearances, and associations—managed end-to-end with discretion, alignment, and clean execution.",
    images: ["/twitter-celebrity-page.webp"],
  },
};

const celebritymanagement=
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
      "@id": "https://www.dtsworld.in/services/celebrity-management/#webpage",
      "url": "https://www.dtsworld.in/services/celebrity-management",
      "name": "Celebrity Management | Double Trouble Studio",
      "description": "We manage celebrity associations end-to-end — shortlisting, fees, availability, contracts, and on-ground coordination — so every appearance feels premium, aligned, and effortless.",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/celebrity-management/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/celebrity-management/#service" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dtsworld.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dtsworld.in/#services" },
        { "@type": "ListItem", "position": 3, "name": "Celebrity Management", "item": "https://www.dtsworld.in/services/celebrity-management" }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#service",
      "name": "Celebrity Management",
      "serviceType": [
        "Celebrity Associations",
        "Brand Endorsements",
        "Event Appearances",
        "Campaign & Launch Collaborations",
        "Reputation-Sensitive Talent Coordination"
      ],
      "description": "Celebrity management focused on alignment, discretion, and clean execution — from objective setting and fit-first shortlists to commercials, contracting, on-ground coordination, and post-delivery closure.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": { "@type": "Country", "name": "India" },
      "mainEntityOfPage": { "@id": "https://www.dtsworld.in/services/celebrity-management/#webpage" },

      "audience": [
        { "@type": "Audience", "name": "Brands & Marketers" },
        { "@type": "Audience", "name": "Corporate & Luxury Events" },
        { "@type": "Audience", "name": "Celebrities & Public Figures" },
        { "@type": "Audience", "name": "Founders & HNIs" },
        { "@type": "Audience", "name": "Agencies & Production Houses" },
        { "@type": "Audience", "name": "IP Owners & Platforms" }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Celebrity Management Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Objective & Requirements",
            "itemOffered": {
              "@type": "Service",
              "name": "Objective & Requirements",
              "description": "We understand your brand goal, audience, budget range, timelines, and the kind of celebrity presence you’re aiming for."
            }
          },
          {
            "@type": "Offer",
            "name": "Shortlisting & Fit Check",
            "itemOffered": {
              "@type": "Service",
              "name": "Shortlisting & Fit Check",
              "description": "We curate options based on relevance, image alignment, and audience match — not just popularity."
            }
          },
          {
            "@type": "Offer",
            "name": "Availability, Fees & Commercials",
            "itemOffered": {
              "@type": "Service",
              "name": "Availability, Fees & Commercials",
              "description": "We run availability checks, share fee ranges, and lock clear commercials: deliverables, usage, timelines, and approvals."
            }
          },
          {
            "@type": "Offer",
            "name": "Contracting & Coordination",
            "itemOffered": {
              "@type": "Service",
              "name": "Contracting & Coordination",
              "description": "Paperwork, schedules, logistics, brief sharing, brand requirements, and stakeholder alignment handled end-to-end."
            }
          },
          {
            "@type": "Offer",
            "name": "Execution & Closure",
            "itemOffered": {
              "@type": "Service",
              "name": "Execution & Closure",
              "description": "On-ground coordination for events/shoots and clean closure post-delivery — with professionalism throughout."
            }
          },
          {
            "@type": "Offer",
            "name": "Dedicated Point of Contact",
            "itemOffered": {
              "@type": "Service",
              "name": "Dedicated Point of Contact",
              "description": "One clear lead managing the entire coordination flow with fast turnaround and a clean escalation chain."
            }
          },
          {
            "@type": "Offer",
            "name": "Commercials & Documentation",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercials & Documentation",
              "description": "Clear deliverables, usage rights, timelines, approvals, and exclusions documented upfront."
            }
          },
          {
            "@type": "Offer",
            "name": "Shoot / Event Coordination",
            "itemOffered": {
              "@type": "Service",
              "name": "Shoot / Event Coordination",
              "description": "Coordination with the brand team, venue/production, and talent team for a smooth execution day."
            }
          },
          {
            "@type": "Offer",
            "name": "Real-Time Issue Handling",
            "itemOffered": {
              "@type": "Service",
              "name": "Real-Time Issue Handling",
              "description": "Quick fixes for last-minute changes, delays, brief updates, and on-ground adjustments."
            }
          },
          {
            "@type": "Offer",
            "name": "Post-Delivery Closure",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Delivery Closure",
              "description": "Final delivery tracking and clean closure ensuring agreed outputs are completed professionally."
            }
          }
        ]
      }
    }
  ]
}

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
