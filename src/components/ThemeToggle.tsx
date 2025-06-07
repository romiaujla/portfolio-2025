import { Moon, Sun } from "lucide-react";
import { useEffect, useState, type JSX } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === 'dark') {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else if(storedTheme === 'light') {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } 
    }, [])

    const toggleTheme = () => {
        console.log('isDarkMode', isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    let button: JSX.Element = <button></button>;

    if (isDarkMode) {
        button = (
            <button onClick={toggleTheme}>
                <Sun className="h-6 w-6 text-yellow-300" />
            </button>
        );
    } else {
        button = (
            <button onClick={toggleTheme}>
                <Moon className="h-6 w-6 text-bllue-900" />
            </button>
        );
    }
    
    return button;
}