// app/services/event-management/page.tsx

import PRMediaDigitalFAQs from "@/components/pr-media-digital/PRMediaDigitalFAQs";
import PRMediaDigitalFinalCTA from "@/components/pr-media-digital/PRMediaDigitalFinalCTA";
import PRMediaDigitalHero from "@/components/pr-media-digital/PRMediaDigitalHero";
import PRMediaDigitalHowItWorks from "@/components/pr-media-digital/PRMediaDigitalHowItWorks";
import PRMediaDigitalIntro from "@/components/pr-media-digital/PRMediaDigitalIntro";
import PRMediaDigitalMediaAndDigital from "@/components/pr-media-digital/PRMediaDigitalMediaAndDigital";
import PRMediaDigitalPublicRelations from "@/components/pr-media-digital/PRMediaDigitalPublicRelations";
import PRMediaDigitalRelatedServices from "@/components/pr-media-digital/PRMediaDigitalRelatedServices";
import PRMediaDigitalSolvesAndFor from "@/components/pr-media-digital/PRMediaDigitalSolvesAndFor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "PR, Media & Digital Marketing Agency | Strategic Brand Visibility – Double Trouble Studio",

  description:
    "Strategic PR, media relations, and digital marketing for brands, founders, and public figures who need visibility with credibility and control. Double Trouble Studio builds earned media, narrative clarity, and digital momentum that compounds trust—without chasing noise.",

  keywords: [
    "PR agency Mumbai",
    "public relations agency India",
    "media relations services",
    "brand positioning and PR",
    "founder PR and personal branding",
    "digital marketing for premium brands",
    "reputation management agency",
    "earned media strategy",
    "luxury brand PR",
    "strategic PR and digital marketing",
    "Double Trouble Studio PR",
  ],

  alternates: {
    canonical: "https://dtsworld.in/services/pr-media-digital-marketing",
  },

  openGraph: {
    title: "PR, Media & Digital Marketing by Double Trouble Studio",
    description:
      "Visibility that commands attention—and trust. Strategic PR, media placement, and digital storytelling built as one system for long-term brand authority.",
    url: "https://dtsworld.in/services/pr-media-digital-marketing",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-pr-media-page.webp",
        width: 1200,
        height: 630,
        alt: "PR, Media & Digital Marketing – Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PR, Media & Digital Marketing | Double Trouble Studio",
    description:
      "Strategic PR, media positioning, and digital marketing that builds authority, credibility, and momentum—without short-lived attention.",
    images: ["/twitter-pr-media-page.webp"],
  },
};

const prmediadigitalmarketing=
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
      "@id": "https://www.dtsworld.in/services/pr-media-digital-marketing/#webpage",
      "url": "https://www.dtsworld.in/services/pr-media-digital-marketing",
      "name": "PR, Media & Digital Marketing | Double Trouble Studio",
      "description": "Strategic PR, media positioning, and digital storytelling for brands, founders, and public figures who need visibility with structure, credibility, and control — not short-lived attention.",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/pr-media-digital-marketing/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/pr-media-digital-marketing/#service" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/pr-media-digital-marketing/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dtsworld.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dtsworld.in/#services" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "PR, Media & Digital Marketing",
          "item": "https://www.dtsworld.in/services/pr-media-digital-marketing"
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/pr-media-digital-marketing/#service",
      "name": "PR, Media & Digital Marketing",
      "serviceType": [
        "Public Relations",
        "Media Strategy & Visibility",
        "Digital Marketing",
        "Influencer & Creator Activations",
        "Paid Campaigns (Meta, Google, YouTube)",
        "Community Building & Audience Engagement"
      ],
      "description": "Visibility built like a system — PR, media and digital aligned into one ecosystem so your presence compounds with credibility, control, and long-term brand perception.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": { "@type": "Country", "name": "India" },
      "mainEntityOfPage": {
        "@id": "https://www.dtsworld.in/services/pr-media-digital-marketing/#webpage"
      },

      "audience": [
        { "@type": "Audience", "name": "Luxury, Lifestyle & Premium Brands" },
        { "@type": "Audience", "name": "Founders, Creators & Public Figures" },
        { "@type": "Audience", "name": "New Launches, Rebrands & Scale-ups" },
        { "@type": "Audience", "name": "Businesses Seeking Credibility Alongside Growth" }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PR, Media & Digital Marketing Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Brand & Objective Clarity",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand & Objective Clarity",
              "description": "Define positioning, voice, and outcomes before anything goes live."
            }
          },
          {
            "@type": "Offer",
            "name": "Strategic Mapping",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Mapping",
              "description": "Align messaging, platforms, media lists, creators, and timelines."
            }
          },
          {
            "@type": "Offer",
            "name": "Precision Execution",
            "itemOffered": {
              "@type": "Service",
              "name": "Precision Execution",
              "description": "PR, digital, media, and influencers roll out seamlessly — no gaps, no confusion."
            }
          },
          {
            "@type": "Offer",
            "name": "Measurement & Refinement",
            "itemOffered": {
              "@type": "Service",
              "name": "Measurement & Refinement",
              "description": "Coverage, sentiment, reach, engagement, and conversions are tracked and optimised."
            }
          },
          {
            "@type": "Offer",
            "name": "Media Relations",
            "itemOffered": {
              "@type": "Service",
              "name": "Media Relations",
              "description": "Print, digital & broadcast outreach with precise positioning."
            }
          },
          {
            "@type": "Offer",
            "name": "Editorial & Interviews",
            "itemOffered": {
              "@type": "Service",
              "name": "Editorial & Interviews",
              "description": "Founder profiles, features, brand narratives and spokesperson prep."
            }
          },
          {
            "@type": "Offer",
            "name": "Press & Launch Communications",
            "itemOffered": {
              "@type": "Service",
              "name": "Press & Launch Communications",
              "description": "Press releases, launch notes, media kits and announcement strategy."
            }
          },
          {
            "@type": "Offer",
            "name": "Reputation & Crisis",
            "itemOffered": {
              "@type": "Service",
              "name": "Reputation & Crisis",
              "description": "Quiet risk handling, reputation reinforcement, and narrative control."
            }
          },
          {
            "@type": "Offer",
            "name": "Media Strategy & Visibility",
            "itemOffered": {
              "@type": "Service",
              "name": "Media Strategy & Visibility",
              "description": "Targeted editorial placements, media partnerships, event PR, and launch amplification."
            }
          },
          {
            "@type": "Offer",
            "name": "Digital Marketing",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing",
              "description": "Social media strategy & content direction, paid campaigns, creator activations, and community engagement."
            }
          }
        ]
      }
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/pr-media-digital-marketing/#related-services",
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
        "text": "Yes. Scale doesn’t matter — structure and execution do. Whether it’s an intimate event or a large-format production, we plan with the same clarity, control, and premium execution standards."
      }
    },

    {
      "@type": "Question",
      "name": "Can event management services be customised?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every event is fully customised based on your requirements, goals, and experience expectations. We do not use fixed packages or templated plans."
      }
    },

    {
      "@type": "Question",
      "name": "Do you work with existing vendors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we collaborate with your existing vendors while maintaining structure, coordination, and execution quality across the entire event."
      }
    },

    {
      "@type": "Question",
      "name": "How early should we get in touch for event planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally, 4 to 12 weeks before the event depending on scale, complexity, and vendor involvement. Earlier planning allows better control and smoother execution."
      }
    },

    {
      "@type": "Question",
      "name": "Is pricing fixed or flexible for event management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is flexible and depends on event scale, requirements, and deliverables. Every project is customised to match the scope and expectations."
      }
    }

  ]
}
  ]
};

export default function PRMediaDigital() {
  return (

     <>
      {/* ✅ CRITICAL: Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(prmediadigitalmarketing),
        }}
      />
    <main className="bg-dts-black text-white">
        <PRMediaDigitalHero />
        <PRMediaDigitalIntro  />
        <PRMediaDigitalPublicRelations /> 
        <PRMediaDigitalMediaAndDigital />
       
        <PRMediaDigitalHowItWorks />
        <PRMediaDigitalSolvesAndFor />
        <PRMediaDigitalRelatedServices />
        <PRMediaDigitalFAQs />
        <PRMediaDigitalFinalCTA />

    </main>
        </>
  );
}
