import {Route, Routes} from "react-router-dom";
import HomePage from "../../3pages/home/HomePage.tsx";
import ChessPage from "../../3pages/chess/ChessPage.tsx";
import {Navigate} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"
                   element={<HomePage />} />
            <Route path="/chess"
                   element={<ChessPage />} />
            <Route path="*"
                   element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;