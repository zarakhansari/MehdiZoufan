import { useEffect, useState } from "react";
import { artworks } from "../data/artworks";

const categories = [
    "همه آثار",
    "طبیعت و گل",
    "چهره و پیکره",
    "روایت و اسطوره",
    "دربار و سنت",
];

// Category assigned to each artwork by ID
const artworkCategories: Record<number, string> = {
    1: "طبیعت و گل",
    2: "طبیعت و گل",
    3: "چهره و پیکره",
    4: "چهره و پیکره",
    5: "روایت و اسطوره",
    6: "روایت و اسطوره",
    7: "طبیعت و گل",
    8: "دربار و سنت",
    9: "روایت و اسطوره",
    10: "چهره و پیکره",
    11: "روایت و اسطوره",
    12: "دربار و سنت",
};

function Works() {
    const [selectedCategory, setSelectedCategory] =
        useState("همه آثار");

    const [selectedArtwork, setSelectedArtwork] = useState<
        (typeof artworks)[number] | null
    >(null);

    const [exhibitionMode, setExhibitionMode] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    // =====================================================
    // GET CATEGORY
    // =====================================================

    const getCategory = (artwork: (typeof artworks)[number]) => {
        return artworkCategories[artwork.id] || "";
    };

    // =====================================================
    // FILTER ARTWORKS
    // =====================================================

    const filteredArtworks =
        selectedCategory === "همه آثار"
            ? artworks
            : artworks.filter(
                (artwork) =>
                    getCategory(artwork) === selectedCategory
            );

    // =====================================================
    // CURRENT EXHIBITION ARTWORK
    // =====================================================

    const currentArtwork = artworks[currentIndex];

    // =====================================================
    // KEYBOARD CONTROLS
    // =====================================================

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Escape
            if (event.key === "Escape") {
                setSelectedArtwork(null);
                setExhibitionMode(false);
            }

            // Exhibition next
            if (
                exhibitionMode &&
                event.key === "ArrowRight"
            ) {
                setCurrentIndex((current) =>
                    current === artworks.length - 1
                        ? 0
                        : current + 1
                );
            }

            // Exhibition previous
            if (
                exhibitionMode &&
                event.key === "ArrowLeft"
            ) {
                setCurrentIndex((current) =>
                    current === 0
                        ? artworks.length - 1
                        : current - 1
                );
            }

            // Detail next
            if (
                selectedArtwork &&
                !exhibitionMode &&
                event.key === "ArrowRight"
            ) {
                const currentFilteredIndex =
                    filteredArtworks.findIndex(
                        (artwork) =>
                            artwork.id === selectedArtwork.id
                    );

                const nextIndex =
                    currentFilteredIndex ===
                        filteredArtworks.length - 1
                        ? 0
                        : currentFilteredIndex + 1;

                setSelectedArtwork(
                    filteredArtworks[nextIndex]
                );
            }

            // Detail previous
            if (
                selectedArtwork &&
                !exhibitionMode &&
                event.key === "ArrowLeft"
            ) {
                const currentFilteredIndex =
                    filteredArtworks.findIndex(
                        (artwork) =>
                            artwork.id === selectedArtwork.id
                    );

                const previousIndex =
                    currentFilteredIndex === 0
                        ? filteredArtworks.length - 1
                        : currentFilteredIndex - 1;

                setSelectedArtwork(
                    filteredArtworks[previousIndex]
                );
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        exhibitionMode,
        selectedArtwork,
        filteredArtworks,
    ]);

    // =====================================================
    // EXHIBITION NAVIGATION
    // =====================================================

    const nextArtwork = () => {
        setCurrentIndex((current) =>
            current === artworks.length - 1
                ? 0
                : current + 1
        );
    };

    const previousArtwork = () => {
        setCurrentIndex((current) =>
            current === 0
                ? artworks.length - 1
                : current - 1
        );
    };

    // =====================================================
    // DETAIL NAVIGATION
    // =====================================================

    const nextDetailArtwork = () => {
        if (!selectedArtwork) return;

        const currentFilteredIndex =
            filteredArtworks.findIndex(
                (artwork) =>
                    artwork.id === selectedArtwork.id
            );

        const nextIndex =
            currentFilteredIndex ===
                filteredArtworks.length - 1
                ? 0
                : currentFilteredIndex + 1;

        setSelectedArtwork(
            filteredArtworks[nextIndex]
        );
    };

    const previousDetailArtwork = () => {
        if (!selectedArtwork) return;

        const currentFilteredIndex =
            filteredArtworks.findIndex(
                (artwork) =>
                    artwork.id === selectedArtwork.id
            );

        const previousIndex =
            currentFilteredIndex === 0
                ? filteredArtworks.length - 1
                : currentFilteredIndex - 1;

        setSelectedArtwork(
            filteredArtworks[previousIndex]
        );
    };

    return (
        <main className="min-h-screen bg-[#f5f3ee] text-[#111]">

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <section className="px-6 pt-16 md:px-12 md:pt-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 text-center md:mb-16">

                        <h1
                            dir="rtl"
                            className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl"
                        >
                            آثار هنری
                        </h1>

                    </div>

                    {/* VIEW TOGGLE */}

                    <div className="border-y border-black/10 py-5">

                        <div className="flex items-center justify-center gap-8">

                            <button
                                type="button"
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

                            <span className="h-1 w-1 rounded-full bg-black/25" />

                            <button
                                type="button"
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
            {/* GRID */}
            {/* ================================================= */}

            {!exhibitionMode && (

                <section className="px-5 py-14 md:px-10 md:py-20">

                    <div className="mx-auto max-w-7xl">

                        {/* CATEGORY FILTER */}

                        <div className="mb-14">

                            <div
                                className="
                                    flex
                                    gap-3
                                    overflow-x-auto
                                    pb-3
                                    md:flex-wrap
                                    md:justify-center
                                    md:overflow-visible
                                "
                            >

                                {categories.map((category) => {

                                    const isActive =
                                        selectedCategory === category;

                                    const count =
                                        category === "همه آثار"
                                            ? artworks.length
                                            : artworks.filter(
                                                (artwork) =>
                                                    getCategory(
                                                        artwork
                                                    ) === category
                                            ).length;

                                    return (
                                        <button
                                            key={category}
                                            type="button"
                                            onClick={() => {
                                                setSelectedCategory(
                                                    category
                                                );
                                                setSelectedArtwork(
                                                    null
                                                );
                                            }}
                                            className={`
                                                flex
                                                shrink-0
                                                items-center
                                                gap-2
                                                border
                                                px-4
                                                py-2
                                                text-xs
                                                transition-all
                                                duration-300
                                                ${isActive
                                                    ? "border-black bg-black text-white"
                                                    : "border-black/15 text-black/60 hover:border-black/40 hover:text-black"
                                                }
                                            `}
                                        >

                                            <span dir="rtl">
                                                {category}
                                            </span>

                                            <span
                                                className={
                                                    isActive
                                                        ? "text-[9px] text-white/50"
                                                        : "text-[9px] text-black/30"
                                                }
                                            >
                                                {count}
                                            </span>

                                        </button>
                                    );
                                })}

                            </div>

                        </div>

                        {/* CATEGORY HEADER */}

                        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">

                            <div>

                                <p
                                    dir="rtl"
                                    className="text-sm text-black/50"
                                >
                                    {selectedCategory}
                                </p>

                                <p className="mt-1 text-[9px] tracking-[0.2em] text-black/30">
                                    {filteredArtworks.length} ARTWORKS
                                </p>

                            </div>

                        </div>

                        {/* ARTWORK GRID */}

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

                            {filteredArtworks.map(
                                (artwork, index) => (

                                    <article
                                        key={artwork.id}
                                        className="group cursor-pointer"
                                        onClick={() =>
                                            setSelectedArtwork(
                                                artwork
                                            )
                                        }
                                    >

                                        {/* IMAGE */}

                                        <div className="relative overflow-hidden bg-white">

                                            <div className="flex items-center justify-center p-4 sm:p-6 md:p-8">

                                                <img
                                                    src={
                                                        artwork.image
                                                    }
                                                    alt={
                                                        artwork.title
                                                    }
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
                                                        group-hover:scale-[1.025]
                                                    "
                                                />

                                            </div>

                                            {/* Hover overlay */}

                                            <div
                                                className="
                                                    pointer-events-none
                                                    absolute
                                                    inset-0
                                                    bg-black/0
                                                    transition-colors
                                                    duration-500
                                                    group-hover:bg-black/[0.04]
                                                "
                                            />

                                            {/* View */}

                                            <div
                                                className="
                                                    absolute
                                                    bottom-5
                                                    left-5
                                                    flex
                                                    items-center
                                                    gap-2
                                                    bg-white
                                                    px-4
                                                    py-2
                                                    text-[9px]
                                                    tracking-[0.18em]
                                                    opacity-0
                                                    transition-all
                                                    duration-500
                                                    group-hover:opacity-100
                                                "
                                            >
                                                VIEW ARTWORK

                                                <span className="text-sm">
                                                    ↗
                                                </span>

                                            </div>

                                            {/* Number */}

                                            <div
                                                className="
                                                    absolute
                                                    right-5
                                                    top-5
                                                    text-[10px]
                                                    tracking-[0.2em]
                                                    text-black/40
                                                "
                                            >
                                                {String(
                                                    index + 1
                                                ).padStart(2, "0")}
                                            </div>

                                        </div>

                                        {/* INFO */}

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
                                                    {
                                                        artwork.title
                                                    }
                                                </h2>

                                                <p
                                                    dir="rtl"
                                                    className="mt-1 text-[10px] text-black/35"
                                                >
                                                    {
                                                        getCategory(
                                                            artwork
                                                        )
                                                    }
                                                </p>

                                            </div>

                                            <span className="pt-1 text-[9px] tracking-[0.2em] text-black/30">
                                                ZOUFAN
                                            </span>

                                        </div>

                                    </article>

                                )
                            )}

                        </div>

                    </div>

                </section>

            )}

            {/* ================================================= */}
            {/* DETAIL MODAL */}
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
                        bg-black/90
                        p-5
                        backdrop-blur-md
                        md:p-10
                    "
                    onClick={() =>
                        setSelectedArtwork(null)
                    }
                >

                    {/* CLOSE */}

                    <button
                        type="button"
                        onClick={() =>
                            setSelectedArtwork(null)
                        }
                        className="
                            absolute
                            right-5
                            top-5
                            z-30
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            text-3xl
                            font-light
                            text-white
                            transition-opacity
                            hover:opacity-50
                            md:right-8
                            md:top-8
                        "
                        aria-label="بستن"
                    >
                        ×
                    </button>

                    {/* PREVIOUS */}

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            previousDetailArtwork();
                        }}
                        className="
                            absolute
                            left-4
                            top-1/2
                            z-30
                            -translate-y-1/2
                            text-4xl
                            font-light
                            text-white/40
                            transition-colors
                            hover:text-white
                            md:left-10
                        "
                        aria-label="اثر قبلی"
                    >
                        ←
                    </button>

                    {/* ARTWORK */}

                    <div
                        className="
                            flex
                            max-h-[92vh]
                            max-w-6xl
                            flex-col
                            items-center
                        "
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <div className="flex max-h-[76vh] items-center justify-center">

                            <img
                                src={
                                    selectedArtwork.image
                                }
                                alt={
                                    selectedArtwork.title
                                }
                                className="
                                    max-h-[76vh]
                                    max-w-[78vw]
                                    object-contain
                                    md:max-w-[75vw]
                                "
                            />

                        </div>

                        {/* INFORMATION */}

                        <div className="mt-5 text-center text-white">

                            <h2
                                dir="rtl"
                                className="text-lg font-medium md:text-xl"
                            >
                                {
                                    selectedArtwork.title
                                }
                            </h2>

                            <p
                                dir="rtl"
                                className="mt-1 text-xs text-white/40"
                            >
                                {
                                    getCategory(
                                        selectedArtwork
                                    )
                                }
                            </p>

                            <p className="mt-2 text-[9px] tracking-[0.25em] text-white/30">
                                MEHDI ZOUFAN
                            </p>

                        </div>

                    </div>

                    {/* NEXT */}

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            nextDetailArtwork();
                        }}
                        className="
                            absolute
                            right-4
                            top-1/2
                            z-30
                            -translate-y-1/2
                            text-4xl
                            font-light
                            text-white/40
                            transition-colors
                            hover:text-white
                            md:right-10
                        "
                        aria-label="اثر بعدی"
                    >
                        →
                    </button>

                    {/* COUNTER */}

                    <div
                        className="
                            absolute
                            bottom-6
                            left-1/2
                            -translate-x-1/2
                            text-[9px]
                            tracking-[0.25em]
                            text-white/30
                        "
                    >
                        {String(
                            filteredArtworks.findIndex(
                                (artwork) =>
                                    artwork.id ===
                                    selectedArtwork.id
                            ) + 1
                        ).padStart(2, "0")}{" "}
                        /{" "}
                        {String(
                            filteredArtworks.length
                        ).padStart(2, "0")}
                    </div>

                </div>

            )}

            {/* ================================================= */}
            {/* EXHIBITION MODE */}
            {/* ================================================= */}

            {exhibitionMode && currentArtwork && (

                <div className="fixed inset-0 z-50 flex flex-col bg-black text-white">

                    {/* CLOSE */}

                    <button
                        type="button"
                        onClick={() =>
                            setExhibitionMode(false)
                        }
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

                    {/* PREVIOUS */}

                    <button
                        type="button"
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

                    {/* ARTWORK */}

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

                    {/* INFORMATION */}

                    <div className="pb-8 text-center">

                        <h2
                            dir="rtl"
                            className="text-xl font-bold md:text-2xl"
                        >
                            {currentArtwork.title}
                        </h2>

                        <p
                            dir="rtl"
                            className="mt-1 text-xs text-white/40"
                        >
                            {getCategory(currentArtwork)}
                        </p>

                        <p className="mt-2 text-xs tracking-[0.2em] text-white/30">
                            {currentIndex + 1} /{" "}
                            {artworks.length}
                        </p>

                    </div>

                    {/* NEXT */}

                    <button
                        type="button"
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