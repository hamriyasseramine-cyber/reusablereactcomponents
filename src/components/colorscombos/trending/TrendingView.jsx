import { useState } from "react";
import { NavLink } from "react-router-dom";
import { trendingPalettes } from "./trendingData";
import { useFavorites } from "../favorites/FavoritesContext";

function PaletteBands({ palette }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleBandClick = (e, color, i) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(color);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  const colors = palette.colors.slice(0, 5);
  const count = colors.length;
  const hasHover = hoveredIndex !== null && hoveredIndex < count;
  const hoveredWidth = 42; // % taken by the hovered band
  const restWidth = hasHover
    ? (100 - hoveredWidth) / (count - 1)
    : 100 / count;

  return (
    <div
      style={{
        display: "flex",
        height: "140px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {colors.map((color, i) => {
        const isHovered = hoveredIndex === i;
        const isCopied = copiedIndex === i;
        const width = hasHover
          ? isHovered
            ? hoveredWidth
            : restWidth
          : 100 / count;

        return (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(e) => handleBandClick(e, color, i)}
            style={{
              width: `${width}%`,
              flexGrow: 0,
              flexShrink: 0,
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "width 0.25s ease",
              position: "relative",
              cursor: "pointer",
              perspective: "200px",
            }}
          >
            <div
              style={{
                position: "relative",
                transformStyle: "preserve-3d",
                transform: isCopied ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.35s ease",
                opacity: isHovered || isCopied ? 1 : 0,
                width: "60px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                  whiteSpace: "nowrap",
                }}
              >
                {color.replace("#", "").toUpperCase()}
              </span>

              <span
                style={{
                  position: "absolute",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))" }}
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TrendingView() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1
        style={{
          color: "#ffffff",
          fontSize: "28px",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Trending
      </h1>
      <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "8px" }}>
        The color combos gaining traction right now.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "24px",
          marginTop: "24px",
        }}
      >
        {trendingPalettes.map((palette) => {
          const favorited = isFavorite(palette.slug);

          return (
            <div key={palette.slug}>
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
                  to={`/colorscombos/trending/${palette.slug}`}
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
                  <button
                    onClick={() =>
                      toggleFavorite({
                        id: palette.slug,
                        name: palette.name,
                        colors: palette.colors,
                        slug: palette.slug,
                      })
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      color: favorited ? "#ef4444" : "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={favorited ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                    </svg>
                    {palette.likes}
                  </button>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: "#6b7280" }}
                  >
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: "#6b7280" }}
                  >
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}