import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Award, Globe, Shield, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Yada Consulting Services — founded by Isaac Ige, an experienced IT professional delivering technology consulting across Nigeria and the United States.",
}

const values = [
  {
    icon: Shield,
    title: "Technical Excellence",
    description:
      "We don't just recommend solutions — we build and implement them. Every recommendation is grounded in hands-on experience.",
  },
  {
    icon: Globe,
    title: "Cross-Border Expertise",
    description:
      "With offices in Lagos and Austin, we bridge the gap between African and American tech ecosystems, understanding the unique challenges of each market.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description:
      "We measure success by your outcomes, not billable hours. Our engagement model is built around delivering measurable results.",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description:
      "Technology evolves fast. We invest in staying ahead of the curve so our clients always have access to the latest solutions and best practices.",
  },
]

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            About Yada Consulting
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed text-balance">
            We help businesses leverage technology to grow, compete, and thrive in an increasingly digital world.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-square max-w-md mx-auto bg-muted rounded-2xl border border-border flex items-center justify-center">
                <p className="text-foreground/40 text-sm">Founder photo</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Meet the Founder</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Isaac Ige</h2>
                <p className="text-foreground/60 mt-1">Founder & Principal Consultant</p>
              </div>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  With over 8 years of experience in IT consulting, software development, and digital transformation, Isaac founded Yada Consulting Services to bridge the technology gap for small and medium enterprises.
                </p>
                <p>
                  Having worked across both Nigeria and the United States, Isaac brings a unique perspective on the challenges businesses face when adopting technology in different markets. From cybersecurity and cloud infrastructure to custom software development and business intelligence, his hands-on approach ensures clients get practical solutions — not just PowerPoint decks.
                </p>
                <p>
                  Yada Consulting was built on a simple belief: every business, regardless of size, deserves access to expert-level technology guidance. Whether you're a startup in Lagos looking to scale or an Austin-based SME ready for digital transformation, we're here to help you get there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">How We Work</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
              Our values define every engagement and every recommendation we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="bg-card border-border p-8">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent">8+</p>
              <p className="text-foreground/60 mt-2">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent">30+</p>
              <p className="text-foreground/60 mt-2">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent">2</p>
              <p className="text-foreground/60 mt-2">Countries</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent">98%</p>
              <p className="text-foreground/60 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
