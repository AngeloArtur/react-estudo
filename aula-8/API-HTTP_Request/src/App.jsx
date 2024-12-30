import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage/UserPage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Bem vindo</h1>} />
                    <Route path="/users" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
