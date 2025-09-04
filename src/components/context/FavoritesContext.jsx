import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const addToFavorites = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev; 
      return [...prev, product];
    });

    console.log(product)
  };

  const removeFromFavorites = (id, size) => {
    setFavorites((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
