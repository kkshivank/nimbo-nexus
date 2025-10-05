"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FloatingParticles } from "@/components/floating-particles"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800)) // simulate API
    setLoading(false)
    setSent(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-500 opacity-10" />
        <FloatingParticles />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let’s talk about your project, explore possibilities, and craft a solution that fits your goals.
          </p>
        </motion.div>
      </section>

      {/* Contact form + Info */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border bg-white/80 backdrop-blur-lg shadow-xl shadow-blue-100 p-6 md:p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Send us a message</h2>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="relative">
                <Label htmlFor="name" className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="relative">
                  <Label htmlFor="email" className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
                <div className="relative">
                  <Label htmlFor="phone" className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 555 123 4567"
                    className="h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
              </div>
              <div className="relative">
                <Label htmlFor="message" className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your needs..."
                  className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-200"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {sent && (
                <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                  ✅ Thanks! We’ll get back to you shortly.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border bg-white/80 backdrop-blur-lg shadow-xl shadow-blue-100 p-6">
              <h3 className="font-medium text-lg">Our Office</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                123 Innovation Way, Tech City
                <br />
                contact@read-itsoft.com
                <br />
                +1 (555) 123-4567
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border shadow-md">
              <iframe
                title="Read-itsoft Office Map"
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Times%20Square%2C%20New%20York&output=embed"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              Connect with us:{" "}
              <a className="underline hover:text-blue-600" href="https://linkedin.com">
                LinkedIn
              </a>{" "}
              •{" "}
              <a className="underline hover:text-blue-600" href="https://twitter.com">
                Twitter
              </a>{" "}
              •{" "}
              <a className="underline hover:text-blue-600" href="https://facebook.com">
                Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
