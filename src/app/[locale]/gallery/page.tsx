import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Gallery as GallerySection } from "@/components/sections/Gallery";
import { Footer } from "@/components/Footer";

const APP_URL = process.env.APP_URL || "https://sebasti.ao";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPT = locale === "pt";
  const path = isPT ? "/pt/gallery" : "/gallery";

  return {
    title: isPT ? "Galeria de Eventos | Sebastião Moniz" : "Event Gallery | Sebastião Moniz",
    description: isPT
      ? "Fotografias e videos de conferências, eventos de tecnologia e momentos de equipa em Angola."
      : "Photos and videos from conferences, tech events and team moments in Angola.",
    alternates: {
      canonical: `${APP_URL}${path}`,
      languages: { "en-US": `${APP_URL}/gallery`, "pt-AO": `${APP_URL}/pt/gallery` },
    },
    openGraph: {
      title: isPT ? "Galeria de Eventos | Sebastião Moniz" : "Event Gallery | Sebastião Moniz",
      description: isPT
        ? "Fotografias e videos de conferências e eventos de tecnologia."
        : "Photos and videos from conferences and tech events.",
      url: `${APP_URL}${path}`,
      images: [{ url: `${APP_URL}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-14">
        <GallerySection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
