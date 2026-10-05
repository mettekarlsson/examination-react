import UserPage from "./pages/UserPage";
import Nav from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

function App() {
    const location = useLocation();

    return (
        <div className="bg-slate-100 min-h-screen">
            <Nav></Nav>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                resetKeys={[location.pathname]}
            >
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/users" element={<UserPage />}></Route>
                    <Route
                        path="/users/:id"
                        element={<UserDetailPage />}
                    ></Route>
                </Routes>
            </ErrorBoundary>
        </div>
    );
}

export default App;
