import { useEffect, useState } from "react";
import { artworks } from "../data/artworks";

function ArtworksSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => { setCurrentIndex((current) => (current + 1) % artworks.length); }, 3000);
        return () => clearInterval(timer)
    }, []);
    return (
        <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-white">
            <img
                src={artworks[currentIndex].image}
                alt={artworks[currentIndex].title}
                className="max-h-[75vh] max-w-full object-contain"
            />
        </div>
    );
}

export default ArtworksSlideshow;