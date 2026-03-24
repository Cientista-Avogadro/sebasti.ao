import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Courses as CoursesSection } from "@/components/sections/Courses";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Courses & Certifications | Sebastião de Sousa Moniz",
  description: "Professional certifications and courses completed by Sebastião de Sousa Moniz in software development, React, TypeScript, and more.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <CoursesSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
