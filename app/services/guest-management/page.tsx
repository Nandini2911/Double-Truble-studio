

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

const guestmanagement=
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
      "@id": "https://www.dtsworld.in/services/guest-management/#webpage",
      "url": "https://www.dtsworld.in/services/guest-management",
      "name": "Guest Management | Double Trouble Studio",
      "description": "We plan, segment, and control guest flow — from VIPs and media to partners and family — so your event begins calm, controlled, and premium.",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/guest-management/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/guest-management/#service" }
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
      "serviceType": [
        "Guestlist Planning & Segmentation",
        "RSVP Handling & Confirmations",
        "VIP Protocol & Tiered Access",
        "On-Ground Check-In & Access Control",
        "Event Entry Flow Design"
      ],
      "description": "A structured guest management system built for premium rooms — segmentation, access rules, RSVP tracking, on-ground coordination, and real-time issue handling to protect the first impression.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": { "@type": "Country", "name": "India" },
      "mainEntityOfPage": { "@id": "https://www.dtsworld.in/services/guest-management/#webpage" },

      "audience": [
        { "@type": "Audience", "name": "High-Profile Brands" },
        { "@type": "Audience", "name": "Celebrity-Led Events" },
        { "@type": "Audience", "name": "Corporate Events" },
        { "@type": "Audience", "name": "Luxury Weddings" },
        { "@type": "Audience", "name": "Founders & HNIs" },
        { "@type": "Audience", "name": "Agencies & Production Teams" }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Guest Management Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Understanding Your Objective",
            "itemOffered": {
              "@type": "Service",
              "name": "Understanding Your Objective",
              "description": "Event type, audience mix, VIP/media priority, venue flow, and what premium entry means for your room."
            }
          },
          {
            "@type": "Offer",
            "name": "Planning & System Setup",
            "itemOffered": {
              "@type": "Service",
              "name": "Planning & System Setup",
              "description": "Guestlist structure, categories, access rules, entry logic, RSVP tracking, and escalation rules."
            }
          },
          {
            "@type": "Offer",
            "name": "RSVP Handling & Confirmations",
            "itemOffered": {
              "@type": "Service",
              "name": "RSVP Handling & Confirmations",
              "description": "Invites, follow-ups, confirmations, reminders, and last-minute updates handled end-to-end."
            }
          },
          {
            "@type": "Offer",
            "name": "Planning Documents / Run Sheets",
            "itemOffered": {
              "@type": "Service",
              "name": "Planning Documents / Run Sheets",
              "description": "Entry flow plan, desk routing, pass/wristband logic, and documented escalation rules."
            }
          },
          {
            "@type": "Offer",
            "name": "On-Ground Management",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Ground Management",
              "description": "Smooth check-ins, tiered access, desk routing, wristbands/passes, and controlled arrivals."
            }
          },
          {
            "@type": "Offer",
            "name": "Venue + Security Coordination",
            "itemOffered": {
              "@type": "Service",
              "name": "Venue + Security Coordination",
              "description": "On-ground coordination with venue and security teams for access control and clean guest flow."
            }
          },
          {
            "@type": "Offer",
            "name": "Real-Time Problem Handling",
            "itemOffered": {
              "@type": "Service",
              "name": "Real-Time Problem Handling",
              "description": "Immediate fixes for list issues, VIP changes, and on-the-spot flow adjustments."
            }
          },
          {
            "@type": "Offer",
            "name": "Post-Event Wrap-Up",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Event Wrap-Up",
              "description": "Final counts, key learnings, and quick insights for tighter execution next time."
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "PR, Media & Digital Marketing",
          "url": "https://www.dtsworld.in/services/pr-media-digital-marketing"
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
    }
  ]
}



export default function GuestManagementPage() {
  return (
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
  );
}
