import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Projects as ProjectsSection } from "@/components/sections/Projects";
import { Footer } from "@/components/Footer";

const APP_URL = process.env.APP_URL || "https://sebasti.ao";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPT = locale === "pt";
  const path = isPT ? "/pt/projects" : "/projects";

  return {
    title: isPT ? "Todos os Projectos e Case Studies | Sebastião Moniz" : "All Projects & Case Studies | Sebastião Moniz",
    description: isPT
      ? "23 sistemas entregues para clientes em Angola, Europa e Brasil: plataformas SaaS, marketplaces, fluxos fintech, produtos de IA e websites de clientes."
      : "23 delivered systems for clients in Angola, Europe and Brazil: SaaS platforms, marketplaces, fintech flows, AI products and client websites.",
    alternates: {
      canonical: `${APP_URL}${path}`,
      languages: { "en-US": `${APP_URL}/projects`, "pt-AO": `${APP_URL}/pt/projects` },
    },
    openGraph: {
      title: isPT ? "Todos os Projectos e Case Studies | Sebastião Moniz" : "All Projects & Case Studies | Sebastião Moniz",
      description: isPT
        ? "23 sistemas entregues para clientes em Angola, Europa e Brasil."
        : "23 delivered systems for clients in Angola, Europe and Brazil.",
      url: `${APP_URL}${path}`,
      images: [{ url: `${APP_URL}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-14">
        <ProjectsSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
