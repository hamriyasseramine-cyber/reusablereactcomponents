import { Link, useLocation } from "react-router-dom";

const items = [
  { path: "explore", label: "Explore" },
  { path: "palette", label: "Color Palette" },
  { path: "combos", label: "Combos" },
  { path: "trending", label: "Trending" },
  { path: "favorites", label: "Favorites" },
];

export default function ColorsCombosSidebar() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  // segments look like: ["colorscombos", "explore", "some-slug"]
  const currentItem = items.find((item) => segments.includes(item.path));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "16px 0",
        fontFamily: "system-ui, sans-serif",
        fontSize: "14px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#9ca3af",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Home
      </Link>

      <span style={{ color: "#4b5563" }}>›</span>

      <Link
        to="/colorscombos"
        style={{
          color: currentItem ? "#9ca3af" : "#ffffff",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Colors Combos
      </Link>

      {currentItem && (
        <>
          <span style={{ color: "#4b5563" }}>›</span>
          <span style={{ color: "#ffffff", fontWeight: 600 }}>
            {currentItem.label}
          </span>
        </>
      )}
    </div>
  );
}