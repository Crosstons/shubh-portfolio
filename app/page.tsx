import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { OpenSource } from "./components/open-source";
import { Skills } from "./components/skills";
import { Education } from "./components/education";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Nav />
      <main id="main" className="flex-1 main-content">
        <Hero />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
