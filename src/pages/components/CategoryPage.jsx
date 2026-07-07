import { Link, useParams } from "react-router-dom";
import { CATEGORIES } from "../../components/compo/categories.js";
import { COMPONENTS } from "../../components/compo/componentsData.jsx";

export default function CategoryPage() {
  const { category } = useParams();
  const categoryInfo = CATEGORIES.find((c) => c.id === category);
  const items = COMPONENTS.filter((c) => c.category === category);

  return (
    <div style={{ padding: "48px", fontFamily: "system-ui, sans-serif", background: "#000000", minHeight: "100vh" }}>
      <Link
        to="/components"
        style={{
          color: "#6b7280",
          fontSize: "13px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "16px",
        }}
      >
        ← All categories
      </Link>

      <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, margin: 0, marginBottom: "8px" }}>
        {categoryInfo ? categoryInfo.label : category}
      </h1>
      <p style={{ color: "#6b7280", fontSize: "14px", margin: 0, marginBottom: "32px" }}>
        {items.length} component{items.length !== 1 ? "s" : ""} in this category.
      </p>

      {items.length === 0 ? (
        <div style={{ color: "#4b5563", fontSize: "14px" }}>No components yet in this category.</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "14px",
          }}
        >
          {items.map((comp) => (
            <Link
              key={comp.id}
              to={`/components/${category}/${comp.id}`}
              style={{
                textDecoration: "none",
                background: "#0d0d0d",
                border: "1px solid #1a1a1a",
                borderRadius: "12px",
                padding: "20px",
                display: "block",
              }}
            >
              <div style={{ color: "#ffffff", fontSize: "15px", fontWeight: 600 }}>{comp.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
