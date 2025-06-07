import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScroll = () => { }

    return <div className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bd-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

        <div className="container flex items-center justify-between">
            <a
                className="text-xl font-bold text-primary flex items-center"
                href="#hero"
            >
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Raman Aujla</span> Portfolio
                </span>
            </a>
        </div>

    </div>;
}