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

    // ================= KEYBOARD CONTROLS =================
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
                    current === artworks.length - 1 ? 0 : current + 1
                );
            }

            // Previous artwork
            if (exhibitionMode && event.key === "ArrowLeft") {
                setCurrentIndex((current) =>
                    current === 0 ? artworks.length - 1 : current - 1
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [exhibitionMode]);

    // ================= OPEN EXHIBITION =================
    const openExhibition = (index: number) => {
        setCurrentIndex(index);
        setExhibitionMode(true);
    };

    // ================= NEXT ARTWORK =================
    const nextArtwork = () => {
        setCurrentIndex((current) =>
            current === artworks.length - 1 ? 0 : current + 1
        );
    };

    // ================= PREVIOUS ARTWORK =================
    const previousArtwork = () => {
        setCurrentIndex((current) =>
            current === 0 ? artworks.length - 1 : current - 1
        );
    };

    return (
        <main className="min-h-screen bg-[#f5f3ee] text-[#111]">

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <section className="px-6 pt-16 md:px-12 md:pt-24">

                <div className="mx-auto max-w-7xl">

                    {/* Title */}
                    <div className="mb-14 text-center md:mb-16">

                        <h1
                            dir="rtl"
                            className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl"
                        >
                            آثار هنری
                        </h1>

                    </div>


                    {/* ================================================= */}
                    {/* VIEW TOGGLE */}
                    {/* ================================================= */}

                    <div className="border-y border-black/10 py-5">

                        <div className="flex items-center justify-center gap-8">

                            {/* GRID */}
                            <button
                                onClick={() => {
                                    setExhibitionMode(false);
                                    setSelectedArtwork(null);
                                }}
                                className={`text-xs tracking-[0.25em] transition-all duration-300 ${!exhibitionMode
                                        ? "opacity-100"
                                        : "opacity-35 hover:opacity-100"
                                    }`}
                            >
                                GRID
                            </button>


                            {/* Divider */}
                            <span className="h-1 w-1 rounded-full bg-black/25" />


                            {/* EXHIBITION */}
                            <button
                                onClick={() => {
                                    setCurrentIndex(0);
                                    setExhibitionMode(true);
                                    setSelectedArtwork(null);
                                }}
                                className={`text-xs tracking-[0.25em] transition-all duration-300 ${exhibitionMode
                                        ? "opacity-100"
                                        : "opacity-35 hover:opacity-100"
                                    }`}
                            >
                                EXHIBITION
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* GRID VIEW */}
            {/* ================================================= */}

            {!exhibitionMode && (

                <section className="px-5 py-16 md:px-10 md:py-24">

                    <div className="mx-auto max-w-7xl">

                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-x-8
                                gap-y-16
                                sm:grid-cols-2
                                lg:grid-cols-3
                                lg:gap-x-10
                                lg:gap-y-24
                            "
                        >

                            {artworks.map((artwork, index) => (

                                <article
                                    key={artwork.id}
                                    className="group cursor-pointer"
                                    onClick={() =>
                                        setSelectedArtwork(artwork)
                                    }
                                >

                                    {/* ================= ARTWORK ================= */}

                                    <div
                                        className="
                                            relative
                                            overflow-hidden
                                            bg-white
                                        "
                                    >

                                        <div className="flex items-center justify-center p-4 sm:p-6 md:p-8">

                                            <img
                                                src={artwork.image}
                                                alt={artwork.title}
                                                loading="lazy"
                                                className="
                                                    block
                                                    h-auto
                                                    max-h-[650px]
                                                    w-full
                                                    object-contain
                                                    transition-transform
                                                    duration-700
                                                    ease-out
                                                    group-hover:scale-[1.02]
                                                "
                                            />

                                        </div>


                                        {/* Very subtle hover overlay */}

                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                inset-0
                                                bg-black/0
                                                transition-colors
                                                duration-500
                                                group-hover:bg-black/[0.025]
                                            "
                                        />


                                        {/* View icon */}

                                        <div
                                            className="
                                                absolute
                                                bottom-5
                                                right-5
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-white/90
                                                text-black
                                                opacity-0
                                                shadow-sm
                                                backdrop-blur-sm
                                                transition-all
                                                duration-500
                                                group-hover:opacity-100
                                            "
                                        >
                                            <span className="text-lg">
                                                ↗
                                            </span>
                                        </div>

                                    </div>


                                    {/* ================= TITLE ================= */}

                                    <div className="mt-5 flex items-start justify-between gap-4">

                                        <div>

                                            <h2
                                                dir="rtl"
                                                className="
                                                    text-base
                                                    font-medium
                                                    leading-relaxed
                                                    md:text-lg
                                                "
                                            >
                                                {artwork.title}
                                            </h2>

                                            <p className="mt-1 text-[9px] tracking-[0.22em] text-black/35">
                                                MEHDI ZOUFAN
                                            </p>

                                        </div>


                                        {/* Artwork number */}

                                        <span className="pt-1 text-[10px] tracking-[0.2em] text-black/30">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>

            )}


            {/* ================================================= */}
            {/* LIGHTBOX */}
            {/* ================================================= */}

            {selectedArtwork && !exhibitionMode && (

                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/80
                        p-5
                        backdrop-blur-md
                        md:p-10
                    "
                    onClick={() => setSelectedArtwork(null)}
                >

                    {/* Close button */}

                    <button
                        onClick={() => setSelectedArtwork(null)}
                        className="
                            absolute
                            right-5
                            top-5
                            z-20
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            text-3xl
                            font-light
                            text-white
                            transition-opacity
                            duration-300
                            hover:opacity-50
                            md:right-8
                            md:top-8
                        "
                        aria-label="بستن"
                    >
                        ×
                    </button>


                    {/* Artwork */}

                    <div
                        className="
                            flex
                            max-h-[90vh]
                            max-w-[90vw]
                            items-center
                            justify-center
                        "
                        onClick={(event) => event.stopPropagation()}
                    >

                        <img
                            src={selectedArtwork.image}
                            alt={selectedArtwork.title}
                            className="
                                max-h-[88vh]
                                max-w-[90vw]
                                object-contain
                            "
                        />

                    </div>

                </div>

            )}


            {/* ================================================= */}
            {/* EXHIBITION MODE */}
            {/* ================================================= */}

            {exhibitionMode && currentArtwork && (

                <div className="fixed inset-0 z-50 flex flex-col bg-black text-white">

                    {/* ================= CLOSE ================= */}

                    <button
                        onClick={() => setExhibitionMode(false)}
                        className="
                            absolute
                            right-6
                            top-6
                            z-20
                            text-3xl
                            font-light
                            text-white/50
                            transition-colors
                            hover:text-white
                            md:right-10
                            md:top-8
                        "
                        aria-label="بستن نمایشگاه"
                    >
                        ×
                    </button>


                    {/* ================= PREVIOUS ================= */}

                    <button
                        onClick={previousArtwork}
                        className="
                            absolute
                            left-5
                            top-1/2
                            z-20
                            -translate-y-1/2
                            text-4xl
                            font-light
                            text-white/40
                            transition-colors
                            hover:text-white
                            md:left-12
                        "
                        aria-label="اثر قبلی"
                    >
                        ←
                    </button>


                    {/* ================= ARTWORK ================= */}

                    <div
                        className="
                            flex
                            flex-1
                            items-center
                            justify-center
                            px-16
                            py-16
                            md:px-24
                        "
                    >

                        <img
                            key={currentArtwork.id}
                            src={currentArtwork.image}
                            alt={currentArtwork.title}
                            className="
                                max-h-[78vh]
                                max-w-[85vw]
                                object-contain
                            "
                        />

                    </div>


                    {/* ================= INFORMATION ================= */}

                    <div className="pb-8 text-center">

                        <h2
                            dir="rtl"
                            className="text-xl font-bold md:text-2xl"
                        >
                            {currentArtwork.title}
                        </h2>

                        <p className="mt-2 text-xs tracking-[0.2em] text-white/40">
                            {currentIndex + 1} / {artworks.length}
                        </p>

                    </div>


                    {/* ================= NEXT ================= */}

                    <button
                        onClick={nextArtwork}
                        className="
                            absolute
                            right-5
                            top-1/2
                            z-20
                            -translate-y-1/2
                            text-4xl
                            font-light
                            text-white/40
                            transition-colors
                            hover:text-white
                            md:right-12
                        "
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