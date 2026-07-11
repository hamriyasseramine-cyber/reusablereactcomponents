// src/components/iconp/IconGrid.jsx
import IconCard from "./common/IconCard";

/**
 * props:
 * - icons: array d'objets { name, label, category }
 * - selectedIcon: objet icône sélectionnée (ou null)
 * - onSelect: (icon) => void
 * - renderOptions: { stroke, style, filled, size, color } — appliqués à chaque IconCard
 */
export default function IconGrid({ icons, selectedIcon, onSelect, renderOptions }) {
  if (icons.length === 0) {
    return (
      <div style={{ color: "var(--ic-text-faint)", padding: 40, textAlign: "center" }}>
        Aucune icône ne correspond à ta recherche.
      </div>
    );
  }

  return (
    <div className="ic-grid">
      {icons.map((icon) => (
        <IconCard
          key={icon.name}
          icon={icon}
          size={renderOptions?.size ?? 20}
          strokeWidth={renderOptions?.stroke ?? 2}
          strokeLinejoin={renderOptions?.style ?? "round"}
          filled={renderOptions?.filled ?? false}
          color={renderOptions?.color ?? "#FFFFFF"}
          selected={selectedIcon?.name === icon.name}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
