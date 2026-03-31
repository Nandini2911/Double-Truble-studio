import CoreValuesSection from "@/components/Team/CoreValuesSection";
import TeamBehindTheScenes from "@/components/Team/TeamBehindTheScenes";
import TeamCTA from "@/components/Team/TeamCTA";
import TeamHero from "@/components/Team/TeamHero"; 
import TeamMembers from "@/components/Team/TeamMembers";
import TeamMembersAll from "@/components/Team/TeamMembersAll";
import TeamPhilosophy from "@/components/Team/TeamPhilosophy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Double Trouble Studio",
  description:
    "Meet the people behind Double Trouble Studio — strategists, creators, and execution leaders driving clarity, trust, and impact for brands.",

  keywords: [
    "Double Trouble Studio team",
    "branding agency team",
    "PR agency leadership",
    "digital marketing experts",
    "event marketing professionals",
    "creative agency team India",
  ],

  alternates: {
    canonical: "https://dtsworld.in/team",
  },

  openGraph: {
    title: "Meet the Team | Double Trouble Studio",
    description:
      "The minds behind strategy-led branding, PR, digital, and experiential execution.",
    url: "https://dtsworld.in/team",
    siteName: "Double Trouble Studio",
    images: [
      {
        url: "/og-team-page.webp",
        width: 1200,
        height: 630,
        alt: "Team at Double Trouble Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Team | Double Trouble Studio",
    description:
      "Built by experience. Driven by clarity. Executed with precision.",
    images: ["/twitter-team-page.webp"],
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      "name": "Double Trouble Studio",
      "url": "https://www.dtsworld.in/",
      "logo": "https://www.dtsworld.in/logo.png",
      "sameAs": [
        "https://www.instagram.com/doubletroublestudio",
        "https://www.linkedin.com/company/double-trouble-studio"
      ]
    },

    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/team/#webpage",
      "url": "https://www.dtsworld.in/team",
      "name": "Our Team | Double Trouble Studio",
      "description": "Meet the leadership and creative team behind Double Trouble Studio — experts in branding, PR, digital marketing, and events.",
      "isPartOf": {
        "@id": "https://www.dtsworld.in/#website"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/team/#breadcrumb",
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
          "name": "Team",
          "item": "https://www.dtsworld.in/team"
        }
      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/team/#leadership",
      "name": "Leadership Team",
      "itemListElement": [

        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Person",
            "name": "Sanjeev Seth",
            "jobTitle": "Chairman",
            "worksFor": {
              "@id": "https://www.dtsworld.in/#organization"
            },
            "description": "Strategic leader with over 35 years of experience guiding long-term vision and growth."
          }
        },

        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Person",
            "name": "Arryan Arora",
            "jobTitle": "Director, Sales & Marketing",
            "worksFor": {
              "@id": "https://www.dtsworld.in/#organization"
            },
            "description": "Leads branding, visibility, partnerships, and growth strategies."
          }
        },

        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Person",
            "name": "Hitesh Kukreja",
            "jobTitle": "Director, Finance",
            "worksFor": {
              "@id": "https://www.dtsworld.in/#organization"
            },
            "description": "Oversees financial strategy, forecasting, and operational discipline."
          }
        }

      ]
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/team/#team-members",
      "name": "Team Members",
      "itemListElement": [

        {
          "@type": "ListItem",
          "position": 1,
          "item": { "@type": "Person", "name": "Ravish Verma", "jobTitle": "SEO Specialist" }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": { "@type": "Person", "name": "Nandini Yadav", "jobTitle": "Web Developer" }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": { "@type": "Person", "name": "Naman Gupta", "jobTitle": "Video Editor" }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": { "@type": "Person", "name": "Simran Salagre", "jobTitle": "Head of PR & Communication" }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": { "@type": "Person", "name": "Abhishek Singh", "jobTitle": "AI Visual Content Creator" }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": { "@type": "Person", "name": "Raj Umbarkar", "jobTitle": "Video Editor" }
        }

      ]
    }

  ]
};

export default function TeamPage() {
  return (

    <>
      {/* ✅ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamSchema),
        }}
      />

    <main className="bg-dts-black text-white">
      {/* Hero Section for the Team Page */}
      <TeamHero />
      <TeamPhilosophy/>
      <TeamMembers/>
      <TeamMembersAll/>
       <TeamBehindTheScenes/>
      <CoreValuesSection/>
      <TeamCTA/>
  
      
      {/* You can add more sections below */}
      {/* For example: Team Members Showcase, Core Values, Team Behind the Scenes, etc. */}
    </main>
     </>
  );
}
