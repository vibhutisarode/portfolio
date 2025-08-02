'use client'

import { motion } from 'framer-motion'

interface Scene3DProps {
  children: React.ReactNode
  className?: string
}

const Scene3D = ({ children, className = '' }: Scene3DProps) => {
  const floatingShapes = [
    { size: 'w-4 h-4', color: 'bg-primary/20', delay: 0 },
    { size: 'w-6 h-6', color: 'bg-secondary/20', delay: 1 },
    { size: 'w-3 h-3', color: 'bg-accent/20', delay: 2 },
    { size: 'w-5 h-5', color: 'bg-primary/30', delay: 3 },
    { size: 'w-2 h-2', color: 'bg-secondary/30', delay: 4 },
  ]

  return (
    <div className={`relative ${className}`} style={{ perspective: '1000px' }}>
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.size} ${shape.color} rounded-full`}
            style={{
              left: `${10 + index * 20}%`,
              top: `${20 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: shape.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Floating triangles */}
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={`triangle-${index}`}
            className="absolute w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-primary/10"
            style={{
              right: `${15 + index * 25}%`,
              top: `${30 + index * 20}%`,
              transform: 'rotateX(45deg) rotateY(45deg)',
            }}
            animate={{
              rotateZ: [0, 360],
              y: [0, -30, 0],
              rotateX: [45, 90, 45],
            }}
            transition={{
              duration: 6 + index * 2,
              repeat: Infinity,
              delay: index * 1.5,
              ease: 'linear',
            }}
          />
        ))}

        {/* Gradient orbs */}
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={`orb-${index}`}
            className="absolute rounded-full"
            style={{
              width: `${3 + index}rem`,
              height: `${3 + index}rem`,
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)`,
              left: `${80 - index * 20}%`,
              bottom: `${10 + index * 15}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: index * 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content with 3D context */}
      <div style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  )
}

export default Scene3D