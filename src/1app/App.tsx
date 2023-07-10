import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter.tsx";
import NavBar from "../4widgets/navbar/NavBar.tsx";

function App() {

    return (
        <BrowserRouter basename="/">
            <NavBar/>
            <div className="app">
                <AppRouter/>
            </div>
        </BrowserRouter>
    )
}

export default App
