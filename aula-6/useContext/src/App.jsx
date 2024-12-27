import AddTodo from "./components/AddTodo/AddTodo";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
    return (
        <>
            <div>
                <h1>Lista de Tarefas</h1>
                <AddTodo></AddTodo>
                <ToDoList></ToDoList>
            </div>
        </>
    );
}

export default App;
