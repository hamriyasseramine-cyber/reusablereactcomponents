import { useState } from "react";
import ColorCanvas from "./ColorCanvas.jsx";
import HueSlider from "./HueSlider.jsx";
import FormatGrid from "./FormatGrid.jsx";
import CurrentColorPanel from "./CurrentColorPanel.jsx";
import ColorHistoryPanel from "./ColorHistoryPanel.jsx";
import { hsvToRgb, rgbToHex, hsvToHsl } from "./colorUtils.js";

const MAX_HISTORY = 5;

export default function ColorPaletteView() {
  const [hue, setHue] = useState(213);
  const [saturation, setSaturation] = useState(70);
  const [value, setValue] = useState(85);
  const [history, setHistory] = useState([]);

  const rgb = hsvToRgb(hue, saturation, value);
  const hex = rgbToHex(rgb);
  const hsl = hsvToHsl(hue, saturation, value);
  const hsb = {
    h: Math.round(hue),
    s: Math.round(saturation),
    v: Math.round(value),
  };

  const commitToHistory = () => {
    setHistory((prev) => {
      const next = [hex, ...prev.filter((c) => c !== hex)];
      return next.slice(0, MAX_HISTORY);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        color: "#e5e7eb",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* main panel */}
      <div style={{ flex: 1, maxWidth: "700px" }}>
        <div>
          <h1 style={{ color: "#ffffff", fontSize: "28px", margin: 0 }}>
            Color Palette
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "6px" }}>
            Move your cursor over the canvas to pick a color.
          </p>
        </div>

        <div
          style={{
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <ColorCanvas
            hue={hue}
            onChange={({ saturation, value }) => {
              setSaturation(saturation);
              setValue(value);
            }}
            onCommit={commitToHistory}
          />
          <HueSlider hue={hue} onChange={setHue} onCommit={commitToHistory} />
          <FormatGrid hex={hex} rgb={rgb} hsl={hsl} hsb={hsb} />
        </div>
      </div>

      {/* right panel */}
      <div
        style={{
          width: "280px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flexShrink: 0,
        }}
      >
        <CurrentColorPanel
          hex={hex}
          hue={hue}
          onPickShade={(shadeColor) => {
            setHistory((prev) =>
              [shadeColor, ...prev.filter((c) => c !== shadeColor)].slice(
                0,
                MAX_HISTORY,
              ),
            );
          }}
        />
        <ColorHistoryPanel
          history={history}
          onClear={() => setHistory([])}
          onPick={(color) =>
            setHistory((prev) => [color, ...prev.filter((c) => c !== color)])
          }
        />
      </div>
    </div>
  );
}
