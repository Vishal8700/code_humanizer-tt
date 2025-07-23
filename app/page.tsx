import HomeClient from "@/components/home-client";

export const metadata = {
  title: "Code Cleaner & Humanizer | Beautify & Refactor Code Instantly",
  description:
    "Transform your messy code into clean, human-readable, production-ready code. Leverage professional-grade formatting, intelligent variable naming, and structural optimization.",
  keywords: [
    "code cleaner",
    "code humanizer",
    "format code",
    "refactor code",
    "code beautifier",
    "code formatter",
    "clean code",
    "intelligent code processing"
  ],
  openGraph: {
    title: "Code Cleaner & Humanizer",
    description:
      "Smart code refactoring tool that transforms technical code into clean, readable, and structured output.",
    url: "https://codehumanizer.vercel.app",
    siteName: "CodeHumanizer",
    images: [
      {
        url: "https://codehumanizer.vercel.app/favicon.png",
        width: 1200,
        height: 630,
        alt: "Preview of Code Humanizer App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Cleaner & Humanizer",
    description:
      "Make unorganized code production-ready with AI-powered formatting and variable renaming.",
    images: ["https://codehumanizer.vercel.app/twitter_image.png"],
  },
  metadataBase: new URL("https://codehumanizer.vercel.app"),
};

export default function Page() {
  return <HomeClient />; // ✅ uses client component here
}
