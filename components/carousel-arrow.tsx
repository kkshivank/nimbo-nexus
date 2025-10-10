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
