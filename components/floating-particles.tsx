"use client"

import { useEffect, useRef } from "react"

/**
 * Lightweight canvas particles for subtle, corporate-friendly background motion.
 * Colors: using currentColor; set parent text-[color] to control tint.
 */
export function FloatingParticles({ density = 24 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const particles: { x: number; y: number; r: number; vx: number; vy: number; a: number }[] = []

    function resize() {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      particles.length = 0
      const { width, height } = canvas.getBoundingClientRect()
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 1 + Math.random() * 2,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -0.15 - Math.random() * 0.2,
          a: 0.1 + Math.random() * 0.3,
        })
      }
    }

    function step() {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      ctx.fillStyle = getComputedStyle(canvas).color

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.y < -5) {
          p.y = rect.height + 5
          p.x = Math.random() * rect.width
        }
        if (p.x < -5) p.x = rect.width + 5
        if (p.x > rect.width + 5) p.x = -5

        ctx.globalAlpha = p.a
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(step)
    }

    const ro = new ResizeObserver(() => {
      resize()
      init()
    })
    ro.observe(canvas)
    resize()
    init()
    step()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      ro.disconnect()
    }
  }, [density])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={ref} className="w-full h-full text-cyan-400/30" />
    </div>
  )
}
