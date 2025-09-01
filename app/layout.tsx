import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Read-itsoft | Innovative IT Solutions",
  description: "Salesforce, AWS, Microsoft Power Platform, React, Web Development, and Training.",
  generator: "v0.app",
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
