import { Navbar } from "@/components/Navbar";
import { Gallery as GallerySection } from "@/components/sections/Gallery";
import { Footer } from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <GallerySection showAll={true} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
