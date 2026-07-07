import { Link, useParams } from "react-router-dom";
import { COMPONENTS } from "../../components/compo/componentsData.jsx";
import ComponentPreviewPanel from "../../components/compo/ComponentPreviewPanel.jsx";

export default function ComponentDetailPage() {
  const { category, componentId } = useParams();
  const comp = COMPONENTS.find((c) => c.id === componentId);

  return (
    <div style={{ padding: "48px", fontFamily: "system-ui, sans-serif", background: "#000000", minHeight: "100vh" }}>
      <Link
        to={`/components/${category}`}
        style={{
          color: "#6b7280",
          fontSize: "13px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "16px",
        }}
      >
        ← Back to {category}
      </Link>

      {comp ? (
        <ComponentPreviewPanel comp={comp} />
      ) : (
        <div style={{ color: "#6b7280", fontSize: "14px" }}>Component not found.</div>
      )}
    </div>
  );
}
