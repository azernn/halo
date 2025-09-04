import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
import { toast } from 'react-toastify';

export function BasketProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("basket");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.size === product.size);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast.success("Product added to cart!"); 
  };

  const removeFromCart = (id, size) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const updateSize = (id, oldSize, newSize) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id && item.size === oldSize
        ? { ...item, size: newSize }
        : item
    )
  );
};

  const increaseQty = (id, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };


  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQty,increaseQty, clearCart,updateSize }}
    >
      {children}
    </CartContext.Provider>
  );
}
