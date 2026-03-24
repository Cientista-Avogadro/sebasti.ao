import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Gallery as GallerySection } from "@/components/sections/Gallery";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Sebastião de Sousa Moniz",
  description: "Photo gallery of events, conferences, and speaking engagements by Sebastião de Sousa Moniz.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <GallerySection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
