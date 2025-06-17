import { TechnologyList } from "../components/TechnologyList";

const Experience = () => {
  return (
    <section className="text-left py-20" id="experience">
      <h3 className="text-primary font-semibold mb-4 sticky top-0 z-10 bg-background lg:hidden px-10 py-4 bg-primary/10">
        EXPERIENCE
      </h3>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-4 px-10 lg:px-0">
          <div className="lg:w-1/4 text-xs font-semibold mt-1">
            <span className="block">NOV 2022 - JUL 2025</span>
            <span className="block">(2 years 8 months)</span>
          </div>
          <div className="lg:w-[calc(100%-10rem)]">
            <div className="flex flex-col gap-2 items-start">
              <span className="text-base font-semibold">
                Software Engineering Team Lead at{" "}
                <a
                  href="https://workd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors underline"
                >
                  Workd
                </a>
              </span>
            </div>
            <p className="text-xs mt-2 leading-relaxed">
              At Workd, I played a pivotal role in driving CRM product
              development, which directly improved client satisfaction and met
              evolving business demands. My expertise in Typescript, Angular,
              Node.js, and SQL enabled me to create and maintain applications
              that enhanced system performance. Additionally, I designed RESTful
              APIs and integrated various third-party systems, ensuring seamless
              interoperability and operational efficiency.
            </p>
            <TechnologyList
              technologies={[
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
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 px-10 lg:px-0">
          <div className="lg:w-1/4 text-xs font-semibold mt-1">
            <span className="block">FEB 2020 - NOV 2022</span>
            <span className="block">(2 years 10 months)</span>
          </div>
          <div className="lg:w-[calc(100%-10rem)]">
            <div className="flex flex-col gap-2 items-start">
              <span className="text-base font-semibold">
                Software Engineer at{" "}
                <a
                  href="https://workd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors underline"
                >
                  Workd
                </a>
              </span>
            </div>
            <p className="text-xs mt-2 leading-relaxed">
              In my role as a Software Engineer at Workd, I focused on enhancing
              user experience and operational efficiency. By collaborating
              closely with UI/UX designers, I contributed to the creation of
              user-friendly application interfaces. I also led data migration
              efforts to ensure seamless onboarding for new clients, while
              revamping the e-commerce segment to improve functionality. My
              commitment to quality was demonstrated through the implementation
              of unit and automated frontend tests.
            </p>
            <TechnologyList
              technologies={[
                "Typescript",
                "Angular",
                "Node.js",
                "RxJS",
                "Git",
                "CI/CD",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 px-10 lg:px-0">
          <div className="lg:w-1/4 text-xs font-semibold mt-1">
            <span className="block">MAY 2019 - JAN 2020</span>
            <span className="block">(9 months)</span>
          </div>
          <div className="lg:w-[calc(100%-10rem)]">
            <div className="flex flex-col gap-2 items-start">
              <span className="text-base font-semibold">
                Full Stack Developer at Thinkful | Apprenticeship
              </span>
            </div>
            <p className="text-xs mt-2 leading-relaxed">
              At Workd, I played a pivotal role in driving CRM product
              development, which directly improved client satisfaction and met
              evolving business demands. My expertise in Typescript, Angular,
              Node.js, and SQL enabled me to create and maintain applications
              that enhanced system performance. Additionally, I designed RESTful
              APIs and integrated various third-party systems, ensuring seamless
              interoperability and operational efficiency.
            </p>
            <TechnologyList
              technologies={["Postgres SQL", "Express", "React", "Node.js"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
