"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, Brain, Bot, BarChart3, Layers } from 'lucide-react'

const certifications = [
  {
    title: 'Improving Deep Neural Networks',
    issuer: 'Coursera',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://coursera.org/share/a1afe5082c95bc8070ce12d1b98f814a',
  },
  {
    title: 'IBM ML Professional Certificate',
    issuer: 'IBM',
    icon: Bot,
    color: 'from-cyan-500 to-teal-500',
    link: 'https://coursera.org/share/bd7e8d6ad5277e11514245d9dc38c572',
  },
  {
    title: 'IBM Data Analyst Professional Certificate',
    issuer: 'IBM',
    icon: BarChart3,
    color: 'from-teal-500 to-emerald-500',
    link: 'https://coursera.org/share/9ffdee8e4b76e1c05b9aa0e223c5831f',
  },
  {
    title: 'Data Structures',
    issuer: 'UC San Diego / Coursera',
    icon: Layers,
    color: 'from-emerald-500 to-cyan-500',
    link: 'https://coursera.org/share/4a10965f5fed6aa08c8d235c40e159da',
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full glass rounded-2xl p-6 hover:glow-cyan transition-all duration-300 flex items-start gap-4 cursor-pointer"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <cert.icon className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    {cert.issuer}
                  </p>
                </div>

                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}