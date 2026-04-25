// app/page.tsx


import AboutFAQ from "@/components/About/AboutFAQ";
import AboutStrip from "@/components/Home/AboutStrip";
import DNABlock from "@/components/Home/DNABlock";
import FAQBlock from "@/components/Home/FAQBlock";
import FeaturedWork from "@/components/Home/FeaturedWork";
import FinalCTA from "@/components/Home/FinalCTA";
import HomeHero from "@/components/Home/HomeHero";
import ImpactStats from "@/components/Home/ImpactStats";
import IndustriesStrip from "@/components/Home/IndustriesStrip";
import LogoStrip from "@/components/Home/LogoStrip";
import MethodSteps from "@/components/Home/MethodStep";
import PromiseBlock from "@/components/Home/PromiseBlock";
import ServicesGrid from "@/components/Home/ServicesGrid";
import WhyDTS from "@/components/Home/WhyDTS";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double Trouble Studio | Branding, PR & Digital Agency",
  description:
    "Double Trouble Studio is a 360° branding, PR, digital marketing, events, and web execution agency helping brands grow, glow, and get noticed.",

  keywords: [
    "Double Trouble Studio",
    "branding agency",
    "PR agency Mumbai",
    "digital marketing agency",
    "event marketing",
    "celebrity management",
    "AI video production",
    "web design agency",
  ],

  alternates: {
    canonical: "https://dtsworld.in",
  },

  openGraph: {
    title: "Double Trouble Studio",
    description:
      "A 360° agency for branding, PR, digital, events, and web — built for visibility, trust, and momentum.",
    url: "https://dtsworld.in",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-home-mgmt.webp",
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio – Branding, PR & Digital Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Double Trouble Studio",
    description: "Where ideas go to grow, glow, and get noticed.",
    images: ["/twitter-home-mgmt.webp"],
  },
};

export default function Home() {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "Organization",
        "@id": "https://www.dtsworld.in/#organization",
        "name": "Double Trouble Studio",
        "url": "https://www.dtsworld.in",
        "logo": "https://www.dtsworld.in/logo.png",
        "description":
          "Double Trouble Studio is a 360° branding, PR, digital marketing, events, and web execution agency.",
        "foundingDate": "2020",
        "areaServed": "India",
        "sameAs": [
          "https://www.instagram.com/doubletrouble_studio/",
          "https://www.linkedin.com/company/doubletrouble-studio/posts/?feedView=all"
        ]
      },

      {
        "@type": "WebSite",
        "@id": "https://www.dtsworld.in/#website",
        "url": "https://www.dtsworld.in",
        "name": "Double Trouble Studio",
        "publisher": {
          "@id": "https://www.dtsworld.in/#organization"
        }
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.dtsworld.in/#localbusiness",
        "name": "Double Trouble Studio",
        "image": "https://www.dtsworld.in/og-home-mgmt.webp",
        "url": "https://www.dtsworld.in",
        "telephone": "+91 8000006021",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "India"
        },
        "priceRange": "$$$",
        "areaServed": "India"
      },

      {
        "@type": "Service",
        "serviceType": "Branding & Digital Marketing",
        "provider": {
          "@id": "https://www.dtsworld.in/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PR & Media" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Marketing" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" }}
          ]
        }
      },

      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does Double Trouble Studio do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide branding, PR, digital marketing, event execution, and web development services."
            }
          },
          {
            "@type": "Question",
            "name": "Is Double Trouble Studio based in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we are based in Mumbai and serve clients across India and globally."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle celebrity management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide celebrity management and influencer collaborations."
            }
          }
        ]
      }

    ]
  };

  return (
    <>
      {/* ✅ CRITICAL: Use plain script (NOT next/script) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <main className="min-h-screen bg-dts-black text-dts-fog">
        <HomeHero />
        <AboutStrip />
        <WhyDTS />
        <ServicesGrid />
        <MethodSteps />
        <FeaturedWork />
        <IndustriesStrip />
        <ImpactStats />
        <DNABlock />
        <PromiseBlock />
        <LogoStrip />
        <FAQBlock/>
        <FinalCTA />
      </main>
    </>
  );
}