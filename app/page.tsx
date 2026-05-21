import { ParticlesBackground } from '@/components/particles-background'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { ResearchSection } from '@/components/research-section'
import { CertificationsSection } from '@/components/certifications-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { LoadingScreen } from '@/components/loading-screen'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
