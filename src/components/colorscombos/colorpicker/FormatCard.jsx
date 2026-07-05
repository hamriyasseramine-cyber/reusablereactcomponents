import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function FormatCard({ label, value }) {
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
        padding: "10px 14px",
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
        style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", padding: "6px" }}
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={15} /> : <Copy size={15} />}
      </button>
    </div>
  );
}
