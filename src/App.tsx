import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router";
import Home from "./components/Home.tsx";
import FilmList from "./components/FilmList.tsx";
import Favourites from "./components/Favourites.tsx";

function App() {


    return (
        <>
            <BrowserRouter>
                <nav>
                    <NavLink to="/" end>Főoldal</NavLink>
                    <NavLink to="/movielist">Filmek</NavLink>
                    <NavLink to="/favourites">Kedvencek</NavLink>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movielist" element={<FilmList/>}/>
                    <Route path="/favourites" element={<Favourites/>}/>
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App;
