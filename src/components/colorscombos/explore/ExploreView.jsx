import { useState, useEffect } from "react";
import PageHeader from "./PageHeader.jsx";
import PaletteGrid from "./PaletteGrid.jsx";
import PaletteListView from "./PaletteListView.jsx";
import CompareView from "./CompareView.jsx";
import ViewToggle from "./ViewToggle.jsx";
import SkeletonCard from "./SkeletonCard.jsx";
import palettes from "./palettesData.js";

export default function ExploreView() {
  const [view, setView] = useState("grid");
  const [compareMode, setCompareMode] = useState(false);
  const [compareSelection, setCompareSelection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Demo skeleton loading — swap this for a real fetch state if you add an API
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const toggleCompareSelection = (palette) => {
    setCompareSelection((prev) => {
      const exists = prev.find((p) => p.id === palette.id);
      if (exists) return prev.filter((p) => p.id !== palette.id);
      if (prev.length >= 3) return prev;
      return [...prev, palette];
    });
  };

  return (
    <div
      style={{
        color: "#e5e7eb",
        fontFamily: "system-ui, sans-serif",
        paddingBottom: compareMode && compareSelection.length > 0 ? "140px" : 0,
      }}
    >
      <PageHeader title="Explore" subtitle="Browse thousands of color palettes." />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "14px",
        }}
      >
        <ViewToggle view={view} onChange={setView} />
        <button
          onClick={() => {
            setCompareMode((m) => !m);
            if (compareMode) setCompareSelection([]);
          }}
          style={{
            background: compareMode ? "#1f1f1f" : "none",
            border: "1px solid #262626",
            borderRadius: "8px",
            color: compareMode ? "#ffffff" : "#9ca3af",
            fontSize: "13px",
            padding: "8px 14px",
            cursor: "pointer",
          }}
        >
          {compareMode ? "Exit compare" : "Compare"}
        </button>
      </div>

      {isLoading ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "24px",
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : view === "grid" ? (
        <PaletteGrid
          palettes={palettes}
          compareMode={compareMode}
          compareSelection={compareSelection}
          onToggleCompare={toggleCompareSelection}
        />
      ) : (
        <PaletteListView palettes={palettes} />
      )}

      {compareMode && compareSelection.length > 0 && (
        <CompareView
          palettes={compareSelection}
          onRemove={(id) => setCompareSelection((prev) => prev.filter((p) => p.id !== id))}
          onClose={() => setCompareSelection([])}
        />
      )}
    </div>
  );
}