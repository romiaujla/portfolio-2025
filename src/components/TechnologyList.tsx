import { useState } from "react";
import TechnologyTag from "./TechnologyTag";

export const TechnologyList = ({
  technologies,
  className,
}: {
  technologies: string[];
  className?: string;
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedTechnologies = showAll
    ? technologies
    : technologies.slice(0, 4);

  return (
    <ul className={`flex flex-wrap gap-2 mt-2 ${className}`}>
      {displayedTechnologies.map((technology) => (
        <li key={technology}>
          <TechnologyTag
            technology={technology}
            className="text-primary bg-primary-foreground/10"
          />
        </li>
      ))}
      {technologies.length > 4 && (
        <li onClick={() => setShowAll(!showAll)} className="cursor-pointer">
          <TechnologyTag
            technology={showAll ? "See Less" : "See More..."}
            className="text-primary bg-primary-foreground/10 hover:text-primary/80"
          />
        </li>
      )}
    </ul>
  );
};
