
"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ServiceCard, { type ServiceCardProps } from "./service-card"
import { CarouselArrow } from "./carousel-arrow"

type Props = {
  cards: Array<Omit<ServiceCardProps, "index">>
}

export default function ServiceCardsRow({ cards }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }

    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative mt-8">
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Track */}
        <div className="flex gap-6 px-2">
          {cards.map((card, index) => (
            <div key={card.title} className="flex-[0_0_300px]">
              <ServiceCard {...card} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <CarouselArrow
        direction="prev"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="absolute top-1/2 -left-4 -translate-y-1/2 z-20"
      />
      <CarouselArrow
        direction="next"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute top-1/2 -right-4 -translate-y-1/2 z-20"
      />
    </div>
  )
}

