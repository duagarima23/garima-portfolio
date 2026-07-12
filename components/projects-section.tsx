"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {  Github, Folder } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "DocMind AI – Enterprise Knowledge Assistant",
    description:
      "Production-ready RAG application that enables conversational Q&A over PDF, DOCX, and TXT documents using semantic retrieval, hybrid search, and Google Gemini. Features conversation memory, source citations, and multi-document querying.",
    tech: [
      "Python",
      "Streamlit",
      "LangChain",
      "Gemini",
      "ChromaDB",
      "RAG",
      "BM25",
      "Render",
    ],
    github: "https://github.com/duagarima23/production-rag-assistant",
    demo: "",
    category: "Generative AI",
  },
  {
    title: "CareerForge – AI Career Assistant",
    description:
      "AI-powered career assistant that analyzes resumes against job descriptions to generate ATS insights, skill gap analysis, fit scores, resume critique, cover letters, interview preparation, and downloadable PDF reports.",
    tech: [
      "Python",
      "Streamlit",
      "OpenAI SDK",
      "PyPDF2",
      "ReportLab",
    ],
    github: "https://github.com/duagarima23/CareerForge",
    demo: "",
    category: "Generative AI",
  },
  {
    title: "Hospital Emergency Room Analytics Dashboard",
    description:
      "Interactive Power BI dashboard analyzing over 9,000 patient records to uncover operational KPIs, patient demographics, referral patterns, and hospital performance using SQL and DAX.",
    tech: [
      "Power BI",
      "SQL",
      "DAX",
      "Power Query",
    ],
    github: "https://github.com/duagarima23/Hospital-ER-Dashboard",
    demo: "",
    category: "Data Analytics",
  },
  {
    title: "Sentiment Analysis on E-commerce Reviews",
    description:
      "Built an NLP pipeline using TF-IDF and Decision Tree classification to predict customer sentiment, deployed as an interactive Streamlit application for real-time inference.",
    tech: [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "Decision Tree",
      "Streamlit",
    ],
    github: "https://github.com/duagarima23/Flipkart-reviews-sentiment-analysis",
    demo: "",
    category: "Machine Learning",
  },
  {
    title: "Stock Market Forecasting using LSTM",
    description:
      "Developed a deep learning model using LSTM networks to forecast stock prices from historical market data, with interactive visualization of trends and predictions.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "LSTM",
      "Pandas",
      "Matplotlib",
    ],
    github: "https://github.com/duagarima23/Stock_market_analysis",
    demo: "",
    category: "Deep Learning",
  },
];
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
