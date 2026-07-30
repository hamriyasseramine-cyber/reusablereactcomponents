import { useFavorites } from "./FavoritesContext.jsx";

export default function FavoritesView() {
  const { favoritesList, toggleFavorite } = useFavorites();

  return (
    <div style={{ color: "#e5e7eb", fontFamily: "system-ui, sans-serif" }}>
      <h1
        style={{
          color: "#ffffff",
          fontSize: "52px",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Favorites
      </h1>
      <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "6px" }}>
        Palettes you've saved for later.
      </p>

      {favoritesList.length === 0 ? (
        <p style={{ color: "#6b7280", marginTop: "40px", textAlign: "center" }}>
          No favorites yet — tap the heart on a palette to save it here.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          {favoritesList.map((palette) => (
            <div key={palette.id}>
              <div
                style={{
                  display: "flex",
                  height: "140px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {palette.colors.slice(0, 5).map((color, i) => (
                  <div key={i} style={{ flex: 1, background: color }} />
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span
                  style={{
                    color: "#e5e7eb",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {palette.name}
                </span>

                <button
                  onClick={() => toggleFavorite(palette)}
                  aria-label="Remove from favorites"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#ef4444"
                    stroke="#ef4444"
                    strokeWidth="1"
                  >
                    <path d="M12 20.6C10.5 19.3 4 14.5 4 9.9 4 7.2 6.1 5 8.7 5c1.5 0 2.9.7 3.8 1.9C13.4 5.7 14.8 5 16.3 5 18.9 5 21 7.2 21 9.9c0 4.6-6.5 9.4-8 10.7l-.5.4-.5-.4z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}