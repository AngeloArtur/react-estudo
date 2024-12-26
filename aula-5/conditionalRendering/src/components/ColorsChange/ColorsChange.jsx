import { useEffect, useState } from "react";

export default function ColorsChange() {
    const [start, setStart] = useState(false);
    const [color, setColor] = useState("fff");

    useEffect(() => {
        const changeColor = setInterval(() => {
            const hex = Math.floor(Math.random() * 0xffffff);
            const hexColor = hex.toString(16).toUpperCase().padStart(6, "0");
            start ? setColor(hexColor) : '';
        }, 2000);
        return () => clearInterval(changeColor);
    });

    return (
        <div>
            <p style={{ backgroundColor: `#${color}`, border: "1px solid black", padding: "10px" }}>
                Cor atual: {color}
            </p>
            <button onClick={() => setStart(true)}>Iniciar</button>
            <button onClick={() => setStart(false)}>Pausar</button>
        </div>
    );
}
