"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FloatingParticles } from "./floating-particles"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-gray-50 min-h-screen flex items-center px-12">
      {/* Radial glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="h-[700px] w-[700px] rounded-full bg-gradient-to-br from-blue-700/30 to-purple-800/20 blur-[200px]" />
      </div>

      {/* Animated subtle grid pattern */}
      <div className="absolute inset-0 z-20 opacity-[0.08]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_0.5px,transparent_0.5px),linear-gradient(to_bottom,#0ea5e9_0.5px,transparent_0.5px)] bg-[size:60px_60px] animate-slow-pan" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      <div className="relative z-30 mx-auto max-w-8xl px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.6, 0.3, 0.9] }}
          className="lg:text-left text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Elevating Visions with <br className="hidden md:block" /> Cutting-Edge Digital Craft
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl lg:ml-0 mx-auto font-light">
            <span className="text-sky-300 font-medium">Architecting Tomorrow's Solutions Today.</span>
            <br />
            Strategy • Development • Transformation
          </p>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold text-base py-3 px-8 rounded-full shadow-xl shadow-blue-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <Link href="/services">Discover Our Expertise</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-sky-400 text-sky-300 hover:text-sky-300 bg-transparent hover:bg-transparent font-semibold text-base py-3 px-8 rounded-full shadow-lg shadow-sky-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <Link href="/contact">Connect With Us</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.6, 0.3, 0.9], delay: 0.3 }}
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-md md:max-w-lg h-[400px] md:h-[500px] rounded-bl-[60px] rounded-tr-[60px] rounded-br-[20px] rounded-tl-[20px] overflow-hidden shadow-3xl shadow-blue-700/40 transform rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out group border border-sky-500/30 hidden lg:flex">
            <Image
  src="/Hero.jpg"
  alt="Professional team collaborating on innovative IT solutions in a modern, elegant office setting, bathed in soft ambient light."
  fill
  priority
  quality={90}
  sizes="(max-width: 1024px) 0px, 500px"
  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out filter brightness-90 contrast-110"
/>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-800/30 via-transparent to-purple-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 ring-4 ring-sky-500/10 ring-inset opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          aria-hidden="true"
          className="absolute -right-20 top-20 hidden md:block z-40"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-24 w-24 rounded-3xl bg-blue-500/30 border border-blue-400/50 backdrop-blur-md shadow-lg" />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute right-24 bottom-20 hidden md:block z-40"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="h-20 w-20 rounded-full bg-purple-500/30 border border-purple-400/50 backdrop-blur-md shadow-lg" />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute left-10 top-1/4 hidden lg:block z-40"
          animate={{
            x: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="h-12 w-12 rounded-xl bg-sky-400/20 border border-sky-300/30 backdrop-blur-sm shadow-md" />
        </motion.div>
      </div>
    </section>
  )
}
