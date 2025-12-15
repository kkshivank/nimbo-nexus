

// "use client"

// import { motion } from "framer-motion"
// import { useRef } from "react"

// export type ServiceCardProps = {
//   title: string
//   description: string
//   imgUrl: string
//   imgAlt: string
//   index?: number
// }

// export default function ServiceCard({ title, description, imgUrl, imgAlt, index = 0 }: ServiceCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="group relative flex-none w-72 sm:w-80  rounded-xl border bg-white  shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4"
//     >
//       <div className="aspect-[16/9] overflow-hidden rounded-md">
//         <img
//           src={imgUrl || "/placeholder.svg"}
//           alt={imgAlt}
//           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>
//       <h4 className="mt-3 text-base font-semibold text-gray-800">{title}</h4>
//       <p className="mt-1 text-sm text-gray-600">{description}</p>
//     </motion.div>
//   )
// }


"use client"

import { motion } from "framer-motion"

export type ServiceCardProps = {
  title: string
  description: string
  imgUrl: string
  imgAlt: string
  index?: number
}

export default function ServiceCard({
  title,
  description,
  imgUrl,
  imgAlt,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex-none w-80 sm:w-96 snap-start rounded-2xl border border-gray-200/80 bg-white shadow-md hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-50/0 group-hover:from-blue-50/40 group-hover:via-cyan-50/20 group-hover:to-blue-50/40 transition-all duration-500 pointer-events-none" />
      
      <div className="relative p-5">
        {/* Image Container */}
        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200/50">
          <img
            src={imgUrl || "/placeholder.svg"}
            alt={imgAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="mt-5 space-y-2">
          <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Hover indicator */}
        <div className="mt-4 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* <span className="text-sm font-medium">Learn more</span> */}
          {/* <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg> */}
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}
