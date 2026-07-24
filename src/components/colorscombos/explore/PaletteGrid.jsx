import PaletteCard from "./PaletteCard.jsx";

export default function PaletteGrid({ palettes }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "24px",
        marginTop: "24px",
      }}
    >
      {palettes.map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </div>
  );
}