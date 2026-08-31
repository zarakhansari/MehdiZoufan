import { Link } from "react-router";


function Navbar() {
    return (
        <header className="bg-[#111] text-white">

            {/* Artist name + logo */}
            <div className="flex items-center justify-center gap-3 px-6 py-6">

                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <span className="text-2xl font-medium tracking-[0.15em]">
                        ZOUFAN
                    </span>

                    <span className="text-2xl">
                        |
                    </span>

                    <span className="text-4xl">
                        ذوفن
                    </span>

                    {/* Logo */}
                    <div className="ml-2 flex h-15 w-15 items-center justify-center">
                        <img src="/zoufan-logo.jpeg" alt="logo" />
                    </div>
                </Link>

            </div>

            {/* Navigation */}
            <nav className="flex justify-center border-y border-b border-bwhite py-4">

                <div className="flex items-center gap-10 text-sm tracking-wide">

                    <Link
                        to="/about"
                        className="transition-opacity hover:opacity-50"
                    >
                        درباره استاد
                    </Link>

                    <Link
                        to="/works"
                        className="transition-opacity hover:opacity-50"
                    >
                        گنجینه آثار                    </Link>

                    <Link
                        to="/contact"
                        className="transition-opacity hover:opacity-50"
                    >
                        تماس با ما
                    </Link>

                </div>

            </nav>

        </header>
    );
}

export default Navbar;