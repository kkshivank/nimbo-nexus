import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4">
        {/* Company */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-semibold text-lg">
            <span className="text-blue-600">Nimbo</span>Nexus
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Empowering businesses with innovative IT solutions across Salesforce, AWS, Microsoft Power Platform, React,
            and Web.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@nimbonexus.com</li>
            {/* <li>Phone: +91 79 7606 6296</li> */}
            <li>
              Address :
              Jagatpura,<br />
              Jaipur, Rajasthan 302017,<br />
              India
            </li>
          </ul>
          
        </div>

        {/* Social */}
        {/* <div>
          <h3 className="font-medium mb-3">Follow Us</h3>
          <div className="flex items-center gap-3">
            <Link aria-label="Facebook" href="https://facebook.com" className="p-2 rounded-md border hover:bg-muted">
              <Facebook className="size-5" />
            </Link>
            <Link aria-label="Twitter" href="https://twitter.com" className="p-2 rounded-md border hover:bg-muted">
              <Twitter className="size-5" />
            </Link>
            <Link aria-label="LinkedIn" href="https://linkedin.com" className="p-2 rounded-md border hover:bg-muted">
              <Linkedin className="size-5" />
            </Link>
          </div>
        </div> */}
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NimboNexus. All rights reserved.
      </div>
    </footer>
  )
}
