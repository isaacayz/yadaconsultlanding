import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Approach } from "@/components/approach"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Approach />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
