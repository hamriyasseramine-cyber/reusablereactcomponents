import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { trendingPalettes } from "../trending/trendingData";

const items = [
  { path: "explore", label: "Explore" },
  { path: "palette", label: "Color Palette" },
  { path: "combos", label: "Combos" },
  { path: "trending", label: "Trending" },
  { path: "favorites", label: "Favorites" },
];

const trendingItems = trendingPalettes.map((p) => ({
  path: p.slug,
  label: p.name,
}));

export default function ColorsCombosSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredChildIndex, setHoveredChildIndex] = useState(null);
  const [manuallyExpanded, setManuallyExpanded] = useState(false);

  const itemRefs = useRef([]);
  const childRefs = useRef([]);
  const location = useLocation();

  const [activeRect, setActiveRect] = useState({ top: 0, height: 0 });
  const [hoverRect, setHoverRect] = useState({ top: 0, height: 0 });
  const [activeChildRect, setActiveChildRect] = useState({ top: 0, height: 0 });
  const [hoverChildRect, setHoverChildRect] = useState({ top: 0, height: 0 });

  const segments = location.pathname.split("/").filter(Boolean);

  const activeIndex = items.findIndex((item) => segments.includes(item.path));
  const activeChildIndex = trendingItems.findIndex((p) =>
    segments.includes(p.path),
  );

  const expanded = manuallyExpanded || activeChildIndex !== -1;

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) setActiveRect({ top: el.offsetTop, height: el.offsetHeight });
  }, [activeIndex, expanded]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const el = itemRefs.current[hoveredIndex];
      if (el) setHoverRect({ top: el.offsetTop, height: el.offsetHeight });
    }
  }, [hoveredIndex, expanded]);

  useEffect(() => {
    if (activeChildIndex === -1) return;
    const el = childRefs.current[activeChildIndex];
    if (el) setActiveChildRect({ top: el.offsetTop, height: el.offsetHeight });
  }, [activeChildIndex, expanded]);

  useEffect(() => {
    if (hoveredChildIndex !== null) {
      const el = childRefs.current[hoveredChildIndex];
      if (el) setHoverChildRect({ top: el.offsetTop, height: el.offsetHeight });
    }
  }, [hoveredChildIndex]);

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
          const isTrending = item.path === "trending";

          if (isTrending) {
            return (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setManuallyExpanded((v) => !v)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
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
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    style={{
                      transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </NavLink>

                <div
                  style={{
                    maxHeight: expanded
                      ? `${trendingItems.length * 34}px`
                      : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.25s ease",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: activeChildRect.top,
                        height: activeChildRect.height,
                        width: "2px",
                        background: "#ffffff",
                        borderRadius: "2px",
                        opacity: activeChildIndex !== -1 ? 1 : 0,
                        transition:
                          "top 0.25s ease, height 0.25s ease, opacity 0.15s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: hoverChildRect.top,
                        height: hoverChildRect.height,
                        width: "2px",
                        background: "#6b7280",
                        borderRadius: "2px",
                        opacity: hoveredChildIndex !== null ? 1 : 0,
                        transition:
                          "top 0.25s ease, height 0.25s ease, opacity 0.15s ease",
                      }}
                    />

                    {trendingItems.map((child, ci) => {
                      const isChildActive = ci === activeChildIndex;
                      return (
                        <NavLink
                          key={child.path}
                          to={`trending/${child.path}`}
                          ref={(el) => (childRefs.current[ci] = el)}
                          onMouseEnter={() => setHoveredChildIndex(ci)}
                          onMouseLeave={() => setHoveredChildIndex(null)}
                          style={{
                            display: "block",
                            padding: "8px 20px 8px 40px",
                            fontSize: "13px",
                            fontWeight: 500,
                            color: isChildActive ? "#d1d5db" : "#6b7280",
                            cursor: "pointer",
                            userSelect: "none",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {child.label}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }

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
