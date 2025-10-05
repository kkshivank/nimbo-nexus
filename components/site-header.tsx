"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          <span className="text-blue-600 font-bold">Rextro</span> IT
          <span className="sr-only">Read-itsoft home</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                pathname === item.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium py-1 hover:text-blue-600",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-1">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
