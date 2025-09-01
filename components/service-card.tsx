// "use client"

// import { useEffect, useRef, useState } from "react"

// export type ServiceCardProps = {
//   title: string
//   description: string
//   imgUrl: string
//   imgAlt: string
//   index?: number
// }

// export default function ServiceCard({ title, description, imgUrl, imgAlt, index = 0 }: ServiceCardProps) {
//   const ref = useRef<HTMLDivElement>(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             setVisible(true)
//             io.disconnect()
//           }
//         })
//       },
//       { threshold: 0.2 },
//     )
//     io.observe(el)
//     return () => io.disconnect()
//   }, [])

//   return (
//     <div
//       ref={ref}
//       className={[
//         "group relative flex-none w-72 sm:w-80 snap-start rounded-xl border bg-card p-4 shadow-sm",
//         "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg will-change-transform",
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
//       ].join(" ")}
//       style={{ transitionDelay: `${Math.min(index * 60, 240)}ms` }}
//     >
//       <div className="aspect-[16/9] overflow-hidden rounded-md bg-muted">
//         <img
//           src={imgUrl || "/placeholder.svg"}
//           alt={imgAlt}
//           className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//           crossOrigin="anonymous"
//         />
//       </div>
//       <h4 className="mt-3 text-sm font-medium">{title}</h4>
//       <p className="mt-1 text-xs text-muted-foreground">{description}</p>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export type ServiceCardProps = {
  title: string
  description: string
  imgUrl: string
  imgAlt: string
  index?: number
}

export default function ServiceCard({ title, description, imgUrl, imgAlt, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex-none w-72 sm:w-80  rounded-xl border bg-white  shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4"
    >
      <div className="aspect-[16/9] overflow-hidden rounded-md">
        <img
          src={imgUrl || "/placeholder.svg"}
          alt={imgAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h4 className="mt-3 text-base font-semibold text-gray-800">{title}</h4>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </motion.div>
  )
}
