import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { LearningAndValue } from "@/components/sections/LearningAndValue";
import { Footer } from "@/components/Footer";

const GitHubStats = dynamic(() => import("@/components/sections/GitHubStats").then(mod => ({ default: mod.GitHubStats })));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })));
const Gallery = dynamic(() => import("@/components/sections/Gallery").then(mod => ({ default: mod.Gallery })));
const Articles = dynamic(() => import("@/components/sections/Articles").then(mod => ({ default: mod.Articles })));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })));
const FloatingButtons = dynamic(() => import("@/components/FloatingButtons"));

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
        <LearningAndValue />
        <GitHubStats />
        <Testimonials />
        <Gallery />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
