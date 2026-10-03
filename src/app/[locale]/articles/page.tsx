import { Navbar } from "@/components/Navbar";
import { Articles as ArticlesSection } from "@/components/sections/Articles";
import { Footer } from "@/components/Footer";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <ArticlesSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
