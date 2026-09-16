import { CheckCircle2, ClipboardList, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: <ClipboardList className="size-5 text-blue-600" />,
    title: "Follow & Learn",
    desc: "Follow our content, posts and interview-prep series to pick up real, practical skills.",
  },
  {
    icon: <CheckCircle2 className="size-5 text-blue-600" />,
    title: "Build Along",
    desc: "Join in on projects and hands-on builds — ask questions, contribute, and learn by doing.",
  },
  {
    icon: <TrendingUp className="size-5 text-blue-600" />,
    title: "Grow With the Community",
    desc: "Share what you build, help others, and grow together as part of the community.",
  },
]

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">How to <span className="text-blue-600">Get Involved</span></h2>
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
