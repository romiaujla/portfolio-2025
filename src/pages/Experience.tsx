import { TechnologyList } from "../components/TechnologyList";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  durationLabel: string;
  description: string;
  technologies: Array<string>;
  companyLink?: string;
}

const Experience = () => {
  const experienceList: Array<ExperienceItem> = [
    {
      company: "Workd",
      role: "Software Engineering Team Lead",
      duration: "NOV 2022 - JUL 2025",
      durationLabel: "(2 years 8 months)",
      description: `At Workd, I played a pivotal role in driving CRM product
              development, which directly improved client satisfaction and met
              evolving business demands. My expertise in Typescript, Angular,
              Node.js, and SQL enabled me to create and maintain applications
              that enhanced system performance. Additionally, I designed RESTful
              APIs and integrated various third-party systems, ensuring seamless
              interoperability and operational efficiency.`,
      technologies: [
        "Typescript",
        "Angular",
        "Node.js",
        "ElasticSearch",
        "AWS (EC2, S3, SQS, Lambda, CloudWatch)",
        "Redis",
        "Docker",
        "RxJS",
        "Git",
        "CI/CD",
        "Bitbucket API",
      ],
      companyLink: "https://workd.com",
    },
    {
      company: "Workd",
      role: "Software Engineer",
      duration: "FEB 2020 - NOV 2022",
      durationLabel: "(2 years 10 months)",
      description: `In my role as a Software Engineer at Workd, I focused on enhancing
              user experience and operational efficiency. By collaborating
              closely with UI/UX designers, I contributed to the creation of
              user-friendly application interfaces. I also led data migration
              efforts to ensure seamless onboarding for new clients, while
              revamping the e-commerce segment to improve functionality. My
              commitment to quality was demonstrated through the implementation
              of unit and automated frontend tests.`,
      technologies: [
        "Typescript",
        "Angular",
        "Node.js",
        "RxJS",
        "Git",
        "CI/CD",
      ],
      companyLink: "https://workd.com",
    },
    {
      company: "Thinkful | Apprenticeship",
      role: "Full Stack Developer",
      duration: "MAY 2019 - JAN 2020",
      durationLabel: "(9 months)",
      description: `During my apprenticeship at Thinkful, I learned industry standard
              practices, mastered the latest React framework with react-router,
              and built full-stack projects. This experience laid a strong
              foundation for my career in software development.`,
      technologies: ["Postgres SQL", "Express", "React", "Node.js"],
    },
  ];

  return (
    <section className="text-left py-10 lg:py-20" id="experience">
      <h3 className="text-primary font-semibold mb-4 sticky top-0 z-10 lg:hidden px-10 py-4 bg-primary/10">
        EXPERIENCE
      </h3>
      <div className="flex flex-col gap-10">
        {experienceList.map((experience) => (
          <div className="flex flex-col lg:flex-row gap-4 px-10 lg:px-0">
            <div className="lg:w-1/4 text-xs font-semibold mt-1">
              <span className="block">{experience.duration}</span>
              <span className="block">{experience.durationLabel}</span>
            </div>
            <div className="lg:w-[calc(100%-10rem)]">
              <div className="flex flex-col gap-2 items-start">
                <span className="text-base font-semibold">
                  {experience.role} at{" "}
                  {experience.companyLink != null ? (
                    <a
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary transition-colors underline"
                    >
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </span>
              </div>
              <p className="text-xs mt-2 leading-relaxed">
                {experience.description}
              </p>
              <TechnologyList technologies={experience.technologies} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
