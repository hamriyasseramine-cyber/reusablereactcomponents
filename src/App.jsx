import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home.jsx";
import "./App.css";
import Introduction from "./pages/introduction.jsx";
import Favorites from "./pages/favorites.jsx";
import Categories from "./pages/categories.jsx";
import ColorsCombos from "./pages/colorscombos.jsx";
import ExploreView from "./components/colorscombos/explore/ExploreView.jsx";
import ColorPaletteView from "./components/colorscombos/palette/ColorPaletteView.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/favorites" element={<Favorites />} />
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
          <Route
            path="trending"
            element={
              <div style={{ color: "#9ca3af" }}>Trending — coming soon</div>
            }
          />
          <Route
            path="favorites"
            element={
              <div style={{ color: "#9ca3af" }}>Favorites — coming soon</div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
