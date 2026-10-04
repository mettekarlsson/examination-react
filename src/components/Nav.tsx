import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/stats">Stats</Link>
        </nav>
    );
};

export default Nav;
