import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about");
    };

    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={goToAbout}>Go to About</button>
        </div>
    )
}
