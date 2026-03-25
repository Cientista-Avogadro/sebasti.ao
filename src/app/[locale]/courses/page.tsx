import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="py-32 text-center">
          <h1 className="text-4xl font-bold text-zinc-50">Courses & Certifications</h1>
          <p className="text-zinc-400 mt-4">Coming soon...</p>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
