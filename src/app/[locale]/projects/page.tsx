import { Navbar } from "@/components/Navbar";
import { Projects as ProjectsSection } from "@/components/sections/Projects";
import { Footer } from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ProjectsSection showAll={true} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
