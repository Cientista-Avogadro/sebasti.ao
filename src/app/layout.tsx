import type { Metadata } from "next";
import "./globals.css";

const APP_URL = process.env.APP_URL || "https://sebasti.ao";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: "Sebastião de Sousa Moniz | Senior Software Engineer | Angola",
  description: "Senior Software Engineer and System Analyst with 6+ years of experience in web, desktop, and mobile development. Based in Luanda, Angola. Specializing in Frontend Engineering, AI, Blazor, React, Next.js, and .NET.",
  keywords: ["Software Engineer", "System Analyst", "Frontend Engineer", "Full-Stack Developer", "Blazor", "React", "Next.js", ".NET", "TypeScript", "AI", "Angola", "Luanda", "Cientista-Avogadro"],
  authors: [{ name: "Sebastião de Sousa Moniz" }],
  creator: "Sebastião de Sousa Moniz",
  publisher: "Sebastião de Sousa Moniz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    siteName: "Sebastião de Sousa Moniz",
    title: "Sebastião de Sousa Moniz | Senior Software Engineer | Angola",
    description: "Senior Software Engineer and System Analyst with 6+ years of experience in web, desktop, and mobile development. Based in Luanda, Angola.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sebastião de Sousa Moniz - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sebastiaomoniz",
    creator: "@sebastiaomoniz",
    title: "Sebastião de Sousa Moniz | Senior Software Engineer | Angola",
    description: "Senior Software Engineer and System Analyst with 6+ years of experience. Based in Luanda, Angola.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
