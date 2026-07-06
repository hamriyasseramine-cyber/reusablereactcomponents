import { useState, useMemo } from "react";
import CategoriesSidebar from "../components/compo/CategoriesSidebar";
import ItemsSidebar from "../components/compo/ItemsSidebar";
import ComponentPreviewPanel from "../components/compo/ComponentPreviewPanel";
import { COMPONENTS } from "../components/compo/componentsData.jsx";

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeItemId, setActiveItemId] = useState(null);

  const itemsInCategory = useMemo(
    () =>
      activeCategory === "all"
        ? COMPONENTS
        : COMPONENTS.filter((c) => c.category === activeCategory),
    [activeCategory]
  );

  const selectedComponent = itemsInCategory.find((c) => c.id === activeItemId) || null;

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveItemId(null);
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#000000",
        height: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <style>{`
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>

      <div className="no-scrollbar" style={{ overflowY: "auto", height: "100%" }}>
        <CategoriesSidebar activeId={activeCategory} onSelect={handleCategorySelect} />
      </div>

      <div
        className="no-scrollbar"
        style={{ flex: 1, padding: "40px 48px", boxSizing: "border-box", overflow: "auto", height: "100%" }}
      >
        <ComponentPreviewPanel comp={selectedComponent} />
      </div>

      <div className="no-scrollbar" style={{ overflowY: "auto", height: "100%" }}>
        <ItemsSidebar
          items={itemsInCategory}
          activeItemId={activeItemId}
          onSelect={setActiveItemId}
        />
      </div>
    </div>
  );
}