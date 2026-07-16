import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const items = [
  { path: "explore", label: "Explore" },
  { path: "palette", label: "Color Palette" },
  { path: "combos", label: "Combos" },
  { path: "trending", label: "Trending" },
  { path: "favorites", label: "Favorites" },
];

export default function ColorsCombosSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itemRefs = useRef([]);
  const location = useLocation();

  const [activeRect, setActiveRect] = useState({ top: 0, height: 0 });
  const [hoverRect, setHoverRect] = useState({ top: 0, height: 0 });

  const activeIndex = items.findIndex((item) =>
    location.pathname.endsWith(`/${item.path}`)
  );

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
        width: "220px",
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
          <circle cx="13.5" cy="6.5" r="0.5" />
          <circle cx="17.5" cy="10.5" r="0.5" />
          <circle cx="8.5" cy="7.5" r="0.5" />
          <circle cx="6.5" cy="12.5" r="0.5" />
          <path d="M12 2a10 10 0 1 0 0 20 1.5 1.5 0 0 0 1.06-2.56 1.5 1.5 0 0 1 1.06-2.56H17a5 5 0 0 0 5-5c0-5.5-4.78-10-10-10z" />
        </svg>
        <span>Colors Combos</span>
      </div>

      <div style={{ position: "relative" }}>
        {/* active indicator (white, fixed on current item) */}
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

        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              ref={(el) => (itemRefs.current[i] = el)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "block",
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 600,
                color: isActive ? "#ffffff" : "#9ca3af",
                cursor: "pointer",
                userSelect: "none",
                textDecoration: "none",
              }}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}