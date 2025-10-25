import { Button } from "@/components/ui/button"
import { ArrowRight, Link } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-background/50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Powering business transformation through intelligent technology.
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed text-balance">
                With years of proven expertise across Nigeria and the United States, we deliver expert technology consulting for SMEs and enterprises — helping you navigate digital transformation, optimize operations, and unlock sustainable growth through strategic guidance and seamless implementation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Get Started <ArrowRight size={18} />
              </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-accent">30+</p>
                <p className="text-sm text-foreground/60">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">98%</p>
                <p className="text-sm text-foreground/60">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">8+</p>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden">
            <Image src="/tech-consulting-team-working-on-digital-transforma.jpg" alt="Technology consulting team" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
