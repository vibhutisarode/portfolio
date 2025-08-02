import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vibhuti Sarode - AI Enthusiast | Full-Stack Learner',
  description: 'Portfolio of Vibhuti Sarode - AI Enthusiast, Full-Stack Learner, and Tech Community Builder',
  keywords: 'Vibhuti Sarode, AI, Machine Learning, Full-Stack Developer, Portfolio',
  authors: [{ name: 'Vibhuti Sarode' }],
  openGraph: {
    title: 'Vibhuti Sarode - AI Enthusiast | Full-Stack Learner',
    description: 'Portfolio of Vibhuti Sarode - AI Enthusiast, Full-Stack Learner, and Tech Community Builder',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
