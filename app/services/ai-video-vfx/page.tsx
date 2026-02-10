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
const aivideovfx=
{
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
      "description": "Double Trouble Studio is a digital, PR, and creative agency specializing in brand growth across digital, PR, web, events, and celebrity collaborations.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol, Andheri East",
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
      "name": "DTS World",
      "publisher": {
        "@id": "https://www.dtsworld.in/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#webpage",
      "url": "https://www.dtsworld.in/services/ai-video-vfx",
      "name": "AI Video Ads & VFX Services - Innovation in Motion | Double Trouble Studio",
      "description": "Premium AI-powered video ads and VFX services. We blend artificial intelligence with cinematic craft for high-impact, fast-moving, and brand-aligned visual storytelling.",
      "isPartOf": {
        "@id": "https://www.dtsworld.in/#website"
      },
      "about": {
        "@id": "https://www.dtsworld.in/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#service",
      "name": "AI Video Ads & VFX",
      "description": "Cinematic AI video production and cutting-edge VFX for premium brands, celebrities, and corporate marketing. Features include AI-assisted editing, custom motion graphics, and post-production optimization.",
      "provider": {
        "@id": "https://www.dtsworld.in/#organization"
      },
      "serviceType": "AI Video Production",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Video & VFX Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Creative Strategy & Concept Development",
              "description": "Brand alignment and AI-driven concepts for visual storytelling."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Video Editing & Automation",
              "description": "Automated editing and real-time adjustments for trend-ready content."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VFX Design & Motion Graphics",
              "description": "Custom visual effects and photorealistic motion design."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multilingual Support & Voiceovers",
              "description": "Automated translations and global voiceover integration."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Production Optimization",
              "description": "AI upscaling, color grading, and immersive sound design."
            }
          }
        ]
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#howto",
      "name": "How Our AI Video & VFX Process Works",
      "description": "A structured, innovative approach to delivering high-quality AI-powered videos.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Understanding Vision",
          "text": "Identify brand goals and target audience for AI-powered content."
        },
        {
          "@type": "HowToStep",
          "name": "Scripting & Planning",
          "text": "Develop a creative script leveraging AI's capabilities."
        },
        {
          "@type": "HowToStep",
          "name": "AI-Assisted Editing",
          "text": "Use advanced AI tools for polished, on-brand editing at speed."
        },
        {
          "@type": "HowToStep",
          "name": "VFX Creation",
          "text": "Incorporate cutting-edge visual effects and motion graphics."
        },
        {
          "@type": "HowToStep",
          "name": "Final Review",
          "text": "Fine-tune details for maximum impact and flawless delivery."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does AI-powered video editing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use advanced AI tools to automate repetitive editing tasks, enhance visual quality, and adapt content to the latest trends in real-time, ensuring faster turnarounds without sacrificing brand control."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of VFX services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our VFX services range from hyper-realistic compositing and photorealistic effects to surreal motion graphics and custom visual storytelling designed for premium brands."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI tools be customised to match my brand style?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our AI-driven workflows are fully customizable. We ensure that every AI enhancement and automated edit aligns perfectly with your brand's unique aesthetic and narrative."
          }
        }
      ]
    }
  ]
}


export default function AiVideandVFX() {
  return (
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
  );
}
