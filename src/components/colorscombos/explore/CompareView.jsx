import { X } from "lucide-react";

export default function CompareView({ palettes, onRemove, onClose }) {
  if (palettes.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#111111",
        borderTop: "1px solid #262626",
        padding: "16px 24px",
        zIndex: 90,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ color: "#9ca3af", fontSize: "13px" }}>
          Comparing {palettes.length} palette{palettes.length > 1 ? "s" : ""}
        </span>
        <button
          onClick={onClose}
          style={{ background: "none", border: "none", color: "#6b7280", fontSize: "13px", cursor: "pointer" }}
        >
          Clear
        </button>
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        {palettes.map((palette) => (
          <div key={palette.id} style={{ flex: 1, position: "relative" }}>
            <button
              onClick={() => onRemove(palette.id)}
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "#1f1f1f",
                border: "1px solid #333",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: 0,
                zIndex: 1,
              }}
              aria-label="Remove from compare"
            >
              <X size={12} color="#9ca3af" />
            </button>
            <div style={{ display: "flex", height: "50px", borderRadius: "8px", overflow: "hidden" }}>
              {palette.colors.map((c, i) => (
                <div key={i} style={{ flex: 1, background: c }} />
              ))}
            </div>
            <p style={{ color: "#e5e7eb", fontSize: "12px", margin: "6px 0 0" }}>
              {palette.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
