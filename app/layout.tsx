import type React from "react";
import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://nimbonexus.com"),

  title: {
    default: "NimboNexus | Salesforce, AI & Digital Solutions",
    template: "%s | NimboNexus",
  },

  description:
    "NimboNexus delivers Salesforce consulting, AI solutions, cloud transformation, web development, Microsoft Power Platform and enterprise digital services.",

  keywords: [
    "NimboNexus",
    "Salesforce",
    "Salesforce Development",
    "Salesforce Consulting",
    "AI Solutions",
    "Cloud Services",
    "React Development",
    "Web Development",
    "Microsoft Power Platform",
    "Digital Transformation",
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
    title: "NimboNexus | Salesforce, AI & Digital Solutions",

    description:
      "Salesforce consulting, AI solutions, cloud transformation and enterprise digital services.",

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

    title: "NimboNexus | Salesforce, AI & Digital Solutions",

    description:
      "Salesforce consulting, AI solutions, cloud transformation and enterprise digital services.",

    images: ["/nimbo-logo.png"],
  },

  icons: {
    icon: "/nimbo-logo.png",
    shortcut: "/nimbo-logo.png",
    apple: "/nimbo-logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      </body>
    </html>
  );
}