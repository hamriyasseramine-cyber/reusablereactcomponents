import FormatCard from "./FormatCard.jsx";

export default function FormatGrid({ hex, rgb, hsl, hsb }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "14px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "12px",
          background: hex,
          flexShrink: 0,
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.4)",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          flex: 1,
        }}
      >
        <FormatCard label="HEX" value={hex} />
        <FormatCard label="HSL" value={`${hsl.h}, ${hsl.s}%, ${hsl.l}%`} />
        <FormatCard label="RGB" value={`${rgb.r}, ${rgb.g}, ${rgb.b}`} />
        <FormatCard label="HSB" value={`${hsb.h}, ${hsb.s}%, ${hsb.v}%`} />
      </div>
    </div>
  );
}
