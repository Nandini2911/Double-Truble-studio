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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dtsworld.in/logo.png"
      },
      "email": "hello@dtsworld.in",
      "telephone": "+918000006021",
      "foundingDate": "2020",
      "description":
        "Double Trouble Studio is a Mumbai-based branding, PR, digital marketing, events, and web development agency helping brands grow and get noticed.",
      
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },

      "sameAs": [
        "https://www.linkedin.com/company/double-trouble-studio",
        "https://www.instagram.com/doubletroublestudio"
      ],

      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "Unit 42, Apurva Industrial Estate, Makwana Rd, Marol, Andheri East",
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
      "@id": "https://www.dtsworld.in/about/#webpage",
      "url": "https://www.dtsworld.in/about",
      "name": "About Double Trouble Studio",
      "description":
        "About Double Trouble Studio – a strategy-first branding, PR, digital marketing and events agency in Mumbai.",
      
      "inLanguage": "en",

      "isPartOf": {
        "@id": "https://www.dtsworld.in/#website"
      },

      "about": {
        "@id": "https://www.dtsworld.in/#organization"
      },

      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.dtsworld.in/og-about-page.webp"
      }
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.dtsworld.in/#localbusiness",
      "name": "Double Trouble Studio",
      "image": "https://www.dtsworld.in/og-home-mgmt.webp",
      "url": "https://www.dtsworld.in/",
      "telephone": "+918000006021",
      "email": "hello@dtsworld.in",

      "priceRange": "₹₹₹",

      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "Unit 42, Apurva Industrial Estate, Makwana Rd, Marol, Andheri East",
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
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      },

      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918000006021",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/#services",
      "serviceType": "Branding, PR, Digital Marketing, Events, Web Development",
      "provider": {
        "@id": "https://www.dtsworld.in/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },

    {
      "@type": "FAQPage",
      "name": "About Double Trouble Studio FAQs",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does Double Trouble Studio do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Double Trouble Studio provides branding, PR, digital marketing, web development, event execution and celebrity collaborations."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Double Trouble Studio located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Double Trouble Studio is located in Mumbai, India and serves clients across India."
          }
        }
      ]
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