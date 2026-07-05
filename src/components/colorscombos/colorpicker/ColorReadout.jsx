import { useState } from "react";
import { Copy, Check } from "lucide-react";

function ReadoutRow({ label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "10px",
        padding: "0px 14px",
      }}
    >
      <div>
        <div style={{ fontSize: "11px", color: "#6b7280", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {label}
        </div>
        <div style={{ fontSize: "14px", color: "#e5e7eb", fontFamily: "monospace", marginTop: "2px" }}>
          {value}
        </div>
      </div>
      <button
        onClick={handleCopy}
        style={{
          background: "none",
          border: "none",
          color: "#9ca3af",
          cursor: "pointer",
          padding: "6px",
        }}
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={15} /> : <Copy size={15} />}
      </button>
    </div>
  );
}

export default function ColorReadout({ hex, rgb }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "20px" }}>
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "12px",
          background: hex,
          flexShrink: 0,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.4)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        <ReadoutRow label="HEX" value={hex} />
        <ReadoutRow label="RGB" value={`${rgb.r}, ${rgb.g}, ${rgb.b}`} />
      </div>
    </div>
  );
}
