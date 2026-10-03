import { Navbar } from "@/components/Navbar";
import { Projects as ProjectsSection } from "@/components/sections/Projects";
import { Footer } from "@/components/Footer";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <ProjectsSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
