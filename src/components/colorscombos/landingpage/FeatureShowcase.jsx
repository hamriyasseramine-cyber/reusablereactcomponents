const BASE_PALETTES = [
  ["#0f172a", "#0ea5e9", "#facc15", "#fb923c", "#ec4899"],
  ["#ec4899", "#fbcfe8", "#fde68a", "#a7f3d0", "#34d399"],
  ["#450a24", "#f87171", "#fca5a5", "#fecdd3"],
  ["#60a5fa", "#93c5fd", "#f472b6", "#fca5a5", "#fde68a"],
  ["#a78bfa", "#5eead4", "#d1d5db", "#d6b98c", "#f97316"],
  ["#1e3a8a", "#4338ca", "#818cf8", "#a5b4fc"],
  ["#7f1d1d", "#f97316", "#fdba74", "#fed7aa"],
  ["#1e293b", "#0f766e", "#14b8a6", "#5eead4", "#fdba74"],
  ["#facc15", "#fde047", "#fca5a5", "#60a5fa"],
  ["#0f172a", "#334155", "#64748b", "#94a3b8", "#cbd5e1"],
  ["#be185d", "#f472b6", "#fbcfe8", "#fef3c7"],
  ["#166534", "#22c55e", "#86efac", "#dcfce7"],
];

// --- hex <-> hsl helpers, used only at module load time to generate variety ---
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (x) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}
function rotateHue(hex, degrees) {
  const [h, s, l] = hexToHsl(hex);
  if (s < 3) return hex; // near-gray: rotating hue does nothing useful, keep as-is (avoids odd output)
  return hslToHex((h + degrees + 360) % 360, s, l);
}

// 12 base palettes x 10 hue-rotated variants = 120 palettes
const PALETTE_GRID = BASE_PALETTES.flatMap((palette) =>
  Array.from({ length: 10 }, (_, variant) =>
    palette.map((c) => (variant === 0 ? c : rotateHue(c, variant * 36))),
  ),
);

// --- exact pixel geometry, computed once, so the loop point is mathematically guaranteed ---
const ROW_HEIGHT = 72;
const ROW_GAP = 10;
const COLUMNS = 3;
const ROWS = Math.ceil(PALETTE_GRID.length / COLUMNS);
const BLOCK_HEIGHT = ROWS * ROW_HEIGHT + (ROWS - 1) * ROW_GAP; // grid content only
const LOOP_DISTANCE = BLOCK_HEIGHT + ROW_GAP; // + the connector gap between block 1 and block 2
const SCROLL_SPEED_PX_PER_SEC = 36; // tune this to change speed, independent of content length
const DURATION = Math.round(LOOP_DISTANCE / SCROLL_SPEED_PX_PER_SEC);

// fixed visible height of the showcase column (was the bug: "6%" with no
// sized parent collapses to auto-height, which is the size of the full
// scrolling content — i.e. thousands of px tall, pushing everything below
// it way down the page). Tune this to match the hero column's height.
const SHOWCASE_HEIGHT = 420;

function PaletteBlock() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,
        gap: `${ROW_GAP}px`,
        height: `${BLOCK_HEIGHT}px`,
      }}
    >
      {PALETTE_GRID.map((palette, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            height: `${ROW_HEIGHT}px`,
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {palette.map((c, j) => (
            <div key={j} style={{ flex: 1, background: c }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <div
      style={{
        width: "100%",
        height: `${SHOWCASE_HEIGHT}px`,
        overflow: "hidden",
        background: "#000000",
        padding: "10px",
      }}
    >
      <div
        className="colcol-scroll-track"
        style={{ height: `${BLOCK_HEIGHT * 2 + ROW_GAP}px` }}
      >
        <PaletteBlock />
        <div style={{ height: `${ROW_GAP}px` }} />{" "}
        {/* explicit connector gap, exact height */}
        <PaletteBlock />
      </div>

      <style>{`
        .colcol-scroll-track {
          animation: colcol-scroll-y ${DURATION}s linear infinite;
          will-change: transform;
        }
        @keyframes colcol-scroll-y {
          from { transform: translateY(0px); }
          to { transform: translateY(-${LOOP_DISTANCE}px); }
        }
      `}</style>
    </div>
  );
}