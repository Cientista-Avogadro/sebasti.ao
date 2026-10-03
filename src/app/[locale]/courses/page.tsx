import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Courses as CoursesSection } from "@/components/sections/Courses";
import { Footer } from "@/components/Footer";

const APP_URL = process.env.APP_URL || "https://sebasti.ao";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPT = locale === "pt";
  const path = isPT ? "/pt/courses" : "/courses";

  return {
    title: isPT ? "Certificações | Sebastião Moniz" : "Certifications | Sebastião Moniz",
    description: isPT
      ? "15 certificações profissionais de frontend, backend e bootcamps, com certificados verificáveis: JavaScript, TypeScript, React, Blazor e .NET."
      : "15 professional certifications across frontend, backend and bootcamps, with verifiable certificates: JavaScript, TypeScript, React, Blazor and .NET.",
    alternates: {
      canonical: `${APP_URL}${path}`,
      languages: { "en-US": `${APP_URL}/courses`, "pt-AO": `${APP_URL}/pt/courses` },
    },
    openGraph: {
      title: isPT ? "Certificações | Sebastião Moniz" : "Certifications | Sebastião Moniz",
      description: isPT
        ? "15 certificações profissionais com certificados verificáveis."
        : "15 professional certifications with verifiable certificates.",
      url: `${APP_URL}${path}`,
      images: [{ url: `${APP_URL}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-14">
        <CoursesSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
