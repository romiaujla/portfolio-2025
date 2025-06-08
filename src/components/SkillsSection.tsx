import { useState } from "react";
import { cn } from "../lib/utils";

type SkillsCategoryEnum =
    | 'All'
    | 'Backend'
    | 'Frameworks'
    | 'Frontend'
    | 'Integrations'
    | 'Testing'
    | 'Tools';

type SkillsModel = {
    name: string;
    category: SkillsCategoryEnum;
}

export const SkillsSection = () => {
    const skillList: Array<SkillsModel> = [
        { name: 'JavaScript', category: 'Frontend' },
        { name: 'TypeScript', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Frontend' },
        { name: 'HTML/CSS', category: 'Frontend' },

        { name: 'React', category: 'Frameworks' },
        { name: 'Angular', category: 'Frameworks' },
        { name: 'Next.js', category: 'Frameworks' },
        { name: 'Vue.js', category: 'Frameworks' },

        { name: 'Node.js', category: 'Backend' },
        { name: 'Express', category: 'Backend' },
        { name: 'MongoDB', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Backend' },
        { name: 'GraphQL', category: 'Backend' },
        { name: 'ElasticSearch', category: 'Backend' },
        { name: 'Redis', category: 'Backend' },
        { name: 'AWS EC2', category: 'Backend' },
        { name: 'AWS Lambda', category: 'Backend' },
        { name: 'MySQL', category: 'Backend' },
        { name: 'Rest API', category: 'Backend' },

        { name: 'Mocha', category: 'Testing' },
        { name: 'Chai', category: 'Testing' },
        { name: 'Playwright', category: 'Testing' },
        { name: 'Supertest', category: 'Testing' },

        { name: 'Git/GitHub', category: 'Tools' },
        { name: 'Docker', category: 'Tools' },
        { name: 'Jenkins', category: 'Tools' },
        { name: 'VS Code', category: 'Tools' },
        { name: 'WebStorm', category: 'Tools' },
        { name: 'JIRA', category: 'Tools' },
        { name: 'Bitbucket', category: 'Tools' },

        { name: 'Twilio', category: 'Integrations' },
        { name: 'ePaymints', category: 'Integrations' },
        { name: 'Authorize.Net', category: 'Integrations' },
        { name: 'MediSpan', category: 'Integrations' },
        { name: 'ERP Integrations', category: 'Integrations' },
    ];

    const categoryList: Array<SkillsCategoryEnum> = [
        'All',
        'Backend',
        'Frameworks',
        'Frontend',
        'Integrations',
        'Testing',
        'Tools',
    ];

    const [activeCategory, setActiveCategory] = useState<SkillsCategoryEnum>('All');

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md-text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categoryList.map((category: SkillsCategoryEnum, key: number) => (
                            <button
                                key={key}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-colors duration-300 text-sm cursor-pointer",
                                    activeCategory === category
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary/20 text-foreground hover:bg-secondary/60"
                                )}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>


                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-300 justify-items-center"
                >
                    {
                        skillList
                            .filter(skill => activeCategory === 'All' || skill.category === activeCategory)
                            .map((skill, index) => (
                                <div
                                    key={index}
                                    className="gradient-border pb-3 pt-5 rounded-lg transition-colors duration-300 w-full flex justify-center"
                                >
                                    <h4 className="text-sm font-semibold mb-2">{skill.name}</h4>
                                </div>
                            ))
                    }
                </div>

            </div>
        </section>
    );
}