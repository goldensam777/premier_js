import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Background } from '@/components/Background'
import { PageWrapper } from '@/components/PageWrapper'

export const metadata: Metadata = {
  title: 'Studio NOVA — Design & développement digital',
  description: 'Studio de création digitale. Design, technologie et innovation au service de votre vision.',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="theme-glass">
        <Background />
        <Header />
        <main><PageWrapper>{children}</PageWrapper></main>
        <Footer />
      </body>
    </html>
  )
}
