import TechnologyTag from "../components/TechnologyTag";

const Experience = () => {
  return (
    <section className="text-left py-20" id="experience">
      <h3 className="text-primary font-semibold mb-4 lg:hidden px-10 py-4 bg-primary/10">
        EXPERIENCE
      </h3>
      <div className="flex flex-col lg:flex-row gap-4 px-10 lg:px-0">
        <div className="lg:w-1/4 text-xs font-semibold mt-1">
          NOV 2022 - JUL 2025
        </div>
        <div className="lg:w-1/2">
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
            Led the development of a comprehensive CRM platform that increased
            client satisfaction by 40% and streamlined business operations.
            Leveraged TypeScript, Angular, Node.js, and SQL to architect
            scalable solutions that reduced system response time by 60%.
            Spearheaded the design of RESTful APIs and third-party integrations,
            resulting in a 50% reduction in manual data entry and improved
            cross-platform functionality.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {["Typescript", "Angular", "Node.js", "ElasticSearch", "AWS"].map(
              (technology) => {
                return (
                  <li key={technology}>
                    <TechnologyTag technology={technology} />
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
