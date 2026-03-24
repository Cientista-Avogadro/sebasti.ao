import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Projects as ProjectsSection } from "@/components/sections/Projects";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects | Sebastião de Sousa Moniz",
  description: "A comprehensive portfolio of production systems and applications built by Sebastião de Sousa Moniz, Software Engineer from Angola.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ProjectsSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
