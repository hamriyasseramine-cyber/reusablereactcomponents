import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../components/compo/categories.js";
import { COMPONENTS, previewRenderers, previewKeyframes } from "../../components/compo/componentsData.jsx";

function CategoryCard({ cat, count }) {
  const [hovered, setHovered] = useState(false);
  const Preview = previewRenderers[cat.id];

  return (
    <Link
      to={`/components/${cat.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: "none",
        background: "#0d0d0d",
        border: `1px solid ${hovered ? "#2a2a2a" : "#1a1a1a"}`,
        borderRadius: "12px",
        overflow: "hidden",
        display: "block",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div
        style={{
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 50% 40%, #141414 0%, #0a0a0a 100%)",
          borderBottom: "1px solid #1a1a1a",
          padding: "14px",
        }}
      >
        {Preview ? <Preview active={hovered} /> : null}
      </div>

      <div style={{ padding: "14px 16px" }}>
        <div style={{ color: "#ffffff", fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>
          {cat.label}
        </div>
        <div style={{ color: "#6b7280", fontSize: "12.5px" }}>
          {count} component{count !== 1 ? "s" : ""}
        </div>
      </div>
    </Link>
  );
}

export default function CategoriesIndex() {
  const realCategories = CATEGORIES.filter((c) => c.id !== "all");

  return (
    <div style={{ padding: "48px", fontFamily: "system-ui, sans-serif", background: "#000000", minHeight: "100vh" }}>
      <style>{previewKeyframes}</style>

      <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, margin: 0, marginBottom: "8px" }}>
        Components
      </h1>
      <p style={{ color: "#6b7280", fontSize: "14px", margin: 0, marginBottom: "32px" }}>
        Choose a category to browse its ready-to-use components.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {realCategories.map((cat) => {
          const count = COMPONENTS.filter((c) => c.category === cat.id).length;
          return <CategoryCard key={cat.id} cat={cat} count={count} />;
        })}
      </div>
    </div>
  );
}