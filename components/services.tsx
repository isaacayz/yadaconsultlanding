import { Card } from "@/components/ui/card"
import { Zap, Shield, TrendingUp, Code, Lock, BarChart3 } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Zap,
    slug: "digital-transformation",
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology solutions tailored to your business needs.",
  },
  {
    icon: Shield,
    slug: "cybersecurity",
    title: "Cybersecurity & Compliance",
    description: "Protect your assets with comprehensive security strategies and regulatory compliance guidance.",
  },
  {
    icon: TrendingUp,
    slug: "business-intelligence",
    title: "Business Intelligence",
    description: "Unlock insights from your data to drive informed decision-making and competitive advantage.",
  },
  {
    icon: Code,
    slug: "custom-development",
    title: "Custom Development",
    description: "Build scalable applications and systems designed specifically for your unique requirements.",
  },
  {
    icon: Lock,
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "Migrate and optimize your infrastructure for reliability, scalability, and cost efficiency.",
  },
  {
    icon: BarChart3,
    slug: "performance-optimization",
    title: "Performance Optimization",
    description: "Enhance system performance and user experience through strategic optimization initiatives.",
  },
]

export { services }

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Comprehensive technology consulting across all aspects of your digital journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="bg-card border-border p-8 hover:border-accent/50 transition-colors group h-full">
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-accent group-hover:text-accent/80 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
