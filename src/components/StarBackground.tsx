import { useState } from "react";

type StarModel = {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    animationDuration?: number;
};

export const StarBackground = () => {
    const [stars, setStars] = useState<StarModel[]>([]);

    const generateStars = () => {
        const newStars = [];

        const numberOfStars = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        )

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }

        setStars(newStars);
    }

    return (
        <div className="">

        </div>
    );
}