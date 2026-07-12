// src/components/icons/Sidebar.jsx
import { LayoutGrid, FolderOpen, Star, Upload } from "lucide-react";
import { CATEGORIES } from "./data/iconsData";

/**
 * props:
 * - activeCategory: string
 * - onCategoryChange: (id) => void
 */
export default function Sidebar({ activeCategory, onCategoryChange }) {
  return (
    <aside className="ic-sidebar">
      <div className="ic-sidebar-nav">
        <button className="ic-nav-item active">
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LayoutGrid /> Browse
          </span>
        </button>
        <button className="ic-nav-item">
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FolderOpen /> Collections
          </span>
        </button>
        <button className="ic-nav-item">
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Star /> Favorites
          </span>
        </button>
      </div>

      <div>
        <div className="ic-section-label">Categories</div>
        <div className="ic-sidebar-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`ic-cat-item${activeCategory === cat.id ? " active" : ""}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="ic-cat-count">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="ic-upload-box">
        <p>Add your own icons. Upload SVGs and build your custom library.</p>
        <button type="button" className="ic-upload-btn">
          <Upload size={14} /> Upload
        </button>
      </div>
    </aside>
  );
}
