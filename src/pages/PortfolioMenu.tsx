import { useState } from "react";

const menuItems = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "EXPERIENCE",
    href: "#experience",
  },
  {
    label: "PROJECTS",
    href: "#projects",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export const PortfolioMenu = () => {
  const [activeItem, setActiveItem] = useState<string>("ABOUT");

  const handleClick = (label: string) => {
    setActiveItem(label);
    const element = document.getElementById(label.toLowerCase());
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 200); // 300ms delay
    }
  };

  return (
    <menu className="mt-10 text-xs font-semibold">
      <ul className="flex flex-col gap-4 mt-10">
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
                className={`border-b-1 ${activeItem === item.label ? "border-primary" : "border-foreground"} w-[80%] h-1 `}
              />
            </div>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </menu>
  );
};
