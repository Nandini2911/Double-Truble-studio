

import GuestManagementCTA from "@/components/guest-management/GuestManagementCTA";
import GuestManagementDeliverables from "@/components/guest-management/GuestManagementDeliverables";
import GuestManagementFAQ from "@/components/guest-management/GuestManagementFAQ";
import GuestManagementHowItWorks from "@/components/guest-management/GuestManagementHowItWorks";
import GuestManagementSolves from "@/components/guest-management/GuestManagementSolves";
import GuestManagementWhoItsFor from "@/components/guest-management/GuestManagementWhoItsFor";
import GuestManagementWhyDTS from "@/components/guest-management/GuestManagementWhyDTS";
import Hero from "@/components/guest-management/Hero";
import RelatedServices from "@/components/guest-management/RelatedServices";

import { HeartOff } from "lucide-react";
import { Metadata } from "next";
import { GrOverview } from "react-icons/gr";

export const metadata: Metadata = {
  title: "Guest Management Services | VIP & Event Entry Control – Double Trouble Studio",

  description:
    "Premium guest management services for events, launches, celebrity gatherings, and luxury weddings. Double Trouble Studio plans, segments, and executes calm, controlled guest entry systems — from VIPs and media to partners and family.",

  keywords: [
    "guest management services",
    "VIP guest management",
    "event guest management agency",
    "celebrity event guest handling",
    "event entry management",
    "RSVP management services",
    "access control for events",
    "luxury event guest coordination",
    "media and VIP entry management",
    "premium event management agency",
    "Double Trouble Studio guest management",
  ],

  alternates: {
    canonical: "https://dtsworld.in/services/guest-management",
  },

  openGraph: {
    title: "Guest Management Services by Double Trouble Studio",
    description:
      "Calm, controlled, and premium guest entry systems for high-pressure events. From VIPs and media to family and partners — we don’t manage lists, we manage the room.",
    url: "https://dtsworld.in/services/guest-management",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-guest-mgmt.webp",
        width: 1200,
        height: 630,
        alt: "Guest Management Services – Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Guest Management Services | Double Trouble Studio",
    description:
      "Structured guest entry, VIP access control, and calm on-ground execution for premium events.",
    images: ["/twitter-guest-mgmt.webp"],
  },
};

const guestmanagement = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      "name": "Double Trouble Studio",
      "alternateName": "DTS",
      "url": "https://www.dtsworld.in/",
      "logo": "https://www.dtsworld.in/logo.png",
      "description": "A digital, PR and creative studio building ecosystems across social media, web, media, events and celebrity collaborations.",
      "email": "hello@dtsworld.in",
      "telephone": "+91 80000 06021",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "sameAs": [
        "https://www.instagram.com/doubletroublestudio",
        "https://www.linkedin.com/company/double-trouble-studio"
      ],
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
      "inLanguage": "en",
      "publisher": { "@id": "https://www.dtsworld.in/#organization" }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/services/guest-management/#webpage",
      "url": "https://www.dtsworld.in/services/guest-management",
      "name": "Guest Management | Double Trouble Studio",
      "description": "Premium guest management services including RSVP handling, VIP coordination, and event access control.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/guest-management/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/guest-management/#service" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.dtsworld.in/og-guest-mgmt.webp"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/guest-management/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dtsworld.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dtsworld.in/#services" },
        { "@type": "ListItem", "position": 3, "name": "Guest Management", "item": "https://www.dtsworld.in/services/guest-management" }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/guest-management/#service",
      "name": "Guest Management",
      "image": "https://www.dtsworld.in/og-guest-mgmt.webp",
      "description": "Guest management services including RSVP handling, VIP guest coordination, access control, and event entry flow management.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "mainEntityOfPage": { "@id": "https://www.dtsworld.in/services/guest-management/#webpage" },

      "serviceType": [
        "VIP Guest Management",
        "RSVP Management",
        "Event Entry Control",
        "Celebrity Guest Handling",
        "Luxury Event Coordination"
      ],

      "audience": [
        { "@type": "Audience", "name": "Luxury Event Clients" },
        { "@type": "Audience", "name": "Corporate Brands" },
        { "@type": "Audience", "name": "Wedding Planners" }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Guest Management Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "RSVP & Guestlist Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIP & Celebrity Handling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Ground Entry Control"
            }
          }
        ]
      }
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/guest-management/#related-services",
      "name": "Related services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Celebrity Management",
          "url": "https://www.dtsworld.in/services/celebrity-management"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Events & Weddings",
          "url": "https://www.dtsworld.in/services/events-weddings"
        }
      ]
    }

  ]
};

export default function GuestManagementPage() {
  return (
<>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(guestmanagement),
  }}
/>


    <main className="min-h-screen bg-black text-white">
    <Hero/>
    <GuestManagementSolves/>
    <GuestManagementHowItWorks/>
    <GuestManagementDeliverables/>
    <GuestManagementWhoItsFor />
    <GuestManagementWhyDTS/>
    <RelatedServices/>
    <GuestManagementFAQ/>
    <GuestManagementCTA/>
  </main>
   </>
  );
 
}
