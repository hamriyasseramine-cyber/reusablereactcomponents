import { useState } from "react";
import ColorsCombosSidebar from "../components/colorscombos/ColorsCombosSidebar.jsx";
import ExploreView from "../components/colorscombos/ExploreView.jsx";
import ColorPaletteView from "../components/colorscombos/colorpicker/ColorPaletteView.jsx";

export default function ColorsCombos() {
  const [activeId, setActiveId] = useState("explore");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0a0a0a" }}>
      <ColorsCombosSidebar activeId={activeId} onSelect={setActiveId} />

      <main style={{ flex: 1, padding: "40px" }}>
        {activeId === "explore" && <ExploreView />}
        {activeId === "Color-Palette" && <ColorPaletteView />}
        {activeId === "combos" && <div style={{ color: "#9ca3af" }}>Combos — coming soon</div>}
        {activeId === "favorites" && <div style={{ color: "#9ca3af" }}>Favorites — coming soon</div>}
      </main>
    </div>
  );
}