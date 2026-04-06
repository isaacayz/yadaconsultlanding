"use client"

import { useState } from "react"
import { Menu, X, Calendar } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/yada-logo.png"
              alt="Yada Consulting Services Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-foreground/70 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/#approach" className="text-foreground/70 hover:text-foreground transition-colors">
            Approach
          </Link>
          <Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <ThemeToggle />
          <a href="https://calendly.com/yadaconsult" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Calendar size={16} />
              Schedule Call
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/#services" className="text-foreground/70 hover:text-foreground" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/about" className="text-foreground/70 hover:text-foreground" onClick={closeMenu}>
                About
              </Link>
              <Link href="/#approach" className="text-foreground/70 hover:text-foreground" onClick={closeMenu}>
                Approach
              </Link>
              <Link href="/blog" className="text-foreground/70 hover:text-foreground" onClick={closeMenu}>
                Blog
              </Link>
              <Link href="/contact" className="text-foreground/70 hover:text-foreground" onClick={closeMenu}>
                Contact
              </Link>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <ThemeToggle />
                <a href="https://calendly.com/yadaconsult" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    <Calendar size={16} />
                    Schedule Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
