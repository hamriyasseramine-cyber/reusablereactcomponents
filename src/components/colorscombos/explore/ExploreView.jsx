import { useCallback } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import palettes from "./palettesData.js";
import { useFavorites } from "../favorites/FavoritesContext.jsx";
import PaletteCard from "./PaletteCard.jsx";
import "./effects.css";

// Grid layout classes handed to VirtuosoGrid. Keep in your CSS
// (e.g. effects.css or a dedicated explore.css):
//
// .palette-grid-list {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
//   gap: 24px;
//   margin-top: 24px;
// }
// .palette-grid-item {
//   /* nothing needed here, grid handles sizing */
// }

export default function ExploreView() {
  const { isFavorite, toggleFavorite } = useFavorites();

  // Stable across renders: passed down to every card, required for
  // PaletteCard's memo comparison to actually skip re-renders.
  const handleToggleFavorite = useCallback(
    (paletteInfo) => toggleFavorite(paletteInfo),
    [toggleFavorite]
  );

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1
        style={{
          color: "#ffffff",
          fontSize: "52px",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Explore
      </h1>
      <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "8px" }}>
        Browse thousands of color palettes.
      </p>

      <VirtuosoGrid
        useWindowScroll
        totalCount={palettes.length}
        listClassName="palette-grid-list"
        itemClassName="palette-grid-item"
        itemContent={(index) => {
          const palette = palettes[index];
          return (
            <PaletteCard
              key={palette.id}
              palette={palette}
              favorited={isFavorite(palette.id)}
              onToggleFavorite={handleToggleFavorite}
              index={index}
            />
          );
        }}
      />
    </div>
  );
}