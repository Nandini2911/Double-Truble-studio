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
        url: "https://dtsworld.in/og/contact-og.jpg",
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
    images: ["https://dtsworld.in/og/contact-og.jpg"],
  },
};

export default function Page() {
  return <ContactPage />;
}
