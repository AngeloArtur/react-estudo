import { useContext } from "react";
import { themeContext } from "../Theme/Theme";

export default function ThemeSwitcher() {
    const {theme, toggleTheme} = useContext(themeContext);

    return (
        <div>
            <p>o tema atual é: {theme}</p>
            <button onClick={toggleTheme}>Trocar tema</button>
        </div>
    );
}
