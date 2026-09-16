import type React from "react";
import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Suspense } from "react";

import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nimbonexus.com"),

  title: {
    default: "NimboNexus | Technology Community for Learners & Builders",
    template: "%s | NimboNexus",
  },

  description:
    "NimboNexus is a technology community where learners, developers and builders explore Salesforce, DevOps, React, AI and Cloud through learning, projects and collaboration.",

  keywords: [
    "NimboNexus",
    "Technology Community",
    "Salesforce Community",
    "Salesforce Learning",
    "DevOps",
    "React Development",
    "AI/ML",
    "Cloud Computing",
    "Tech Learning Community",
    "Web Development",
  ],

  applicationName: "NimboNexus",

  authors: [
    {
      name: "NimboNexus",
    },
  ],

  creator: "NimboNexus",

  publisher: "NimboNexus",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NimboNexus | Technology Community for Learners & Builders",

    description:
      "A technology community where learners, developers and builders explore Salesforce, DevOps, React, AI and Cloud through learning, projects and collaboration.",

    url: "https://nimbonexus.com",

    siteName: "NimboNexus",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/nimbo-logo.png",
        width: 1200,
        height: 630,
        alt: "NimboNexus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NimboNexus | Technology Community for Learners & Builders",

    description:
      "A technology community where learners, developers and builders explore Salesforce, DevOps, React, AI and Cloud through learning, projects and collaboration.",

    images: ["/nimbo-logo.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/nimbo-logo.png",
    shortcut: "/nimbo-logo.png",
    apple: "/nimbo-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />

          {children}

          <SiteFooter />
        </Suspense>

        <Analytics />

        <GoogleAnalytics gaId="G-B01D77NWQH" />
      </body>
    </html>
  );
}