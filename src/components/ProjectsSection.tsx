type ProjectsModel = {
    name: string;
    description: string;
    link: string;
    imgUrl: string;
    tags: Array<string>;
    githubUrl: string;
    demoUrl: string;
}

export const ProjectsSection = () => {
    const projectList: Array<ProjectsModel> = [
        {
            name: 'Project One',
            description: 'Description of project one.',
            link: '#',
            imgUrl: 'https://via.placeholder.com/150',
            tags: ['React', 'Node.js', 'MongoDB'],
            githubUrl: '#',
            demoUrl: '#'
        },
        {
            name: 'Project Two',
            description: 'Description of project two.',
            link: '#',
            imgUrl: 'https://via.placeholder.com/150',
            tags: ['React', 'Node.js', 'MongoDB'],
            githubUrl: '#',
            demoUrl: '#'
        },
        {
            name: 'Project Three',
            description: 'Description of project three.',
            link: '#',
            imgUrl: 'https://via.placeholder.com/150',
            tags: ['React', 'Node.js', 'MongoDB'],
            githubUrl: '#',
            demoUrl: '#'
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md-text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project) => (
                        <div key={project.name} className="bg-white rounded-lg shadow-lg p-6">
                            <img src={project.imgUrl} alt={project.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    GitHub
                                </a>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
