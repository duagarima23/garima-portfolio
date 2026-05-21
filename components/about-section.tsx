"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Briefcase, Code2 } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    { icon: GraduationCap, label: 'Bennett University', value: 'CGPA: 8.66' },
    { icon: Award, label: 'Published Researcher', value: 'ICCSCE-2025' },
    { icon: Briefcase, label: 'Experience', value: 'Outlier.ai' },
    { icon: Code2, label: 'Specialization', value: 'AI/ML & NLP' },
  ]

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m a passionate <span className="text-foreground font-medium">AI/ML Engineer</span> and 
              <span className="text-foreground font-medium"> Data Scientist</span> with a deep interest in 
              building intelligent systems that solve real-world problems. My expertise spans across 
              <span className="text-primary font-medium"> machine learning</span>, 
              <span className="text-primary font-medium"> natural language processing</span>, and 
              <span className="text-primary font-medium"> large language models</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently pursuing my final year in Computer Science with a specialization in Data Science at 
              <span className="text-foreground font-medium"> Bennett University</span>, I have hands-on experience 
              in fine-tuning LLMs, building end-to-end ML pipelines, and developing AI-powered applications. 
              My work at <span className="text-foreground font-medium">Outlier.ai</span> gave me valuable industry 
              exposure in improving LLM response quality and contextual understanding.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a <span className="text-foreground font-medium">published researcher</span>   {" "}at ICCSCE-2025, 
              I&apos;m committed to contributing to the advancement of AI technologies while staying at the 
              forefront of emerging trends in the field.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center group hover:glow-cyan transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm text-muted-foreground mb-1">{item.label}</h3>
                <p className="font-semibold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
