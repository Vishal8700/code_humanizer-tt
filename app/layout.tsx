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
        <meta name="viewport" content="initial-scale=1, width=device-width, minimum-scale=1, viewport-fit=cover" />
        <meta name="robots" content="index, follow" />

        {/* Twitter Card & Social Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Quora" />
        <meta name="twitter:title" content="AI-Code-Humanizer" />
        <meta
          name="twitter:description"
          content="AI Code Humanizer is a helpful tool that makes ai code look like it was written by a real person instead of AI. When you show AI Code Humanizer some code, it changes it to add small mistakes and personal touches that human programmers typically make. AI Code Humanizer adds things like different spacing, casual comments, and less perfect but working solutions. For example, AI Code Humanizer might change variable names to be less perfect, add notes like 'I'll fix this later,' or use simpler ways to solve problems. The best part about AI Code Humanizer is that it keeps the code working while making it feel more natural and human-made. When you use AI Code Humanizer, your code won't look too perfect or machine-like anymore. Instead, AI Code Humanizer gives it that human touch with things like extra explanations in some places, forgotten comments in others, and coding styles that vary a bit throughout the code. If you want your AI-generated code to blend in with human-written code, AI Code Humanizer is the perfect tool to make that happen."
        />
        <meta
          name="twitter:image"
          content="https://cdn-icons-png.flaticon.com/512/10700/10700708.png"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Code-Humanizer" />
        <meta
          property="og:description"
          content="AI Code Humanizer is a helpful tool that makes ai code look like it was written by a real person instead of AI. When you show AI Code Humanizer some code, it changes it to add small mistakes and personal touches that human programmers typically make. AI Code Humanizer adds things like different spacing, casual comments, and less perfect but working solutions. For example, AI Code Humanizer might change variable names to be less perfect, add notes like 'I'll fix this later,' or use simpler ways to solve problems. The best part about AI Code Humanizer is that it keeps the code working while making it feel more natural and human-made. When you use AI Code Humanizer, your code won't look too perfect or machine-like anymore. Instead, AI Code Humanizer gives it that human touch with things like extra explanations in some places, forgotten comments in others, and coding styles that vary a bit throughout the code. If you want your AI-generated code to blend in with human-written code, AI Code Humanizer is the perfect tool to make that happen."
        />
        <meta property="og:url" content="https://codehumanizer.vercel.app" />
        <meta
          property="og:image"
          content="https://cdn-icons-png.flaticon.com/512/10700/10700708.png"
        />
        <meta property="og:type" content="website" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z7HZZ80RKT"></script>
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
                name: "Vishal Kumar",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
