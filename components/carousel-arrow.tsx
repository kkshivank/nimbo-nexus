// // components/carousel-arrow.tsx
// import React from 'react'

// type ArrowProps = React.DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// > & {
//   direction: "prev" | "next"
// }

// export const CarouselArrow = React.forwardRef<HTMLButtonElement, ArrowProps>(
//   (props, ref) => {
//     const { direction, onClick, disabled, ...rest } = props

//     return (
//       <button
//         ref={ref}
//         onClick={onClick}
//         disabled={disabled}
//         className={`
//           absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 text-gray-700 shadow-md backdrop-blur-sm
//           transition-all duration-300 hover:bg-white/100 hover:scale-110 focus:outline-none
//           disabled:opacity-0 disabled:cursor-default disabled:scale-100
//           ${direction === "prev" ? "-left-4" : "-right-4"}
//         `}
//         {...rest}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           className="h-5 w-5"
//         >
//           {direction === "prev" ? (
//             <path
//               fillRule="evenodd"
//               d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
//               clipRule="evenodd"
//             />
//           ) : (
//             <path
//               fillRule="evenodd"
//               d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//               clipRule="evenodd"
//             />
//           )}
//         </svg>
//       </button>
//     )
//   }
// )

// CarouselArrow.displayName = "CarouselArrow"

"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

type Props = {
  direction: "prev" | "next"
  onClick: () => void
  disabled?: boolean
  className?: string
}

export const CarouselArrow = ({
  direction,
  onClick,
  disabled,
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`z-20 bg-white/90 border border-gray-200 shadow-md hover:shadow-lg p-2 rounded-full 
        text-gray-700 hover:text-blue-600 transition-all duration-200
        disabled:opacity-40 disabled:cursor-not-allowed
        ${className}`}
    >
      {direction === "prev" ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </button>
  )
}
