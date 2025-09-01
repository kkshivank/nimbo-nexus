
//   "use client"

// import { motion } from "framer-motion"
// import { FloatingParticles } from "@/components/floating-particles"
// import ServiceCardsRow from "@/components/service-cards-row"

// function SectionCard({
//   title,
//   cards,
//   note,
// }: {
//   title: string
//   cards: {
//     title: string
//     description: string
//     imgUrl: string
//     imgAlt: string
//   }[]
//   note?: string
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.6 }}
//       className="rounded-2xl border bg-white/70 backdrop-blur-md p-6 shadow-lg shadow-blue-100"
//     >
//       <h3 className="font-semibold text-xl mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//         {title}
//       </h3>
//       <ServiceCardsRow cards={cards} />
//       {note && <p className="text-sm text-muted-foreground mt-4 italic">{note}</p>}
//     </motion.div>
//   )
// }

// export default function ServicesPage() {
//   const sections = [
//     {
//       title: "Salesforce",
//       cards: [
//         {
//           title: "CRM Implementation & Setup",
//           description: "End-to-end org setup, secure data model, roles, and deployment best practices.",
//           imgUrl: "/salesforce-crm-implementation-stock.png",
//           imgAlt: "Salesforce CRM Implementation",
//         },
//         {
//           title: "Service & Marketing Cloud",
//           description: "Omnichannel support, journeys, segmentation, and ROI-focused campaign ops.",
//           imgUrl: "/salesforce-marketing-cloud-contact-center-stock.png",
//           imgAlt: "Salesforce Clouds",
//         },
//         {
//           title: "Integrations & APIs",
//           description: "Robust integrations with upstream/downstream systems using secure APIs.",
//           imgUrl: "/api-integration-diagram-stock.png",
//           imgAlt: "API Integrations",
//         },
//         {
//           title: "Automation & Flows",
//           description: "Declarative flows and guardrails that reduce toil and increase reliability.",
//           imgUrl: "/workflow-automation-stock.png",
//           imgAlt: "Automation and Flows",
//         },
//       ],
//     },
//     {
//       title: "AWS",
//       cards: [
//         {
//           title: "Cloud Migration",
//           description: "Discovery, landing zone setup, phased migrations with measurable milestones.",
//           imgUrl: "/aws-cloud-migration-datacenter-stock.png",
//           imgAlt: "AWS Cloud Migration",
//         },
//         {
//           title: "DevOps on AWS",
//           description: "CI/CD, IaC, observability, and compliance baked into your platform.",
//           imgUrl: "/devops-pipeline-aws-stock.png",
//           imgAlt: "DevOps on AWS",
//         },
//         {
//           title: "Cost Optimization",
//           description: "Rightsizing, reservations, and architectural improvements to cut spend.",
//           imgUrl: "/cloud-cost-optimization-stock.png",
//           imgAlt: "Cost Optimization",
//         },
//         {
//           title: "Security & Governance",
//           description: "Guardrails, identity, encryption, and audit-ready configurations.",
//           imgUrl: "/cloud-security-aws-stock.png",
//           imgAlt: "Security and Governance",
//         },
//       ],
//     },
//     {
//       title: "Microsoft Power Platform",
//       cards: [
//         {
//           title: "Power BI Dashboards",
//           description: "Actionable dashboards with clean data models and row-level security.",
//           imgUrl: "/power-bi-dashboard-stock.png",
//           imgAlt: "Power BI Dashboards",
//         },
//         {
//           title: "Power Apps Development",
//           description: "Tailored apps that streamline workflows and reduce manual steps.",
//           imgUrl: "/microsoft-power-apps-ui-stock.png",
//           imgAlt: "Power Apps Development",
//         },
//         {
//           title: "Power Automate Flows",
//           description: "Reliable integrations and automations with clear error handling.",
//           imgUrl: "/power-automate-flows-stock.png",
//           imgAlt: "Power Automate Flows",
//         },
//         {
//           title: "Dataverse Architecture",
//           description: "Secure and scalable data architecture for app and analytics needs.",
//           imgUrl: "/dataverse-data-model-stock.png",
//           imgAlt: "Dataverse Architecture",
//         },
//       ],
//     },
//     {
//       title: "React & Web Development",
//       cards: [
//         {
//           title: "Dashboards & Portals",
//           description: "Responsive, accessible interfaces with real-time data and charts.",
//           imgUrl: "/react-dashboard-web-app-stock.png",
//           imgAlt: "Dashboards and Portals",
//         },
//         {
//           title: "Modern Web Apps",
//           description: "App Router, server actions, and performance-first engineering.",
//           imgUrl: "/modern-web-app-coding-stock.png",
//           imgAlt: "Modern Web Apps",
//         },
//         {
//           title: "Design Systems & UI",
//           description: "Reusable components and tokens for speed, consistency, and quality.",
//           imgUrl: "/design-system-components-stock.png",
//           imgAlt: "Design Systems",
//         },
//         {
//           title: "Accessibility & Performance",
//           description: "AA contrast, keyboard support, and Core Web Vitals best practices.",
//           imgUrl: "/placeholder.svg?height=160&width=320",
//           imgAlt: "Accessibility and Performance",
//         },
//       ],
//     },
//     {
//       title: "Training & Upskilling",
//       note: "Hands-on programs designed for teams and individuals.",
//       cards: [
//         {
//           title: "Salesforce Training",
//           description: "Role-based learning paths and labs to accelerate CRM adoption.",
//           imgUrl: "/placeholder.svg?height=160&width=320",
//           imgAlt: "Salesforce Training",
//         },
//         {
//           title: "AWS Training",
//           description: "Labs-first approach focused on platform fundamentals and safety.",
//           imgUrl: "/placeholder.svg?height=160&width=320",
//           imgAlt: "AWS Training",
//         },
//         {
//           title: "Microsoft Training",
//           description: "Hands-on learning for Power Platform, from basics to advanced.",
//           imgUrl: "/placeholder.svg?height=160&width=320",
//           imgAlt: "Microsoft Training",
//         },
//         {
//           title: "React Training",
//           description: "Modern patterns, accessibility, and performance in real projects.",
//           imgUrl: "/placeholder.svg?height=160&width=320",
//           imgAlt: "React Training",
//         },
//       ],
//     },
//   ]

//   return (
//     <main>
//       {/* Hero */}
//       <section className="relative isolate overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-500 opacity-10" />
//         <FloatingParticles />

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//             Our Services
//           </h1>
//           <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
//             Clean, interactive, and enterprise-ready services with subtle animations and a professional approach.
//           </p>
//         </motion.div>
//       </section>

//       {/* Sections */}
//       <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-12">
//         {sections.map((s, idx) => (
//           <SectionCard key={s.title} title={s.title} cards={s.cards} note={(s as any).note} />
//         ))}
//       </section>
//     </main>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { FloatingParticles } from "@/components/floating-particles"
import ServiceCardsRow from "@/components/service-cards-row"

function SectionCard({
  title,
  cards,
  note,
}: {
  title: string
  cards: {
    title: string
    description: string
    imgUrl: string
    imgAlt: string
  }[]
  note?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border bg-white/70 backdrop-blur-md p-6 shadow-lg shadow-blue-100"
    >
      <h3 className="font-semibold text-xl mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <ServiceCardsRow cards={cards} />
      {note && (
        <p className="text-sm text-muted-foreground mt-4 italic">{note}</p>
      )}
    </motion.div>
  )
}

export default function ServicesPage() {
  const sections = [
    {
      title: "Salesforce",
      cards: [
        {
          title: "CRM Implementation & Setup",
          description:
            "Build a scalable and secure Salesforce foundation — from data models to user roles — ensuring fast adoption and long-term reliability.",
          imgUrl: "/salesforce-crm-implementation-stock.png",
          imgAlt: "Salesforce CRM Implementation",
        },
        {
          title: "Service & Marketing Cloud",
          description:
            "Deliver seamless customer experiences with powerful service workflows and ROI-driven marketing automation.",
          imgUrl: "/salesforce-marketing-cloud-contact-center-stock.png",
          imgAlt: "Salesforce Clouds",
        },
        {
          title: "Integrations & APIs",
          description:
            "Connect Salesforce with your entire ecosystem through secure, future-proof integrations and APIs.",
          imgUrl: "/api-integration-diagram-stock.png",
          imgAlt: "API Integrations",
        },
        {
          title: "Automation & Flows",
          description:
            "Reduce manual effort with low-code automations, workflows, and process flows that scale with your business.",
          imgUrl: "/workflow-automation-stock.png",
          imgAlt: "Automation and Flows",
        },
      ],
    },
    {
      title: "AWS",
      cards: [
        {
          title: "Cloud Migration",
          description:
            "Accelerate your cloud journey with proven migration strategies, optimized landing zones, and secure transitions.",
          imgUrl: "/aws-cloud-migration-datacenter-stock.png",
          imgAlt: "AWS Cloud Migration",
        },
        {
          title: "DevOps on AWS",
          description:
            "Streamline delivery pipelines with CI/CD, infrastructure as code, and observability built-in by design.",
          imgUrl: "/devops-pipeline-aws-stock.png",
          imgAlt: "DevOps on AWS",
        },
        {
          title: "Cost Optimization",
          description:
            "Maximize cloud ROI with rightsizing, architectural improvements, and intelligent cost management.",
          imgUrl: "/cloud-cost-optimization-stock.png",
          imgAlt: "Cost Optimization",
        },
        {
          title: "Security & Governance",
          description:
            "Ensure enterprise-grade compliance with identity management, encryption, and governance frameworks.",
          imgUrl: "/cloud-security-aws-stock.png",
          imgAlt: "Security and Governance",
        },
      ],
    },
    {
      title: "Microsoft Power Platform",
      cards: [
        {
          title: "Power BI Dashboards",
          description:
            "Turn raw data into clear, actionable insights with secure, enterprise-ready dashboards.",
          imgUrl: "/power-bi-dashboard-stock.png",
          imgAlt: "Power BI Dashboards",
        },
        {
          title: "Power Apps Development",
          description:
            "Build tailored low-code apps that simplify workflows and boost productivity across teams.",
          imgUrl: "/microsoft-power-apps-ui-stock.png",
          imgAlt: "Power Apps Development",
        },
        {
          title: "Power Automate Flows",
          description:
            "Automate repetitive processes with intelligent flows, reducing errors and saving time.",
          imgUrl: "/power-automate-flows-stock.png",
          imgAlt: "Power Automate Flows",
        },
        {
          title: "Dataverse Architecture",
          description:
            "Leverage a secure and scalable data platform to unify and manage business-critical information.",
          imgUrl: "/dataverse-data-model-stock.png",
          imgAlt: "Dataverse Architecture",
        },
      ],
    },
    {
      title: "React & Web Development",
      cards: [
        {
          title: "Dashboards & Portals",
          description:
            "Deliver engaging dashboards and self-service portals with real-time interactivity.",
          imgUrl: "/react-dashboard-web-app-stock.png",
          imgAlt: "Dashboards and Portals",
        },
        {
          title: "Modern Web Apps",
          description:
            "Create blazing-fast apps powered by Next.js, React, and modern web standards.",
          imgUrl: "/modern-web-app-coding-stock.png",
          imgAlt: "Modern Web Apps",
        },
        {
          title: "Design Systems & UI",
          description:
            "Establish reusable design systems that drive consistency, speed, and exceptional user experience.",
          imgUrl: "/design-system-components-stock.png",
          imgAlt: "Design Systems",
        },
        {
          title: "Accessibility & Performance",
          description:
            "Ensure compliance and inclusivity with WCAG AA accessibility and Core Web Vitals best practices.",
          imgUrl: "/placeholder.svg?height=160&width=320",
          imgAlt: "Accessibility and Performance",
        },
      ],
    },
    {
      title: "Training & Upskilling",
      note: "Hands-on, role-based training designed to empower individuals and transform teams.",
      cards: [
        {
          title: "Salesforce Training",
          description:
            "Practical, role-based learning paths to accelerate Salesforce adoption and expertise.",
          imgUrl: "/placeholder.svg?height=160&width=320",
          imgAlt: "Salesforce Training",
        },
        {
          title: "AWS Training",
          description:
            "Instructor-led and labs-focused learning to build strong cloud foundations.",
          imgUrl: "/placeholder.svg?height=160&width=320",
          imgAlt: "AWS Training",
        },
        {
          title: "Microsoft Training",
          description:
            "Guided Power Platform training programs for citizen developers and IT pros alike.",
          imgUrl: "/placeholder.svg?height=160&width=320",
          imgAlt: "Microsoft Training",
        },
        {
          title: "React Training",
          description:
            "Real-world workshops covering modern React, accessibility, and performance-first design.",
          imgUrl: "/placeholder.svg?height=160&width=320",
          imgAlt: "React Training",
        },
      ],
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-500 opacity-10" />
        <FloatingParticles />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From strategy to execution, we deliver future-ready IT solutions
            that drive growth, enhance efficiency, and create measurable impact
            for your business.
          </p>
        </motion.div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-12">
        {sections.map((s) => (
          <SectionCard
            key={s.title}
            title={s.title}
            cards={s.cards}
            note={(s as any).note}
          />
        ))}
      </section>
    </main>
  )
}
