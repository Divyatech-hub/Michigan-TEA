import './styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Michigan TEA — Technology Exploration Award',
  description: 'Michigan chapter TEA (in affiliation with NCWIT) — info, timeline, and submission.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for a polished typographic look */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
