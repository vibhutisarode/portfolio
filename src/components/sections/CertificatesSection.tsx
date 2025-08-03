'use client'

import { motion } from 'framer-motion'
import { Award, Download, ExternalLink, Calendar, Building } from 'lucide-react'
import { useState } from 'react'
import Card3D from '@/components/3d/Card3D'

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)

  const certificates = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University / Coursera',
      date: '2024',
      description: 'Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
      credentialId: 'ML2024001',
      image: '/api/placeholder/300/200',
      type: 'Course Completion',
      verified: true
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023',
      description: 'Complete full-stack web development certification covering frontend and backend technologies.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      credentialId: 'FCC2023WD',
      image: '/api/placeholder/300/200',
      type: 'Certification',
      verified: true
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM / Coursera',
      date: '2023',
      description: 'Data science fundamentals using Python, including data analysis, visualization, and machine learning basics.',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
      credentialId: 'IBM2023DS',
      image: '/api/placeholder/300/200',
      type: 'Professional Certificate',
      verified: true
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, and pricing.',
      skills: ['Cloud Computing', 'AWS', 'Cloud Security', 'Architecture'],
      credentialId: 'AWS2023CP',
      image: '/api/placeholder/300/200',
      type: 'Cloud Certification',
      verified: true
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta / Coursera',
      date: '2023',
      description: 'Advanced React development skills including hooks, context, testing, and modern development practices.',
      skills: ['React', 'JavaScript', 'JSX', 'Testing', 'State Management'],
      credentialId: 'META2023RD',
      image: '/api/placeholder/300/200',
      type: 'Professional Certificate',
      verified: true
    },
    {
      title: 'Git & Version Control',
      issuer: 'GitHub',
      date: '2022',
      description: 'Comprehensive understanding of Git version control, GitHub workflows, and collaborative development.',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      credentialId: 'GH2022VC',
      image: '/api/placeholder/300/200',
      type: 'Completion Badge',
      verified: true
    }
  ]

  const categories = ['All', 'Machine Learning', 'Web Development', 'Cloud', 'Data Science']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => 
        cert.skills.some(skill => 
          selectedCategory === 'Machine Learning' && ['Machine Learning', 'TensorFlow', 'Neural Networks'].includes(skill) ||
          selectedCategory === 'Web Development' && ['React', 'JavaScript', 'HTML/CSS', 'Node.js'].includes(skill) ||
          selectedCategory === 'Cloud' && ['Cloud Computing', 'AWS'].includes(skill) ||
          selectedCategory === 'Data Science' && ['Data Analysis', 'Python', 'Pandas'].includes(skill)
        )
      )

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certificates & Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning is at the heart of my journey. Here are some of the certifications 
            and achievements that showcase my commitment to staying updated with industry standards.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.credentialId}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card3D 
                className="h-full"
                glowColor={
                  certificate.type === 'Course Completion' ? '#8b5cf6' :
                  certificate.type === 'Certification' ? '#06b6d4' :
                  certificate.type === 'Professional Certificate' ? '#10b981' :
                  certificate.type === 'Cloud Certification' ? '#f59e0b' :
                  '#ef4444'
                }
              >
                <div className="bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col group">
                  {/* 3D Certificate Header */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        rotateY: 15,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      <Award className="w-16 h-16 text-primary/60" />
                    </motion.div>
                    
                    {/* Floating particles */}
                    {Array.from({ length: 6 }).map((_, i) => {
                      const positions = [
                        { left: '30%', top: '20%' },
                        { left: '70%', top: '25%' },
                        { left: '80%', top: '60%' },
                        { left: '60%', top: '80%' },
                        { left: '20%', top: '75%' },
                        { left: '15%', top: '45%' }
                      ]
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary/40 rounded-full"
                          style={positions[i]}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 0.8, 0.4],
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: 'easeInOut'
                          }}
                        />
                      )
                    })}
                    
                    {/* Verified Badge */}
                    {certificate.verified && (
                      <motion.div 
                        className="absolute top-4 right-4 z-20"
                        animate={{
                          boxShadow: [
                            '0 0 10px rgba(34, 197, 94, 0.3)',
                            '0 0 20px rgba(34, 197, 94, 0.6)',
                            '0 0 10px rgba(34, 197, 94, 0.3)',
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 border border-green-500/30 backdrop-blur-sm">
                          <Award className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Holographic overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      }}
                    />
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <motion.h3 
                          className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {certificate.title}
                        </motion.h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Building className="w-4 h-4 mr-1" />
                          <span className="font-medium">{certificate.issuer}</span>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {certificate.type}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{certificate.date}</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                      {certificate.description}
                    </p>

                    {/* Skills with 3D hover effect */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.slice(0, 3).map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium cursor-pointer"
                          whileHover={{ 
                            scale: 1.1,
                            rotateZ: 2,
                            boxShadow: '0 4px 8px rgba(139, 92, 246, 0.2)'
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                      {certificate.skills.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                          +{certificate.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-auto">
                      <motion.button
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCertificate(selectedCertificate === index ? null : index)}
                      >
                        {selectedCertificate === index ? 'Show Less' : 'View Details'}
                      </motion.button>
                      
                      <motion.button
                        className="p-3 text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg"
                        whileHover={{ 
                          scale: 1.1,
                          rotateZ: 5,
                          borderColor: 'rgba(139, 92, 246, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        title="Download Certificate"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        className="p-3 text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg"
                        whileHover={{ 
                          scale: 1.1,
                          rotateZ: -5,
                          borderColor: 'rgba(139, 92, 246, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        title="Verify Certificate"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Expanded Details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: selectedCertificate === index ? 'auto' : 0,
                        opacity: selectedCertificate === index ? 1 : 0
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border pt-4 mt-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Credential ID:</span>
                            <span className="font-mono text-xs">{certificate.credentialId}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {certificate.skills.map((skill) => (
                              <motion.span
                                key={skill}
                                className="px-2 py-1 bg-primary/5 text-primary rounded text-xs cursor-pointer"
                                whileHover={{ 
                                  scale: 1.05,
                                  backgroundColor: 'rgba(139, 92, 246, 0.15)'
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* 3D Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: certificates.length.toString(), label: 'Certificates', color: '#8b5cf6' },
            { number: '4+', label: 'Platforms', color: '#06b6d4' },
            { number: '100%', label: 'Verified', color: '#10b981' },
            { number: '2024', label: 'Latest', color: '#f59e0b' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-card rounded-lg border border-border relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${stat.color}40, transparent 70%)`
                }}
              />
              <motion.div
                className="relative z-10"
                style={{ transform: 'translateZ(10px)' }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: stat.color }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CertificatesSection
