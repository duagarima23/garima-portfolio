"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

const exploreMyCode = [
  { icon: Github, href: 'https://github.com/duagarima23', label: 'GitHub' },
  { 
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.022.074.007.154-.045.24l-6.248 6.038 6.568 8.988c.069.113.084.195.045.284z"/>
      </svg>
    ), 
    href: 'https://www.kaggle.com/garimadua2301', 
    label: 'Kaggle' 
  },
]

const socialMedia = [
  { icon: Instagram, href: 'https://www.instagram.com/garimadua2301?igsh=Z3d3Y2NrYzN3M3Yx', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/GarimaDua2301', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/garima-dua-61599a248/', label: 'LinkedIn' },
]

const aboutLinks = [
  { label: 'AI/ML Engineer', href: '#about' },
  { label: 'Noida, India', href: '#contact' },
  { label: 'garimadua2301@gmail.com', href: 'mailto:garimadua2301@gmail.com' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-border bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Explore My Code */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Explore My Code</h3>
            <div className="flex flex-col gap-4">
              {exploreMyCode.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  {typeof item.icon === 'function' ? (
                    <item.icon />
                  ) : (
                    <item.icon className="h-4 w-4" />
                  )}
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Social Media</h3>
            <div className="flex flex-col gap-4">
              {socialMedia.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">About</h3>
            <div className="flex flex-col gap-4">
              {aboutLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_self'}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-8 border-t border-border relative">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Garima Dua. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-8 right-8 glow-cyan-hover z-40"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </footer>
  )
}
