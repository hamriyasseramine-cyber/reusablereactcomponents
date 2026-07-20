import PaletteCard from "./PaletteCard.jsx";

export default function PaletteGrid({
  palettes,
  compareMode,
  compareSelection = [],
  onToggleCompare,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "24px",
      }}
    >
      {palettes.map((palette, i) => (
        <PaletteCard
          key={palette.id}
          palette={palette}
          index={i}
          compareMode={compareMode}
          isSelected={compareSelection.some((p) => p.id === palette.id)}
          onToggleCompare={onToggleCompare}
        />
      ))}
    </div>
  );
}