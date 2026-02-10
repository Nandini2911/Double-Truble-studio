import type { Metadata } from "next";
import ContactPage from "./ContactPage.client";

export const metadata: Metadata = {
  title: "Contact Us | Double Trouble Studio",
  description:
    "Connect with Double Trouble Studio for strategic branding, PR, digital marketing, events, and execution support.",

  keywords: [
    "Double Trouble Studio",
    "branding agency India",
    "PR agency Mumbai",
    "digital marketing agency",
    "event marketing agency",
    "luxury brand marketing",
    "celebrity management agency",
    "AI video production",
    "web design agency",
    "strategic brand consulting",
  ],

  alternates: {
    canonical: "https://dtsworld.in/contact",
  },

  openGraph: {
    title: "Contact Double Trouble Studio",
    description:
      "Start a conversation with our branding, PR, digital, and event experts.",
    url: "https://doubletroublestudio.com/contact",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-contact-page.webp",
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio Contact Page",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Double Trouble Studio",
    description:
      "Let’s build visibility, trust, and momentum for your brand.",
    images: ["/twitter-contact-page.webp"],
  },
};

const contact=
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
      "description": "Double Trouble Studio is a strategy-first digital, PR, and creative agency specializing in brand growth across digital, PR, web, events, and celebrity collaborations.",
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
      "@id": "https://www.dtsworld.in/contact/#webpage",
      "url": "https://www.dtsworld.in/contact",
      "name": "Contact Us - Strategy-First Brand Growth | Double Trouble Studio",
      "description": "Get in touch with Double Trouble Studio for senior-led strategy and execution in PR, digital marketing, events, and celebrity management. Start the conversation for real momentum.",
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
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol, Andheri East",
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
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918000006021",
        "contactType": "customer service",
        "email": "hello@dtsworld.in",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.dtsworld.in/contact/#contactpage",
      "url": "https://www.dtsworld.in/contact",
      "name": "Contact Double Trouble Studio",
      "mainEntity": {
        "@id": "https://www.dtsworld.in/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "name": "Strategic Consultation",
      "description": "Senior-led assessment of brand intent, scale, and pressure points to recommend effective growth strategies.",
      "provider": {
        "@id": "https://www.dtsworld.in/#organization"
      },
      "serviceType": "Consulting",
      "offers": {
        "@type": "Offer",
        "description": "Requirement review by senior leadership with clear scope and timelines."
      }
    }
  ]
}

export default function Page() {
  return <ContactPage />;
}
