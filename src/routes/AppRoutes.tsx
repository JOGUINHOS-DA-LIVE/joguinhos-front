import { BrowserRouter, Routes, Route } from "react-router";
import VocabuloPage from "../features/vocabulo/VocabuloPage";
import HomePage from "../features/home/HomePage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/vocabulo" element={<VocabuloPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
