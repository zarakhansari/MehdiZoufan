import { useEffect, useState } from "react";
import { artworks } from "../data/artworks";


function ArtworksSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setCurrentIndex(
                    (current) => (current + 1) % artworks.length
                );
                setVisible(true);
            }, 500);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mx-auto flex h-[380px] w-full max-w-4xl items-center justify-center overflow-hidden bg-[#111216] md:h-[360px]">

            <img
                src={artworks[currentIndex].image}
                alt={artworks[currentIndex].title}
                className={`
                    h-full
                    w-auto
                    max-w-[80%]
                    object-contain
                    transition-opacity
                    duration-500
                    ease-in-out
                   
                `}
            />

        </div>
    );
}

export default ArtworksSlideshow;

