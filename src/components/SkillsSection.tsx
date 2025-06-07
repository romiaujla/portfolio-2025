import { useState } from "react";

type SkillsCategoryEnum =
    | 'Frontend'
    | 'Backend'
    | 'Frameworks'
    | 'DevOps'
    | 'Design'
    | 'Data Science'
    | 'Testing'
    | 'Tools'
    | 'Integrations';

type SkillsModel = {
    name: string;
    category: SkillsCategoryEnum;
}

export const SkillsSection = () => {
    const skillList: Array<SkillsModel> = [
        { name: 'HTML/CSS', category: 'Frontend', },
        { name: 'JavaScript', category: 'Frontend', },
        { name: 'TypeScript', category: 'Frontend', },
        { name: 'Tailwind CSS', category: 'Frontend' },
        { name: 'React', category: 'Frameworks' },
        { name: 'Angular', category: 'Frameworks' },
        { name: 'Next.js', category: 'Frameworks' },
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
        { name: 'Mocha', category: 'Testing' },
        { name: 'Chai', category: 'Testing' },
        { name: 'Playwright', category: 'Testing' },
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

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md-text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Group skills by category */}
                {(() => {
                    const grouped = skillList.reduce<Record<SkillsCategoryEnum, SkillsModel[]>>((acc, skill) => {
                        acc[skill.category] = acc[skill.category] || [];
                        acc[skill.category].push(skill);
                        return acc;
                    }, {} as Record<SkillsCategoryEnum, SkillsModel[]>);

                    return (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Object.entries(grouped).map(([category, skills]) => {
                                const [expanded, setExpanded] = useState(false);
                                const maxLines = 3;

                                // For Backend, group skills into lines of 3
                                const backendLines =
                                    category === 'Backend'
                                        ? Array.from({ length: Math.ceil(skills.length / 3) }).map((_, rowIdx) =>
                                            skills
                                                .slice(rowIdx * 3, rowIdx * 3 + 3)
                                                .map((skill) => skill.name)
                                                .join(', ')
                                        )
                                        : [];

                                // For other categories, each skill is a line
                                const lines = category === 'Backend'
                                    ? backendLines
                                    : skills.map((skill) => skill.name);

                                const showSeeMore = lines.length > maxLines;
                                const visibleLines = expanded ? lines : lines.slice(0, maxLines);

                                return (
                                    <div key={category} className="bg-card p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                                        <ul className="space-y-2">
                                            {visibleLines.map((line, idx) => (
                                                <li key={idx} className="text-sm">{line}</li>
                                            ))}
                                        </ul>
                                        {showSeeMore && (
                                            <button
                                                className="mt-2 text-primary underline text-xs"
                                                onClick={() => setExpanded((prev) => !prev)}
                                            >
                                                {expanded ? 'See less' : 'See more'}
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })()}
            </div>
        </section>
    );
}