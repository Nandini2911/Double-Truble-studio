// app/services/event-management/page.tsx


import AIVideoAdsVFXHero from "@/components/ai-video-vfx/AIVideoAdsVFXHero";
import AIVideoVFXCTA from "@/components/ai-video-vfx/AIVideoVFXCTA";
import AIVideoVFXDeliverables from "@/components/ai-video-vfx/AIVideoVFXDeliverables";
import AIVideoVFXFAQs from "@/components/ai-video-vfx/AIVideoVFXFAQs";
import AIVideoVFXHowItWorks from "@/components/ai-video-vfx/AIVideoVFXHowItWorks";
import AIVideoVFXSolves from "@/components/ai-video-vfx/AIVideoVFXSolves";
import AIVideoVFXWhoItsFor from "@/components/ai-video-vfx/AIVideoVFXWhoItsFor";
import AIVideoVFXWhyDTS from "@/components/ai-video-vfx/AIVideoVFXWhyDTS";
import RelatedAIVideoVFXServices from "@/components/ai-video-vfx/RelatedAIVideoVFXServices";

import { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "AI Video Ads & VFX Services | Cinematic AI Content – Double Trouble Studio",

  description:
    "Premium AI video ads and VFX services combining artificial intelligence with cinematic craft. Double Trouble Studio creates fast, scalable, high-impact video content for brands, celebrities, campaigns, and luxury events—without compromising brand control.",

  keywords: [
    "AI video ads",
    "AI video production agency",
    "VFX services India",
    "AI video editing services",
    "cinematic AI video ads",
    "motion graphics and VFX",
    "AI-powered video marketing",
    "celebrity video ads AI",
    "luxury brand video production",
    "AI VFX studio",
    "Double Trouble Studio AI video",
  ],

  alternates: {
    canonical: "https://dtsworld.in/services/ai-video-vfx",
  },

  openGraph: {
    title: "AI Video Ads & VFX by Double Trouble Studio",
    description:
      "Innovation in motion. AI-powered video ads and cinematic VFX built for speed, scale, and premium visual impact—crafted for brands that demand attention.",
    url: "https://dtsworld.in/services/ai-video-vfx",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-ai-vfx-page.webp",
        width: 1200,
        height: 630,
        alt: "AI Video Ads & VFX Services – Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Video Ads & VFX Services | Double Trouble Studio",
    description:
      "AI-powered video ads, cinematic VFX, and motion graphics designed for speed, scale, and premium storytelling.",
    images: ["/twitter-ai-vfx-page.webp"],
  },
};

const aivideovfx = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      "name": "Double Trouble Studio",
      "alternateName": "DTS World",
      "url": "https://www.dtsworld.in/",
      "logo": "https://www.dtsworld.in/logo.png",
      "email": "hello@dtsworld.in",
      "telephone": "+918000006021",
      "description": "Double Trouble Studio is a digital, PR, and creative agency specializing in branding, digital marketing, events, web, and AI-powered content.",
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
      "publisher": {
        "@id": "https://www.dtsworld.in/#organization"
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#webpage",
      "url": "https://www.dtsworld.in/services/ai-video-vfx",
      "name": "AI Video Ads & VFX Services | Double Trouble Studio",
      "description": "AI-powered video production and cinematic VFX services for premium brands, campaigns, and digital storytelling.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://www.dtsworld.in/#website"
      },
      "about": {
        "@id": "https://www.dtsworld.in/services/ai-video-vfx/#service"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.dtsworld.in/og-ai-video-vfx.webp"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#breadcrumb",
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
          "name": "AI Video & VFX",
          "item": "https://www.dtsworld.in/services/ai-video-vfx"
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#service",
      "name": "AI Video Ads & VFX",
      "image": "https://www.dtsworld.in/og-ai-video-vfx.webp",
      "description": "AI-powered video production, cinematic VFX, and motion graphics designed for high-impact brand storytelling, campaigns, and digital content.",
      "provider": {
        "@id": "https://www.dtsworld.in/#organization"
      },
      "serviceType": [
        "AI Video Production",
        "VFX & Motion Graphics",
        "Video Editing & Post Production",
        "AI Content Creation",
        "Ad Film Production"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "mainEntityOfPage": {
        "@id": "https://www.dtsworld.in/services/ai-video-vfx/#webpage"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Video & VFX Deliverables",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Creative Strategy & Concept Development" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Video Editing & Automation" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VFX Design & Motion Graphics" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multilingual Video Production" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-Production Optimization" }}
        ]
      }
    },

    {
      "@type": "HowTo",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#howto",
      "name": "AI Video & VFX Process",
      "step": [
        { "@type": "HowToStep", "name": "Understanding Brand Vision" },
        { "@type": "HowToStep", "name": "Creative Planning & Scripting" },
        { "@type": "HowToStep", "name": "AI Editing & Production" },
        { "@type": "HowToStep", "name": "VFX & Motion Design" },
        { "@type": "HowToStep", "name": "Final Delivery & Optimization" }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#faq",
      "name": "AI Video & VFX FAQs",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does AI-powered video editing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI-powered video editing uses automation and machine learning to enhance visuals, speed up editing, and optimize content for performance while maintaining brand consistency."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of VFX services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer cinematic VFX, motion graphics, compositing, and custom visual effects tailored for advertising, branding, and digital campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI video content match my brand identity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all AI workflows are customised to align with your brand’s tone, visual style, and storytelling approach."
          }
        },
        {
          "@type": "Question",
          "name": "Is AI video production faster than traditional editing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, AI significantly reduces production time while maintaining high-quality output, making it ideal for fast-moving campaigns."
          }
        }
      ]
    }

  ]
};
export default function AiVideandVFX() {
  return (

    <>
      {/* ✅ CRITICAL: Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aivideovfx),
        }}
      />
    <main className="bg-dts-black text-white">
       
      <AIVideoAdsVFXHero />
      <AIVideoVFXSolves />
      <AIVideoVFXHowItWorks />
      <AIVideoVFXDeliverables /> 
      <AIVideoVFXWhoItsFor />
      <AIVideoVFXWhyDTS />
      <RelatedAIVideoVFXServices />
      <AIVideoVFXFAQs />
      <AIVideoVFXCTA /> 

    </main>
       </>
  );
}
