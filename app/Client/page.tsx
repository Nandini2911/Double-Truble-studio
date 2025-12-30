import type { Metadata } from "next";
import ClientsPage from "./ClientsPage.client";

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
        url: "https://dtsworld.in/og/clients-og.jpg",
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
    images: ["https://dtsworld.in/og/clients-og.jpg"],
  },
};

export default function Page() {
  return <ClientsPage />;
}
