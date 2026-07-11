// src/components/iconp/common/IconCard.jsx
import * as LucideIcons from "lucide-react";

/**
 * Carte icône réutilisable (grid, favoris, résultats de recherche, etc.)
 *
 * props:
 * - icon: { name, label }  (name = nom du composant lucide-react)
 * - size: number (px)
 * - strokeWidth: number
 * - strokeLinejoin: "round" | "square" | "bevel"
 * - filled: bool — si true, remplit l'icône avec `color` au lieu de none
 * - color: string (hex) — noir / blanc / gris uniquement
 * - selected: bool
 * - onSelect: (icon) => void
 */
export default function IconCard({
  icon,
  size = 20,
  strokeWidth = 2,
  strokeLinejoin = "round",
  filled = false,
  color = "#FFFFFF",
  selected = false,
  onSelect,
}) {
  const LucideIcon = LucideIcons[icon.name];

  if (!LucideIcon) return null;

  return (
    <button
      type="button"
      className={`ic-card${selected ? " selected" : ""}`}
      onClick={() => onSelect?.(icon)}
      title={icon.label}
    >
      <LucideIcon
        size={size}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinejoin === "round" ? "round" : "butt"}
        color={color}
        fill={filled ? color : "none"}
      />
      <span className="ic-card-label">{icon.label}</span>
    </button>
  );
}
