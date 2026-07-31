import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Vocabulo from "./Vocabulo";

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vocabulo" element={<Vocabulo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;
