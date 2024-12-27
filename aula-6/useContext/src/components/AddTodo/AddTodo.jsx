import { useState, useContext } from "react";
import { TodoContext } from "../../context/ToDoContext";

const AddTodo = () => {
    const { addTodo } = useContext(TodoContext);
    const [newTask, setNewTask] = useState("");

    const handleAdd = () => {
        addTodo(newTask);
        setNewTask("");
    };

    return (
        <div>
            <input
                type="text" // Define o tipo do input como texto
                value={newTask} // Define o valor do input como o estado newTask
                onChange={(event) => setNewTask(event.target.value)} // Atualiza newTask com o valor digitado no input
                placeholder="Nova Tarefa" // Exibe um texto de exemplo no campo de input
            />

            <button onClick={handleAdd}>Adicionar</button>
        </div>
    );
};

export default AddTodo;
