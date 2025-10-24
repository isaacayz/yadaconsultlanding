"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div  className="flex items-center gap-3">
          <Image
            src="/yada-logo.png"
            alt="Yada Consulting Services Logo"
            width={80}
            height={80}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#approach" className="text-foreground/70 hover:text-foreground transition-colors">
            Approach
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:flex gap-4">
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
