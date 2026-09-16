

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Cog, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const items = [
  {
    icon: <Cog className="size-6 text-blue-600" />,
    title: "Hands-On Learning",
    desc: "We learn by building real things — practical projects over passive tutorials, across Salesforce, AWS, React and more."
  },
  {
    icon: <BadgeCheck className="size-6 text-blue-600" />,
    title: "Real Knowledge, Shared Openly",
    desc: "What we learn, we explain — through content, discussions and interview-prep series, not gatekept behind paywalls."
  },
  {
    icon: <Users className="size-6 text-blue-600" />,
    title: "Community, Not Just Consumers",
    desc: "We grow together — asking questions, sharing projects, and helping each other get better at technology."
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
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Why Join <span className="text-blue-600">Nimbo<span className="text-blue-600">Nexus</span></span></h2>
      
      {extended && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-center">
          Learning, collaboration, and real project work are at the heart of everything we do.
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
