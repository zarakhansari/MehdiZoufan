import { useEffect, useState } from "react";

import { artworks } from "../data/artworks";

function Works() {
    const [selectedArtwork, setSelectedArtwork] = useState<
        (typeof artworks)[number] | null
    >(null);

    const [exhibitionMode, setExhibitionMode] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);


    // Current artwork in exhibition mode
    const currentArtwork = artworks[currentIndex];


    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {

            // Escape
            if (event.key === "Escape") {
                setSelectedArtwork(null);
                setExhibitionMode(false);
            }

            // Next artwork
            if (exhibitionMode && event.key === "ArrowRight") {
                setCurrentIndex((current) =>
                    current === artworks.length - 1
                        ? 0
                        : current + 1
                );
            }

            // Previous artwork
            if (exhibitionMode && event.key === "ArrowLeft") {
                setCurrentIndex((current) =>
                    current === 0
                        ? artworks.length - 1
                        : current - 1
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [exhibitionMode]);


    // Open exhibition
    const openExhibition = (index: number) => {
        setCurrentIndex(index);
        setExhibitionMode(true);
    };


    // Next artwork
    const nextArtwork = () => {
        setCurrentIndex((current) =>
            current === artworks.length - 1
                ? 0
                : current + 1
        );
    };


    // Previous artwork
    const previousArtwork = () => {
        setCurrentIndex((current) =>
            current === 0
                ? artworks.length - 1
                : current - 1
        );
    };


    return (
        <main className="min-h-screen bg-[#f5f3ee] px-6 py-16 text-center text-[#111] md:px-12">

            {/* ================= HEADER ================= */}

            <div className="mx-auto max-w-7xl">

                {/* <p className="mb-4 text-sm text-black/50">
                    مجموعه
                </p> */}

                <h1 className="font-bold text-5xl tracking-tight md:text-7xl">
                    آثار هنری
                </h1>


                {/* ================= VIEW TOGGLE ================= */}

                <div className="mt-10 flex justify-center gap-8 border-y border-black/10 py-5">

                    <button
                        onClick={() => setExhibitionMode(false)}
                        className={`text-xs tracking-[0.2em] transition-opacity ${!exhibitionMode
                            ? "opacity-100"
                            : "opacity-40 hover:opacity-100"
                            }`}
                    >
                        GRID
                    </button>

                    <button
                        onClick={() => {
                            setCurrentIndex(0);
                            setExhibitionMode(true);
                        }}
                        className={`text-xs tracking-[0.2em] ${exhibitionMode
                            ? "opacity-100"
                            : "opacity-40 hover:opacity-100"
                            }`}
                    >
                        EXHIBITION
                    </button>

                </div>

            </div>


            {/* ================= GALLERY ================= */}

            {!exhibitionMode && (

                <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {artworks.map((artwork, index) => (

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

            )}


            {/* ================= LIGHTBOX ================= */}

            {selectedArtwork && !exhibitionMode && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
                    onClick={() => setSelectedArtwork(null)}
                >

                    {/* Close */}
                    <button
                        onClick={() => setSelectedArtwork(null)}
                        className="absolute right-6 top-6 z-10 text-4xl font-light text-white transition-opacity hover:opacity-60"
                        aria-label="بستن"
                    >
                        ×
                    </button>


                    {/* Artwork */}

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


            {/* ================= EXHIBITION MODE ================= */}

            {exhibitionMode && currentArtwork && (

                <div className="fixed inset-0 z-50 flex flex-col bg-black text-white">

                    {/* Close */}

                    <button
                        onClick={() => setExhibitionMode(false)}
                        className="absolute right-6 top-6 z-20 text-3xl font-light text-white/60 transition-colors hover:text-white md:right-10 md:top-8"
                        aria-label="بستن نمایشگاه"
                    >
                        ×
                    </button>


                    {/* Previous */}

                    <button
                        onClick={previousArtwork}
                        className="absolute left-5 top-1/2 z-20 -translate-y-1/2 text-4xl font-light text-white/40 transition-colors hover:text-white md:left-12"
                        aria-label="اثر قبلی"
                    >
                        ←
                    </button>


                    {/* Artwork */}

                    <div className="flex flex-1 items-center justify-center px-16 py-16 md:px-24">

                        <img
                            key={currentArtwork.id}
                            src={currentArtwork.image}
                            alt={currentArtwork.title}
                            className="max-h-[78vh] max-w-[85vw] object-contain"
                        />

                    </div>


                    {/* Information */}

                    <div className="pb-8 text-center">

                        <h2 className="font-bold text-xl md:text-2xl">
                            {currentArtwork.title}
                        </h2>

                        <p className="mt-2 text-xs tracking-[0.2em] text-white/40">
                            {currentIndex + 1} / {artworks.length}
                        </p>

                    </div>


                    {/* Next */}

                    <button
                        onClick={nextArtwork}
                        className="absolute right-5 top-1/2 z-20 -translate-y-1/2 text-4xl font-light text-white/40 transition-colors hover:text-white md:right-12"
                        aria-label="اثر بعدی"
                    >
                        →
                    </button>

                </div>

            )}

        </main>
    );
}

export default Works;