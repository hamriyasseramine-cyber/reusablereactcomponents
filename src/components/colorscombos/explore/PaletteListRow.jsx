import { useState } from "react";
import { Heart, Copy } from "lucide-react";

export default function PaletteListRow({ palette }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(palette.colors.join(", "));
  };

  const toggleFavorite = () => {
    setIsFavorite((f) => !f);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        background: "#111111",
        border: `1px solid ${hovered ? "#333333" : "#1f1f1f"}`,
        borderRadius: "10px",
        padding: "10px 14px",
        transition: "border-color 0.2s ease",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "160px",
          height: "36px",
          borderRadius: "6px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {palette.colors.map((c, i) => (
          <div key={i} style={{ flex: 1, background: c }} />
        ))}
      </div>

      <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, flex: 1 }}>
        {palette.name}
      </span>

      <span style={{ color: "#6b7280", fontSize: "12px", width: "80px" }}>
        {palette.category}
      </span>

      <span style={{ color: "#6b7280", fontSize: "12px", width: "70px" }}>
        {palette.colors.length} colors
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
  );
}