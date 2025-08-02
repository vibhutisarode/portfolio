'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2, Users } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'IEEE Signal Processing Society',
      location: 'Remote',
      period: '2024',
      type: 'Internship',
      description: 'Worked on machine learning projects, MLOps implementation, and Flask application development. Gained hands-on experience with ML pipelines and deployment strategies.',
      technologies: ['Python', 'Machine Learning', 'MLOps', 'Flask', 'Data Analysis'],
      icon: Building2,
      color: 'bg-blue-500'
    },
    {
      title: 'Public Relations Officer',
      company: 'GeeksforGeeks',
      location: 'Remote',
      period: '2023-2024',
      type: 'Leadership Role',
      description: 'Led community management initiatives, developed engaging content, and managed CRM systems. Focused on building strong relationships within the tech community and driving engagement.',
      technologies: ['CRM', 'Content Development', 'Community Management', 'Leadership', 'Communication'],
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Research Intern',
      company: 'Vishwamanthan Research Foundation',
      location: 'On-site',
      period: '2023',
      type: 'Research',
      description: 'Conducted research in emerging technologies, contributed to research papers, and collaborated with experienced researchers on innovative projects.',
      technologies: ['Research', 'Data Analysis', 'Technical Writing', 'Innovation', 'Collaboration'],
      icon: Building2,
      color: 'bg-purple-500'
    },
    {
      title: 'Content Intern',
      company: 'Kshitiksha Foundation',
      location: 'Remote',
      period: '2023',
      type: 'Content Creation',
      description: 'Created educational content, managed social media presence, and contributed to knowledge sharing initiatives in the tech community.',
      technologies: ['Content Writing', 'Social Media', 'Education', 'Marketing', 'Creativity'],
      icon: Users,
      color: 'bg-orange-500'
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey spans across machine learning, community building, research, and content creation, 
            providing me with diverse experience in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${exp.color} bg-opacity-20`}>
                          <exp.icon className={`w-5 h-5 text-white`} style={{ color: exp.color.replace('bg-', '').replace('-500', '') }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, collaborations, and innovative projects.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
