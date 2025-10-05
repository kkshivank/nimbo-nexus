"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FloatingParticles } from "./floating-particles"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-500 opacity-10" />
      <FloatingParticles />

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl md:text-5xl font-semibold tracking-tight">
            Empowering Businesses with Innovative IT Solutions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Coding Dreams into Reality
            <br />
            Development • Training • Innovation
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>

        {/* Decorative parallax-ish shapes */}
        <div aria-hidden="true" className="absolute -right-10 top-10 hidden md:block">
          <div className="h-24 w-24 rounded-xl bg-blue-600/10" />
        </div>
        <div aria-hidden="true" className="absolute right-10 bottom-10 hidden md:block">
          <div className="h-16 w-16 rounded-full bg-cyan-500/10" />
        </div>
      </div>
    </section>
  )
}
