import { useState } from "react";

export default function ComponentCard({ name, category, preview, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#000000",
        border: `1px solid ${hovered ? "#2a2a2a" : "#1a1a1a"}`,
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s ease, transform 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          height: "140px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 40%, #000000 0%, #000000 100%)",
          borderBottom: "1px solid #000000",
          padding: "16px",
        }}
      >
        {preview}
      </div>

      <div
        style={{
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {name}
        </span>
        <span
          style={{
            color: "#6b7280",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            background: "#000000",
            border: "1px solid #000000",
            borderRadius: "6px",
            padding: "3px 8px",
          }}
        >
          {category}
        </span>
      </div>
    </div>
  );
}
