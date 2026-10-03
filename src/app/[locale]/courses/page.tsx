import { Navbar } from "@/components/Navbar";
import { Courses as CoursesSection } from "@/components/sections/Courses";
import { Footer } from "@/components/Footer";

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <CoursesSection showAll={true} />
      </main>
      <Footer />
    </>
  );
}
