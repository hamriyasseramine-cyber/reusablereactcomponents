import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home.jsx";
import "./App.css";
import Introduction from "./pages/introduction.jsx";
import Favorites from "./pages/favorites.jsx";
import Categories from "./pages/categories.jsx";
import ColorsCombos from "./pages/colorscombos.jsx";
import Icons from "./pages/icons.jsx";
import CategoriesIndex from "./pages/components/CategoriesIndex.jsx";
import CategoryPage from "./pages/components/CategoryPage.jsx";
import ComponentDetailPage from "./pages/components/ComponentDetailPage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/components" element={<CategoriesIndex />} />
        <Route path="/components/:category" element={<CategoryPage />} />
        <Route path="/components/:category/:componentId" element={<ComponentDetailPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/colorscombos" element={<ColorsCombos />} />
        <Route path="/icons" element={<Icons />} />
      </Routes>
    </div>
  );
}

export default App;