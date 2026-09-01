import { Link } from "react-router";

import ArtworksSlideshow from "../components/ArtworksSlideshow";

function Home() {
    return (
        <main className="bg-[#0D0E11] text-[#F4F4F6]">

            {/* ================= HERO ================= */}
            <section className="py-16 md:py-20">

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center md:grid-cols-2">

                    {/* تصویر شاخص اثر */}
                    <div className="animate-fade-in flex items-center justify-center px-6 py-8 md:p-12">
                        <div className="h-full w-full overflow-hidden">
                            <img
                                src="https://pub-b41ae2522b3148e08ec0fb3c8da55472.r2.dev/ArtWorks/round-tray.png"
                                alt="سینی قلم‌زتی اثر استاد مهدی ذوفن"
                                className="h-full w-full object-contain transition-transform duration-1000 hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                    {/* متن و سربرگ فاخر */}
                    <div className="flex items-center px-8 py-12 md:px-12">
                        <div className="max-w-xl text-right" dir="rtl">

                            <p className="animate-fade-up mb-6 text-sm tracking-widest text-[#C5A059] translate-x-20">
                                روایتی از آثار زرین و سیمین استاد مهدی ذوفن
                            </p>

                            <h1 className="animate-fade-up animate-delay-200 font-bold text-5xl leading-[1.25] tracking-tight text-[#F4F4F6] md:text-7xl translate-x-6">
                                اصالت قلم،
                                <br />
                                جاودانگی نقش.
                            </h1>

                            <p className="animate-fade-up animate-delay-400 mt-8 max-w-lg text-base leading-8 text-white/70 translate-x-20">
                                تجلی هنر قلم‌گیری بر پیکره فلز؛ پیوند ظرافت قلم‌موی مینیاتور
                                با شکیبایی فولاد بر صفحه سیمین، در امتداد سنت‌های کهن نگارگری ایرانی.
                            </p>

                            <Link
                                to="/works"
                                className="animate-fade-up animate-delay-600 mt-10 inline-flex items-center gap-3 border-b border-[#C5A059]/60 pb-2 text-sm text-[#F4F4F6] transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
                            >
                                <span>ورود به گنجینه آثار</span>
                                <span className="text-lg">←</span>
                            </Link>

                        </div>
                    </div>

                </div>

            </section>


            {/* ================= THE ARTIST ================= */}
            <section className="bg-[#F8F6F0] text-[#18191C]">

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 py-24 md:grid-cols-2 md:items-center md:px-12">

                    {/* شرح احوال و متن بیوگرافی */}
                    <div
                        dir="rtl"
                        className="max-w-xl text-right"
                    >
                        <p className="mb-4 text-xs font-medium tracking-[0.25em] text-[#8C733E]">
                            شرح احوال و مکتب قلم‌گیری
                        </p>

                        <h2 className="font-bold text-4xl leading-tight text-[#18191C] md:text-5xl">
                            اسـتاد مهـدی ذوفـن
                        </h2>

                        <p className="mt-2 text-sm text-black/50">
                            ۱۳۰۹ – ۱۳۷۸ | اصفهان
                        </p>

                        <p className="mt-8 text-base leading-9 text-black/80">
                            استاد یگانه‌ای که جان‌مایه عمر خویش را در دمیدن روح به کالبد فلز سپری کرد.
                            او از نوجوانی در کانون هنر اصفهان، رازهای ساخت ابزار و شناخت آلیاژها را فراگرفت
                            و تحت تأثیر مکتب نگارگری استاد حسین بهزاد، سبکی نو در قلم‌گیری آفرید.
                        </p>

                        <p className="mt-4 text-base leading-9 text-black/80">
                            در شیوه منحصربه‌فرد ذوفن، ضربه و حجم‌دهی سنتی جای خود را به تراش ظریف و خطی فولاد داد؛
                            روشی که لطافت قلم‌مو و هاشورهای مینیاتور را با دقت میکروسکوپی بر صفحات نقره و برنج جاودانه ساخت.
                        </p>

                        <p className="mt-4 text-base leading-9 text-black/80">
                            حاصل نیم قرن آفرینش مداوم، خلق بیش از دویست شاهکار کم‌نظیر است که امروز در گنجینه موزه‌های
                            ملی و مجموعه‌های معتبر بین‌المللی نگهداری می‌شوند.
                        </p>

                        <Link
                            to="/about"
                            className="mt-8 inline-flex items-center gap-2 border-b border-[#18191C] pb-2 text-xs font-semibold tracking-wider text-[#18191C] transition-opacity hover:opacity-60"
                        >
                            <span>روایت هنر و شیوه قلم‌گیری</span>
                            <span>←</span>
                        </Link>
                    </div>

                    {/* پرتره استاد در کارگاه */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg overflow-hidden rounded-sm shadow-2xl">
                            <img
                                src="/mehdi-zoufan-working-02.jpg"
                                alt="پرتره استاد مهدی ذوفن در کارگاه قلم‌زنی"
                                className="w-full object-cover contrast-125 transition-all duration-700 hover:grayscale-0"
                            />
                        </div>
                    </div>

                </div>

            </section>


            {/* ================= THE WORKS ================= */}
            <section className="bg-[#0D0E11] py-20">

                <div className="px-6 md:px-12">

                    <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between" dir="rtl">

                        <div className="text-right">
                            <p className="mb-3 text-xs tracking-[0.25em] text-[#C5A059]">
                                دسته‌بندی و شاهکارها
                            </p>

                            <h2 className="font-bold text-3xl text-[#F4F4F6] md:text-3xl">
                                مشاهده گنجینه آثار
                            </h2>
                        </div>

                        <Link
                            to="/works"
                            className="hidden items-center gap-2 text-s tracking-widest text-[#C5A059] transition-opacity hover:opacity-70 md:inline-flex"
                        >
                            <span>مشاهده همه آثار</span>
                            <span>←</span>
                        </Link>

                    </div>

                    {/* اسلایدر تمام‌عرض آثار */}
                    <ArtworksSlideshow />

                </div>

            </section>

        </main>
    );
}

export default Home;