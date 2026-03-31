// app/about/page.tsx

import AboutCTA from "@/components/About/AboutCTA";
import AboutHero from "@/components/About/AboutHero";
import BrandGrid from "@/components/About/BrandGrid";
import InsideStudio from "@/components/About/InsideStudio";
import Leadership from "@/components/About/Leadership";
import OriginStory from "@/components/About/OriginStory";
import StudioCultureAndFit from "@/components/About/StudioCultureAndFit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Double Trouble Studio",
  description:
    "Learn about Double Trouble Studio — a strategy-first branding, PR, digital, events, and execution agency built on clarity, trust, and senior-led thinking.",
  keywords: [
    "about Double Trouble Studio",
    "branding agency team",
    "PR agency leadership",
    "digital marketing agency India",
    "luxury brand consultants",
    "event marketing experts",
    "celebrity management agency",
  ],
  alternates: {
    canonical: "https://www.dtsworld.in/about",
  },
  openGraph: {
    title: "About Double Trouble Studio",
    description:
      "Meet the people, principles, and thinking behind Double Trouble Studio.",
    url: "https://www.dtsworld.in/about",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-about-page.webp",
        width: 1200,
        height: 630,
        alt: "About Double Trouble Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Double Trouble Studio",
    description:
      "Strategy-first branding, PR, digital, and events — led by experience.",
    images: ["/twitter-about-page.webp"],
  },
};

export default function AboutPage() {

  const schemaData = {
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
        "foundingDate": "2020",
        "description":
          "Double Trouble Studio is a digital, PR, and creative agency specializing in branding, digital marketing, events, and web execution.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress":
            "Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol, Andheri East",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400059",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.linkedin.com/company/double-trouble-studio",
          "https://www.instagram.com/doubletroublestudio"
        ]
      },

      {
        "@type": "WebSite",
        "@id": "https://www.dtsworld.in/#website",
        "url": "https://www.dtsworld.in/",
        "name": "Double Trouble Studio",
        "publisher": {
          "@id": "https://www.dtsworld.in/#organization"
        }
      },

      {
        "@type": "WebPage",
        "@id": "https://www.dtsworld.in/about/#webpage",
        "url": "https://www.dtsworld.in/about",
        "name": "About Double Trouble Studio",
        "description":
          "Learn about Double Trouble Studio, a Mumbai-based branding, PR, digital marketing, and event agency.",
        "isPartOf": {
          "@id": "https://www.dtsworld.in/#website"
        },
        "about": {
          "@id": "https://www.dtsworld.in/#organization"
        }
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.dtsworld.in/#localbusiness",
        "name": "Double Trouble Studio",
        "url": "https://www.dtsworld.in/",
        "telephone": "+918000006021",
        "email": "hello@dtsworld.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress":
            "Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol, Andheri East",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400059",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.1176",
          "longitude": "72.8634"
        },
        "hasMap":
          "https://www.google.com/maps/search/?api=1&query=Double+Trouble+Studio+Mumbai",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+918000006021",
          "contactType": "customer service",
          "email": "hello@dtsworld.in",
          "availableLanguage": ["English", "Hindi"]
        }
      }

    ]
  };

  return (
    <>
      {/* ✅ CRITICAL: Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="text-dts-fog min-h-screen bg-dts-black">
        <AboutHero />
        <OriginStory />
        <InsideStudio />
        <Leadership />
        <StudioCultureAndFit />
        <BrandGrid />
        <AboutCTA />
      </div>
    </>
  );
}