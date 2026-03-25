import { Navbar } from "@/components/Navbar";
import { Articles as ArticlesSection } from "@/components/sections/Articles";
import { Footer } from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ArticlesSection showAll={true} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
