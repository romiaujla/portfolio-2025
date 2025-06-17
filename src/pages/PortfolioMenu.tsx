import { Menu, X } from "lucide-react";
import { useState } from "react";

export const PortfolioMenu = () => {
  const [activeItem, setActiveItem] = useState<string>("ABOUT");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleClick = (label: string) => {
    setActiveItem(label);
    const element = document.getElementById(label.toLowerCase());
    console.log(element);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <menu className="mt-10 text-xs font-semibold">
      <div
        className={`lg:hidden absolute top-5 right-5 z-20 bg-primary-foreground rounded-md shadow-md ${isMobileMenuOpen ? "p-6" : "p-0"}`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`text-primary p-2 rounded-md absolute top-0 right-0 ${isMobileMenuOpen ? "bg-primary-foreground" : "bg-primary/10"}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isMobileMenuOpen && (
          <ul className="flex flex-col gap-4 mt-4">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`text-xs font-semibold cursor-pointer transition-all duration-300 flex flex-row items-center hover:text-primary ${
                  activeItem === item.label
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                } ${activeItem === item.label ? "w-1/2" : "w-1/3"}`}
                onClick={() => handleClick(item.label)}
              >
                <div className="w-[80%] flex">
                  <span
                    className={`border-b-1 ${
                      activeItem === item.label
                        ? "border-primary"
                        : "border-foreground"
                    } w-[80%] h-1 `}
                  />
                </div>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="hidden lg:flex flex-col gap-4 mt-10">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`text-xs font-semibold cursor-pointer transition-all duration-300 flex flex-row items-center hover:text-primary ${
              activeItem === item.label
                ? "text-primary"
                : "text-foreground hover:text-primary"
            } ${activeItem === item.label ? "w-1/2" : "w-1/3"}`}
            onClick={() => handleClick(item.label)}
          >
            <div className="w-[80%] flex">
              <span
                className={`border-b-1 ${
                  activeItem === item.label
                    ? "border-primary"
                    : "border-foreground"
                } w-[80%] h-1 `}
              />
            </div>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </menu>
  );
};
