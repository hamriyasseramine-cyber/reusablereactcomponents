import { useState, useEffect } from "react";
import PageHeader from "./PageHeader.jsx";
import PaletteGrid from "./PaletteGrid.jsx";
import SkeletonCard from "./SkeletonCard.jsx";
import palettes from "./palettesData.js";

export default function ExploreView() {
  const [isLoading, setIsLoading] = useState(true);

  // Demo skeleton loading — swap this for a real fetch state if you add an API
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <PageHeader title="Explore" subtitle="Browse thousands of color palettes." />

      {isLoading ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <PaletteGrid palettes={palettes} />
      )}
    </div>
  );
}