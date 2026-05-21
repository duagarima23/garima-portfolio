"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="research" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Published <span className="text-gradient">Research</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 group hover:glow-cyan transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                  <FileText className="h-4 w-4" />
                  ICCSCE-2025
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
                  Future Directions in Fog Computing: Resource Allocation Strategies
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Published and presented research focused on comparative analysis of resource allocation 
                  techniques in fog computing environments. The paper explores optimization strategies 
                  for efficient resource management in distributed computing architectures.
                </p>

                <Button className="glow-cyan group" asChild>
                  <a 
                    href="https://www.atlantis-press.com/proceedings/iccsce-25/126017537" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Research Paper
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
