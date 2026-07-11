// src/components/common/Pagination.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Pagination générique — réutilisable sur n'importe quelle liste paginée
 * (icônes, produits, stocks, clients...).
 *
 * props:
 * - page: number (1-indexed)
 * - totalPages: number
 * - onChange: (page) => void
 */
export default function Pagination({ page, totalPages, onChange }) {
  const pages = getPageWindow(page, totalPages);

  return (
    <div className="ic-pagination">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        <ChevronLeft size={14} />
      </button>

      {pages.map((p, idx) =>
        p === "..." ? (
          <span
            key={`dots-${idx}`}
            style={{ color: "var(--ic-text-faint)", padding: "0 4px" }}
          >
            …
          </span>
        ) : (
          <button
            key={p}
            className={p === page ? "active" : ""}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        ),
      )}

      <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

function getPageWindow(current, total, span = 1) {
  const pages = [];
  const add = (p) => pages.push(p);

  add(1);
  if (current - span > 2) add("...");
  for (
    let p = Math.max(2, current - span);
    p <= Math.min(total - 1, current + span);
    p++
  ) {
    add(p);
  }
  if (current + span < total - 1) add("...");
  if (total > 1) add(total);

  return pages;
}
