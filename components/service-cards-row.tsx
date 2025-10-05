

// "use client"

// import ServiceCard, { type ServiceCardProps } from "./service-card"

// type Props = {
//   cards: Array<Omit<ServiceCardProps, "index">>
// }

// export default function ServiceCardsRow({ cards }: Props) {
//   return (
//     <div
//       className="
//         mt-4 flex flex-nowrap gap-4 overflow-x-auto bg-white scroll-smooth pb-2 -mb-2 pr-2
//         scrollbar-hide h-[320px]
//       "
//     >
//       {cards.map((c, i) => (
//         <ServiceCard key={c.title} {...c} index={i} />
//       ))}
//     </div>
//   )
// }

"use client"

import ServiceCard, { type ServiceCardProps } from "./service-card"

type Props = {
  cards: Array<Omit<ServiceCardProps, "index">>
}

export default function ServiceCardsRow({ cards }: Props) {
  return (
    <div
      className="
        mt-6 flex flex-nowrap gap-6 scroll-smooth 
        snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 
        scrollbar-track-transparent hover:scrollbar-thumb-gray-400
        [-webkit-overflow-scrolling:touch] overflow-x-auto  overflow-y-hidden
      "
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#d1d5db transparent'
      }}
    >
      {cards.map((c, i) => (
        <ServiceCard key={c.title} {...c} index={i} />
      ))}
    </div>
  )
}
