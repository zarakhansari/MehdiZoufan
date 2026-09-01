import { useEffect, useState } from "react";
import { artworks } from "../data/artworks";

function ArtworksSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(
                (current) => (current + 1) % artworks.length
            );
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mx-auto flex h-[380px] w-full max-w-4xl items-center justify-center overflow-hidden bg-[#111216] md:h-[360px]">

            <img
                src={artworks[currentIndex].image}
                alt={artworks[currentIndex].title}
                className="h-full w-auto max-w-[80%] object-contain"
            />

        </div>
    );
}

export default ArtworksSlideshow;