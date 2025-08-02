'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CertificatesSection from '@/components/sections/CertificatesSection'
import ContactSection from '@/components/sections/ContactSection'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
