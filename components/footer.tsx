import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Y</span>
              </div>
              <span className="text-lg font-bold text-foreground">Yada</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Strategic technology consulting for SMEs and companies worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Custom Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/60">
                <Mail size={16} />
                <a href="mailto:hello@yada.com" className="hover:text-foreground transition-colors">
                  support@yadaconsult.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <Phone size={16} />
                <a href="tel:+2348071982054" className="hover:text-foreground transition-colors">
                  +234 (807) 198-2054
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <MapPin size={16} />
                <span>Lagos, NG</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">© 2025 Yada Consulting Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/isaacige" target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/yadaconsult" target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com/yadaconsult" target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
