import { BrowserRouter, Route, Routes,} from "react-router-dom";
import PageNotFound from "./page/404";
import DetailMovie from "./page/detailmovie";
import Home from "./page";
import Layout from "./page/layout";
import ListMovie from "./page/listmovie";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/movie" element={<ListMovie />} />
                    <Route path="/movie/:id" element={<DetailMovie />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router