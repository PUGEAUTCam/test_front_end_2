import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import KonamiGif from "./components/konami";
import HomePage from "./views/HomePage";
import NewSalePage from "./views/NewSalePage";
import SearchPage from "./views/SearchPage";

function App() {

    return (
        <BrowserRouter>
            <ToastContainer />
            <KonamiGif />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/newSale"
                    element={<NewSalePage />}
                />
                <Route
                    path="/search"
                    element={<SearchPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
