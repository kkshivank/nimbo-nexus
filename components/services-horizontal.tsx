// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const services = [
//   {
//     title: "Salesforce Services",
//     desc: "CRM setup, automation, Marketing & Service Cloud, integrations.",
//     img: "/salesforce-crm-consulting.png",
//   },
//   {
//     title: "AWS Services",
//     desc: "Cloud setup, migration, security, cost optimization, DevOps.",
//     img: "/aws-cloud-architecture.png",
//   },
//   {
//     title: "Microsoft Power Platform",
//     desc: "Power BI, Power Apps, Power Automate, Dataverse solutions.",
//     img: "/power-platform-dashboards.png",
//   },
//   {
//     title: "React Development",
//     desc: "Web apps, dashboards, portals with modern frameworks.",
//     img: "/react-dashboard-ui.png",
//   },
//   {
//     title: "Web Dev & Design",
//     desc: "Modern, responsive websites with accessibility in mind.",
//     img: "/modern-corporate-website.png",
//   },
//   {
//     title: "Corporate Training",
//     desc: "Salesforce, AWS, Microsoft, and React upskilling programs.",
//     img: "/corporate-training-classroom.png",
//   },
// ];

// export function ServicesHorizontal() {
//   return (
//     <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
//       <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
//       <p className="mt-2 text-muted-foreground max-w-2xl">
//         Explore our core capabilities. Scroll horizontally to view more.
//       </p>

//       {/* Animated container */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.6 }}
//         className="mt-6 overflow-x-auto overflow-y-hidden pb-4 no-scrollbar"
//       >
//         <div className="grid auto-cols-[85%] sm:auto-cols-[360px] grid-flow-col gap-6 snap-x snap-mandatory">
//           {services.map((s) => (
//             <motion.div
//               key={s.title}
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="snap-start"
//             >
//               <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
//                 <CardHeader>
//                   <CardTitle className="text-base">{s.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md">
//                     <Image
//                       src={s.img || "/placeholder.svg"}
//                       alt={`${s.title} image`}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <p className="text-sm text-muted-foreground">{s.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Salesforce Services",
    desc: "CRM setup, automation, Marketing & Service Cloud, integrations.",
    img: "/salesforce-crm-consulting.png",
  },
  {
    title: "AWS Services",
    desc: "Cloud setup, migration, security, cost optimization, DevOps.",
    img: "/aws-cloud-architecture.png",
  },
  {
    title: "Microsoft Power Platform",
    desc: "Power BI, Power Apps, Power Automate, Dataverse solutions.",
    img: "/power-platform-dashboards.png",
  },
  {
    title: "React Development",
    desc: "Web apps, dashboards, portals with modern frameworks.",
    img: "/react-dashboard-ui.png",
  },
  {
    title: "Web Dev & Design",
    desc: "Modern, responsive websites with accessibility in mind.",
    img: "/modern-corporate-website.png",
  },
  {
    title: "Corporate Training",
    desc: "Salesforce, AWS, Microsoft, and React upskilling programs.",
    img: "/corporate-training-classroom.png",
  },
]

export function ServicesHorizontal() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Our Services</h2>
      <p className="mt-2 text-muted-foreground max-w-full text-center">
        Explore our core capabilities. Scroll horizontally to view more.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-6 overflow-x-hidden overflow-y-hidden pb-4 no-scrollbar"
      >
        <div className="grid auto-cols-[85%] sm:auto-cols-[360px] grid-flow-col gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-base">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md">
                    <Image
                      src={s.img || "/placeholder.svg"}
                      alt={`${s.title} image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
