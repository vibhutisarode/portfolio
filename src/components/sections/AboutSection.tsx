'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Users, Lightbulb } from 'lucide-react'

const AboutSection = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine Learning, Deep Learning, MLOps, and AI research with practical exposure through internships.'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Strong foundations in Python, web development, and building scalable applications from frontend to backend.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Leadership experience in tech communities, content development, and fostering collaborative environments.'
    },
    {
      icon: Lightbulb,
      title: 'Research & Innovation',
      description: 'Experience in research internships, exploring new technologies, and contributing to innovative projects.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a <span className="text-primary font-semibold">fresher in Artificial Intelligence</span> with 
                strong Python and full-stack development foundations. My journey in tech has been enriched by 
                hands-on experience through various internships and active participation in tech communities.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Through my roles at <span className="text-primary font-semibold">IEEE Signal Processing Society</span>, 
                <span className="text-primary font-semibold"> GeeksforGeeks</span>, and research internships, 
                I've developed expertise in machine learning, MLOps, community management, and leadership.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm passionate about leveraging AI to solve real-world problems and building inclusive tech 
                communities that foster learning and innovation. My goal is to contribute to cutting-edge AI 
                research while developing scalable solutions that make a positive impact.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {['Python', 'Machine Learning', 'React', 'Next.js', 'Node.js', 'Flask', 'MLOps', 'Git', 'Leadership'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '4+', label: 'Internships' },
            { number: '10+', label: 'Projects' },
            { number: '3+', label: 'Communities' },
            { number: '100%', label: 'Dedication' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-card rounded-lg border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
