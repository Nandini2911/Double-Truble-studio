// app/services/event-management/page.tsx

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
        url: "/og-strategic-map (1).webp",
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
    images: ["/twitter-strategic-map-page.webp"],
  },
};

const strategicroadmap = {
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
      "@id": "https://www.dtsworld.in/services/strategic-road-map/#webpage",
      "url": "https://www.dtsworld.in/services/strategic-road-map",
      "name": "Strategic Roadmap | Double Trouble Studio",
      "description": "Strategic roadmap planning to align vision, define execution, and drive measurable growth.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/strategic-road-map/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/strategic-road-map/#service" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/strategic-road-map/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dtsworld.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dtsworld.in/services" },
        { "@type": "ListItem", "position": 3, "name": "Strategic Roadmap", "item": "https://www.dtsworld.in/services/strategic-road-map" }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/strategic-road-map/#service",
      "name": "Strategic Roadmap",
      "image": "https://www.dtsworld.in/og-strategic-roadmap.webp",
      "serviceType": [
        "Strategic Planning",
        "Market Analysis",
        "Business Growth Strategy",
        "Execution Planning",
        "KPI Optimization"
      ],
      "description": "A structured strategic roadmap that aligns vision, defines execution, and delivers measurable business outcomes.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": { "@type": "Country", "name": "India" },
      "mainEntityOfPage": { "@id": "https://www.dtsworld.in/services/strategic-road-map/#webpage" }
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/strategic-road-map/#faq",
      "name": "Strategic Roadmap FAQs",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "How is a strategic roadmap priced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on business scope, complexity, and deliverables. Each roadmap is customised based on goals, stakeholders, and execution requirements."
          }
        },

        {
          "@type": "Question",
          "name": "When should we start working on our strategic roadmap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ideally before launching new initiatives, scaling operations, or entering new markets to ensure clarity and alignment from the start."
          }
        },

        {
          "@type": "Question",
          "name": "What’s included in a strategic roadmap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It includes goal definition, market analysis, stakeholder alignment, execution planning, timelines, KPIs, and monitoring systems."
          }
        },

        {
          "@type": "Question",
          "name": "Can we customize the roadmap process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every roadmap is tailored based on business needs, team structure, and long-term objectives."
          }
        },

        {
          "@type": "Question",
          "name": "How do you ensure the roadmap is executable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We break strategy into actionable steps, define clear responsibilities, set measurable KPIs, and monitor execution with continuous optimization."
          }
        }

      ]
    }

  ]
};

export default function StrategicRoadmap() {
  return (

    <>
      {/* ✅ CRITICAL: Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(strategicroadmap ),
        }}
      />
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
       </>
  );
}
