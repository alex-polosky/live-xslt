import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>
        <script src="https://github.com/alex-polosky/live-xslt/releases/download/0.0.1/SaxonJS2.js"></script>
      </head> */}
      <body>{children}</body>
    </html>
  )
}
