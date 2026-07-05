import { Plus } from "lucide-react";

export default function SavedColorsPanel({ savedColors, onSaveCurrent }) {
  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "18px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <h3 style={{ color: "#ffffff", fontSize: "14px", margin: 0 }}>Saved Colors</h3>
        <button
          onClick={onSaveCurrent}
          style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", padding: "2px" }}
          aria-label="Save current color"
        >
          <Plus size={16} />
        </button>
      </div>

      {savedColors.length === 0 ? (
        <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.5, margin: "0 0 14px 0" }}>
          Save colors you use often for quick access.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
          {savedColors.map((color, i) => (
            <div
              key={i}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: color,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      )}

      <button
        onClick={onSaveCurrent}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: "none",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "8px",
          padding: "10px",
          color: "#e5e7eb",
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        <Plus size={14} />
        Save current color
      </button>
    </div>
  );
}
