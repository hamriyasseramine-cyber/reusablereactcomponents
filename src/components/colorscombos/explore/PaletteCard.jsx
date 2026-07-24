import { Heart, Copy } from "lucide-react";
import ColorSwatchStrip from "./ColorSwatchStrip.jsx";
import { useFavorites } from "../favorites/FavoritesContext.jsx";

export default function PaletteCard({ palette }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(palette.id);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(palette.colors.join(", "));
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(palette);
  };

  return (
    <div>
      <ColorSwatchStrip colors={palette.colors} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <span
          style={{
            color: "#e5e7eb",
            fontSize: "14px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {palette.name}
        </span>

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
            onClick={handleToggleFavorite}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: favorited ? "#ef4444" : "#6b7280",
            }}
            aria-label="Toggle favorite"
          >
            <Heart size={14} fill={favorited ? "currentColor" : "none"} />
          </button>

          <button
            onClick={handleCopy}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "#6b7280",
            }}
            aria-label="Copy palette"
          >
            <Copy size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}