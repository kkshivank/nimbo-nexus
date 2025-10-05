

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Cog, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const items = [
  {
    icon: <Cog className="size-6 text-blue-600" />,
    title: "Tailored Solutions",
    desc: "We craft strategies that fit your unique goals, timelines, and technology stack—never one-size-fits-all."
  },
  {
    icon: <BadgeCheck className="size-6 text-blue-600" />,
    title: "Proven Expertise",
    desc: "Our certified experts bring deep knowledge in Salesforce, AWS, Power Platform, and modern web to solve complex challenges."
  },
  {
    icon: <Users className="size-6 text-blue-600" />,
    title: "Client-Centric Approach",
    desc: "We prioritize transparency and measurable outcomes—working with you, not just for you, ensuring long-term success."
  },
]

export function WhyChooseUs({ extended = false }: { extended?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Why Choose <span className="text-blue-600">Rextro <span className="text-blue-600">IT</span></span></h2>
      
      {extended && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-center">
          Business Optimization, Stakeholder Engagement, and Digital Transformation are at the heart of our delivery.
        </p>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it, i) => (
          <Card
            key={it.title}
            className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-700 
              ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Background image */}
            {/* <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition">
              <Image src={it.img} alt={it.title} fill className="object-cover" />
            </div> */}

            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                {it.icon}
                {it.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 text-sm text-muted-foreground">
              {it.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
