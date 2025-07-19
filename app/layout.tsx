import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Humanizer',
  description: 'Application',
  generator: 'Created by Vishal',
  keywords: ['code', 'humanizer', 'AI', 'developer tools'],
  authors: [{ name: 'Vishal Kumar' }],
  openGraph: {
    title: 'Code Humanizer',
    description: 'Make your code more human-friendly.',
    url: 'https://yourdomain.com',
    siteName: 'Code Humanizer',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code Humanizer Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Humanizer',
    description: 'Make your code more human-friendly.',
    creator: '@yourtwitter',
    images: ['https://yourdomain.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
