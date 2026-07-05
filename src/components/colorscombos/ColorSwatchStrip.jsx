export default function ColorSwatchStrip({ colors }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "80px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {colors.map((color, i) => (
        <div key={i} style={{ flex: 1, background: color }} />
      ))}
    </div>
  );
}
