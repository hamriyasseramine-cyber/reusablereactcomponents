import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb.jsx";
import Home from "./pages/home.jsx";
import "./App.css";
import Introduction from "./pages/introduction.jsx";
import Categories from "./pages/categories.jsx";
import ColorsCombos from "./pages/colorscombos.jsx";
import ColColLandingPage from "./components/colorscombos/landingpage/ColColLandingPage.jsx";
import ExploreView from "./components/colorscombos/explore/ExploreView.jsx";
import ExplorePaletteView from "./components/colorscombos/explore/ExplorePaletteView.jsx";
import ColorPaletteView from "./components/colorscombos/palette/ColorPaletteView.jsx";
import FavoritesView from "./components/colorscombos/favorites/FavoritesView.jsx";
import TrendingView from "./components/colorscombos/trending/TrendingView.jsx";
import TrendingPaletteView from "./components/colorscombos/trending/TrendingPaletteView.jsx";
import { FavoritesProvider } from "./components/colorscombos/favorites/FavoritesContext.jsx";

function App() {
  return (
    <FavoritesProvider>
      <div>
        <Navbar />

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
          <Breadcrumb />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/categories" element={<Categories />} />

            <Route path="/colorscombos" element={<ColorsCombos />}>
              <Route index element={<ColColLandingPage />} />
              <Route path="explore" element={<ExploreView />} />
              <Route path="explore/:slug" element={<ExplorePaletteView />} />
              <Route path="palette" element={<ColorPaletteView />} />
              <Route
                path="combos"
                element={
                  <div style={{ color: "#9ca3af" }}>Combos — coming soon</div>
                }
              />
              <Route path="trending" element={<TrendingView />} />
              <Route path="trending/:slug" element={<TrendingPaletteView />} />
              <Route path="favorites" element={<FavoritesView />} />
            </Route>
          </Routes>
        </div>
      </div>
    </FavoritesProvider>
  );
}

export default App;