import { CheckCircle2, ClipboardList, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: <ClipboardList className="size-5 text-blue-600" />,
    title: "Book a Service",
    desc: "Tell us what you need and your timelines.",
  },
  {
    icon: <CheckCircle2 className="size-5 text-blue-600" />,
    title: "Start Consultation",
    desc: "We plan and kick off execution with clear milestones.",
  },
  {
    icon: <TrendingUp className="size-5 text-blue-600" />,
    title: "Check Your Growth",
    desc: "Measure outcomes, optimize, and scale success.",
  },
]

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Our <span className="text-blue-600">Process</span></h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-lg border p-5 bg-card">
            <div className="flex items-center gap-2 font-medium">
              {s.icon}
              {s.title}
            </div>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
