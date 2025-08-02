'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import { useState } from 'react'

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: '3D Portfolio',
      description: 'An interactive 3D portfolio website built with Three.js and React, featuring immersive animations and modern web technologies.',
      technologies: ['Three.js', 'React', 'WebGL', 'GSAP', 'CSS3'],
      githubUrl: 'https://github.com/vibhutisarode/3D_Portfolio',
      liveUrl: '#',
      stars: 12,
      forks: 5,
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      title: 'Data Science Projects',
      description: 'A comprehensive collection of data science projects including machine learning models, data analysis, and visualization tools.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
      githubUrl: 'https://github.com/vibhutisarode/datascience',
      liveUrl: '#',
      stars: 8,
      forks: 3,
      category: 'Data Science',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      title: 'Shopping Website',
      description: 'A full-stack e-commerce application with modern UI, secure payment integration, and comprehensive admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com/vibhutisarode/shopping-website-',
      liveUrl: '#',
      stars: 15,
      forks: 7,
      category: 'Full-Stack',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      title: 'Minor Project',
      description: 'An innovative solution developed as part of academic coursework, showcasing problem-solving skills and technical implementation.',
      technologies: ['Python', 'Flask', 'SQLite', 'Bootstrap', 'JavaScript'],
      githubUrl: 'https://github.com/vibhutisarode/minor-project',
      liveUrl: '#',
      stars: 6,
      forks: 2,
      category: 'Academic',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ]

  const categories = ['All', 'Web Development', 'Data Science', 'Full-Stack', 'Academic']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my skills in AI, web development, 
            and full-stack applications. Each project represents a unique challenge and learning experience.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`relative bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-6xl font-bold text-primary/30">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4"
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
            <motion.a
              href="https://github.com/vibhutisarode"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>Visit GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
