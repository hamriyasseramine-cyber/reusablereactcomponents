// src/components/icons/IconDetailPanel.jsx
import { useMemo, useState } from "react";
import * as LucideIcons from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";
import { Heart, X, Copy as CopyIcon, Download } from "lucide-react";
import CodeBlock from "./common/CodeBlock";

/**
 * props:
 * - icon: { name, label } | null
 * - onClose: () => void
 */
export default function IconDetailPanel({ icon, onClose, defaultFilters }) {
  const [tab, setTab] = useState("svg"); // "svg" | "react"
  const [strokeWidth, setStrokeWidth] = useState(defaultFilters?.stroke ?? 2);

  const LucideIcon = icon ? LucideIcons[icon.name] : null;

  const svgSource = useMemo(() => {
    if (!LucideIcon) return "";
    const markup = renderToStaticMarkup(
      <LucideIcon size={24} strokeWidth={strokeWidth} color="#FFFFFF" />
    );
    // formatage lisible basique
    return markup.replace(/></g, ">\n<");
  }, [LucideIcon, strokeWidth]);

  const reactSource = icon
    ? `import { ${icon.name} } from "lucide-react";\n\n<${icon.name} size={24} strokeWidth={${strokeWidth}} />`
    : "";

  if (!icon) {
    return (
      <aside className="ic-detail">
        <div className="ic-detail-header">
          <h3>Détail</h3>
        </div>
        <div style={{ color: "var(--ic-text-faint)", padding: 24, fontSize: 12 }}>
          Sélectionne une icône dans la grille pour voir son aperçu et son code.
        </div>
      </aside>
    );
  }

  const copySVG = () => navigator.clipboard.writeText(svgSource);

  const downloadSVG = () => {
    const blob = new Blob([svgSource], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${icon.label}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <aside className="ic-detail">
      <div className="ic-detail-header">
        <h3>{icon.label}</h3>
        <div className="ic-detail-header-actions">
          <Heart />
          <X onClick={onClose} />
        </div>
      </div>

      <div className="ic-detail-preview">
        <LucideIcon size={64} strokeWidth={strokeWidth} />
      </div>

      <div className="ic-detail-controls">
        <div className="ic-dropdown">Stroke</div>
        <input
          type="range"
          min={1}
          max={3}
          step={0.25}
          value={strokeWidth}
          onChange={(e) => setStrokeWidth(Number(e.target.value))}
        />
        <span style={{ color: "var(--ic-text-dim)", fontSize: 12 }}>24</span>
        <div className="ic-swatch" title="#FFFFFF" />
      </div>

      <div className="ic-detail-tabs">
        <button className={tab === "svg" ? "active" : ""} onClick={() => setTab("svg")}>
          SVG
        </button>
        <button className={tab === "react" ? "active" : ""} onClick={() => setTab("react")}>
          React
        </button>
      </div>

      <CodeBlock code={tab === "svg" ? svgSource : reactSource} />

      <div className="ic-detail-actions">
        <button className="ic-btn ic-btn-primary" onClick={copySVG}>
          <CopyIcon /> Copy SVG
        </button>
        <button className="ic-btn ic-btn-secondary" onClick={downloadSVG}>
          <Download /> Download SVG
        </button>
      </div>
    </aside>
  );
}