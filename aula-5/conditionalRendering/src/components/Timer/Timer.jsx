import { useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSecond => prevSecond + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <p>Segundos: {seconds}</p>
        </div>
    )
}