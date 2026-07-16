import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterDropdown({ label, options, value, onChange }) {
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
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "#111111",
          border: "1px solid #262626",
          borderRadius: "8px",
          padding: "8px 12px",
          color: "#9ca3af",
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        <span style={{ color: "#6b7280" }}>{label}</span>
        <span style={{ color: "#e5e7eb" }}>{value}</span>
        <ChevronDown size={14} color="#6b7280" />
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            background: "#111111",
            border: "1px solid #262626",
            borderRadius: "8px",
            minWidth: "140px",
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              style={{
                padding: "8px 12px",
                fontSize: "13px",
                color: opt === value ? "#ffffff" : "#9ca3af",
                background: opt === value ? "#1a1a1a" : "transparent",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1a1a1a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  opt === value ? "#1a1a1a" : "transparent")
              }
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
