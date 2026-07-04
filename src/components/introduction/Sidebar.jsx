import { useState, useRef, useEffect } from "react";
import toc from "./tocData.js";

export default function Sidebar({ activeId, onSelect }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itemRefs = useRef([]);

  const [activeRect, setActiveRect] = useState({ top: 0, height: 0 });
  const [hoverRect, setHoverRect] = useState({ top: 0, height: 0 });

  const activeIndex = toc.findIndex((item) => item.id === activeId);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) setActiveRect({ top: el.offsetTop, height: el.offsetHeight });
  }, [activeIndex]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const el = itemRefs.current[hoveredIndex];
      if (el) setHoverRect({ top: el.offsetTop, height: el.offsetHeight });
    }
  }, [hoveredIndex]);

  return (
    <div
      style={{
        background: "#0a0a0a",
        padding: "24px 16px",
        width: "260px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#6b7280",
          fontSize: "13px",
          marginBottom: "16px",
          paddingLeft: "20px",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>

      <div style={{ position: "relative" }}>
        {/* active indicator (white, fixed on current label) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: activeRect.top,
            height: activeRect.height,
            width: "2px",
            background: "#ffffff",
            borderRadius: "2px",
            transition: "top 0.25s ease, height 0.25s ease",
          }}
        />
        {/* hover indicator (grey, follows the cursor) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: hoverRect.top,
            height: hoverRect.height,
            width: "2px",
            background: "#6b7280",
            borderRadius: "2px",
            opacity: hoveredIndex !== null ? 1 : 0,
            transition: "top 0.25s ease, height 0.25s ease, opacity 0.15s ease",
          }}
        />

        {toc.map((item, i) => {
          const isActive = item.id === activeId;
          return (
            <div
              key={item.id}
              ref={(el) => (itemRefs.current[i] = el)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onSelect(item.id)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 600,
                color: isActive ? "#ffffff" : "#9ca3af",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
