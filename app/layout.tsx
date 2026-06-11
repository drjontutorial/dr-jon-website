import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr Jon Tutorial | Physics PhD | A-Level & GCSE Tuition',
  description: '15+ Years of Experience | 5000+ Questions Database | Expert Exam Preparation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
