function Contact() {
    return (
        <main className="min-h-screen bg-[#f5f3ee] text-[#111]">

            {/* Header */}
            <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-12">

                <p className="mb-6 text-2xl text-black/50">
                    تماس با ما
                </p>



                <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-black/60">
                    برای کسب اطلاعات بیشتر در مورد آثار هنری، نمایشگاه‌ها،
                    و یا هرگونه سوال در مورد مجموعه، لطفا با ما تماس بگیرید.
                </p>

            </section>


            {/* Contact form */}
            <section className="border-t border-black/10">

                <div className="mx-auto max-w-3xl px-6 py-20 md:px-12">

                    <form className="space-y-8">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-3 block text-sm"
                            >
                                نام و نام خانوادگی
                            </label>

                            <input
                                id="name"
                                type="text"
                                className="w-full border-b border-black/20 bg-transparent px-0 py-3 outline-none transition-colors focus:border-black"
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-3 block text-sm"
                            >
                                ایمیل
                            </label>

                            <input
                                id="email"
                                type="email"
                                className="w-full border-b border-black/20 bg-transparent px-0 py-3 outline-none transition-colors focus:border-black"
                            />
                        </div>


                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-3 block text-sm"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows={5}
                                className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 outline-none transition-colors focus:border-black"
                            />
                        </div>


                        {/* Submit */}
                        <button
                            type="submit"
                            className="border-b border-black pb-2 text-sm tracking-wide transition-opacity hover:opacity-50"
                        >
                            ارسال
                        </button>

                    </form>

                </div>

            </section>


            {/* Email */}
            <section className="border-t border-black/10 px-6 py-20 text-center">

                <p className="text-sm text-black/50">
                    ایمیل
                </p>

                <a
                    href="mailto:your@email.com"
                    className="mt-3 inline-block font-serif text-2xl transition-opacity hover:opacity-50 md:text-3xl"
                >
                    your@email.com
                </a>

            </section>

        </main>
    );
}

export default Contact;