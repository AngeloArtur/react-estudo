import { useState } from "react";

export default function Login() {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <div>
            {isLogged ? (
                <button onClick={() => setIsLogged(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLogged(true)}>Login</button>
            )}
            <p>{isLogged ? 'Bem-vindo' : 'Por favor se logue'}</p>
        </div>
    );
}
