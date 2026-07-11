// src/components/iconp/common/Dropdown.jsx
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Dropdown générique réutilisable partout (toolbar, filtres, formulaires...).
 *
 * props:
 * - label: string — texte affiché quand rien n'est ouvert (ex: "Sort by")
 * - value: string — valeur actuellement sélectionnée
 * - options: [{ label, value }]
 * - onChange: (value) => void
 * - showValueInLabel: bool — si true, affiche "label: valueLabel" comme dans "Sort by: Latest"
 */
export default function Dropdown({ label, value, options, onChange, showValueInLabel = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = options.find((o) => o.value === value);
  const displayText = showValueInLabel && current ? `${label}: ${current.label}` : label;

  return (
    <div className="ic-dropdown-wrap" ref={ref}>
      <button type="button" className="ic-dropdown" onClick={() => setOpen((o) => !o)}>
        {displayText} <ChevronDown size={12} />
      </button>

      {open && (
        <div className="ic-dropdown-menu">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`ic-dropdown-option${opt.value === value ? " active" : ""}`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
