import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and thought leadership on digital transformation, cybersecurity, cloud infrastructure, and technology strategy from Yada Consulting.",
}

const posts = [
  {
    slug: "why-smes-need-cybersecurity-strategy",
    title: "Why Every SME Needs a Cybersecurity Strategy in 2026",
    excerpt:
      "Small businesses are increasingly targeted by cyberattacks. Here's what you need to know to protect your business — even on a limited budget.",
    category: "Cybersecurity",
    date: "Coming Soon",
  },
  {
    slug: "cloud-migration-checklist",
    title: "The Complete Cloud Migration Checklist for Nigerian Businesses",
    excerpt:
      "Moving to the cloud? This step-by-step guide covers everything from infrastructure assessment to cost optimization, tailored for the Nigerian market.",
    category: "Cloud Infrastructure",
    date: "Coming Soon",
  },
  {
    slug: "digital-transformation-mistakes",
    title: "5 Digital Transformation Mistakes That Cost SMEs Millions",
    excerpt:
      "Learn from the most common pitfalls we've seen in our 8+ years of consulting — and how to avoid them in your own transformation journey.",
    category: "Digital Transformation",
    date: "Coming Soon",
  },
]

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header />

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Blog & Insights
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
              Practical advice and thought leadership on technology strategy for growing businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="bg-card border-border p-8 flex flex-col group hover:border-accent/50 transition-colors">
                <div className="mb-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-foreground/40">{post.date}</span>
                  <span className="text-sm text-accent flex items-center gap-1">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-muted p-8 rounded-lg border border-border max-w-xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-foreground/60 mb-4">
                New articles are on the way. Follow us on{" "}
                <a href="https://linkedin.com/in/isaacige" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  LinkedIn
                </a>{" "}
                or{" "}
                <a href="https://x.com/yadaconsult" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  X (Twitter)
                </a>{" "}
                to be the first to know.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
