import { useState } from "react";
import { Heart, Copy, Check } from "lucide-react";
import ColorSwatchStrip from "./ColorSwatchStrip.jsx";

export default function PaletteCard({
  palette,
  index = 0,
  compareMode = false,
  isSelected = false,
  onToggleCompare,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(palette.colors.join(", "));
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite((f) => !f);
  };

  const handleCardClick = () => {
    if (compareMode) {
      onToggleCompare?.(palette);
    }
  };

  return (
    <div
      className="palette-card"
      onClick={handleCardClick}
      style={{
        position: "relative",
        background: "#111111",
        border: isSelected ? "1px solid #6b7280" : "1px solid #1f1f1f",
        borderRadius: "14px",
        padding: "12px",
        fontFamily: "system-ui, sans-serif",
        cursor: compareMode ? "pointer" : "default",
        "--stagger-delay": `${index * 40}ms`,
      }}
    >
      <style>{`
        .palette-card {
          animation: card-enter 0.45s ease both;
          animation-delay: var(--stagger-delay);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .palette-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }

        @keyframes card-enter {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* swatches "breathe" outward in a staggered wave on card hover */
        .palette-card .swatch-el {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .palette-card:hover .swatch-el:nth-child(1) { transition-delay: 0ms; }
        .palette-card:hover .swatch-el:nth-child(2) { transition-delay: 30ms; }
        .palette-card:hover .swatch-el:nth-child(3) { transition-delay: 60ms; }
        .palette-card:hover .swatch-el:nth-child(4) { transition-delay: 90ms; }
        .palette-card:hover .swatch-el:nth-child(5) { transition-delay: 120ms; }
        .palette-card:hover .swatch-el {
          transform: scaleY(1.06);
          filter: brightness(1.08);
        }

        .palette-card .card-outline {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: visible;
        }

        .palette-card .card-outline path {
          fill: none;
          stroke: #d1d5db;
          stroke-width: 1.5;
          stroke-dasharray: 100 100;
          stroke-dashoffset: 100;
          opacity: 0;
          transition: stroke-dashoffset 0.7s ease, filter 0.7s ease, opacity 0.15s ease;
        }

        .palette-card:hover .card-outline path {
          stroke-dashoffset: 0;
          opacity: 1;
          filter: drop-shadow(0 0 4px rgba(209, 213, 219, 0.9));
          animation: card-shine 1.6s ease-in-out 0.7s infinite;
        }

        @keyframes card-shine {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(209, 213, 219, 0.5)); }
          50% { filter: drop-shadow(0 0 8px rgba(209, 213, 219, 1)); }
        }
      `}</style>

      <svg
        className="card-outline"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M50,100 L100,100 L100,0 L0,0 L0,100 L50,100"
          pathLength="100"
        />
      </svg>

      {compareMode && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "1px solid #6b7280",
            background: isSelected ? "#ffffff" : "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {isSelected && <Check size={12} color="#111111" />}
        </div>
      )}

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
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
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
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
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