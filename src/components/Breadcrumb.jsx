import { Link, useLocation } from "react-router-dom";

// Mirrors the routes defined in App.jsx
const routeLabels = {
  introduction: "Introduction",
  categories: "Categories",
  favorites: "blabla",
  colorscombos: "Colors Combos",
  icons: "Icons",
  explore: "Explore",
  palette: "Color Palette",
  combos: "Combos",
  trending: "Trending",
};

export default function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null; // no breadcrumb on Home itself

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "16px 40px",
        fontFamily: "system-ui, sans-serif",
        fontSize: "14px",
        background: "#0a0a0a",
      }}
    >
      <Link to="/" style={{ color: "#9ca3af", textDecoration: "none", fontWeight: 500 }}>
        Home
      </Link>

      {segments.map((segment, i) => {
        const path = "/" + segments.slice(0, i + 1).join("/");
        const isLast = i === segments.length - 1;
        const label =
          routeLabels[segment] ||
          segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <span key={path} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#4b5563" }}>›</span>
            {isLast ? (
              <span style={{ color: "#ffffff", fontWeight: 600 }}>{label}</span>
            ) : (
              <Link to={path} style={{ color: "#9ca3af", textDecoration: "none", fontWeight: 500 }}>
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}