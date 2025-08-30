import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FINTHEM.NU - Construction Company',
  description: 'Professional construction services for private residential, residential developments, marine, and aviation projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
