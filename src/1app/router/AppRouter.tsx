import {Route, Routes} from "react-router-dom";
import HomePage from "../../3pages/home/HomePage.tsx";
import ChessPage from "../../3pages/chess/ChessPage.tsx";
import {Navigate} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="test-react-simple-chess/"
                   element={<HomePage />} />
            <Route path="test-react-simple-chess/chess"
                   element={<ChessPage />} />
            <Route path="*"
                   element={<Navigate to="test-react-simple-chess/" />} />
        </Routes>
    );
};

export default AppRouter;