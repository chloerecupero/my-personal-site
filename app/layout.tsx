import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header  from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Grape_Nuts } from 'next/font/google'

const handwriting = Grape_Nuts({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-handwriting',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Chloe Recupero',
  description:
    'Personal portfolio for Chloe Recupero, a Computer Science student at the University of Washington interested in software engineering, data science, and human-centered technology.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={handwriting.variable}>      
      <body
          className={`${geist.variable} ${geistMono.variable} ${handwriting.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-3xl flex-1 px-6 pt-16">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
