import { useEffect, useState, type JSX } from "react";

type BackgroundPropsModel = {
    id: number;
    x: number;
    y: number;
    size: number;
    animationDuration?: number;
};

type StarModel = BackgroundPropsModel & {
    opacity: number;
};

type MeteorModel = BackgroundPropsModel & {
    delay: number
}

export const StarBackground = () => {
    const [stars, setStars] = useState<Array<StarModel>>([]);
    const [meteors, setMeteors] = useState<Array<MeteorModel>>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const generateStars = (): void => {
        const newStars: Array<StarModel> = [];

        const numberOfStars: number = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        )

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars);
    }

    const generateMeteors = (): void => {
        const newMeteors: Array<MeteorModel> = [];
        const numberOfMeteors: number = 4;

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 20,
                size: Math.random() * 2 + 1,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }

        setMeteors(newMeteors);
    }

    const handleResize = (): void => {
        generateStars();
        generateMeteors();
    }



    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {
                stars.map((star: StarModel): JSX.Element => {
                    return <div
                        key={star.id}
                        className="star animate-pulse-subtle"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            opacity: star.opacity,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    />
                })
            }

            {
                meteors.map((meteor: MeteorModel): JSX.Element => {
                    console.log('Size', meteor.size)
                    return <div
                        key={meteor.id}
                        className="meteor animate-meteor"
                        style={{
                            width: `${meteor.size * 30}px`,
                            height: `${meteor.size / 2}px`,
                            left: `${meteor.x}%`,
                            top: `${meteor.y}%`,
                            animationDuration: `${meteor.animationDuration}s`,
                        }}
                    />
                })
            }
        </div>
    );
}