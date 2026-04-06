import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Let&apos;s discuss how we can help you achieve your technology goals and drive sustainable
            growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Schedule Consultation <ArrowRight size={18} />
            </Button>
          </Link>
          <a href="https://calendly.com/yadaconsult" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
              Book a Call
            </Button>
          </a>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-foreground/50">Response time: Within 24 hours &bull; Free initial consultation</p>
        </div>
      </div>
    </section>
  )
}
