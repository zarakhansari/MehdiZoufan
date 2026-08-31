function About() {
    return (
        <main className="min-h-screen bg-[#f5f3ee] text-[#111]">

            {/* Introduction */}
            <section className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">

                {/* Portrait */}
                <div className="flex min-h-[70vh] items-center justify-center p-6 md:p-12">
                    <div className="w-full bg-white">
                        {/* Grandfather's photograph will go here */}

                        <div className="flex aspect-[4/5] items-center justify-center bg-black/5">
                            <p className="text-sm text-black/40">
                                Portrait
                            </p>
                        </div>
                    </div>
                </div>

                {/* Introduction text */}
                <div className="flex items-center px-8 py-20 md:px-16">

                    <div className="max-w-xl">

                        <p className="mb-6 text-sm text-black/50">
                            درباره هنرمند
                        </p>

                        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
                            مهدی ذوفن
                        </h1>

                        <p className="mt-10 text-lg leading-9 text-black/70">
                            مهدی ذوفن هنرمندی بود که نگاه شخصی خود به جهان را
                            از طریق آثارش به تصویر کشید.
                        </p>

                        <p className="mt-6 text-base leading-8 text-black/60">
                            این مجموعه با هدف حفظ و معرفی آثار، زندگی و میراث هنری
                            او گردآوری شده است.
                        </p>

                    </div>

                </div>

            </section>


            {/* Biography */}
            <section className="border-t border-black/10">

                <div className="mx-auto max-w-4xl px-6 py-24 md:px-12">

                    <p className="mb-6 text-sm text-black/50">
                        زندگی و هنر
                    </p>

                    <h2 className="font-serif text-4xl md:text-5xl">
                        داستان او
                    </h2>

                    <div className="mt-12 space-y-6 text-base leading-9 text-black/70">

                        <p>
                            اینجا می‌توانیم داستان زندگی مهدی ذوفن، مسیر هنری،
                            علاقه‌ها و نگاه او به هنر را روایت کنیم.
                        </p>

                        <p>
                            این بخش می‌تواند شامل اطلاعاتی درباره دوران زندگی،
                            فعالیت‌های هنری، نمایشگاه‌ها و تأثیراتی باشد که بر
                            آثار او گذاشته‌اند.
                        </p>

                        <p>
                            متن کامل زندگی‌نامه را بعداً با اطلاعات واقعی درباره
                            زندگی و آثار او جایگزین خواهیم کرد.
                        </p>

                    </div>

                </div>

            </section>


            {/* Closing statement */}
            <section className="bg-[#111] px-6 py-32 text-center text-white">

                <p className="mx-auto max-w-3xl font-serif text-3xl leading-relaxed md:text-5xl">
                    آثار یک هنرمند، بخشی از نگاه او به جهان هستند؛
                    و این نگاه می‌تواند برای همیشه باقی بماند.
                </p>

            </section>

        </main>
    );
}

export default About;