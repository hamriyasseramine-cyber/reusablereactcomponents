import ComponentCard from "./ComponentCard";
import { previewRenderers, COMPONENTS } from "./componentsData.jsx";

function CardPreview({ comp }) {
  const { Component, category } = comp;

  if (Component) {
    return (
      <div style={{ width: "100%", overflow: "hidden", pointerEvents: "none" }}>
        <div
          className="preview-scope"
          style={{
            width: "320%",
            transform: "scale(0.3125)",
            transformOrigin: "top left",
          }}
        >
          <style>{`
            .preview-scope > * {
              position: relative !important;
              top: auto !important;
              left: auto !important;
              right: auto !important;
              bottom: auto !important;
              width: 100% !important;
              max-width: 100% !important;
              box-sizing: border-box !important;
            }
          `}</style>
          <Component />
        </div>
      </div>
    );
  }

  const renderMock = previewRenderers[category];
  return renderMock ? renderMock() : null;
}

export default function ComponentsGrid({ activeCategory, onSelectComponent }) {
  const filtered =
    activeCategory === "all"
      ? COMPONENTS
      : COMPONENTS.filter((c) => c.category === activeCategory);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "16px",
      }}
    >
      {filtered.map((comp) => (
        <ComponentCard
          key={comp.id}
          name={comp.name}
          category={comp.category}
          preview={<CardPreview comp={comp} />}
          onClick={() => onSelectComponent?.(comp)}
        />
      ))}

      {filtered.length === 0 && (
        <div style={{ color: "#6b7280", fontSize: 14, fontFamily: "system-ui, sans-serif" }}>
          No components in this category yet.
        </div>
      )}
    </div>
  );
}