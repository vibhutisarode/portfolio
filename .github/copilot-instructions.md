<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Website - Copilot Instructions

This is a modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Project Structure
- Built with Next.js 15 App Router
- TypeScript for type safety
- Tailwind CSS for styling with custom design system
- Framer Motion for smooth animations
- Dark/Light mode support with next-themes
- Responsive design for all screen sizes

## Key Features
- Hero section with animated background and profile
- About section with skills and statistics
- Experience timeline with detailed cards
- Projects showcase with filtering
- Certificates gallery with modal details
- Contact form with validation
- Dark/light mode toggle
- Smooth animations and transitions

## Component Architecture
- Layout components in `/src/components/layout/`
- Section components in `/src/components/sections/`
- Shared components use consistent naming
- All components are client-side with 'use client' directive
- Framer Motion used for animations
- Lucide React for icons

## Styling Guidelines
- Use Tailwind CSS classes
- Follow the custom color scheme defined in globals.css
- Use CSS variables for theming
- Responsive design with mobile-first approach
- Consistent spacing and typography

## Best Practices
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Semantic HTML structure
- Accessibility considerations
- Performance optimizations
- SEO-friendly metadata

## Development Notes
- Use motion components from framer-motion for animations
- Theme switching handled by next-themes
- Contact form uses local state (no backend integration yet)
- All external links include proper rel attributes
- Images use placeholder API for demonstration
