"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import Link  from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div  className="flex items-center gap-3">
          <Link href="/">
          <Image
            src="/yada-logo.png"
            alt="Yada Consulting Services Logo"
            width={120}
            height={120}
            className="w-28 h-28 object-contain"
          />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-foreground/70 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/#approach" className="text-foreground/70 hover:text-foreground transition-colors">
            Approach
          </Link>
          <Link href="/#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>


        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent"
          
          onClick={() => {
            const phoneNumber = "+2348071982054"; // Replace with your desired phone number
            window.location.href = `tel:${phoneNumber}`;
          }}>
            Schedule Call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <a href="#services" className="text-foreground/70 hover:text-foreground">
                Services
              </a>
              <a href="#approach" className="text-foreground/70 hover:text-foreground">
                Approach
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-foreground">
                Contact
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              
              onClick={() => {
                  const phoneNumber = "+2348071982054"; // Replace with your desired phone number
                  window.location.href = `tel:${phoneNumber}`;
                }}>
                  Schedule Call</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
