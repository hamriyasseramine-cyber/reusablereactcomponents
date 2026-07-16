import { RotateCcw } from "lucide-react";
import FilterDropdown from "./FilterDropdown.jsx";
import {
  CATEGORY_OPTIONS,
  STYLE_OPTIONS,
  TAG_OPTIONS,
} from "./filterOptions.js";

export default function FilterBar({ filters, onChange, onClear }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "14px",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <FilterDropdown
          label="Category"
          options={CATEGORY_OPTIONS}
          value={filters.category}
          onChange={(v) => onChange("category", v)}
        />
        <FilterDropdown
          label="Style"
          options={STYLE_OPTIONS}
          value={filters.style}
          onChange={(v) => onChange("style", v)}
        />
        <FilterDropdown
          label="Tags"
          options={TAG_OPTIONS}
          value={filters.tag}
          onChange={(v) => onChange("tag", v)}
        />
      </div>

      <button
        onClick={onClear}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "none",
          border: "none",
          color: "#9ca3af",
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        <RotateCcw size={14} />
        Clear filters
      </button>
    </div>
  );
}
