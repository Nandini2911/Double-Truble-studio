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
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Strategic Roadmap & Growth Strategy | Business Planning – Double Trouble Studio",

  description:
    "Strategic roadmap and growth planning for brands, founders, and leadership teams. Double Trouble Studio defines vision, aligns stakeholders, and executes structured strategies—turning insight into action and measurable business outcomes.",

  keywords: [
    "strategic roadmap services",
    "business growth strategy",
    "brand strategy consulting",
    "go-to-market strategy",
    "founder strategy planning",
    "corporate strategy consulting",
    "long-term business planning",
    "market and competitive analysis",
    "strategy execution framework",
    "leadership strategy roadmap",
    "Double Trouble Studio strategy",
  ],

  alternates: {
    canonical: "https://dtsworld.in/services/strategic-roadmap",
  },

  openGraph: {
    title: "Strategic Roadmap by Double Trouble Studio",
    description:
      "Strategy, mapped to success. Executive-level roadmaps that align vision, teams, and execution—built to deliver growth, clarity, and measurable results.",
    url: "https://dtsworld.in/services/strategic-roadmap",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "https://dtsworld.in/og/strategic-roadmap-og.jpg",
        width: 1200,
        height: 630,
        alt: "Strategic Roadmap & Growth Strategy – Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strategic Roadmap & Growth Strategy | Double Trouble Studio",
    description:
      "From vision to execution. Structured strategic roadmaps built for leadership teams that need clarity, alignment, and results.",
    images: ["https://dtsworld.in/og/strategic-roadmap-og.jpg"],
  },
};

const strategicroadmap=
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
      "@id": "https://www.dtsworld.in/services/strategic-road-map/#webpage",
      "url": "https://www.dtsworld.in/services/strategic-road-map",
      "name": "Strategic Roadmap | Double Trouble Studio",
      "description": "We define, align, and execute strategic roadmaps that guide your brand’s growth — turning insights into action and delivering results that matter.",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/strategic-road-map/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/strategic-road-map/#service" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/strategic-road-map/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dtsworld.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dtsworld.in/#services" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Strategic Roadmap",
          "item": "https://www.dtsworld.in/services/strategic-road-map"
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/strategic-road-map/#service",
      "name": "Strategic Roadmap",
      "serviceType": [
        "Strategic Planning",
        "Market & Competitive Analysis",
        "Stakeholder Alignment",
        "Execution Monitoring",
        "Risk Management",
        "KPI Review & Optimization"
      ],
      "description": "A structured roadmap that turns vision into action — clarifying direction, aligning stakeholders, defining milestones and KPIs, and monitoring execution with continuous optimization.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": { "@type": "Country", "name": "India" },
      "mainEntityOfPage": { "@id": "https://www.dtsworld.in/services/strategic-road-map/#webpage" },

      "audience": [
        { "@type": "Audience", "name": "Executive Leadership (C-suite)" },
        { "@type": "Audience", "name": "Strategic Planning Teams" },
        { "@type": "Audience", "name": "Corporate Teams & Departments" },
        { "@type": "Audience", "name": "Founders & Entrepreneurs" },
        { "@type": "Audience", "name": "Investors & Stakeholders" },
        { "@type": "Audience", "name": "Consultants & Advisors" }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Strategic Roadmap Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Defining Your Vision",
            "itemOffered": {
              "@type": "Service",
              "name": "Defining Your Vision",
              "description": "Clarifying goals, purpose, and direction to establish a clear roadmap for success."
            }
          },
          {
            "@type": "Offer",
            "name": "Market & Competitive Analysis",
            "itemOffered": {
              "@type": "Service",
              "name": "Market & Competitive Analysis",
              "description": "Analysis of market trends, audience segments, and competitors to identify opportunities and challenges."
            }
          },
          {
            "@type": "Offer",
            "name": "Strategic Alignment",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Alignment",
              "description": "Aligning internal teams and stakeholders so all efforts support common business goals."
            }
          },
          {
            "@type": "Offer",
            "name": "Strategic Planning & Roadmap",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Planning & Roadmap",
              "description": "An actionable plan outlining milestones, KPIs, and timelines aligned with business goals."
            }
          },
          {
            "@type": "Offer",
            "name": "Stakeholder Coordination",
            "itemOffered": {
              "@type": "Service",
              "name": "Stakeholder Coordination",
              "description": "Coordination between internal teams and external partners to drive execution with clear communication."
            }
          },
          {
            "@type": "Offer",
            "name": "Execution & Monitoring",
            "itemOffered": {
              "@type": "Service",
              "name": "Execution & Monitoring",
              "description": "Implementing the plan with continuous monitoring, course correction, and feedback loops."
            }
          },
          {
            "@type": "Offer",
            "name": "Risk Management & Mitigation",
            "itemOffered": {
              "@type": "Service",
              "name": "Risk Management & Mitigation",
              "description": "Proactive risk assessment and contingency planning to ensure smooth execution and adaptability."
            }
          },
          {
            "@type": "Offer",
            "name": "Post-Execution Review & Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Execution Review & Optimization",
              "description": "KPI tracking, performance analysis, and refinements to optimize future outcomes and strategies."
            }
          }
        ]
      }
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/strategic-road-map/#related-services",
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
          "name": "Events & Weddings",
          "url": "https://www.dtsworld.in/services/events-weddings"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "PR, Media & Digital Marketing",
          "url": "https://www.dtsworld.in/services/pr-media-digital-marketing"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Web Development & Marketing",
          "url": "https://www.dtsworld.in/services/web-development-marketing"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "AI Video & VFX",
          "url": "https://www.dtsworld.in/services/ai-video-vfx"
        }
      ]
    }
  ]
}

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
