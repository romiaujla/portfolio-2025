import { Github, Globe, Kanban } from "lucide-react";
import { TechnologyList } from "../components/TechnologyList";

interface ProjectItem {
  title: string;
  description: string;
  technologies: Array<string>;
  duration: string;
  durationLabel: string;
  githubRepoLink?: string;
  githubProjectLink?: string;
  liveDemoLink?: string;
}

export const Projects = () => {
  const projects: Array<ProjectItem> = [
    {
      title: "Transportation Management System",
      description: `I am building a multi-tenant transportation management system designed specifically for small trucking companies in Dubai.
              This platform allows multiple companies to create their own accounts and manage their transportation needs independently.
              The system is built using Next.js, Turborepo, Express, and PostgreSQL, with a monorepo structure for efficient development and scalability.
              My goal is to help small trucking companies in Dubai streamline their daily operations and reduce manual workflows.
              This project addresses a gap in the market where existing solutions are often too complex or expensive for small businesses.`,
      technologies: [
        "Next.js",
        "Turborepo",
        "Express",
        "PostgreSQL",
        "Typscript",
        "Github CI/CD",
        "Docker",
      ],
      duration: "JUL 2025 - PRESENT",
      durationLabel: "Ongoing",
      githubRepoLink: "https://github.com/romiaujla/dxb-tm",
      githubProjectLink: "https://github.com/users/romiaujla/projects/8",
    },
  ];
  return (
    <section className="text-left py-10" id="projects">
      <h3 className="text-primary font-semibold mb-4 sticky top-0 z-10 lg:hidden px-10 py-4 bg-primary/10">
        PROJECTS
      </h3>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div className="flex flex-col lg:flex-row gap-4 px-10 lg:px-0">
            <div className="lg:w-1/4 text-xs font-semibold mt-1">
              <span className="block">{project.duration}</span>
              <span className="block">{project.durationLabel}</span>
            </div>
            <div className="lg:w-[calc(100%-10rem)]">
              <h4 className="text-primary font-semibold">{project.title}</h4>
              <p className="text-xs mt-2 leading-relaxed">
                {project.description}
              </p>
              <p className="text-xs mt-2 leading-relaxed">
                Key Features:
                <ul className="list-disc list-inside">
                  {[
                    "Instance Management (Super Admin)",
                    "User & Role Management",
                    "Dashboard",
                    "Equipment Management",
                    "Route Planning and Scheduling",
                    "Load Management (Driver)",
                    "Load Management (Dispatcher)",
                    "Accounting (Invoicing and Payroll)",
                  ].map((feature) => (
                    <li key={feature}>
                      <span className="font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </p>
              <TechnologyList
                technologies={project.technologies}
                className="mt-4"
              />
              <div className="text-xs flex flex-row gap-2 mt-3">
                {project.githubRepoLink != null && (
                  <a
                    href={project.githubRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors underline flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> GitHub Repo
                  </a>
                )}
                {project.githubProjectLink != null && (
                  <a
                    href={project.githubProjectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors underline flex items-center gap-2"
                  >
                    <Kanban className="w-4 h-4" />
                    GitHub Project
                  </a>
                )}
                {project.liveDemoLink != null && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors underline flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
