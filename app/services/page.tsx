// "use client";

// import { motion } from "framer-motion";
// import { FloatingParticles } from "@/components/floating-particles";
// import ServiceCardsRow from "@/components/service-cards-row";

// function SectionCard({
//   title,
//   description,
//   cards,
//   note,
//   index,
// }: {
//   title: string;
//   description?: string;
//   cards: {
//     title: string;
//     description: string;
//     imgUrl: string;
//     imgAlt: string;
//   }[];
//   note?: string;
//   index: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.7, delay: index * 0.1 }}
//       className="group relative rounded-3xl border border-gray-200/60 bg-gradient-to-br from-white via-white to-gray-50/30 backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden "
//     >
//       {/* Subtle gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       <div className="relative z-10">
//         <div className="flex items-center gap-3 mb-3">
//           <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
//           <h2 className="font-bold text-2xl tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
//             {title}
//           </h2>
//         </div>

//         {description && (
//           <p className="text-gray-600 text-base mb-6 leading-relaxed">
//             {description}
//           </p>
//         )}

//         <ServiceCardsRow cards={cards} />

//         {note && (
//           <div className="mt-6 p-4 rounded-xl bg-blue-50/50 border border-blue-100/50">
//             <p className="text-sm text-gray-700 leading-relaxed">
//               <span className="font-semibold text-blue-700">Note:</span> {note}
//             </p>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default function ServicesPage() {
//   const sections = [
//     {
//       title: "Corporate Training & Upskilling",
//       description:
//         "Empower your teams with hands-on, role-based training programs designed to accelerate adoption and build lasting expertise across leading platforms.",
//       cards: [
//         {
//           title: "Salesforce Training",
//           description:
//             "Practical, role-based learning paths covering Admin, Developer, and Architect tracks to accelerate Salesforce adoption and expertise.",
//           imgUrl: "/trainsales.png",
//           imgAlt: "Salesforce Training",
//         },
//         {
//           title: "AWS Certification Prep",
//           description:
//             "Instructor-led workshops and hands-on labs focused on building cloud foundations and preparing for AWS certification exams.",
//           imgUrl: "/trainaws.png",
//           imgAlt: "AWS Training",
//         },
//         {
//           title: "Microsoft Power Platform",
//           description:
//             "Guided training programs for citizen developers and IT professionals covering Power BI, Power Apps, and Power Automate.",
//           imgUrl: "/trainmicro.png",
//           imgAlt: "Microsoft Training",
//         },
//         {
//           title: "Modern Web Development",
//           description:
//             "Real-world workshops covering React, Next.js, accessibility standards, and performance-first design principles.",
//           imgUrl: "/trainweb.png",
//           imgAlt: "React Training",
//         },
//       ],
//       note: "All training programs include practical exercises, real-world scenarios, and post-training support to ensure knowledge retention.",
//     },
//     // {
//     //   title: "Salesforce Solutions",
//     //   description: "Transform customer relationships with tailored Salesforce implementations that drive growth and operational excellence.",
//     //   cards: [
//     //     {
//     //       title: "CRM Implementation & Setup",
//     //       description:
//     //         "Build scalable, secure Salesforce foundations with optimized data models, user roles, and governance frameworks for long-term success.",
//     //       imgUrl: "/salesforce-crm-implementation-stock.png",
//     //       imgAlt: "Salesforce CRM Implementation",
//     //     },
//     //     {
//     //       title: "Service & Marketing Cloud",
//     //       description:
//     //         "Deliver exceptional customer experiences with intelligent service workflows, omnichannel support, and ROI-driven marketing automation.",
//     //       imgUrl: "/salesforce-marketing-cloud-contact-center-stock.png",
//     //       imgAlt: "Salesforce Clouds",
//     //     },
//     //     {
//     //       title: "Custom Development & Integration",
//     //       description:
//     //         "Extend Salesforce capabilities with custom Apex, Lightning components, and seamless integrations with enterprise systems.",
//     //       imgUrl: "/api-integration-diagram-stock.png",
//     //       imgAlt: "Salesforce Development",
//     //     },
//     //     {
//     //       title: "Automation & Process Optimization",
//     //       description:
//     //         "Eliminate manual work with intelligent workflows, approval processes, and Flow automations that scale with your business.",
//     //       imgUrl: "/workflow-automation-stock.png",
//     //       imgAlt: "Salesforce Automation",
//     //     },
//     //   ],
//     // },
//     {
//       title: "Salesforce Solutions",
//       description:
//         "Drive digital transformation with powerful Salesforce cloud solutions, modern development, and enterprise-grade integrations.",
//       cards: [
//         {
//           title: "Sales & Service Cloud",
//           description:
//             "Enable high-performing sales teams and customer service operations with Sales and Service Cloud implementations designed for scalability, automation, and actionable insights.",
//           imgUrl: "/salesforce-crm-implementation-stock.png",
//           imgAlt: "Salesforce CRM Implementation",
//         },
//         {
//           title: "Experience Cloud & Velocity",
//           description:
//             "Create personalized digital experiences using Experience Cloud and Salesforce Velocity to support industry-specific workflows and seamless customer journeys.",
//           imgUrl: "/salesforce-marketing-cloud-contact-center-stock.png",
//           imgAlt: "Salesforce Clouds",
//         },
//         {
//           title: "LWC Development",
//           description:
//             "Build fast, responsive, and reusable user interfaces with Lightning Web Components (LWC) that enhance performance and user adoption across Salesforce platforms.",
//           imgUrl: "/api-integration-diagram-stock.png",
//           imgAlt: "Salesforce Development",
//         },
//         {
//           title: "Integration, Marketing Cloud & Agentforce",
//           description:
//             "Connect Salesforce with enterprise systems through secure integrations, deliver personalized engagement using Marketing Cloud, and implement Agentforce for intelligent automation.",
//           imgUrl: "/workflow-automation-stock.png",
//           imgAlt: "Salesforce Automation",
//         },
//       ],
//     },
//     {
//       title: "Microsoft Power Platform",
//       description:
//         "Unlock productivity with low-code solutions that transform data into insights and automate business-critical processes.",
//       cards: [
//         {
//           title: "Power BI Analytics",
//           description:
//             "Transform raw data into actionable insights with interactive dashboards, advanced analytics, and embedded reporting solutions.",
//           imgUrl: "/power-bi-dashboard-stock.png",
//           imgAlt: "Power BI Dashboards",
//         },
//         {
//           title: "Power Apps Development",
//           description:
//             "Build custom business applications that streamline workflows, connect data sources, and empower teams across departments.",
//           imgUrl: "/microsoft-power-apps-ui-stock.png",
//           imgAlt: "Power Apps Development",
//         },
//         {
//           title: "Power Automate Solutions",
//           description:
//             "Design intelligent automation flows that reduce errors, save time, and integrate seamlessly with Microsoft 365 and third-party apps.",
//           imgUrl: "/power-automate-flows-stock.png",
//           imgAlt: "Power Automate Flows",
//         },
//         {
//           title: "Dataverse & Data Management",
//           description:
//             "Leverage enterprise-grade data platforms to unify, secure, and scale your business-critical information architecture.",
//           imgUrl: "/dataverse-data-model-stock.png",
//           imgAlt: "Dataverse Architecture",
//         },
//       ],
//     },
//     {
//       title: "AWS Cloud Services",
//       description:
//         "Accelerate digital transformation with secure, scalable cloud infrastructure designed for enterprise performance.",
//       cards: [
//         {
//           title: "Cloud Migration & Modernization",
//           description:
//             "Seamlessly migrate workloads to AWS with proven strategies, optimized architectures, and minimal downtime for business continuity.",
//           imgUrl: "/aws-cloud-migration-datacenter-stock.png",
//           imgAlt: "AWS Cloud Migration",
//         },
//         {
//           title: "DevOps & CI/CD Pipelines",
//           description:
//             "Accelerate delivery with automated pipelines, infrastructure as code, containerization, and comprehensive monitoring solutions.",
//           imgUrl: "/devops-pipeline-aws-stock.png",
//           imgAlt: "DevOps on AWS",
//         },
//         {
//           title: "Cost Optimization & FinOps",
//           description:
//             "Maximize cloud ROI through rightsizing, reserved instances, architectural improvements, and intelligent cost management strategies.",
//           imgUrl: "/cloud-cost-optimization-stock.png",
//           imgAlt: "AWS Cost Optimization",
//         },
//         {
//           title: "Security & Compliance",
//           description:
//             "Implement enterprise-grade security with identity management, encryption, audit trails, and industry-specific compliance frameworks.",
//           imgUrl: "/cloud-security-aws-stock.png",
//           imgAlt: "AWS Security",
//         },
//       ],
//     },
//     {
//       title: "React & Web Development",
//       description:
//         "Craft exceptional digital experiences with modern web applications that prioritize performance, accessibility, and user engagement.",
//       cards: [
//         {
//           title: "Custom Dashboards & Portals",
//           description:
//             "Build interactive, real-time dashboards and self-service portals with seamless data visualization and intuitive user experiences.",
//           imgUrl: "/react-dashboard-web-app-stock.png",
//           imgAlt: "React Dashboards",
//         },
//         {
//           title: "Enterprise Web Applications",
//           description:
//             "Develop high-performance web apps with Next.js, React, and TypeScript that deliver speed, scalability, and exceptional UX.",
//           imgUrl: "/modern-web-app-coding-stock.png",
//           imgAlt: "Modern Web Apps",
//         },
//         {
//           title: "Design Systems & Component Libraries",
//           description:
//             "Establish scalable design systems with reusable components that ensure consistency, accelerate development, and elevate brand identity.",
//           imgUrl: "/design-system-components-stock.png",
//           imgAlt: "Design Systems",
//         },
//         {
//           title: "Performance & Accessibility",
//           description:
//             "Ensure WCAG AA compliance, Core Web Vitals optimization, and inclusive design practices for all users and devices.",
//           imgUrl: "/react.png",
//           imgAlt: "Web Performance",
//         },
//       ],
//     },
//     {
//       title: "AI & Machine Learning",
//       description:
//         "Harness the power of artificial intelligence to automate processes, extract insights, and drive innovation across your organization.",
//       cards: [
//         {
//           title: "AI Strategy & Consulting",
//           description:
//             "Develop comprehensive AI roadmaps aligned with business objectives, identifying high-impact use cases and implementation strategies.",
//           imgUrl: "/a1.png",
//           imgAlt: "AI Consulting",
//         },
//         {
//           title: "Machine Learning Solutions",
//           description:
//             "Build custom ML models for predictive analytics, classification, forecasting, and recommendation systems using state-of-the-art frameworks.",
//           imgUrl: "/a2.png",
//           imgAlt: "Machine Learning",
//         },
//         {
//           title: "Natural Language Processing",
//           description:
//             "Implement intelligent text analysis, sentiment detection, chatbots, and document processing solutions powered by advanced NLP.",
//           imgUrl: "/a3.png",
//           imgAlt: "NLP Solutions",
//         },
//         {
//           title: "AI Integration & Deployment",
//           description:
//             "Seamlessly integrate AI capabilities into existing systems with MLOps practices, monitoring, and continuous model improvement.",
//           imgUrl: "/a4.png",
//           imgAlt: "AI Deployment",
//         },
//       ],
//     },
//   ];

//   return (
//     <main>
//       {/* Hero - Matching Contact Page Style */}
//       <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 text-gray-900">
//         {/* ✨ Background effects from Hero section */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-sky-200/60 to-blue-300/30 blur-[200px]" />
//         </div>

//         {/* Animated grid background */}
//         <div className="absolute inset-0 opacity-[0.06]">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:80px_80px] animate-slow-pan" />
//         </div>

//         {/* Subtle moving light wave */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             className="absolute -bottom-20 left-0 w-full h-[300px] bg-gradient-to-t from-sky-200/50 via-transparent to-transparent blur-3xl"
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0.7, 1, 0.7],
//             }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

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
//           <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//             From strategy to execution, we deliver future-ready solutions that
//             drive measurable growth, enhance operational efficiency, and create
//             lasting competitive advantage for your business.
//           </p>
//         </motion.div>
//       </section>

//       {/* Services Grid */}
//       <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
//         <div className="space-y-16">
//           {sections.map((section, index) => (
//             <SectionCard
//               key={section.title}
//               title={section.title}
//               description={section.description}
//               cards={section.cards}
//               note={(section as any).note}
//               index={index}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Bottom CTA Section */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-5" />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto max-w-4xl px-4 text-center relative"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Let's discuss how our services can help achieve your goals
//           </p>
//           <a href="/contact">
//             <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//               Get In Touch
//             </button>
//           </a>
//         </motion.div>
//       </section>
//     </main>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { FloatingParticles } from "@/components/floating-particles";
import ServiceCardsRow from "@/components/service-cards-row";

function SectionCard({
  title,
  description,
  cards,
  note,
  index,
}: {
  title: string;
  description?: string;
  cards: {
    title: string;
    description: string;
    imgUrl: string;
    imgAlt: string;
  }[];
  note?: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative rounded-3xl border border-gray-200/60 bg-gradient-to-br from-white via-white to-gray-50/30 backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden "
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
          <h2 className="font-bold text-2xl tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        {description && (
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            {description}
          </p>
        )}

        <ServiceCardsRow cards={cards} />

        {note && (
          <div className="mt-6 p-4 rounded-xl bg-blue-50/50 border border-blue-100/50">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-blue-700">Note:</span> {note}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const sections = [
    {
      title: "Enterprise Engineering & Consulting",
      description:
        "End-to-end consulting, architecture, and engineering services to build, scale, and optimize your digital infrastructure and product delivery.",
      cards: [
        {
          title: "Enterprise Architecture",
          description:
            "Design robust, future-ready systems—from microservices and event-driven architecture to cloud-native solutions on AWS & Azure. Includes system modernization and cloud strategy.",
          imgUrl: "https://cdn.sanity.io/images/rxbx3lrk/production/b8ab5d341ca162d43b062426067f818b6ec2ec6e-1376x768.png?rect=16,0,1344,768&w=1400&h=800&fm=webp&q=80",
          imgAlt: "Enterprise Architecture & Solution Design",
        },
        {
          title: "ServiceMax & Field Service",
          description:
            "Optimize operations with ServiceMax on Salesforce. We cover work orders, preventive maintenance, SLA management, and mobile access. Includes implementation and QA support.",
          imgUrl: "https://www.absyz.com/wp-content/uploads/2025/01/Field-Service-Operations-with-ServiceMax-Work-Order-Management-scaled.jpg",
          imgAlt: "ServiceMax & Field Service Management",
        },
        {
          title: "DevOps & Platform Engineering",
          description:
            "Build reliable infrastructure that ships faster and breaks less. We design CI/CD pipelines, containerized setups (Kubernetes/Docker), and IaC (Terraform) across AWS & GCP.",
          imgUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFKDG-dHbKjOQ/feedshare-shrink_800/B4DZ3I47LqG8Ac-/0/1777191859277?e=2147483647&v=beta&t=39Oo0b3RCcu_ucqV--FSC2UT12zT804vPhWuSKKGfOo",
          imgAlt: "DevOps & Platform Engineering",
        },
        {
          title: "Java & Microservices",
          description:
            "Develop scalable backend systems using Java, Spring Boot, and microservices. Deep expertise in high-scale domains like banking, KYC platforms, and modern API development.",
          imgUrl: "https://www.clariontech.com/hubfs/JMA.jpg",
          imgAlt: "Java & Microservices Development",
        },
        {
          title: "Product Management as a Service",
          description:
            "Get on-demand strategic product leadership. We help define your product vision, build roadmaps, manage stakeholders, and drive Agile/SAFe delivery across CRM and SaaS products.",
          imgUrl: "/product-management-service.png",
          imgAlt: "Product Management as a Service",
        },
        {
          title: "QA & Software Testing",
          description:
            "Catch issues before your customers do. We handle test strategy, automation, regression, and UAT with Agile-compatible processes. Includes complete production validation.",
          imgUrl: "/qa-software-testing.png",
          imgAlt: "QA & Software Testing Services",
        },
      ],
    },
    {
      title: "Corporate Training & Upskilling",
      description:
        "Empower your teams with hands-on, role-based training programs designed to accelerate adoption and build lasting expertise across leading platforms.",
      cards: [
        {
          title: "Salesforce Training",
          description:
            "Practical, role-based learning paths covering Admin, Developer, and Architect tracks to accelerate Salesforce adoption and expertise.",
          imgUrl: "/trainsales.png",
          imgAlt: "Salesforce Training",
        },
        {
          title: "AWS Certification Prep",
          description:
            "Instructor-led workshops and hands-on labs focused on building cloud foundations and preparing for AWS certification exams.",
          imgUrl: "/trainaws.png",
          imgAlt: "AWS Training",
        },
        {
          title: "Microsoft Power Platform",
          description:
            "Guided training programs for citizen developers and IT professionals covering Power BI, Power Apps, and Power Automate.",
          imgUrl: "/trainmicro.png",
          imgAlt: "Microsoft Training",
        },
        {
          title: "Modern Web Development",
          description:
            "Real-world workshops covering React, Next.js, accessibility standards, and performance-first design principles.",
          imgUrl: "/trainweb.png",
          imgAlt: "React Training",
        },
      ],
      note: "All training programs include practical exercises, real-world scenarios, and post-training support to ensure knowledge retention.",
    },
    {
      title: "Salesforce Solutions",
      description:
        "Drive digital transformation with powerful Salesforce cloud solutions, modern development, and enterprise-grade integrations.",
      cards: [
        {
          title: "Sales & Service Cloud",
          description:
            "Enable high-performing sales teams and customer service operations with Sales and Service Cloud implementations designed for scalability, automation, and actionable insights.",
          imgUrl: "/salesforce-crm-implementation-stock.png",
          imgAlt: "Salesforce CRM Implementation",
        },
        {
          title: "Experience Cloud & Velocity",
          description:
            "Create personalized digital experiences using Experience Cloud and Salesforce Velocity to support industry-specific workflows and seamless customer journeys.",
          imgUrl: "/salesforce-marketing-cloud-contact-center-stock.png",
          imgAlt: "Salesforce Clouds",
        },
        {
          title: "LWC Development",
          description:
            "Build fast, responsive, and reusable user interfaces with Lightning Web Components (LWC) that enhance performance and user adoption across Salesforce platforms.",
          imgUrl: "/api-integration-diagram-stock.png",
          imgAlt: "Salesforce Development",
        },
        {
          title: "Integration, Marketing Cloud & Agentforce",
          description:
            "Connect Salesforce with enterprise systems through secure integrations, deliver personalized engagement using Marketing Cloud, and implement Agentforce for intelligent automation.",
          imgUrl: "/workflow-automation-stock.png",
          imgAlt: "Salesforce Automation",
        },
      ],
    },
    {
      title: "Microsoft Power Platform",
      description:
        "Unlock productivity with low-code solutions that transform data into insights and automate business-critical processes.",
      cards: [
        {
          title: "Power BI Analytics",
          description:
            "Transform raw data into actionable insights with interactive dashboards, advanced analytics, and embedded reporting solutions.",
          imgUrl: "/power-bi-dashboard-stock.png",
          imgAlt: "Power BI Dashboards",
        },
        {
          title: "Power Apps Development",
          description:
            "Build custom business applications that streamline workflows, connect data sources, and empower teams across departments.",
          imgUrl: "/microsoft-power-apps-ui-stock.png",
          imgAlt: "Power Apps Development",
        },
        {
          title: "Power Automate Solutions",
          description:
            "Design intelligent automation flows that reduce errors, save time, and integrate seamlessly with Microsoft 365 and third-party apps.",
          imgUrl: "/power-automate-flows-stock.png",
          imgAlt: "Power Automate Flows",
        },
        {
          title: "Dataverse & Data Management",
          description:
            "Leverage enterprise-grade data platforms to unify, secure, and scale your business-critical information architecture.",
          imgUrl: "/dataverse-data-model-stock.png",
          imgAlt: "Dataverse Architecture",
        },
      ],
    },
    {
      title: "AWS Cloud Services",
      description:
        "Accelerate digital transformation with secure, scalable cloud infrastructure designed for enterprise performance.",
      cards: [
        {
          title: "Cloud Migration & Modernization",
          description:
            "Seamlessly migrate workloads to AWS with proven strategies, optimized architectures, and minimal downtime for business continuity.",
          imgUrl: "/aws-cloud-migration-datacenter-stock.png",
          imgAlt: "AWS Cloud Migration",
        },
        {
          title: "DevOps & CI/CD Pipelines",
          description:
            "Accelerate delivery with automated pipelines, infrastructure as code, containerization, and comprehensive monitoring solutions.",
          imgUrl: "/devops-pipeline-aws-stock.png",
          imgAlt: "DevOps on AWS",
        },
        {
          title: "Cost Optimization & FinOps",
          description:
            "Maximize cloud ROI through rightsizing, reserved instances, architectural improvements, and intelligent cost management strategies.",
          imgUrl: "/cloud-cost-optimization-stock.png",
          imgAlt: "AWS Cost Optimization",
        },
        {
          title: "Security & Compliance",
          description:
            "Implement enterprise-grade security with identity management, encryption, audit trails, and industry-specific compliance frameworks.",
          imgUrl: "/cloud-security-aws-stock.png",
          imgAlt: "AWS Security",
        },
      ],
    },
    {
      title: "React & Web Development",
      description:
        "Craft exceptional digital experiences with modern web applications that prioritize performance, accessibility, and user engagement.",
      cards: [
        {
          title: "Custom Dashboards & Portals",
          description:
            "Build interactive, real-time dashboards and self-service portals with seamless data visualization and intuitive user experiences.",
          imgUrl: "/react-dashboard-web-app-stock.png",
          imgAlt: "React Dashboards",
        },
        {
          title: "Enterprise Web Applications",
          description:
            "Develop high-performance web apps with Next.js, React, and TypeScript that deliver speed, scalability, and exceptional UX.",
          imgUrl: "/modern-web-app-coding-stock.png",
          imgAlt: "Modern Web Apps",
        },
        {
          title: "Design Systems & Component Libraries",
          description:
            "Establish scalable design systems with reusable components that ensure consistency, accelerate development, and elevate brand identity.",
          imgUrl: "/design-system-components-stock.png",
          imgAlt: "Design Systems",
        },
        {
          title: "Performance & Accessibility",
          description:
            "Ensure WCAG AA compliance, Core Web Vitals optimization, and inclusive design practices for all users and devices.",
          imgUrl: "/react.png",
          imgAlt: "Web Performance",
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence to automate processes, extract insights, and drive innovation across your organization.",
      cards: [
        {
          title: "AI Strategy & Consulting",
          description:
            "Develop comprehensive AI roadmaps aligned with business objectives, identifying high-impact use cases and implementation strategies.",
          imgUrl: "/a1.png",
          imgAlt: "AI Consulting",
        },
        {
          title: "Machine Learning Solutions",
          description:
            "Build custom ML models for predictive analytics, classification, forecasting, and recommendation systems using state-of-the-art frameworks.",
          imgUrl: "/a2.png",
          imgAlt: "Machine Learning",
        },
        {
          title: "Natural Language Processing",
          description:
            "Implement intelligent text analysis, sentiment detection, chatbots, and document processing solutions powered by advanced NLP.",
          imgUrl: "/a3.png",
          imgAlt: "NLP Solutions",
        },
        {
          title: "AI Integration & Deployment",
          description:
            "Seamlessly integrate AI capabilities into existing systems with MLOps practices, monitoring, and continuous model improvement.",
          imgUrl: "/a4.png",
          imgAlt: "AI Deployment",
        },
      ],
    },
  ];

  return (
    <main>
      {/* Hero - Matching Contact Page Style */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 text-gray-900">
        {/* ✨ Background effects from Hero section */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-sky-200/60 to-blue-300/30 blur-[200px]" />
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:80px_80px] animate-slow-pan" />
        </div>

        {/* Subtle moving light wave */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -bottom-20 left-0 w-full h-[300px] bg-gradient-to-t from-sky-200/50 via-transparent to-transparent blur-3xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

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
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we deliver future-ready solutions that
            drive measurable growth, enhance operational efficiency, and create
            lasting competitive advantage for your business.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <SectionCard
              key={section.title}
              title={section.title}
              description={section.description}
              cards={section.cards}
              note={(section as any).note}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-4 text-center relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how our services can help achieve your goals
          </p>
          <a href="/contact">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              Get In Touch
            </button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}