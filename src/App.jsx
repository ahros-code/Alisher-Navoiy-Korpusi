import {Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import KorpusHaqida from "./pages/KorpusHaqida/KorpusHaqida.jsx";
import News from "./pages/News/News.jsx";
import SingleCard from "./pages/SingleCard/SingleCard.jsx";
import Devonlar from "./pages/Devonlar/Devonlar.jsx";
import IlmiyTadqiqotlar from "./pages/IlmiyTadqiqotlar/IlmiyTadqiqotlar.jsx";
import Works from "./pages/Works/Works.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/korpus'} element={<KorpusHaqida />} />
                <Route path={'/news'} element={<News />} />
                <Route path={'/cards/:id'} element={<SingleCard />} />
                <Route path={'/devonlar'} element={<Devonlar />} />
                <Route path={'/researches'} element={<IlmiyTadqiqotlar />} />
                <Route path={'/works'} element={<Works />} />
            </Route>
        </Routes>
    )
}

export default App;