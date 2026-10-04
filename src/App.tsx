import "./App.css";
import UserPage from "./pages/UserPage";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
    return (
        <>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/users" element={<UserPage />}></Route>
                <Route path="/users/:id" element={<UserDetailPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
