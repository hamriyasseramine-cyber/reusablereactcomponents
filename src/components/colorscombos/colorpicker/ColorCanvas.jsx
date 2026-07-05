import { useRef, useState } from "react";

export default function ColorCanvas({ hue, onChange, onCommit }) {
  const canvasRef = useRef(null);
  const [pos, setPos] = useState({ x: 100, y: 0 }); // x = saturation %, y = 0 (value 100%) by default

  const updateFromEvent = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;
    x = Math.min(100, Math.max(0, x));
    y = Math.min(100, Math.max(0, y));

    setPos({ x, y });
    const saturation = x;
    const value = 100 - y;
    onChange({ saturation, value });
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      updateFromEvent(e);
    }
  };

  return (
    <div
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseDown={updateFromEvent}
      onMouseUp={onCommit}
      style={{
        position: "relative",
        width: "100%",
        height: "160px",
        borderRadius: "12px",
        cursor: "crosshair",
        background: `hsl(${hue}, 100%, 50%)`,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}
    >
      {/* saturation overlay: white -> transparent, left to right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #ffffff, rgba(255,255,255,0))",
        }}
      />
      {/* value/brightness overlay: transparent -> black, top to bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0), #000000)",
        }}
      />

      {/* cursor position indicator */}
      <div
        style={{
          position: "absolute",
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          border: "2px solid #ffffff",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.5)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
