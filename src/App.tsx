import UserPage from "./pages/UserPage";
import Nav from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import StatsPage from "./pages/StatsPage";

// BrowserRouter and QueryClientProvider are in main.tsx, so hooks like useLocation work here.
function App() {
    // Re-renders App on every navigation, which is what makes resetKeys below work
    const location = useLocation();

    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Outside the ErrorBoundary, so the user can still navigate if a page crashes */}
            <Nav></Nav>
            {/* Catches errors thrown while rendering a page and shows ErrorFallback instead.
                resetKeys resets the boundary when the URL changes,
                so navigating away from a crashed page clears the error */}
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
                    <Route path="/stats" element={<StatsPage />}></Route>
                </Routes>
            </ErrorBoundary>
        </div>
    );
}

export default App;
