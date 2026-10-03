import { Navbar } from "@/components/Navbar";
import { Gallery as GallerySection } from "@/components/sections/Gallery";
import { Footer } from "@/components/Footer";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <GallerySection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
