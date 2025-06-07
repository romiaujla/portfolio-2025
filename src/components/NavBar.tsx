import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

type NavItemModel = {
    name: string;
    href: string;
};

const navItemList: Array<NavItemModel> = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
            aria-label="Main navigation"
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                    aria-label="Go to hero section"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Raman Aujla</span> Portfolio
                    </span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8" role="menubar" aria-label="Primary">
                    {navItemList.map((navItem) => (
                        <li key={navItem.href} role="none">
                            <a
                                href={navItem.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                role="menuitem"
                                tabIndex={0}
                                aria-label={`Go to ${navItem.name} section`}
                            >
                                {navItem.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                    type="button"
                    className="md:hidden p-2 text-foreground z-50"
                >
                    {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>

                {/* Mobile Navigation */}
                <div
                    id="mobile-menu"
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md",
                        "z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
                    )}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                >
                    <ul className="flex flex-col space-y-8 text-xl" role="menu" aria-label="Mobile primary">
                        {navItemList.map((navItem) => (
                            <li key={navItem.href} role="none">
                                <a
                                    href={navItem.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    role="menuitem"
                                    tabIndex={isMenuOpen ? 0 : -1}
                                    aria-label={`Go to ${navItem.name} section`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {navItem.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};