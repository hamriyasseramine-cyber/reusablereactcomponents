import { useState } from "react";
import PageHeader from "./PageHeader.jsx";
import SearchBar from "./SearchBar.jsx";
import FilterBar from "./FilterBar.jsx";
import PaletteGrid from "./PaletteGrid.jsx";
import palettes from "./palettesData.js";

const DEFAULT_FILTERS = {
  category: "All",
  colorCount: "Any",
  style: "All",
  tag: "All",
};

export default function ExploreView() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearch("");
  };

  const filtered = palettes.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.colors.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      filters.category === "All" || p.category === filters.category;
    const matchesColorCount =
      filters.colorCount === "Any" ||
      p.colors.length === Number(filters.colorCount);
    const matchesStyle = filters.style === "All" || p.style === filters.style;
    const matchesTag = filters.tag === "All" || p.tags.includes(filters.tag);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesColorCount &&
      matchesStyle &&
      matchesTag
    );
  });

  return (
    <div style={{ color: "#e5e7eb", fontFamily: "system-ui, sans-serif" }}>
      <PageHeader
        title="Explore"
        subtitle="Browse thousands of color palettes."
      />
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search palettes by name, color, or tag..."
      />
      <FilterBar
        filters={filters}
        onChange={handleFilterChange}
        onClear={handleClearFilters}
      />

      {filtered.length > 0 ? (
        <PaletteGrid palettes={filtered} />
      ) : (
        <p style={{ color: "#6b7280", marginTop: "40px", textAlign: "center" }}>
          No palettes match your filters.
        </p>
      )}
    </div>
  );
}
