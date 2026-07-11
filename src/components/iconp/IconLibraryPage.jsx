// src/components/iconp/IconLibraryPage.jsx
import { useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import IconGrid from "./IconGrid";
import IconDetailPanel from "./IconDetailPanel";
import Pagination from "./common/Pagination";
import { ICONS } from "./data/iconsData";
import "./styles/icons.css";

const PAGE_SIZE = 32;

const DEFAULT_FILTERS = {
  style: "round",   // strokeLinejoin/strokeLinecap
  stroke: 2,        // strokeWidth
  filled: false,    // fill: none vs currentColor
  size: 20,         // taille affichée dans la grille
  color: "#FFFFFF", // couleur de l'icône (noir / blanc / gris uniquement)
  sort: "latest",   // latest | az | za
};

/**
 * Page complète "Icons" — conteneur qui gère tout le state
 * et le fait descendre aux composants enfants (pattern déjà utilisé
 * pour Produits / Stocks / Clients).
 */
export default function IconLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const filteredIcons = useMemo(() => {
    let result = ICONS.filter((icon) => {
      const matchesCategory = activeCategory === "all" || icon.category === activeCategory;
      const matchesSearch = icon.label.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filters.sort === "az") {
      result = [...result].sort((a, b) => a.label.localeCompare(b.label));
    } else if (filters.sort === "za") {
      result = [...result].sort((a, b) => b.label.localeCompare(a.label));
    }
    // "latest" = ordre naturel du tableau ICONS, pas de tri

    return result;
  }, [activeCategory, searchQuery, filters.sort]);

  const totalPages = Math.max(1, Math.ceil(filteredIcons.length / PAGE_SIZE));
  const pageIcons = filteredIcons.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="icon-lib">
      <Sidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <div className="ic-main">
        <Toolbar
          count={filteredIcons.length}
          view={view}
          onViewChange={setView}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        <div className="ic-grid-wrap">
          <IconGrid
            icons={pageIcons}
            selectedIcon={selectedIcon}
            onSelect={setSelectedIcon}
            renderOptions={filters}
          />
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>

      <IconDetailPanel icon={selectedIcon} onClose={() => setSelectedIcon(null)} defaultFilters={filters} />
    </div>
  );
}
