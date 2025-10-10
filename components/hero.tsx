// "use client"

// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { FloatingParticles } from "./floating-particles"

// export function Hero() {
//   return (
//     <section className="relative isolate overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-500 opacity-10" />
//       <FloatingParticles />

//       <div className="mx-auto max-w-6xl px-4 py-20 md:py-32 relative">
//         <div className="max-w-3xl">
//           <h1 className="text-balance text-4xl md:text-5xl font-semibold tracking-tight">
//             Empowering Businesses with Innovative IT Solutions
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Coding Dreams into Reality
//             <br />
//             Development • Training • Innovation
//           </p>
//           <div className="mt-6 flex items-center gap-3">
//             <Button asChild className="bg-blue-600 hover:bg-blue-700">
//               <Link href="/services">Explore Services</Link>
//             </Button>
//             <Button asChild variant="outline">
//               <Link href="/contact">Talk to Us</Link>
//             </Button>
//           </div>
//         </div>

//         {/* Decorative parallax-ish shapes */}
//         <div aria-hidden="true" className="absolute -right-10 top-10 hidden md:block">
//           <div className="h-24 w-24 rounded-xl bg-blue-600/10" />
//         </div>
//         <div aria-hidden="true" className="absolute right-10 bottom-10 hidden md:block">
//           <div className="h-16 w-16 rounded-full bg-cyan-500/10" />
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FloatingParticles } from "./floating-particles"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 text-gray-900">
      {/* Radial glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-sky-200/60 to-blue-300/30 blur-[200px]" />
      </div>

      {/* Animated gradient grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:80px_80px] animate-slow-pan" />
      </div>

      {/* Floating light waves */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-20 left-0 w-full h-[300px] bg-gradient-to-t from-sky-200/50 via-transparent to-transparent blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <FloatingParticles />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-sky-600 to-black bg-clip-text text-transparent">
            Empowering Businesses with <br className="hidden md:block" /> Innovative IT Solutions
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="text-blue-600 font-medium">Coding Dreams into Reality</span>
            <br />
            Development • Training • Innovation
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-400/30 transition-all duration-200"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          aria-hidden="true"
          className="absolute -right-16 top-10 hidden md:block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-24 w-24 rounded-xl bg-blue-200/40 border border-blue-300/40 backdrop-blur-sm" />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute right-16 bottom-16 hidden md:block"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-20 w-20 rounded-full bg-sky-300/40 border border-sky-400/40 backdrop-blur-sm" />
        </motion.div>
      </div>
    </section>
  )
}
