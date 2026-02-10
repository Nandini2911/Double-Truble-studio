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
    canonical: "https://dtsworld.in/about",
  },

  openGraph: {
    title: "About Double Trouble Studio",
    description:
      "Meet the people, principles, and thinking behind Double Trouble Studio.",
    url: "https://dtsworld.in/about",
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
const about=
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
      "foundingDate": "2026",
      "description": "Double Trouble Studio is a digital, PR, and creative agency specializing in brand growth across digital, PR, web, events, and celebrity collaborations.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol, Andheri East",
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
      "name": "DTS World",
      "publisher": {
        "@id": "https://www.dtsworld.in/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/contact-us/#webpage",
      "url": "https://www.dtsworld.in/contact-us",
      "name": "Contact Us - Double Trouble Studio | Get in Touch",
      "description": "Contact Double Trouble Studio for digital marketing, PR, web development, events, and celebrity collaborations. Reach us via phone, email, or visit our Mumbai office.",
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
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Unit+42,+Apurva+Industrial+Estate,+Makwana+Rd,+Gamdevi,+Marol,+Andheri+East,+Mumbai,+Maharashtra+400059",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
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
      "@id": "https://www.dtsworld.in/contact-us/#contactpage",
      "url": "https://www.dtsworld.in/contact-us",
      "name": "Contact Double Trouble Studio",
      "mainEntity": {
        "@id": "https://www.dtsworld.in/#localbusiness"
      }
    }
  ]
}

export default function AboutPage() {
  return (
    <div className="text-dts-fog min-h-screen bg-dts-black">
      <AboutHero />
      <OriginStory />
      <InsideStudio />
      <Leadership />
      <StudioCultureAndFit />
      <BrandGrid />
      <AboutCTA />
    </div>
  );
}
