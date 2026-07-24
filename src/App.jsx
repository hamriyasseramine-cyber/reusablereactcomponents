import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home.jsx";
import "./App.css";
import Introduction from "./pages/introduction.jsx";
import Categories from "./pages/categories.jsx";
import ColorsCombos from "./pages/colorscombos.jsx";
import ExploreView from "./components/colorscombos/explore/ExploreView.jsx";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/categories" element={<Categories />} />

          <Route path="/colorscombos" element={<ColorsCombos />}>
            <Route index element={<Navigate to="explore" replace />} />
            <Route path="explore" element={<ExploreView />} />
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
    </FavoritesProvider>
  );
}

export default App;