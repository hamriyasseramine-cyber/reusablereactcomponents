import { useState, useRef, useEffect } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const FORMATS = ["HEX", "RGB", "HSL", "HSB"];

export default function FormatDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <div ref={ref} style={{ position: "relative" }}>
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "8px 12px",
            color: "#e5e7eb",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          {value}
          <ChevronDown size={14} color="#6b7280" />
        </button>

        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              right: 0,
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              minWidth: "100px",
              zIndex: 10,
              overflow: "hidden",
            }}
          >
            {FORMATS.map((f) => (
              <div
                key={f}
                onClick={() => {
                  onChange(f);
                  setOpen(false);
                }}
                style={{
                  padding: "8px 12px",
                  fontSize: "13px",
                  color: f === value ? "#ffffff" : "#9ca3af",
                  background: f === value ? "#1a1a1a" : "transparent",
                  cursor: "pointer",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "8px",
          padding: "8px",
          color: "#9ca3af",
          cursor: "pointer",
        }}
        aria-label="Settings"
      >
        <SlidersHorizontal size={16} />
      </button>
    </div>
  );
}
