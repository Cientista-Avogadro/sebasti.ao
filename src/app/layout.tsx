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
  alternates: {
    canonical: APP_URL,
    languages: {
      "en-US": APP_URL,
      "pt-AO": `${APP_URL}/pt`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sebastião de Sousa Moniz",
    alternateName: ["Cientista-Avogadro", "Sebasti"],
    url: APP_URL,
    image: `${APP_URL}/myphoto.jpg`,
    description: "Senior Software Engineer and System Analyst with 6+ years of experience in web, desktop, and mobile development. Based in Luanda, Angola.",
    email: "moniz.techs@gmail.com",
    telephone: "+244972745066",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Luanda",
      addressCountry: "AO",
    },
    sameAs: [
      "https://github.com/Cientista-Avogadro",
      "https://www.linkedin.com/in/sebastião-de-sousa-moniz",
    ],
    jobTitle: "Senior Software Engineer",
    worksFor: [
      {
        "@type": "Organization",
        name: "DevTest",
        startDate: "2024-10",
      },
      {
        "@type": "Organization",
        name: "Freelance",
        startDate: "2018-01",
      },
    ],
    knowsAbout: [
      "Frontend Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Blazor",
      ".NET",
      "AI",
      "System Analysis",
      "Full-Stack Development",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Instituto Superior Politécnico do Moxico (ISPM)",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-50 antialiased overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
