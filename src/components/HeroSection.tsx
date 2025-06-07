import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4l mx-auto text-center z-10">
                <div className="">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-col">
                            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                            <span className="opacity-0 text-primary animate-fade-in-delay-1">Raman</span>
                            <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-2">Aujla</span>
                        </h1>

                        <p className="text-xs md:text-sm text-muted-foreground max-w-3xl mx-auto mt-4 opacity-0 animate-fade-in-delay-3">
                            I specialize in delivering clean, efficient code and enjoy turning complex problems into simple, elegant solutions.
                            With years of hands-on experience in full-stack development, I'm driven by continuous learning and impactful engineering.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}