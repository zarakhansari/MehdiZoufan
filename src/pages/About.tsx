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
                            درباره مهدی ذوفن
                        </p>

                        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
                            مهدی ذوفن
                        </h1>

                        <p className="mt-8 text-lg leading-9 text-white/70">
                            مهدی ذوفن هنرمندی برجسته و چهره‌ای شاخص در هنر قلم‌زنی، یکی از هنرهای اصیل و سنتی ایران به شمار می‌رفت. آثار هنری او که با دقت و ظرافتی شگفت‌انگیز بر روی فلز نقش بسته است، نتیجه سال‌ها تلاش، مهارت و تعهد عمیق او به این هنر سنتی است.
                        </p>

                        <p className="mt-6 text-base leading-8 text-white/60">
                            مهدی ذوفن هنرمندی برجسته و چهره‌ای شاخص در هنر قلم‌زنی، یکی از هنرهای اصیل و سنتی ایران به شمار می‌رفت. آثار هنری او که با دقت و ظرافتی شگفت‌انگیز بر روی فلز نقش بسته است، نتیجه سال‌ها تلاش، مهارت و تعهد عمیق او به این هنر سنتی است.
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

                            </p>

                            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                                هنر قلم زنی چیست؟
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="max-w-xl">

                            <p className="text-lg leading-9 text-white/70">
                                قلم‌زنی یکی از هنرهای سنتی و اصیل ایرانی است که شامل حکاکی نقوش بر روی فلز می‌شود. هنرمند با استفاده از قلم‌ها و چکش‌های مخصوص، به تدریج خطوط، الگوها و بافت‌های زیبایی را بر روی سطح فلز ایجاد می‌کند.
                            </p>

                            <p className="mt-6 text-base leading-8 text-white/50">
                                این تکنیک نیازمند دقت، صبر و درک عمیقی از خط و ترکیب‌بندی است. نقوش گیاهی، حیوانات، مناظر معماری و سایر عناصر تزئینی از طریق هزاران ضربه کنترل شده بر روی فلز ظاهر می‌شوند.
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
                            زندگی و میراث
                        </p>

                        <h2 className="font-serif text-5xl md:text-6xl">
                            زندگی و میراث
                        </h2>

                    </div>


                    <div className="max-w-4xl">

                        {/* Timeline item */}
                        <div className="grid grid-cols-[100px_1fr] gap-8 border-t border-white/10 py-8">

                            <span className="text-sm text-white/40">
                                سال
                            </span>

                            <div>
                                <h3 className="text-xl">
                                    سال های اولیه
                                </h3>

                                <p className="mt-3 leading-8 text-white/50">
                                    آثار هنری او که با دقت و ظرافتی شگفت‌انگیز بر روی فلز نقش بسته است، نتیجه سال‌ها تلاش، مهارت و تعهد عمیق او به این هنر سنتی است.
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