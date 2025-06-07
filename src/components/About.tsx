import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
    return (
        <section
            id="about"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md-text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                            Passionate Software Engineer
                        </h3>

                        <p className="text-muted-foreground mb-6 text-xs">
                            With 6+ years of experience, I specialize in building efficient, scalable web applications.
                            My journey spans roles from junior developer to senior engineering team lead, giving me a
                            strong foundation in both front-end and back-end technologies.
                        </p>

                        <p className="text-muted-foreground mb-6 text-xs">
                            I enjoy solving complex problems and delivering clean, maintainable code.
                            I'm passionate about collaborating with teams, mentoring others, and staying current with the latest technologies.
                            Let's connect if you're looking for a dedicated developer who values quality and teamwork.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a
                                href="/Raman_Aujla_Resume.pdf"
                                download="Raman_Aujla_Resume.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground text-xs">
                                        Creating responsive, websites and web applications with modern frameworks and technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground text-xs">
                                        Designing intuitive user interfaces and experiences that enhance usability and engagement.
                                    </p>
                                </div>
                            </div>
                        </div> <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground text-xs">
                                        Leading projects from conception to deployment, ensuring timely delivery, clear communication, and effective collaboration across teams.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}