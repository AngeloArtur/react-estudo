import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`O contador mudou para: ${count}`);
    }, [count]);

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Adicionar</button>
        </div>
    );
}
