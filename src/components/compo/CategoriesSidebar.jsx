import { useState, useRef, useEffect } from "react";
import { CATEGORIES } from "./categories.js";

export default function CategoriesSidebar({ activeId, onSelect }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itemRefs = useRef([]);

  const [activeRect, setActiveRect] = useState({ top: 0, height: 0 });
  const [hoverRect, setHoverRect] = useState({ top: 0, height: 0 });

  const activeIndex = CATEGORIES.findIndex((item) => item.id === activeId);

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
        background: "#000000",
        padding: "24px 16px",
        width: "220px",
        flexShrink: 0,
        fontFamily: "system-ui, sans-serif",
        borderRight: "1px solid #000000",
        height: "100%",
        boxSizing: "border-box",
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
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        <span>Categories</span>
      </div>

      <div style={{ position: "relative" }}>
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

        {CATEGORIES.map((item, i) => {
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