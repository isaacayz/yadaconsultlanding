import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">Yada Consulting Services</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Strategic technology consulting for SMEs and companies across Nigeria and the United States.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/digital-transformation" className="text-foreground/60 hover:text-foreground transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-foreground/60 hover:text-foreground transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-infrastructure" className="text-foreground/60 hover:text-foreground transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/custom-development" className="text-foreground/60 hover:text-foreground transition-colors">
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/60">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:support@yadaconsult.com" className="hover:text-foreground transition-colors">
                  support@yadaconsult.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+2348071982054" className="hover:text-foreground transition-colors">
                  +234 (807) 198-2054
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <MapPin size={16} className="flex-shrink-0" />
                <span>Magodo Lagos, NG</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+12816038214" className="hover:text-foreground transition-colors">
                  +1 (281) 603-8214
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <MapPin size={16} className="flex-shrink-0" />
                <span>2701 Little Elm Pkwy Ste 100, Austin, TX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">&copy; {new Date().getFullYear()} Yada Consulting Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/2348071982054" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Contact us on WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="https://linkedin.com/in/isaacige" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Follow us on LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/yadaconsult" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Follow us on X (Twitter)">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com/yadaconsult" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Follow us on Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
