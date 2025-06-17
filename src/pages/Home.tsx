import { About } from "./About";
import { Header } from "./Header";

export const Home = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden lg:mx-auto lg:max-w-5xl relative">
      {/* Fixed Sidebar on the left */}
      <Header />

      {/* Scrollable content area (normal document flow) */}
      <div className="lg:ml-[50%] lg:py-10">
        <About />
      </div>
    </main>
  );
};
