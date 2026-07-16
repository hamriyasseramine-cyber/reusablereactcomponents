import { Search } from "lucide-react";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#111111",
        border: "1px solid #262626",
        borderRadius: "10px",
        padding: "10px 14px",
      }}
    >
      <Search size={16} color="#6b7280" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search..."}
        style={{
          flex: 1,
          background: "none",
          border: "none",
          outline: "none",
          color: "#e5e7eb",
          fontSize: "14px",
        }}
      />
      <span
        style={{
          fontSize: "12px",
          color: "#6b7280",
          border: "1px solid #333",
          borderRadius: "6px",
          padding: "2px 6px",
        }}
      >
        ⌘K
      </span>
    </div>
  );
}
