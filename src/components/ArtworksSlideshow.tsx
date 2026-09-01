import { useEffect, useState } from "react";
import { artworks } from "../data/artworks";

function ArtworksSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(
                (current) => (current + 1) % artworks.length
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden bg-[#111216] md:min-h-[360px]">

            <img
                src={artworks[currentIndex].image}
                alt={artworks[currentIndex].title}
                className="max-h-[90%] max-w-[90%] object-contain"
            />

        </div>
    );
}

export default ArtworksSlideshow;