import { useRef } from "react";

export default function HueSlider({ hue, onChange, onCommit }) {
  const sliderRef = useRef(null);

  const updateFromEvent = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 360;
    x = Math.min(360, Math.max(0, x));
    onChange(x);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) updateFromEvent(e);
  };

  return (
    <div
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onMouseDown={updateFromEvent}
      onMouseUp={onCommit}
      style={{
        position: "relative",
        width: "100%",
        height: "14px",
        borderRadius: "999px",
        marginTop: "16px",
        cursor: "pointer",
        background:
          "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: `${(hue / 360) * 100}%`,
          top: "50%",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: `hsl(${hue}, 100%, 50%)`,
          border: "2px solid #ffffff",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.5)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
