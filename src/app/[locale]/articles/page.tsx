import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Articles as ArticlesSection } from "@/components/sections/Articles";
import { Footer } from "@/components/Footer";

const APP_URL = process.env.APP_URL || "https://sebasti.ao";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPT = locale === "pt";
  const path = isPT ? "/pt/articles" : "/articles";

  return {
    title: isPT ? "Artigos | Sebastião Moniz" : "Articles | Sebastião Moniz",
    description: isPT
      ? "Artigos técnicos sobre Payload CMS, Blazor, ASP.NET Core, TypeScript e Python, publicados no LinkedIn."
      : "Technical articles on Payload CMS, Blazor, ASP.NET Core, TypeScript and Python, published on LinkedIn.",
    alternates: {
      canonical: `${APP_URL}${path}`,
      languages: { "en-US": `${APP_URL}/articles`, "pt-AO": `${APP_URL}/pt/articles` },
    },
    openGraph: {
      title: isPT ? "Artigos | Sebastião Moniz" : "Articles | Sebastião Moniz",
      description: isPT
        ? "Artigos técnicos sobre Payload CMS, Blazor, ASP.NET Core, TypeScript e Python."
        : "Technical articles on Payload CMS, Blazor, ASP.NET Core, TypeScript and Python.",
      url: `${APP_URL}${path}`,
      images: [{ url: `${APP_URL}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-14">
        <ArticlesSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
