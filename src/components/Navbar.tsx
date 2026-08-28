import { Link } from "react-router";

function Navbar() {
    return (
        <header className="border-b border-black/10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

                {/* Logo */}
                <Link
                    to="/Home"
                    className="text-lg font-medium tracking-wide"
                >
                    Mehdi Zoufan
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-8 text-sm">
                    <Link
                        to="/works"
                        className="transition-opacity hover:opacity-50"
                    >
                        Works
                    </Link>

                    <Link
                        to="/about"
                        className="transition-opacity hover:opacity-50"
                    >
                        About
                    </Link>


                </div>

            </nav>
        </header>
    );
}

export default Navbar;