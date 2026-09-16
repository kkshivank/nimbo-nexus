"use client"

import Image from "next/image"

const services = [
  {
    title: "Learning & Workshops",
    desc: "Community sessions and hands-on workshops on Salesforce, AWS, Microsoft and React.",
    img: "/corporate-training-classroom.png",
  },
  {
    title: "Salesforce",
    desc: "CRM concepts, automation, Marketing & Service Cloud, and integrations — learned through real projects.",
    img: "/salesforce-crm-consulting.png",
  },
  {
    title: "Microsoft Power Platform",
    desc: "Power BI, Power Apps, Power Automate and Dataverse — explored through hands-on builds.",
    img: "/power-platform-dashboards.png",
  },
  {
    title: "AWS & Cloud",
    desc: "Cloud fundamentals, migration, security and cost optimization — learned by doing.",
    img: "/aws-cloud-architecture.png",
  },
  
  {
    title: "React and Web Development",
    desc: "Web apps, dashboards and portals built with modern frameworks as community projects.",
    img: "/react-dashboard-ui.png",
  },
  {
  title: "AI, ML & Data Science",
  desc: "Exploring data, AI and ML together to build smarter, more useful projects.",
  img: "/ml-ds.png"
},
  
]

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        What We <span className="text-blue-600">Explore</span>
      </h2>
      <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
        The technology areas our community learns, builds and experiments with together.
      </p>

      {/* Service Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col"
          >
            <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
