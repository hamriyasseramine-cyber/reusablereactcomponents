import { useState } from "react";
import { Heart, Copy } from "lucide-react";
import ColorSwatchStrip from "./ColorSwatchStrip.jsx";

export default function PaletteCard({ palette }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(palette.colors.join(", "));
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite((f) => !f);
  };

  return (
    <div
      style={{
        background: "#111111",
        border: "1px solid #1f1f1f",
        borderRadius: "14px",
        padding: "12px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <ColorSwatchStrip colors={palette.colors} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600 }}>
          {palette.name}
        </span>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={toggleFavorite}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            aria-label="Toggle favorite"
          >
            <Heart
              size={16}
              color={isFavorite ? "#ef4444" : "#9ca3af"}
              fill={isFavorite ? "#ef4444" : "none"}
            />
          </button>
          <button
            onClick={handleCopy}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            aria-label="Copy palette"
          >
            <Copy size={16} color="#9ca3af" />
          </button>
        </div>
      </div>

      <span style={{ color: "#6b7280", fontSize: "12px" }}>
        {palette.colors.length} colors
      </span>
    </div>
  );
}
