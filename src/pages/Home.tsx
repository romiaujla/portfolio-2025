import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-xhidden">
        <ThemeToggle />

        <StarBackground />

        <NavBar />

        <main>
            <HeroSection />
        </main>
    </div>

    {/* Main Content */ }

    {/* Footer */ }
    ;
}