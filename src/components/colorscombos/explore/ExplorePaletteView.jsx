import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import palettes from "./palettesData.js";

export default function ExplorePaletteView() {
  const { slug } = useParams();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const palette = palettes.find((p) => (p.slug || p.id) === slug);

  if (!palette) {
    return (
      <div style={{ color: "#9ca3af", fontFamily: "system-ui, sans-serif" }}>
        Palette not found.{" "}
        <Link to="/colorscombos/explore" style={{ color: "#ffffff" }}>
          Back to Explore
        </Link>
      </div>
    );
  }

  const handleCopy = (hex, i) => {
    navigator.clipboard.writeText(hex);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1200);
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <Link
        to="/colorscombos/explore"
        style={{
          color: "#6b7280",
          fontSize: "13px",
          textDecoration: "none",
        }}
      >
        ← Explore
      </Link>

      <h1
        style={{
          color: "#ffffff",
          fontSize: "28px",
          fontWeight: 700,
          margin: "12px 0 24px",
        }}
      >
        {palette.name}
      </h1>

      <div
        style={{
          display: "flex",
          height: "160px",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "24px",
        }}
      >
        {palette.colors.map((color, i) => (
          <div key={i} style={{ flex: 1, background: color }} />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "12px",
        }}
      >
        {palette.colors.map((color, i) => (
          <button
            key={i}
            onClick={() => handleCopy(color, i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#141414",
              border: "1px solid #262626",
              borderRadius: "8px",
              padding: "10px 12px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "6px",
                background: color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#d1d5db",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              {copiedIndex === i ? "Copied!" : color}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
