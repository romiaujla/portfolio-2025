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

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <menu className="mt-10 text-xs font-semibold">
      <ul className="flex flex-col gap-4 mt-10">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`text-sm lg:text-base font-semibold cursor-pointer transition-all duration-300 flex flex-row items-center ${
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
            {item.label}
          </li>
        ))}
      </ul>
    </menu>
  );
};
