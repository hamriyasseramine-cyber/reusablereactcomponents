import { memo, useCallback } from "react";
import { NavLink } from "react-router-dom";
import PaletteBands from "./PaletteBands.jsx";
import HeartButton from "./HeartButton.jsx";
import OptionsMenu from "./OptionsMenu.jsx";

function PaletteCard({ palette, favorited, onToggleFavorite, basePath = "/colorscombos/explore", index = 0 }) {
  const slug = palette.slug || palette.id;
  const favoriteId = palette.id ?? palette.slug;

  // Stable reference: only changes if palette/slug identity changes,
  // not on every parent view render.
  const handleToggle = useCallback(() => {
    onToggleFavorite({
      id: favoriteId,
      name: palette.name,
      colors: palette.colors,
      slug,
    });
  }, [onToggleFavorite, palette, slug, favoriteId]);

  // Stagger by position within a "batch" of 12 (3 rows of 4) so the delay
  // resets instead of growing unbounded for items far down the list —
  // keeps the drop-in feeling fast even for card #300.
  const animationDelay = `${(index % 12) * 60}ms`;

  return (
    <div className="card-drop-in" style={{ animationDelay }}>
      <PaletteBands palette={palette} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <NavLink
          to={`${basePath}/${slug}`}
          style={{
            color: "#e5e7eb",
            fontSize: "14px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textDecoration: "none",
          }}
        >
          {palette.name}
        </NavLink>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
            marginLeft: "8px",
          }}
        >
          <HeartButton
            favorited={favorited}
            showCount
            count={palette.likes || 0}
            onToggle={handleToggle}
          />

          <OptionsMenu />
        </div>
      </div>
    </div>
  );
}

// Only re-render a card if its own palette or favorited status changed —
// hovering/favoriting one of 417 cards no longer touches the other 416.
export default memo(PaletteCard, (prev, next) => {
  return (
    prev.palette === next.palette &&
    prev.favorited === next.favorited &&
    prev.onToggleFavorite === next.onToggleFavorite
  );
});