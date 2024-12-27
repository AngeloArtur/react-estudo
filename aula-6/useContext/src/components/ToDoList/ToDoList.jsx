import { useContext } from "react";
import { TodoContext } from "../../context/ToDoContext";

const TodoList = () => {
    const { todos } = useContext(TodoContext); // Utiliza useContext para acessar o array 'todos' do contexto

    return (
        <ul>
            {todos.map(
                (
                    todo // Itera sobre o array 'todos' para renderizar cada tarefa
                ) => (
                    <li key={todo.id}>{todo.task}</li>
                )
            )}
        </ul>
    );
};

export default TodoList;
