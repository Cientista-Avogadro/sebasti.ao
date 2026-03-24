import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { Gallery } from "@/components/sections/Gallery";
import { Articles } from "@/components/sections/Articles";
import { GitHub } from "@/components/sections/GitHub";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Education />
        <TechStack />
        <Gallery />
        <Articles />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
