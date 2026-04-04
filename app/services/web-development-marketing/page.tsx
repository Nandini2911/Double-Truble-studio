// app/services/event-management/page.tsx


import WebDevelopmentCTA from "@/components/web-development-marketing/WebDevelopmentCTA";
import WebDevelopmentDeliverables from "@/components/web-development-marketing/WebDevelopmentDeliverables";
import WebDevelopmentFAQs from "@/components/web-development-marketing/WebDevelopmentFAQs";
import WebDevelopmentHero from "@/components/web-development-marketing/WebDevelopmentHero";
import WebDevelopmentHowItWorks from "@/components/web-development-marketing/WebDevelopmentHowItWorks";
import WebDevelopmentRelatedServices from "@/components/web-development-marketing/WebDevelopmentRelatedServices";
import WebDevelopmentSolves from "@/components/web-development-marketing/WebDevelopmentSolves";
import WebDevelopmentWhoItsFor from "@/components/web-development-marketing/WebDevelopmentWhoItsFor";
import WebDevelopmentWhyDTS from "@/components/web-development-marketing/WebDevelopmentWhyDTS";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Web Development & Management | High-Performance Websites – Double Trouble Studio",

  description:
    "Premium web development and website management for brands that value performance, speed, and credibility. Double Trouble Studio designs and builds fast, scalable, SEO-ready websites that look sharp, load faster, and convert better—without compromising brand stature.",

  keywords: [
    "web development agency",
    "website design and development",
    "high performance websites",
    "SEO friendly web development",
    "custom website development",
    "corporate website development",
    "ecommerce website development",
    "website management services",
    "UX UI web design",
    "scalable website architecture",
    "Double Trouble Studio web development",
  ],

  alternates: {
    canonical: "https://dtsworld.in/services/web-development-marketing",
  },

  openGraph: {
    title: "Web Development & Management by Double Trouble Studio",
    description:
      "Websites built to perform. Premium UI, fast load times, clean systems, and scalable architecture—designed for brands that take digital credibility seriously.",
    url: "https://dtsworld.in/services/web-development-marketing",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-web-development-page.webp",
        width: 1200,
        height: 630,
        alt: "Web Development & Management – Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development & Management | Double Trouble Studio",
    description:
      "Fast, scalable, premium websites designed for performance, SEO, and conversion—built clean, managed smart.",
    images: ["/twitter-web-development-page.webp"],
  },
};
const webdevelopmentmarketing=
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
      "@id": "https://www.dtsworld.in/services/web-development-marketing/#webpage",
      "url": "https://www.dtsworld.in/services/web-development-marketing",
      "name": "Web Development & Management | Double Trouble Studio",
      "description": "Fast, scalable, premium websites that look sharp, load faster, and convert better — without compromising your brand’s stature.",
      "isPartOf": { "@id": "https://www.dtsworld.in/#website" },
      "about": { "@id": "https://www.dtsworld.in/services/web-development-marketing/#service" },
      "mainEntity": { "@id": "https://www.dtsworld.in/services/web-development-marketing/#service" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/web-development-marketing/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dtsworld.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dtsworld.in/#services" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Web Development & Management",
          "item": "https://www.dtsworld.in/services/web-development-marketing"
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/web-development-marketing/#service",
      "name": "Web Development & Management",
      "serviceType": [
        "Custom Web Development",
        "UX Design",
        "CMS Implementation",
        "E-commerce Solutions",
        "SEO & Performance Optimization",
        "Web Security & Maintenance",
        "Analytics & Reporting"
      ],
      "description": "Design and development built for performance: premium UI, fast load speed, clean systems, scalability, SEO readiness, and post-launch support.",
      "provider": { "@id": "https://www.dtsworld.in/#organization" },
      "areaServed": { "@type": "Country", "name": "India" },
      "mainEntityOfPage": { "@id": "https://www.dtsworld.in/services/web-development-marketing/#webpage" },

      "audience": [
        { "@type": "Audience", "name": "Startups & Tech Companies" },
        { "@type": "Audience", "name": "Corporate Websites" },
        { "@type": "Audience", "name": "E-commerce Businesses" },
        { "@type": "Audience", "name": "Creative Agencies & Portfolios" },
        { "@type": "Audience", "name": "Luxury & Lifestyle Brands" },
        { "@type": "Audience", "name": "Content Creators & Influencers" }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development & Management Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Discovery & Planning",
            "itemOffered": {
              "@type": "Service",
              "name": "Discovery & Planning",
              "description": "Understand goals, audience, and requirements to create a tailored web strategy."
            }
          },
          {
            "@type": "Offer",
            "name": "Design & Prototyping",
            "itemOffered": {
              "@type": "Service",
              "name": "Design & Prototyping",
              "description": "User-centric UI/UX designs and prototypes aligned with brand identity."
            }
          },
          {
            "@type": "Offer",
            "name": "Development & Testing",
            "itemOffered": {
              "@type": "Service",
              "name": "Development & Testing",
              "description": "Build with modern technologies and test for functionality, responsiveness, and performance."
            }
          },
          {
            "@type": "Offer",
            "name": "Launch & Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "Launch & Optimization",
              "description": "Optimize for speed, SEO, and scalability to ensure best-in-class performance."
            }
          },
          {
            "@type": "Offer",
            "name": "Post-Launch Support",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Launch Support",
              "description": "Ongoing maintenance, updates, and support to keep the website future-ready."
            }
          },
          {
            "@type": "Offer",
            "name": "Custom Web Development",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Development",
              "description": "Responsive, scalable, high-performance websites tailored to business needs."
            }
          },
          {
            "@type": "Offer",
            "name": "User Experience (UX) Design",
            "itemOffered": {
              "@type": "Service",
              "name": "User Experience (UX) Design",
              "description": "Intuitive navigation, clean UI, and optimized user flows to improve engagement and conversions."
            }
          },
          {
            "@type": "Offer",
            "name": "Content Management System (CMS)",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Management System (CMS)",
              "description": "Easy-to-manage content systems for flexible layouts and fast updates."
            }
          },
          {
            "@type": "Offer",
            "name": "E-commerce Solutions",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Solutions",
              "description": "Secure, scalable e-commerce builds with catalog, checkout, and order tracking capabilities."
            }
          },
          {
            "@type": "Offer",
            "name": "SEO & Performance Optimization",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO & Performance Optimization",
              "description": "On-page SEO, fast page load speed, and performance tuning for better visibility and UX."
            }
          },
          {
            "@type": "Offer",
            "name": "Web Security & Maintenance",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Security & Maintenance",
              "description": "Security patches, regular updates, backups, and recovery practices to protect your digital presence."
            }
          },
          {
            "@type": "Offer",
            "name": "Analytics & Reporting",
            "itemOffered": {
              "@type": "Service",
              "name": "Analytics & Reporting",
              "description": "Google Analytics setup, user behavior tracking, and custom performance reporting."
            }
          }
        ]
      }
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/web-development-marketing/#related-services",
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
          "name": "PR, Media & Digital Marketing",
          "url": "https://www.dtsworld.in/services/pr-media-digital-marketing"
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
  "@id": "https://www.dtsworld.in/services/web-development-marketing/#faq",
  "name": "Web Development FAQs",
  "mainEntity": [

    {
      "@type": "Question",
      "name": "How do you price your web development services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on the scope, features, design complexity, and performance requirements of the website. Every project is customised based on business goals and deliverables."
      }
    },

    {
      "@type": "Question",
      "name": "How long does it take to develop a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines typically range from 2 to 8 weeks depending on the size, functionality, and level of customisation required."
      }
    },

    {
      "@type": "Question",
      "name": "What is included in a website development package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical package includes UI/UX design, development, testing, performance optimisation, SEO readiness, and launch support."
      }
    },

    {
      "@type": "Question",
      "name": "Can you help with website maintenance and updates after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide post-launch maintenance, updates, performance monitoring, and ongoing support to keep your website secure and up to date."
      }
    },

    {
      "@type": "Question",
      "name": "Do you offer SEO and digital marketing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer SEO optimisation, digital marketing strategies, and performance campaigns to help your website grow traffic and conversions."
      }
    },

    {
      "@type": "Question",
      "name": "Can you create an e-commerce website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we build secure and scalable e-commerce websites with product catalogues, payment integrations, and performance optimisation."
      }
    }

  ]
}
  ]
};

export default function WebDevelopmentandMarketing() {
  return (

     <>
      {/* ✅ CRITICAL: Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webdevelopmentmarketing),
        }}
      />
    <main className="bg-dts-black text-white">
       
      <WebDevelopmentHero />
      <WebDevelopmentSolves />
      <WebDevelopmentHowItWorks />
      <WebDevelopmentDeliverables />
      <WebDevelopmentWhoItsFor />
      <WebDevelopmentWhyDTS />
      <WebDevelopmentRelatedServices />
      <WebDevelopmentFAQs /> 
      <WebDevelopmentCTA/>   
      
    </main>
     </>
  );
}
