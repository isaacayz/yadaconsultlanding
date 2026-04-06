import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Yada Consulting transformed our legacy systems into a modern cloud infrastructure. The migration was seamless, and we saw a 40% reduction in operational costs within the first quarter.",
    name: "Adebayo Ogunlesi",
    role: "CTO",
    company: "SwiftLogistics Nigeria",
  },
  {
    quote:
      "Their cybersecurity audit identified critical vulnerabilities we didn't even know existed. The team didn't just find problems — they implemented solutions and trained our staff.",
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "MedTech Solutions",
  },
  {
    quote:
      "Working with Isaac and the Yada team on our digital transformation was a game-changer. They understood both the Nigerian and US market dynamics, which is rare to find in one consultancy.",
    name: "Michael Adeyemi",
    role: "Founder",
    company: "AfriPay Financial",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Trusted by businesses across Nigeria and the United States
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border p-8 flex flex-col">
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <p className="text-foreground/70 leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
