import PaletteListRow from "./PaletteListRow.jsx";

export default function PaletteListView({ palettes }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "24px",
      }}
    >
      {palettes.map((palette) => (
        <PaletteListRow key={palette.id} palette={palette} />
      ))}
    </div>
  );
}