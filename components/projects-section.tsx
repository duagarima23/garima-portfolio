"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {  Github, Folder } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'CareerForge – AI Career Assistant',
    description: 'AI-powered career assistant platform featuring resume critique, job fit scoring, skill matching, AI-generated reports, and interactive Streamlit UI.',
    tech: ['Python', 'Streamlit', 'LangChain', 'ReportLab'],
    github: 'https://github.com/duagarima23/CareerForge',
    featured: true,
  },
  {
    title: 'Hospital Emergency Room Analytics Dashboard',
    description: 'Power BI dashboard analyzing 9,000+ patient records to identify operational and demographic trends using DAX and SQL analytics.',
    tech: ['Power BI', 'SQL', 'DAX'],
    github: 'https://github.com/duagarima23/Hospital-ER-Dashboard',
    featured: true,
  },
  {
    title: 'Sentiment Analysis on E-commerce Reviews',
    description: 'End-to-end NLP pipeline using TF-IDF and machine learning for real-time sentiment prediction with Streamlit deployment.',
    tech: ['Python', 'TF-IDF', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/duagarima23/Flipkart-reviews-sentiment-analysis',
    featured: true,
  },
  {
    title: 'Stock Market Forecasting using LSTM',
    description: 'Deep learning time-series forecasting model using LSTM networks with interactive analytics visualization.',
    tech: ['Python', 'TensorFlow', 'Keras'],
    github: 'https://github.com/duagarima23/Stock_market_analysis',
    featured: true,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 hover:glow-cyan transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Folder className="h-6 w-6" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
