// src/components/iconp/Toolbar.jsx
import { Search, LayoutGrid, List } from "lucide-react";
import Dropdown from "./common/Dropdown";

const STYLE_OPTIONS = [
  { label: "Round", value: "round" },
  { label: "Square", value: "square" },
  { label: "Bevel", value: "bevel" },
];

const STROKE_OPTIONS = [
  { label: "1", value: 1 },
  { label: "1.5", value: 1.5 },
  { label: "2", value: 2 },
  { label: "2.5", value: 2.5 },
];

const FILLED_OPTIONS = [
  { label: "Outline", value: false },
  { label: "Filled", value: true },
];

const SIZE_OPTIONS = [
  { label: "16", value: 16 },
  { label: "20", value: 20 },
  { label: "24", value: 24 },
  { label: "32", value: 32 },
];

const COLOR_OPTIONS = [
  { label: "White", value: "#FFFFFF" },
  { label: "Gray", value: "#9A9A9A" },
  { label: "Black", value: "#000000" },
];

const SORT_OPTIONS = [
  { label: "Latest", value: "latest" },
  { label: "A-Z", value: "az" },
  { label: "Z-A", value: "za" },
];

/**
 * props:
 * - count: number
 * - view: "grid" | "list"
 * - onViewChange: (view) => void
 * - searchQuery: string
 * - onSearchChange: (value) => void
 * - filters: { style, stroke, filled, size, color, sort }
 * - onFilterChange: (key, value) => void
 */
export default function Toolbar({
  count,
  view,
  onViewChange,
  searchQuery,
  onSearchChange,
  filters,
  onFilterChange,
}) {
  return (
    <div className="ic-toolbar">
      <div className="ic-toolbar-title">
        <h2>All Icons</h2>
        <span>{count.toLocaleString()} Icons</span>
      </div>

      <div className="ic-toolbar-controls">
        <div className="ic-search-input">
          <Search size={14} />
          <input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search icons..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--ic-text)",
              fontSize: 12,
              width: 120,
            }}
          />
        </div>

        <Dropdown
          label="Style"
          value={filters.style}
          options={STYLE_OPTIONS}
          onChange={(v) => onFilterChange("style", v)}
        />
        <Dropdown
          label="Stroke"
          value={filters.stroke}
          options={STROKE_OPTIONS}
          onChange={(v) => onFilterChange("stroke", v)}
        />
        <Dropdown
          label="Filled"
          value={filters.filled}
          options={FILLED_OPTIONS}
          onChange={(v) => onFilterChange("filled", v)}
        />
        <Dropdown
          label="Size"
          value={filters.size}
          options={SIZE_OPTIONS}
          onChange={(v) => onFilterChange("size", v)}
        />
        <Dropdown
          label="Color"
          value={filters.color}
          options={COLOR_OPTIONS}
          onChange={(v) => onFilterChange("color", v)}
        />
        <Dropdown
          label="Sort by"
          value={filters.sort}
          options={SORT_OPTIONS}
          onChange={(v) => onFilterChange("sort", v)}
          showValueInLabel
        />

        <div className="ic-view-toggle">
          <button className={view === "grid" ? "active" : ""} onClick={() => onViewChange("grid")}>
            <LayoutGrid size={14} />
          </button>
          <button className={view === "list" ? "active" : ""} onClick={() => onViewChange("list")}>
            <List size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
