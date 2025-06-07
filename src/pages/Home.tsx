import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-xhidden">
        <ThemeToggle />

        <StarBackground />

        <NavBar />

        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>
    </div>

    {/* Main Content */ }

    {/* Footer */ }
    ;
}