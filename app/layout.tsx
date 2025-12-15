import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "NimboNexus",
  description:
    "Salesforce, AWS, Microsoft Power Platform, React, Web Development, and Training.",
  generator: "v0.app",
  icons: {
    icon: "/nimbo-logo.png",
    shortcut: "/nimbo-logo.png",
    apple: "/nimbo-logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
