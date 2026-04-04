import CrisisManagementHero from "@/components/crisis-management/crisishero";
import CrisisManagementApproach from "@/components/crisis-management/CrisisManagementApproach";
import CrisisManagementCaseStudies from "@/components/crisis-management/CrisisManagementCaseStudies";
import CrisisManagementFinalSection from "@/components/crisis-management/CrisisManagementFinalSection";
import CrisisManagementImportance from "@/components/crisis-management/CrisisManagementImportance";
import CrisisManagementIndustries from "@/components/crisis-management/CrisisManagementIndustries";
import CrisisManagementIntro from "@/components/crisis-management/CrisisManagementIntro";
import CrisisManagementServices from "@/components/crisis-management/CrisisManagementServices";
import CrisisManagementTestimonials from "@/components/crisis-management/CrisisManagementTestimonials";
import CrisisManagementWhyChooseUs from "@/components/crisis-management/CrisisManagementWhyChooseUs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crisis Management Services | Reputation & Brand Protection – Double Trouble Studio",
  description:
    "Expert crisis management services including reputation protection, media control, PR strategy, and rapid response solutions for brands and public figures.",
  keywords: [
    "crisis management agency",
    "reputation management",
    "PR crisis handling",
    "brand protection services",
    "media crisis strategy",
    "online reputation management India"
  ],
  alternates: {
    canonical: "https://www.dtsworld.in/services/crisis-management",
  },
  openGraph: {
    title: "Crisis Management | Double Trouble Studio",
    description:
      "Strategic crisis management, PR control, and reputation protection for brands and public figures.",
    url: "https://www.dtsworld.in/services/crisis-management",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-crisis-management.webp",
        width: 1200,
        height: 630,
        alt: "Crisis Management Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crisis Management | Double Trouble Studio",
    description: "Reputation protection and PR crisis handling experts.",
    images: ["/og-crisis-management.webp"],
  },
};

export default function CrisisManagementPage() {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "Organization",
        "@id": "https://www.dtsworld.in/#organization",
        "name": "Double Trouble Studio",
        "url": "https://www.dtsworld.in",
        "logo": "https://www.dtsworld.in/logo.png",
        "sameAs": [
          "https://www.instagram.com/doubletroublestudio",
          "https://www.linkedin.com/company/double-trouble-studio"
        ]
      },

      {
        "@type": "WebPage",
        "@id": "https://www.dtsworld.in/services/crisis-management/#webpage",
        "url": "https://www.dtsworld.in/services/crisis-management",
        "name": "Crisis Management Services",
        "description":
          "Crisis management, reputation protection, and PR strategy for brands and public figures.",
        "isPartOf": {
          "@id": "https://www.dtsworld.in/#website"
        }
      },

      {
        "@type": "Service",
        "@id": "https://www.dtsworld.in/services/crisis-management/#service",
        "name": "Crisis Management",
        "description":
          "Professional crisis management services including media handling, reputation recovery, damage control, and brand protection.",
        "provider": {
          "@id": "https://www.dtsworld.in/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": [
          "Reputation Management",
          "PR Crisis Handling",
          "Brand Protection",
          "Media Strategy",
          "Online Reputation Recovery"
        ]
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.dtsworld.in/services/crisis-management/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.dtsworld.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.dtsworld.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Crisis Management",
            "item": "https://www.dtsworld.in/services/crisis-management"
          }
        ]
      },

      {
  "@type": "FAQPage",
  "@id": "https://www.dtsworld.in/services/crisis-management/#faq",
  "name": "Crisis Management FAQs",
  "mainEntity": [

    {
      "@type": "Question",
      "name": "What qualifies as a crisis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A crisis includes negative publicity, social media backlash, legal or reputational issues, and any situation that can harm brand perception or public trust."
      }
    },

    {
      "@type": "Question",
      "name": "How fast do you respond?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We respond immediately with rapid assessment and action plans to control the narrative and minimize damage as quickly as possible."
      }
    },

    {
      "@type": "Question",
      "name": "Do you offer 24/7 support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, crisis situations require real-time response, and we provide round-the-clock monitoring and support when needed."
      }
    },

    {
      "@type": "Question",
      "name": "Can you handle social media crises?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we manage social media crises including backlash, viral issues, negative comments, and reputation risks across all major platforms."
      }
    }

  ]
}

    ]
  };

  return (
    <>
      {/* ✅ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <main className="min-h-screen">
        <CrisisManagementHero/>
        <CrisisManagementIntro/>
        <CrisisManagementImportance/>
        <CrisisManagementApproach/>
        <CrisisManagementServices/>
        <CrisisManagementIndustries/>
        <CrisisManagementCaseStudies/>
        <CrisisManagementWhyChooseUs/>
        <CrisisManagementTestimonials/>
        <CrisisManagementFinalSection/>
      </main>
    </>
  );
}