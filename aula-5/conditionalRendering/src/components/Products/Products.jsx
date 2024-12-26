import { useState } from "react";

export default function Products() {
    const itens = [
        { inStock: true, name: "televisão" },
        { inStock: true, name: "armário" },
        { inStock: true, name: "fogão" },
        { inStock: false, name: "Cama" },
        { inStock: false, name: "Geladeira" },
    ];

    const [showAll, setShowAll] = useState(false);

    const itensFilter = showAll ? itens.filter((item) => item.inStock) : itens;

    return (
        <div>
            <ul>
                {itensFilter.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <button onClick={() => setShowAll(false)}>Mostar todos</button>
            <button onClick={() => setShowAll(true)}>Mostar em estoque</button>
        </div>
    );
}
