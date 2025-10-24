import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your business goals, current technology landscape, and challenges to develop a comprehensive strategy.",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description:
      "Our experts create a detailed roadmap with clear milestones, timelines, and resource allocation for successful implementation.",
  },
  {
    number: "03",
    title: "Implementation & Support",
    description:
      "We execute the plan with precision, providing ongoing support and guidance to ensure smooth adoption and minimal disruption.",
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description:
      "Continuous monitoring and optimization ensure your solutions deliver maximum value and adapt to evolving business needs.",
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-20 md:py-32 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">Our Approach</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            A proven methodology that delivers results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border p-8">
              <div className="mb-6">
                <span className="text-5xl font-bold text-accent/30">{step.number}</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
