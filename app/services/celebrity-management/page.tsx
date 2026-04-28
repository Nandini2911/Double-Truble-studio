

import CelebrityManagementCTA from "@/components/celebrity-management/CelebrityManagementCTA";
import CelebrityManagementDeliverables from "@/components/celebrity-management/CelebrityManagementDeliverables";
import CelebrityManagementFAQs from "@/components/celebrity-management/CelebrityManagementFAQs";
import CelebrityManagementHero from "@/components/celebrity-management/CelebrityManagementHero";
import CelebrityManagementHowItWorks from "@/components/celebrity-management/CelebrityManagementHowItWorks";
import CelebrityManagementSolves from "@/components/celebrity-management/CelebrityManagementSolves";
import CelebrityManagementWhoItsFor from "@/components/celebrity-management/CelebrityManagementWhoItsFor";
import CelebrityManagementWork from "@/components/celebrity-management/CelebrityManagementWork";
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

const celebritymanagement = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      "name": "Double Trouble Studio",
      "alternateName": "DTS",
      "url": "https://www.dtsworld.in/",
      "logo": "https://www.dtsworld.in/logo.png",
      "description": "A digital, PR and creative studio building ecosystems across social media, web, media, events and celebrity collaborations.",
      "email": "hello@dtsworld.in",
      "telephone": "+91 80000 06021",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "sameAs": [
        "https://www.instagram.com/doubletroublestudio",
        "https://www.linkedin.com/company/double-trouble-studio"
      ]
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
      "@id": "https://www.dtsworld.in/services/celebrity-management/#webpage",
      "url": "https://www.dtsworld.in/services/celebrity-management",
      "name": "Celebrity Management Services",
      "description": "End-to-end celebrity management including shortlisting, commercials, contracts and on-ground coordination for premium brand and event associations.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/celebrity-management/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/celebrity-management/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.dtsworld.in/og-celebrity-page.webp"
      }
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
      "name": "Celebrity Management Services",
      "image": "https://www.dtsworld.in/og-celebrity-page.webp",

      "description": "Celebrity management services including celebrity shortlisting, brand alignment, fee negotiations, contracts, and event coordination for premium brand collaborations.",

      "provider": { "@id": "https://www.dtsworld.in/#organization" },

      "areaServed": {
        "@type": "Country",
        "name": "India"
      },

      "mainEntityOfPage": {
        "@id": "https://www.dtsworld.in/services/celebrity-management/#webpage"
      },

      "serviceType": [
        "Celebrity Endorsements",
        "Celebrity Appearances",
        "Brand Collaborations",
        "Influencer & Talent Management",
        "Event Celebrity Coordination"
      ],

      "audience": [
        { "@type": "Audience", "name": "Brands & Marketers" },
        { "@type": "Audience", "name": "Corporate Events" },
        { "@type": "Audience", "name": "Luxury Events" },
        { "@type": "Audience", "name": "Founders & HNIs" }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Celebrity Management Process",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Celebrity Shortlisting & Fit Check"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercials & Contract Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Availability & Scheduling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-ground Event Coordination"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Delivery Closure"
            }
          }
        ]
      }
    },

    {
      "@type": "FAQPage",
      "name": "Celebrity Management FAQs",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How are celebrity fees decided?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Celebrity fees depend on popularity, campaign scope, deliverables, usage rights, and duration of association."
          }
        },
        {
          "@type": "Question",
          "name": "How much lead time is required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 2–6 weeks depending on celebrity availability and campaign requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can celebrity collaborations be customised?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all celebrity associations are customised based on brand goals, audience, and campaign objectives."
          }
        }
      ]
    }

  ]
};

export default function CelebrityManagementPage() {
  return (
    <>
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(celebritymanagement),
  }}
/>

      <main className="min-h-screen">
        <CelebrityManagementHero />
        <CelebrityManagementWork/>
        <CelebrityManagementSolves />
        <CelebrityManagementHowItWorks />  
        <CelebrityManagementDeliverables />
        <CelebrityManagementWhoItsFor />
        <RelatedServices />
        <CelebrityManagementFAQs />
        <CelebrityManagementCTA />
      </main>
    </>
  );
}