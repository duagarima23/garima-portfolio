"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold">
            Contact <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              action="https://formsubmit.co/garimadua2301@gmail.com"
              method="POST"
              className="glass rounded-2xl p-8 space-y-6"
            >

              {/* Hidden Inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Portfolio Contact!" />

              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-foreground"
                >
                  Name
                </label>

                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="bg-secondary/70 border-none focus:ring-2 focus:ring-primary h-12"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground"
                >
                  Email
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-secondary/70 border-none focus:ring-2 focus:ring-primary h-12"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  Message
                </label>

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="bg-secondary/70 border-none focus:ring-2 focus:ring-primary resize-y"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </span>
              </Button>
            </form>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6 mt-8"
          >

            {/* Email */}
            <a
              href="mailto:garimadua2301@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/duagarima23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/garima-dua-61599a248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}