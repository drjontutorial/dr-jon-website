import type { Metadata } from 'next'
import './globals.css'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Dr Jon Tutorial | Physics PhD | A-Level & GCSE Tuition',
  description: '15+ Years of Experience | 5000+ Questions Database | GCSE • A-Level • Oxbridge Admissions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Hero />
        {children}
      </body>
    </html>
  )
}
