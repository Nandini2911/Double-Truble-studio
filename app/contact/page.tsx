import type { Metadata } from "next";
import ContactPage from "./ContactPage.client";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dtsworld.in"),

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
    canonical: "https://www.dtsworld.in/contact",
  },

  openGraph: {
    title: "Contact Double Trouble Studio",
    description:
      "Start a conversation with our branding, PR, digital, and event experts.",
    url: "https://www.dtsworld.in/contact",
    siteName: "Double Trouble Studio",
    images: ["/og-contact-page.webp"],
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

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dtsworld.in/logo.png",
      },
      email: "hello@dtsworld.in",
      telephone: "+918000006021",
      sameAs: [
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
      ],
      description:
        "Double Trouble Studio is a strategy-first digital, PR, and creative agency specializing in brand growth.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol, Andheri East",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400059",
        addressCountry: "IN",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",
      url: "https://www.dtsworld.in/",
      name: "Double Trouble Studio",
      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },
    },

    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/contact/#webpage",
      url: "https://www.dtsworld.in/contact",
      name: "Contact Us - Double Trouble Studio",
      isPartOf: {
        "@id": "https://www.dtsworld.in/#website",
      },
      about: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      "datePublished": "2025-01-01",
      "dateModified": new Date().toISOString()
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.dtsworld.in/#localbusiness",
      name: "Double Trouble Studio",
      url: "https://www.dtsworld.in/",
      telephone: "+918000006021",
      email: "hello@dtsworld.in",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Unit 42, Apurva Industrial Estate, Makwana Rd, Gamdevi, Marol, Andheri East",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400059",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.1176",
        longitude: "72.8634",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+918000006021",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
      ],
    },

    {
      "@type": "ContactPage",
      "@id": "https://www.dtsworld.in/contact/#contactpage",
      url: "https://www.dtsworld.in/contact",
      name: "Contact Double Trouble Studio",
      mainEntity: {
        "@id": "https://www.dtsworld.in/#localbusiness",
      },
    },

    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.dtsworld.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://www.dtsworld.in/contact",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/contact/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I get started with DTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can start by filling out the contact form with your requirements. Our team will review it and guide you on the next steps."
          }
        },
        {
          "@type": "Question",
          "name": "How soon will I get a response?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically, you can expect a response within 24–48 working hours depending on the complexity of your request."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with clients worldwide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we work with clients globally across different industries and markets."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I provide when contacting you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Share your goals, requirements, timelines, and any relevant details to help us understand your needs clearly."
          }
        },
        {
          "@type": "Question",
          "name": "Is there an initial consultation fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial discussions are typically free to understand your requirements before defining the scope."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after I submit the form?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your enquiry is reviewed by our team, followed by a structured response outlining next steps, scope, and recommendations."
          }
        }
      ]
    },

    {
      "@type": "SpeakableSpecification",
      "@id": "https://www.dtsworld.in/contact/#speakable",
      "cssSelector": [
        "h1",
        ".faq-question"
      ]
    }

  ]
};

export default function Page() {
  return (
    <>
      {/* ✅ Inject Schema */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <ContactPage />
    </>
  );
}