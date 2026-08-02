import { Pipette, Copy, Bookmark } from "lucide-react";

const iconBoxStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  background: "rgba(139, 92, 246, 0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const titleStyle = {
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: 600,
  margin: 0,
  fontFamily: "'Inter', -apple-system, sans-serif",
};

const descriptionStyle = {
  color: "#6b7280",
  fontSize: "13px",
  margin: "4px 0 0 0",
  fontFamily: "'Inter', -apple-system, sans-serif",
};

const rowStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "14px",
};

/* 1. Pick Any Color */
export function PickColorFeature() {
  return (
    <div style={rowStyle}>
      <div style={iconBoxStyle}>
        <Pipette size={20} color="#8b5cf6" />
      </div>
      <div>
        <p style={titleStyle}>Pick Any Color</p>
        <p style={descriptionStyle}>Hover to preview and select instantly.</p>
      </div>
    </div>
  );
}

/* 2. Copy in One Click */
export function CopyColorFeature() {
  return (
    <div style={rowStyle}>
      <div style={iconBoxStyle}>
        <Copy size={20} color="#8b5cf6" />
      </div>
      <div>
        <p style={titleStyle}>Copy in One Click</p>
        <p style={descriptionStyle}>Get HEX, RGB, HSL values with ease.</p>
      </div>
    </div>
  );
}

/* 3. Save Your Favorites */
export function SaveFavoritesFeature() {
  return (
    <div style={rowStyle}>
      <div style={iconBoxStyle}>
        <Bookmark size={20} color="#8b5cf6" />
      </div>
      <div>
        <p style={titleStyle}>Save Your Favorites</p>
        <p style={descriptionStyle}>Organize and access your colors anytime.</p>
      </div>
    </div>
  );
}

/* --- Usage example: stacked list --- */
export function FeatureListExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
      <PickColorFeature />
      <CopyColorFeature />
      <SaveFavoritesFeature />
    </div>
  );
}
