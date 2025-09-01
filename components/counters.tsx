"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

function useInView(ref: React.RefObject<Element>, threshold = 0.2) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])
  return inView
}

function AnimatedNumber({ to, duration = 1200 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0)
  const start = useRef<number | null>(null)

  useEffect(() => {
    let raf: number | null = null
    function step(t: number) {
      if (start.current === null) start.current = t
      const p = Math.min(1, (t - start.current) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * to))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return <span>{val.toLocaleString()}</span>
}

export function Counters() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref)

  const stats = [
    { label: "Projects Delivered", value: 120 },
    { label: "Certified Experts", value: 25 },
    { label: "Client Satisfaction", value: 98 },
    { label: "Training Sessions", value: 300 },
  ]

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="p-4 rounded-lg border bg-card text-card-foreground text-center">
            <div className="text-3xl font-semibold">
              {inView ? <AnimatedNumber to={s.value} /> : 0}
              {s.label === "Client Satisfaction" ? "%" : "+"}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
