import { useEffect, useState } from "react";

import { artworks } from "../data/artworks";

function Works() {
    const [selectedArtwork, setSelectedArtwork] = useState<
        (typeof artworks)[number] | null
    >(null);

    // Close the lightbox with Escape
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedArtwork(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <main className="min-h-screen bg-[#f5f3ee] px-6 py-16 text-center text-[#111] md:px-12">

            {/* Page heading */}
            <div className="mx-auto mb-16 max-w-7xl">

                <p className="mb-4 text-sm text-black/50">
                    مجموعه
                </p>

                <h1 className="font-serif text-5xl tracking-tight md:text-7xl">
                    آثار هنری
                </h1>

            </div>

            {/* Gallery */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                {artworks.map((artwork) => (

                    <button
                        key={artwork.id}
                        onClick={() => setSelectedArtwork(artwork)}
                        className="group block w-full text-center"
                    >

                        <div className="overflow-hidden bg-white">

                            <img
                                src={artwork.image}
                                alt={artwork.title}
                                className="aspect-[4/5] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                            />

                        </div>

                        <div className="mt-4">

                            <h2 className="text-base">
                                {artwork.title}
                            </h2>

                        </div>

                    </button>

                ))}

            </div>

            {/* Lightbox */}
            {selectedArtwork && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
                    onClick={() => setSelectedArtwork(null)}
                >

                    {/* Close button */}
                    <button
                        onClick={() => setSelectedArtwork(null)}
                        className="absolute right-6 top-6 z-10 text-4xl font-light text-white transition-opacity hover:opacity-60"
                        aria-label="بستن"
                    >
                        ×
                    </button>

                    {/* Large artwork */}
                    <div
                        className="flex max-h-[90vh] max-w-[90vw] items-center justify-center"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <img
                            src={selectedArtwork.image}
                            alt={selectedArtwork.title}
                            className="max-h-[90vh] max-w-[90vw] object-contain"
                        />

                    </div>

                </div>

            )}

        </main>
    );
}

export default Works;