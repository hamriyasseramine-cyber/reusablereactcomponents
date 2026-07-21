import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);
const STORAGE_KEY = "colorscombos:favorites";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // storage unavailable (e.g. private mode) — favorites just won't persist
    }
  }, [favorites]);

  const isFavorite = (id) => Boolean(favorites[id]);

  const toggleFavorite = (palette) => {
    setFavorites((prev) => {
      const next = { ...prev };
      if (next[palette.id]) {
        delete next[palette.id];
      } else {
        next[palette.id] = palette;
      }
      return next;
    });
  };

  const favoritesList = Object.values(favorites);

  return (
    <FavoritesContext.Provider
      value={{ favoritesList, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return ctx;
}