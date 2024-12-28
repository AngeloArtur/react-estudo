import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthContext";

export default function Navbar() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/services">Services</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
            <Link to="/contact">Contact</Link>
        </nav>
    );
}
