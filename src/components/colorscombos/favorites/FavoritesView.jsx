import PageHeader from "../explore/PageHeader.jsx";
import PaletteGrid from "../explore/PaletteGrid.jsx";
import { useFavorites } from "./FavoritesContext.jsx";

export default function FavoritesView() {
  const { favoritesList } = useFavorites();

  return (
    <div style={{ color: "#e5e7eb", fontFamily: "system-ui, sans-serif" }}>
      <PageHeader
        title="Favorites"
        subtitle="Palettes you've saved for later."
      />

      {favoritesList.length === 0 ? (
        <p style={{ color: "#6b7280", marginTop: "40px", textAlign: "center" }}>
          No favorites yet — tap the heart on a palette to save it here.
        </p>
      ) : (
        <PaletteGrid palettes={favoritesList} />
      )}
    </div>
  );
}