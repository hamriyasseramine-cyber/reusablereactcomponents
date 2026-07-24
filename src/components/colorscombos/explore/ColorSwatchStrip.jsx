import { useState } from "react";

export default function ColorSwatchStrip({ colors: allColors }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleSwatchClick = (e, color, i) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(color);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  const colors = allColors.slice(0, 5);
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
            onClick={(e) => handleSwatchClick(e, color, i)}
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