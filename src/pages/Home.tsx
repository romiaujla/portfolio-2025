import { About } from "./About";
import { Contact } from "./Contact";
import Experience from "./Experience";
import { Header } from "./Header";
import { Projects } from "./Projects";

export const Home = () => {
  return (
    <main
      className="bg-background text-foreground overflow-x-hidden lg:mx-auto lg:max-w-5xl relative"
      id="about"
    >
      {/* Fixed Sidebar on the left */}
      <Header />

      {/* Scrollable content area (normal document flow) */}
      <div className="lg:ml-[40%] lg:py-10">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};
