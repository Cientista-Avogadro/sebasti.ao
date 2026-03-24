import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Articles as ArticlesSection } from "@/components/sections/Articles";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Articles | Sebastião de Sousa Moniz",
  description: "Articles and insights published on LinkedIn by Sebastião de Sousa Moniz about technology, development, and the tech scene in Angola.",
};

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ArticlesSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
