function About() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* Introduction */}
            <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">

                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">

                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            src="/images/about-1.jpg"
                            alt="Mehdi Zoufan"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="max-w-xl">

                        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/50">
                            About the Artist
                        </p>

                        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
                            Mehdi Zoufan
                        </h1>

                        <p className="mt-8 text-lg leading-9 text-white/70">
                            Mehdi Zoufan was an Iranian artist whose work was deeply
                            connected to the tradition of Ghalamzani, the art of
                            engraving intricate designs onto metal.
                        </p>

                        <p className="mt-6 text-base leading-8 text-white/60">
                            Through patience, precision and an extraordinary attention
                            to detail, he transformed metal surfaces into intricate
                            works of art.
                        </p>

                    </div>

                </div>

            </section>


            {/* What is Ghalamzani */}
            <section className="border-t border-white/10">

                <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">

                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">

                        {/* Heading */}
                        <div>
                            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/50">
                                The Art
                            </p>

                            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                                What is
                                <br />
                                Ghalamzani?
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="max-w-xl">

                            <p className="text-lg leading-9 text-white/70">
                                Ghalamzani is a traditional Iranian art of engraving
                                designs onto metal. The artist uses specialized chisels
                                and a hammer to gradually create lines, patterns and
                                textures on the surface of the metal.
                            </p>

                            <p className="mt-6 text-base leading-8 text-white/50">
                                The technique requires precision, patience and a deep
                                understanding of line and composition. Floral patterns,
                                figures, animals, architectural scenes and other
                                decorative motifs can emerge from the metal through
                                thousands of carefully controlled marks.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Ghalamzani image */}
            <section className="px-6 md:px-12">

                <div className="mx-auto max-w-7xl">

                    <img
                        src="/images/ghalamzani.jpg"
                        alt="Ghalamzani engraving"
                        className="max-h-[80vh] w-full object-cover"
                    />

                </div>

            </section>


            {/* Life highlights */}
            <section className="border-t border-white/10">

                <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">

                    <div className="mb-16">

                        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/50">
                            His Life
                        </p>

                        <h2 className="font-serif text-5xl md:text-6xl">
                            Life & Legacy
                        </h2>

                    </div>


                    <div className="max-w-4xl">

                        {/* Timeline item */}
                        <div className="grid grid-cols-[100px_1fr] gap-8 border-t border-white/10 py-8">

                            <span className="text-sm text-white/40">
                                YEAR
                            </span>

                            <div>
                                <h3 className="text-xl">
                                    Beginning of his artistic journey
                                </h3>

                                <p className="mt-3 leading-8 text-white/50">
                                    A brief description of the beginning of his life
                                    and artistic career will go here.
                                </p>
                            </div>

                        </div>


                        {/* Timeline item */}
                        <div className="grid grid-cols-[100px_1fr] gap-8 border-t border-white/10 py-8">

                            <span className="text-sm text-white/40">
                                YEAR
                            </span>

                            <div>
                                <h3 className="text-xl">
                                    Developing his craft
                                </h3>

                                <p className="mt-3 leading-8 text-white/50">
                                    A short description of an important period in his
                                    artistic life.
                                </p>
                            </div>

                        </div>


                        {/* Timeline item */}
                        <div className="grid grid-cols-[100px_1fr] gap-8 border-t border-white/10 py-8">

                            <span className="text-sm text-white/40">
                                YEAR
                            </span>

                            <div>
                                <h3 className="text-xl">
                                    Recognition and important works
                                </h3>

                                <p className="mt-3 leading-8 text-white/50">
                                    We will add his important works, exhibitions,
                                    achievements or other milestones here.
                                </p>
                            </div>

                        </div>


                        {/* Timeline item */}
                        <div className="grid grid-cols-[100px_1fr] gap-8 border-t border-white/10 py-8">

                            <span className="text-sm text-white/40">
                                YEAR
                            </span>

                            <div>
                                <h3 className="text-xl">
                                    His legacy
                                </h3>

                                <p className="mt-3 leading-8 text-white/50">
                                    A final short section about his influence, family,
                                    work and the preservation of his art.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Closing */}
            <section className="border-t border-white/10 px-6 py-32 text-center">

                <p className="mx-auto max-w-3xl font-serif text-3xl leading-relaxed md:text-5xl">
                    His work remains as a record of his vision,
                    his patience and his dedication to the art.
                </p>

            </section>

        </main>
    );
}

export default About;