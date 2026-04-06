import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const serviceDetails: Record<
  string,
  {
    title: string
    headline: string
    description: string
    features: string[]
    process: { title: string; description: string }[]
    technologies: string[]
  }
> = {
  "digital-transformation": {
    title: "Digital Transformation",
    headline: "Modernize your business for the digital age",
    description:
      "We help SMEs and enterprises navigate the complexities of digital transformation — from legacy system modernization to process automation and digital strategy development. Our approach is practical, phased, and focused on ROI.",
    features: [
      "Legacy system assessment and modernization roadmaps",
      "Process automation and workflow optimization",
      "Digital strategy development aligned with business goals",
      "Change management and staff training programs",
      "Technology stack evaluation and recommendation",
      "Post-implementation support and optimization",
    ],
    process: [
      {
        title: "Current State Analysis",
        description: "We audit your existing systems, processes, and technology stack to identify gaps and opportunities.",
      },
      {
        title: "Strategy & Roadmap",
        description: "We create a phased transformation plan with clear milestones, costs, and expected outcomes.",
      },
      {
        title: "Implementation",
        description: "We execute the plan with minimal disruption — migrating systems, integrating tools, and training your team.",
      },
      {
        title: "Measure & Optimize",
        description: "We track KPIs post-launch and continuously optimize to ensure you're getting maximum value.",
      },
    ],
    technologies: ["Cloud Platforms (AWS, Azure, GCP)", "ERP Systems", "CRM Platforms", "Automation Tools", "API Integrations"],
  },
  cybersecurity: {
    title: "Cybersecurity & Compliance",
    headline: "Protect your business from evolving threats",
    description:
      "Cybersecurity isn't just for large enterprises. We deliver enterprise-grade security assessments, implementations, and compliance guidance tailored to SME budgets and risk profiles.",
    features: [
      "Comprehensive security audits and vulnerability assessments",
      "Penetration testing and threat modeling",
      "Security policy development and implementation",
      "Compliance guidance (SOC 2, ISO 27001, NDPR, GDPR)",
      "Incident response planning and tabletop exercises",
      "Employee security awareness training",
    ],
    process: [
      {
        title: "Risk Assessment",
        description: "We identify your critical assets, threat vectors, and current security posture.",
      },
      {
        title: "Gap Analysis",
        description: "We map your current state against industry standards and compliance requirements.",
      },
      {
        title: "Remediation",
        description: "We implement security controls, policies, and tools to close identified gaps.",
      },
      {
        title: "Ongoing Monitoring",
        description: "We set up continuous monitoring and periodic reassessments to stay ahead of threats.",
      },
    ],
    technologies: ["SIEM Solutions", "Endpoint Protection", "Network Security", "Identity Management", "Encryption"],
  },
  "business-intelligence": {
    title: "Business Intelligence",
    headline: "Turn your data into a competitive advantage",
    description:
      "Most businesses sit on valuable data they never use. We help you build the infrastructure and dashboards to make data-driven decisions — from sales analytics to operational reporting.",
    features: [
      "Data warehouse design and implementation",
      "Dashboard and reporting development",
      "ETL pipeline architecture",
      "Predictive analytics and forecasting",
      "Data governance and quality frameworks",
      "Self-service analytics training for teams",
    ],
    process: [
      {
        title: "Data Discovery",
        description: "We catalog your data sources, assess quality, and identify high-value analytics opportunities.",
      },
      {
        title: "Architecture Design",
        description: "We design a scalable data infrastructure that fits your current needs and future growth.",
      },
      {
        title: "Build & Deploy",
        description: "We implement pipelines, build dashboards, and connect your data sources into a unified view.",
      },
      {
        title: "Enable & Scale",
        description: "We train your team to use the tools independently and expand analytics coverage over time.",
      },
    ],
    technologies: ["Power BI", "Tableau", "SQL & NoSQL Databases", "Python/R", "Cloud Data Platforms"],
  },
  "custom-development": {
    title: "Custom Development",
    headline: "Software built for your exact needs",
    description:
      "Off-the-shelf software doesn't always fit. We design and build custom web applications, APIs, and internal tools that solve your specific business challenges — built to scale, built to last.",
    features: [
      "Full-stack web application development",
      "REST and GraphQL API design and development",
      "Internal tools and admin dashboards",
      "Third-party integrations and middleware",
      "Mobile-responsive progressive web apps",
      "Code audit and technical debt reduction",
    ],
    process: [
      {
        title: "Requirements Gathering",
        description: "We work closely with your team to define scope, user stories, and technical requirements.",
      },
      {
        title: "Architecture & Design",
        description: "We design the system architecture, choose the right tech stack, and create wireframes.",
      },
      {
        title: "Agile Development",
        description: "We build in sprints with regular demos, so you see progress and can provide feedback continuously.",
      },
      {
        title: "Launch & Support",
        description: "We deploy to production, monitor performance, and provide ongoing maintenance and feature development.",
      },
    ],
    technologies: ["React / Next.js", "Node.js / Python", "PostgreSQL / MongoDB", "AWS / Vercel", "Docker / CI/CD"],
  },
  "cloud-infrastructure": {
    title: "Cloud Infrastructure",
    headline: "Scale with confidence in the cloud",
    description:
      "Whether you're migrating from on-premise or optimizing an existing cloud setup, we design and implement infrastructure that's reliable, secure, and cost-effective.",
    features: [
      "Cloud readiness assessment and migration planning",
      "Multi-cloud and hybrid architecture design",
      "Infrastructure as Code (IaC) implementation",
      "Cost optimization and FinOps practices",
      "Disaster recovery and high availability setup",
      "DevOps and CI/CD pipeline implementation",
    ],
    process: [
      {
        title: "Infrastructure Audit",
        description: "We assess your current infrastructure, costs, and performance to identify optimization opportunities.",
      },
      {
        title: "Migration Strategy",
        description: "We design a migration plan that minimizes risk and downtime while maximizing cloud benefits.",
      },
      {
        title: "Build & Migrate",
        description: "We set up the cloud environment, migrate workloads, and implement monitoring and alerting.",
      },
      {
        title: "Optimize & Manage",
        description: "We continuously optimize for cost and performance, and provide managed services as needed.",
      },
    ],
    technologies: ["AWS / Azure / GCP", "Terraform / Pulumi", "Docker / Kubernetes", "CI/CD Pipelines", "Monitoring (Datadog, CloudWatch)"],
  },
  "performance-optimization": {
    title: "Performance Optimization",
    headline: "Make your systems faster and more efficient",
    description:
      "Slow systems cost money and frustrate users. We identify bottlenecks across your stack — from database queries to frontend rendering — and implement targeted fixes that deliver measurable improvements.",
    features: [
      "Application performance profiling and benchmarking",
      "Database query optimization",
      "Frontend performance and Core Web Vitals improvement",
      "Caching strategy design and implementation",
      "Load testing and capacity planning",
      "Architecture refactoring for scalability",
    ],
    process: [
      {
        title: "Performance Audit",
        description: "We profile your application, identify bottlenecks, and measure baseline performance metrics.",
      },
      {
        title: "Prioritized Fix Plan",
        description: "We create a ranked list of optimizations by impact and effort, so you get the biggest wins first.",
      },
      {
        title: "Implementation",
        description: "We implement fixes across the stack — database, backend, frontend, and infrastructure.",
      },
      {
        title: "Verification",
        description: "We re-benchmark, confirm improvements, and set up ongoing performance monitoring.",
      },
    ],
    technologies: ["APM Tools", "CDN & Edge Computing", "Redis / Memcached", "Load Balancers", "Profiling Tools"],
  },
}

const allSlugs = Object.keys(serviceDetails)

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = serviceDetails[slug]
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    notFound()
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            {service.headline}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto text-balance">
            {service.description}
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Get Started <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground/70">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.process.map((step, index) => (
              <Card key={step.title} className="bg-card border-border p-8">
                <span className="text-4xl font-bold text-accent/30">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">{step.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-muted border border-border rounded-full text-sm text-foreground/70">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
