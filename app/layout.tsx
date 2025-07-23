import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Code Humanizer',
  description: 'Application',
  generator: 'Created by Vishal',
  keywords: ['code', 'humanizer', 'AI', 'developer tools'],
  authors: [{ name: 'Vishal Kumar' }],
  openGraph: {
    title: 'Code Humanizer',
    description: 'Make your code more human-friendly.',
    url: 'https://codehumanizer.vercel.app',
    siteName: 'Code Humanizer',
    images: [
      {
        url: 'https://codehumanizer.vercel.app/favicon.png',
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
    creator: '@yourtwitter', // Replace with your real Twitter handle
    images: ['https://codehumanizer.vercel.app/twitter_image.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z7HZZ80RKT"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z7HZZ80RKT');
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Code Humanizer",
              url: "https://codehumanizer.vercel.app",
              operatingSystem: "All",
              applicationCategory: "DeveloperApplication",
              description: "Make your code more human-friendly.",
              author: {
                "@type": "Person",
                name: "Vishal Kumar"
              }
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
