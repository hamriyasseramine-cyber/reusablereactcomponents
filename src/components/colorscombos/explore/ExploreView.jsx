import { NavLink } from "react-router-dom";
import palettes from "./palettesData.js";
import { useFavorites } from "../favorites/FavoritesContext.jsx";
import PaletteBands from "./PaletteBands.jsx";
import HeartButton from "./HeartButton.jsx";
import OptionsMenu from "./OptionsMenu.jsx";

export default function ExploreView() {
  const { isFavorite, toggleFavorite } = useFavorites();

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "24px",
          marginTop: "24px",
        }}
      >
        {palettes.map((palette) => {
          const slug = palette.slug || palette.id;
          const favorited = isFavorite(palette.id);

          return (
            <div key={palette.id}>
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
                  to={`/colorscombos/explore/${slug}`}
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
                    onToggle={() =>
                      toggleFavorite({
                        id: palette.id,
                        name: palette.name,
                        colors: palette.colors,
                        slug,
                      })
                    }
                  />

                  <OptionsMenu />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}