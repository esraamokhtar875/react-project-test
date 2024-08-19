import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/pages/Home/Home";
import Favorites from "../component/fav/Fav";
import WatchList from "../component/pages/Watch/Watch";
import NotFound from "../component/notfound/Notfound";
import Details from "../component/pdaitels/Details";
import AppNavbar from "../component/pages/nav/Nav";
// import Search from "../component/pages/search/Search";

function AppRoute() {
    return (
        <>
            <BrowserRouter>
                <AppNavbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route> */
                    <Route path="/watchlist" element={<WatchList />}></Route>
                    <Route path="/Favorites" element={<Favorites />}></Route>
                    <Route path="/details" element={<Details />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default AppRoute;
