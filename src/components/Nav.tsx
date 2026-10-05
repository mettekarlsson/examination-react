import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex justify-center gap-4 bg-blue-300 p-10 text-2xl">
            <Link
                className="transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-md"
                to="/"
            >
                Home
            </Link>
            <Link
                className="transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-md"
                to="/users"
            >
                Users
            </Link>
            <Link
                className="transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-md"
                to="/stats"
            >
                Stats
            </Link>
        </nav>
    );
};

export default Nav;
