import PaletteCard from "./PaletteCard.jsx";

export default function PaletteGrid({ palettes }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "24px",
      }}
    >
      {palettes.map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </div>
  );
}
