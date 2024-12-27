import { TodoProvider } from "./ToDoContext"
import { ThemeProvider } from "./ThemeContext"


const Provider = ({children}) => {
    return(
        <TodoProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </TodoProvider>
    )
}

export default Provider