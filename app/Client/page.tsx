import type { Metadata } from "next";
import ClientsPage from "./ClientsPage.client";
import AIVideoVFXFAQs from "@/components/ai-video-vfx/AIVideoVFXFAQs";
import ClientFAQ from "@/components/ClientFAQ";

export const metadata: Metadata = {
  title: "Our Clients | Double Trouble Studio",
  description:
    "Discover the brands and companies that trust Double Trouble Studio for branding, PR, digital marketing, and high-impact execution.",

  keywords: [
    "Double Trouble Studio clients",
    "brands we work with",
    "PR agency clients",
    "branding agency portfolio",
    "digital marketing clients",
    "luxury brand collaborations",
  ],

  alternates: {
    canonical: "https://dtsworld.in/clients",
  },

  openGraph: {
    title: "Trusted by Leading Brands | Double Trouble Studio",
    description:
      "We partner with visionary brands across industries to deliver clarity, visibility, and results.",
    url: "https://dtsworld.in/clients",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-client-page.webp",
        width: 1200,
        height: 630,
        alt: "Clients of Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Clients | Double Trouble Studio",
    description:
      "Trusted by brands that value strategy-led execution.",
    images: ["/twitter-client-page.webp"],
  },
};
const Client=
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
      "publisher": {
        "@id": "https://www.dtsworld.in/#organization"
      }
    },

    {
      "@type": "CollectionPage",
      "@id": "https://www.dtsworld.in/client/#webpage",
      "url": "https://www.dtsworld.in/client",
      "name": "Our Clients | Double Trouble Studio",
      "description": "A curated list of brands and companies that have collaborated with Double Trouble Studio across digital, PR, web, events and talent.",
      "isPartOf": {
        "@id": "https://www.dtsworld.in/#website"
      },
      "publisher": {
        "@id": "https://www.dtsworld.in/#organization"
      },
      "mainEntity": {
        "@id": "https://www.dtsworld.in/client/#client-list"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/client/#breadcrumb",
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
          "name": "Clients",
          "item": "https://www.dtsworld.in/client"
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/client/#client-list",
      "name": "Clients of Double Trouble Studio",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Client 1" },
        { "@type": "ListItem", "position": 2, "name": "Client 2" },
        { "@type": "ListItem", "position": 3, "name": "Client 3" },
        { "@type": "ListItem", "position": 4, "name": "Client 4" },
        { "@type": "ListItem", "position": 5, "name": "Client 5" },
        { "@type": "ListItem", "position": 6, "name": "Client 6" },
        { "@type": "ListItem", "position": 7, "name": "Client 7" },
        { "@type": "ListItem", "position": 8, "name": "Client 8" },
        { "@type": "ListItem", "position": 9, "name": "Client 9" },
        { "@type": "ListItem", "position": 10, "name": "Client 10" },
        { "@type": "ListItem", "position": 11, "name": "Client 11" },
        { "@type": "ListItem", "position": 12, "name": "Client 12" },
        { "@type": "ListItem", "position": 13, "name": "Client 13" },
        { "@type": "ListItem", "position": 14, "name": "Client 14" },
        { "@type": "ListItem", "position": 15, "name": "Client 15" },
        { "@type": "ListItem", "position": 16, "name": "Client 16" },
        { "@type": "ListItem", "position": 17, "name": "Client 17" },
        { "@type": "ListItem", "position": 18, "name": "Client 18" },
        { "@type": "ListItem", "position": 19, "name": "Client 19" },
        { "@type": "ListItem", "position": 20, "name": "Client 20" },
        { "@type": "ListItem", "position": 21, "name": "Client 21" },
        { "@type": "ListItem", "position": 22, "name": "Client 22" },
        { "@type": "ListItem", "position": 23, "name": "Client 23" },
        { "@type": "ListItem", "position": 24, "name": "Client 24" },
        { "@type": "ListItem", "position": 25, "name": "Client 25" },
        { "@type": "ListItem", "position": 26, "name": "Client 26" },
        { "@type": "ListItem", "position": 27, "name": "Client 27" },
        { "@type": "ListItem", "position": 28, "name": "Client 28" },
        { "@type": "ListItem", "position": 29, "name": "Client 29" },
        { "@type": "ListItem", "position": 30, "name": "Client 30" },
        { "@type": "ListItem", "position": 31, "name": "Client 31" },
        { "@type": "ListItem", "position": 32, "name": "Client 32" }
      ]
    }
  ]
}


export default function Page() {
  
  return <><ClientsPage /><ClientFAQ /></>;
}
