import { Plus } from "lucide-react";
import { shadeFromHue } from "./colorUtils.js";

export default function CurrentColorPanel({ hex, hue, onPickShade }) {
  const shades = [30, 45, 55, 65, 75];

  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "18px",
      }}
    >
      <h3 style={{ color: "#ffffff", fontSize: "14px", margin: 0, marginBottom: "14px" }}>
        Current Color
      </h3>

      <div
        style={{
          height: "90px",
          borderRadius: "10px",
          background: hex,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      />

      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        {shades.map((lightness, i) => (
          <button
            key={i}
            onClick={() => onPickShade(shadeFromHue(hue, lightness))}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              background: shadeFromHue(hue, lightness),
              border: i === 0 ? "2px solid #ffffff" : "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label={`Shade ${lightness}%`}
          />
        ))}
        <button
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "none",
            color: "#6b7280",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Add shade"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
