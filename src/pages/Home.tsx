import { Link } from "react-router";
import ArtworksSlideshow from "../components/ArtworksSlideshow";

function Home() {
    return (
        <main className="bg-[#f5f3ee] text-[#111]">

            {/* Hero */}
            <section className="min-h-[calc(100vh-89px)]">

                <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">

                    {/* Text */}
                    <div className="flex items-center px-6 py-20 md:px-12">

                        <div className="max-w-xl">

                            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-black/50">
                                مجموعه آثار                            </p>

                            <h1 className="font-serif text-6xl leading-[0.9] tracking-tight md:text-8xl">
                                استاد مهدی
                                <br />
                                ‌ذوفن
                            </h1>

                            <p className="mt-8 max-w-md text-base leading-7 text-black/60">
                                مجموعه‌ای از آثار هنری، خاطرات و میراث هنری مهدی ذوفن.
                            </p>

                            <Link
                                to="/works"
                                className="mt-10 inline-block border-b border-black pb-2 text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
                            >
                                مشاهده آثار
                            </Link>

                        </div>

                    </div>

                    {/* Artwork */}
                    <div className="flex min-h-[70vh] items-center justify-center p-6 md:p-12">

                        <ArtworksSlideshow />

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Home;