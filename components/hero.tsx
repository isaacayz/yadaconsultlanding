import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-background/50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Transform Your Business Through Strategic Technology
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed text-balance">
                Expert technology consulting for SMEs and companies. We help you navigate digital transformation,
                optimize operations, and unlock growth through strategic guidance and implementation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Get Started <ArrowRight size={18} />
              </Button>
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

          <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto"></div>
                <p className="text-foreground/50">Strategic Technology Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
