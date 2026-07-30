import { NavLink } from "react-router-dom";

const sections = [
  { path: "explore", label: "Explore", description: "Browse thousands of color palettes." },
  { path: "palette", label: "Color Palette", description: "Build and customize your own palette." },
  { path: "combos", label: "Combos", description: "Curated color combinations." },
  { path: "trending", label: "Trending", description: "The palettes gaining traction right now." },
  { path: "favorites", label: "Favorites", description: "Palettes you've saved for later." },
];

export default function ColColLandingPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1
        style={{
          color: "#ffffff",
          fontSize: "28px",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Colors Combos
      </h1>
      <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "8px" }}>
        Everything you need to explore, build, and save color palettes.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "24px",
        }}
      >
        {sections.map((section) => (
          <NavLink
            key={section.path}
            to={section.path}
            style={{
              display: "block",
              background: "#141414",
              border: "1px solid #2a2a2a",
              borderRadius: "10px",
              padding: "20px",
              textDecoration: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            className="colcol-landing-card"
          >
            <span
              style={{
                display: "block",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {section.label}
            </span>
            <span
              style={{
                display: "block",
                color: "#9ca3af",
                fontSize: "13px",
                marginTop: "6px",
              }}
            >
              {section.description}
            </span>
          </NavLink>
        ))}
      </div>

      <style>{`
        .colcol-landing-card:hover {
          border-color: #4b5563;
          background: #1a1a1a;
        }
      `}</style>
    </div>
  );
}