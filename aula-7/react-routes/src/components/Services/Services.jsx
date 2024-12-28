import { useNavigate } from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate("/contact");
    };
    return (
        <div>
            <h1>Services</h1>
            <ul>
                <li>Desenvolvimento de Software</li>
                <li>Design Gráfico</li>
            </ul>

            <button onClick={goToContact}>Entre em contato</button>
        </div>
    );
}
