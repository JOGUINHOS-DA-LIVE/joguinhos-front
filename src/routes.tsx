import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./Home";

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;
