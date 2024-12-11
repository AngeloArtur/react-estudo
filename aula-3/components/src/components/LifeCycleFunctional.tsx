import { useEffect, useState } from "react";

export function LifeCycleFunctional() {
    const {count, setCount} = useState(0)

    useEffect(() => {
        console.log('Componente montado')
        return () => { console.log('O componente sera desmontado!')}
    }, [])

    useEffect(() => {
        console.log('O Componente será atualizado')
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }

    return (
      <div>
        <p>Contagem: {count}</p>
        <button onClick={increment}>Incrementar</button>
      </div>
    )
}