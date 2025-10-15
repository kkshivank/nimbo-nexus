// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { FloatingParticles } from "./floating-particles"
// import Image from "next/image" // Import Image component

// export function Hero() {
//   return (
//     <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 text-gray-900">
//       {/* Radial glow behind content */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-sky-200/60 to-blue-300/30 blur-[200px]" />
//       </div>

//       {/* Animated gradient grid pattern */}
//       <div className="absolute inset-0 opacity-[0.06]">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:80px_80px] animate-slow-pan" />
//       </div>

//       {/* Floating light waves */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute -bottom-20 left-0 w-full h-[300px] bg-gradient-to-t from-sky-200/50 via-transparent to-transparent blur-3xl"
//           animate={{
//             y: [0, -30, 0],
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <FloatingParticles />

//       <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-40 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="max-w-3xl mx-auto"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-sky-600 to-black bg-clip-text text-transparent">
//             Empowering Businesses with <br className="hidden md:block" /> Innovative IT Solutions
//           </h1>

//           <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
//             <span className="text-blue-600 font-medium">Coding Dreams into Reality</span>
//             <br />
//             Development • Training • Innovation
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <Button
//               asChild
//               size="lg"
//               className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-400/30 transition-all duration-200"
//             >
//               <Link href="/services">Explore Services</Link>
//             </Button>
//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200"
//             >
//               <Link href="/contact">Talk to Us</Link>
//             </Button>
//           </div>
//         </motion.div>

//         {/* Floating shapes */}
//         <motion.div
//           aria-hidden="true"
//           className="absolute -right-16 top-10 hidden md:block"
//           animate={{
//             y: [0, -15, 0],
//             rotate: [0, 10, 0],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="h-24 w-24 rounded-xl bg-blue-200/40 border border-blue-300/40 backdrop-blur-sm" />
//         </motion.div>

//         <motion.div
//           aria-hidden="true"
//           className="absolute right-16 bottom-16 hidden md:block"
//           animate={{
//             y: [0, 15, 0],
//             rotate: [0, -10, 0],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="h-20 w-20 rounded-full bg-sky-300/40 border border-sky-400/40 backdrop-blur-sm" />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { FloatingParticles } from "./floating-particles"
// import Image from "next/image" // Import Image component

// export function Hero() {
//   return (
//     <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 text-gray-900">
//       {/* Radial glow behind content */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-sky-200/60 to-blue-300/30 blur-[200px]" />
//       </div>

//       {/* Animated gradient grid pattern */}
//       <div className="absolute inset-0 opacity-[0.06]">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:80px_80px] animate-slow-pan" />
//       </div>

//       {/* Floating light waves */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute -bottom-20 left-0 w-full h-[300px] bg-gradient-to-t from-sky-200/50 via-transparent to-transparent blur-3xl"
//           animate={{
//             y: [0, -30, 0],
//             opacity: [0.7, 1, 0.7],
//           }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <FloatingParticles />

//       <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-40 grid lg:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="lg:text-left text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-sky-600 to-black bg-clip-text text-transparent">
//             Empowering Businesses with <br className="hidden md:block" /> Innovative IT Solutions
//           </h1>

//           <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg lg:ml-0 mx-auto">
//             <span className="text-blue-600 font-medium">Coding Dreams into Reality</span>
//             <br />
//             Development • Training • Innovation
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
//             <Button
//               asChild
//               size="lg"
//               className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-400/30 transition-all duration-200"
//             >
//               <Link href="/services">Explore Services</Link>
//             </Button>
//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200"
//             >
//               <Link href="/contact">Talk to Us</Link>
//             </Button>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//           className="relative flex justify-center lg:justify-end"
//         >
//           <div className="relative w-full max-w-md lg:max-w-none h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-300/50 transform rotate-3 hover:rotate-0 transition-all duration-300 ease-in-out group">
//             <Image
//               src="/Hero.jpg" // Replace with the actual path to your image
//               alt="Team collaborating in an office"
//               layout="fill"
//               objectFit="cover"
//               className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
//             />
//             <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </div>
//         </motion.div>

//         {/* Floating shapes */}
//         <motion.div
//           aria-hidden="true"
//           className="absolute -right-16 top-10 hidden md:block"
//           animate={{
//             y: [0, -15, 0],
//             rotate: [0, 10, 0],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="h-24 w-24 rounded-xl bg-blue-200/40 border border-blue-300/40 backdrop-blur-sm" />
//         </motion.div>

//         <motion.div
//           aria-hidden="true"
//           className="absolute right-16 bottom-16 hidden md:block"
//           animate={{
//             y: [0, 15, 0],
//             rotate: [0, -10, 0],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="h-20 w-20 rounded-full bg-sky-300/40 border border-sky-400/40 backdrop-blur-sm" />
//         </motion.div>
//       </div>
//     </section>
//   )
// }




// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { FloatingParticles } from "./floating-particles"
// import Image from "next/image"

// export function Hero() {
// return (
// <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-gray-50">
//  {/* Radial glow behind content - more subtle and refined */}
//   <div className="absolute inset-0 flex items-center justify-center z-10">
//     <div className="h-[900px] w-[900px] rounded-full bg-gradient-to-br from-blue-700/30 to-purple-800/20 blur-[250px]" />
//   </div>

//   {/* Animated subtle grid pattern - refined for elegance */}
//   <div className="absolute inset-0 z-20 opacity-[0.08]">
//     <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_0.5px,transparent_0.5px),linear-gradient(to_bottom,#0ea5e9_0.5px,transparent_0.5px)] bg-[size:60px_60px] animate-slow-pan" />
//   </div>

//   {/* Floating particles for a dynamic touch */}
//   <FloatingParticles />

//   <div className="relative z-30 mx-auto max-w-8xl px-6 py-32 md:py-52 grid lg:grid-cols-2 gap-16 items-center">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2, ease: [0.2, 0.6, 0.3, 0.9] }}
//       className="lg:text-left text-center"
//     >
//       <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
//         Elevating Visions with <br className="hidden md:block" /> Cutting-Edge Digital Craft
//       </h1>

//       <p className="mt-7 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl lg:ml-0 mx-auto font-light">
//         <span className="text-sky-300 font-medium">Architecting Tomorrow's Solutions Today.</span>
//         <br />
//         Strategy • Development • Transformation
//       </p>

//       <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-5">
//         <Button
//           asChild
//           size="xl"
//           className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-xl shadow-blue-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//         >
//           <Link href="/services">Discover Our Expertise</Link>
//         </Button>
//         <Button
//           asChild
//           size="xl"
//           variant="outline"
//           className="border-2 border-sky-400 text-sky-300 bg-transparent hover:bg-sky-900/20 font-semibold text-lg py-3 px-8 rounded-full shadow-lg shadow-sky-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//         >
//           <Link href="/contact">Connect With Us</Link>
//         </Button>
//       </div>
//     </motion.div>

//     <motion.div
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2, ease: [0.2, 0.6, 0.3, 0.9], delay: 0.3 }}
//       className="relative flex justify-center lg:justify-end mt-16 lg:mt-0"
//     >
//       <div className="relative w-full max-w-xl lg:max-w-none h-[450px] md:h-[600px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[20px] rounded-tl-[20px] overflow-hidden shadow-3xl shadow-blue-700/40 transform rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out group border border-sky-500/30">
//         <Image
//           src="/Hero.jpg" // Ensure this image is high-quality and professional
//           alt="Professional team collaborating on innovative IT solutions in a modern, elegant office setting, bathed in soft ambient light."
//           layout="fill"
//           objectFit="cover"
//           quality={90}
//           className="group-hover:scale-105 transition-transform duration-500 ease-in-out filter brightness-90 contrast-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-tl from-blue-800/30 via-transparent to-purple-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//         {/* Subtle overlay for glowing effect */}
//         <div className="absolute inset-0 ring-4 ring-sky-500/10 ring-inset opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       </div>
//     </motion.div>

//     {/* Floating geometric shapes - more intricate and dynamic */}
//     <motion.div
//       aria-hidden="true"
//       className="absolute -right-24 top-20 hidden md:block z-40"
//       animate={{
//         y: [0, -25, 0],
//         rotate: [0, 15, 0],
//         scale: [1, 1.05, 1],
//       }}
//       transition={{
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       <div className="h-32 w-32 rounded-3xl bg-blue-500/30 border border-blue-400/50 backdrop-blur-md shadow-lg" />
//     </motion.div>

//     <motion.div
//       aria-hidden="true"
//       className="absolute right-32 bottom-24 hidden md:block z-40"
//       animate={{
//         y: [0, 25, 0],
//         rotate: [0, -15, 0],
//         scale: [1, 0.95, 1],
//       }}
//       transition={{
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 0.5,
//       }}
//     >
//       <div className="h-28 w-28 rounded-full bg-purple-500/30 border border-purple-400/50 backdrop-blur-md shadow-lg" />
//     </motion.div>

//     <motion.div
//       aria-hidden="true"
//       className="absolute left-10 top-1/4 hidden lg:block z-40"
//       animate={{
//         x: [0, -20, 0],
//         rotate: [0, 5, 0],
//         opacity: [0.8, 1, 0.8],
//       }}
//       transition={{
//         duration: 9,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 1,
//       }}
//     >
//       <div className="h-16 w-16 rounded-xl bg-sky-400/20 border border-sky-300/30 backdrop-blur-sm shadow-md" />
//     </motion.div>
//   </div>
// </section>
// )}



"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FloatingParticles } from "./floating-particles"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-gray-50 min-h-screen flex items-center">
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
          initial={{ opacity: 0, y: 30 }}
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
          <div className="relative w-full max-w-md md:max-w-lg h-[400px] md:h-[500px] rounded-bl-[60px] rounded-tr-[60px] rounded-br-[20px] rounded-tl-[20px] overflow-hidden shadow-3xl shadow-blue-700/40 transform rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out group border border-sky-500/30">
            <Image
              src="/Hero.jpg"
              alt="Professional team collaborating on innovative IT solutions in a modern, elegant office setting, bathed in soft ambient light."
              layout="fill"
              objectFit="cover"
              quality={90}
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out filter brightness-90 contrast-110"
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
