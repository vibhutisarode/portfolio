# Vibhuti Sarode - Portfolio Website

A modern, responsive portfolio website showcasing my journey as an AI enthusiast, full-stack learner, and tech community builder.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Theme switcher for better user experience
- **Interactive Animations**: Powered by Framer Motion for engaging transitions
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🏗️ Built With

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📋 Sections

1. **Hero Section** - Introduction with name, title, and call-to-action buttons
2. **About Me** - Professional summary and key skills
3. **Experience** - Timeline of internships and roles
4. **Projects** - Showcase of featured GitHub repositories
5. **Certificates** - Professional certifications and achievements
6. **Contact** - Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/vibhutisarode/portfolio
cd portfolio
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── CertificatesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   └── ProjectsSection.tsx
│   └── theme-provider.tsx
\`\`\`

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js` and uses CSS variables for theming. You can customize colors by modifying the variables in `globals.css`.

### Content
Update the personal information in each section component:
- Hero section: Name, title, social links
- About section: Professional summary, skills
- Experience section: Work history and internships
- Projects section: GitHub repositories
- Certificates section: Professional certifications
- Contact section: Contact information

### Animations
Animations are handled by Framer Motion. You can customize them by modifying the motion props in each component.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

Alternatively, you can deploy to:
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and make it your own! If you find any bugs or have suggestions, please open an issue.

## 📧 Contact

Vibhuti Sarode - [vibhutisarode@example.com](mailto:vibhutisarode@example.com)

Project Link: [https://github.com/vibhutisarode/portfolio](https://github.com/vibhutisarode/portfolio)

---

⭐ Don't forget to star this repository if you found it helpful!
